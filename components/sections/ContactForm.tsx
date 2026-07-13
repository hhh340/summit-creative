"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactClientSchema, type ContactClientValues } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/contact/actions";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [renderedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactClientValues>({
    resolver: zodResolver(contactClientSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", message: "", website: "" },
  });

  const onSubmit = async (data: ContactClientValues) => {
    setStatus("idle");
    setErrorMessage(null);
    const result = await submitContactForm({ ...data, renderedAt });

    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-brand/20 bg-brand-light/40 p-8 text-center"
      >
        <h3 className="text-lg font-semibold">Message sent</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out — we&apos;ll get back to you within one business
          day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real visitors, often filled in by bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" error={errors.name?.message}>
          <input id="name" className={inputClasses} {...register("name")} />
        </FormField>
        <FormField label="Email" htmlFor="email" error={errors.email?.message}>
          <input id="email" type="email" className={inputClasses} {...register("email")} />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Phone" htmlFor="phone" optional error={errors.phone?.message}>
          <input id="phone" type="tel" className={inputClasses} {...register("phone")} />
        </FormField>
        <FormField label="Company" htmlFor="company" optional error={errors.company?.message}>
          <input id="company" className={inputClasses} {...register("company")} />
        </FormField>
      </div>

      <FormField label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your business and what you need..."
          {...register("message")}
        />
      </FormField>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
