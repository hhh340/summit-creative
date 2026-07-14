"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  quoteClientSchema,
  websiteTypeOptions,
  timelineOptions,
  domainStatusOptions,
  type QuoteClientValues,
} from "@/lib/validations/quote";
import { submitQuoteRequest } from "@/app/quote/actions";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

export function QuoteForm() {
  const [renderedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteClientValues>({
    resolver: zodResolver(quoteClientSchema),
    defaultValues: {
      websiteType: undefined,
      timeline: undefined,
      domainStatus: undefined,
      idea: "",
      email: "",
      website: "",
    },
  });

  const onSubmit = async (data: QuoteClientValues) => {
    setStatus("idle");
    setErrorMessage(null);
    const result = await submitQuoteRequest({ ...data, renderedAt });

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
        className="rounded-3xl border border-brand/20 bg-brand-light/40 p-10 text-center"
      >
        <h2 className="text-xl font-semibold">Got it — thanks!</h2>
        <p className="mt-3 max-w-md mx-auto text-muted-foreground">
          I&apos;ll take a look and get back to you within one business day.
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

      <FormField
        label="What kind of website do you need?"
        htmlFor="websiteType"
        error={errors.websiteType?.message}
      >
        <select id="websiteType" className={inputClasses} {...register("websiteType")}>
          <option value="">Select one...</option>
          {websiteTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="When do you need it?" htmlFor="timeline" error={errors.timeline?.message}>
          <select id="timeline" className={inputClasses} {...register("timeline")}>
            <option value="">Select one...</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Do you have a domain already?"
          htmlFor="domainStatus"
          error={errors.domainStatus?.message}
        >
          <select id="domainStatus" className={inputClasses} {...register("domainStatus")}>
            <option value="">Select one...</option>
            {domainStatusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Tell me about your idea" htmlFor="idea" error={errors.idea?.message}>
        <textarea
          id="idea"
          rows={5}
          className={inputClasses}
          placeholder="What's your business, and what do you want your website to do?"
          {...register("idea")}
        />
      </FormField>

      <FormField label="Your email" htmlFor="email" error={errors.email?.message}>
        <input id="email" type="email" className={inputClasses} {...register("email")} />
      </FormField>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
