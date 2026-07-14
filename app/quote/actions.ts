"use server";

import { headers } from "next/headers";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/validations/quote";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { getResendClient } from "@/lib/resend";
import { isRateLimited } from "@/lib/rate-limit";

const MIN_SUBMIT_TIME_MS = 1500;

export type QuoteFormResult = { success: true } | { success: false; error: string };

export async function submitQuoteRequest(
  values: QuoteFormValues,
): Promise<QuoteFormResult> {
  const parsed = quoteFormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Please check the form and try again." };
  }

  const { websiteType, timeline, domainStatus, idea, email, website, renderedAt } =
    parsed.data;

  if (website) {
    return { success: true };
  }

  if (Date.now() - renderedAt < MIN_SUBMIT_TIME_MS) {
    return { success: true };
  }

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(`quote:${ip}`)) {
    return {
      success: false,
      error: "Too many submissions. Please try again in a minute.",
    };
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("quote_requests").insert({
      email,
      website_type: websiteType,
      timeline,
      domain_status: domainStatus,
      idea,
    });
    if (error) {
      console.error("Failed to store quote request:", error.message);
    }
  } else {
    console.warn(
      "Supabase is not configured — quote request was not stored. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.",
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
        subject: `New quote request (${websiteType})`,
        text: [
          `Email: ${email}`,
          `Website type: ${websiteType}`,
          `Timeline: ${timeline}`,
          `Domain status: ${domainStatus}`,
          "",
          "Idea:",
          idea,
        ].join("\n"),
      });
      if (error) {
        console.error("Failed to send quote notification email:", error.message);
      }
    }
  } else {
    console.warn(
      "Resend is not configured — no notification email was sent. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_NOTIFICATION_EMAIL in .env.local.",
    );
  }

  return { success: true };
}
