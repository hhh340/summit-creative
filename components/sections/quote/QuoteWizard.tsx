"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  quoteClientSchema,
  quoteStepFields,
  type QuoteClientValues,
  type QuoteFormValues,
} from "@/lib/validations/quote";
import { websiteTypes } from "@/content/services-data";
import { submitQuoteRequest } from "@/app/quote/actions";
import { Button } from "@/components/ui/Button";
import { ProgressSteps } from "@/components/sections/quote/ProgressSteps";
import { StepWebsiteType } from "@/components/sections/quote/StepWebsiteType";
import { StepFeatures } from "@/components/sections/quote/StepFeatures";
import { StepDetails } from "@/components/sections/quote/StepDetails";
import { StepContact } from "@/components/sections/quote/StepContact";
import { StepReview } from "@/components/sections/quote/StepReview";

const tierToBudget: Record<string, QuoteClientValues["budgetRange"]> = {
  Launch: "Under $2,000",
  Growth: "$2,000 – $5,000",
  Platform: "$5,000 – $15,000",
};

const TOTAL_STEPS = 5;

const defaultValues: QuoteClientValues = {
  websiteType: "",
  features: [],
  budgetRange: undefined as unknown as QuoteClientValues["budgetRange"],
  timeline: undefined as unknown as QuoteClientValues["timeline"],
  projectDetails: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
};

export function QuoteWizard() {
  const searchParams = useSearchParams();
  const [renderedAt] = useState(() => Date.now());
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<QuoteClientValues>({
    resolver: zodResolver(quoteClientSchema),
    defaultValues,
  });

  useEffect(() => {
    const type = searchParams.get("type");
    if (type && (websiteTypes as readonly string[]).includes(type)) {
      form.setValue("websiteType", type);
    }

    const tier = searchParams.get("tier");
    if (tier && tierToBudget[tier]) {
      form.setValue("budgetRange", tierToBudget[tier]);
    }
    // Only ever needs to run once, on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleContinue() {
    const fields = quoteStepFields[step];
    const isValid = fields ? await form.trigger(fields) : true;
    if (!isValid) return;
    setStep((current) => Math.min(current + 1, TOTAL_STEPS - 1));
  }

  function handleBack() {
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleFinalSubmit(data: QuoteClientValues) {
    setStatus("idle");
    setErrorMessage(null);
    const payload: QuoteFormValues = { ...data, renderedAt };
    const result = await submitQuoteRequest(payload);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-brand/20 bg-brand-light/40 p-10 text-center"
      >
        <h2 className="text-2xl font-semibold">Request received</h2>
        <p className="mt-3 max-w-md mx-auto text-muted-foreground">
          Thanks for the details — we&apos;ll review your project and come back
          with a clear plan, timeline, and price within one business day.
        </p>
      </motion.div>
    );
  }

  const isLastStep = step === TOTAL_STEPS - 1;

  return (
    <div>
      <ProgressSteps currentStep={step} />

      <div className="relative mt-12 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {step === 0 && <StepWebsiteType form={form} />}
            {step === 1 && <StepFeatures form={form} />}
            {step === 2 && <StepDetails form={form} />}
            {step === 3 && <StepContact form={form} />}
            {step === 4 && <StepReview form={form} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {status === "error" && errorMessage && (
        <p className="mt-6 text-sm text-red-600">{errorMessage}</p>
      )}

      <div className="mt-10 flex items-center justify-between border-t border-border pt-8">
        {step > 0 ? (
          <Button type="button" variant="secondary" onClick={handleBack}>
            Back
          </Button>
        ) : (
          <span />
        )}

        {isLastStep ? (
          <Button
            type="button"
            onClick={form.handleSubmit(handleFinalSubmit)}
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        ) : (
          <Button type="button" onClick={handleContinue}>
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}
