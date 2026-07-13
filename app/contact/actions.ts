"use server";

import { headers } from "next/headers";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { getResendClient } from "@/lib/resend";
import { isRateLimited } from "@/lib/rate-limit";

const MIN_SUBMIT_TIME_MS = 1500;

export type ContactFormResult = { success: true } | { success: false; error: string };

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactFormResult> {
  const parsed = contactFormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Please check the form and try again." };
  }

  const { name, email, phone, company, message, website, renderedAt } = parsed.data;

  // Honeypot: a real visitor never fills this hidden field in.
  if (website) {
    return { success: true };
  }

  // Bots frequently submit faster than a human possibly could.
  if (Date.now() - renderedAt < MIN_SUBMIT_TIME_MS) {
    return { success: true };
  }

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(`contact:${ip}`)) {
    return {
      success: false,
      error: "Too many submissions. Please try again in a minute.",
    };
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message,
    });
    if (error) {
      console.error("Failed to store contact submission:", error.message);
    }
  } else {
    console.warn(
      "Supabase is not configured — contact submission was not stored. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.",
    );
  }

  const resend = getResendClient();
  if (resend) {
    const notifyTo = process.env.CONTACT_NOTIFICATION_EMAIL;
    if (notifyTo) {
      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: notifyTo,
        replyTo: email,
        subject: `New contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nCompany: ${company || "—"}\n\nMessage:\n${message}`,
      });
      if (error) {
        console.error("Failed to send contact notification email:", error.message);
      }
    }
  } else {
    console.warn(
      "Resend is not configured — no notification email was sent. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_NOTIFICATION_EMAIL in .env.local.",
    );
  }

  return { success: true };
}
