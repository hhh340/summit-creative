import type { UseFormReturn } from "react-hook-form";
import type { QuoteClientValues } from "@/lib/validations/quote";
import { websiteTypes } from "@/content/services-data";
import { cn } from "@/lib/utils";

export function StepWebsiteType({ form }: { form: UseFormReturn<QuoteClientValues> }) {
  const { watch, setValue, formState } = form;
  const selected = watch("websiteType");

  return (
    <div>
      <h2 className="text-2xl font-semibold">What kind of website do you need?</h2>
      <p className="mt-2 text-muted-foreground">
        Pick the closest match — we&apos;ll tailor everything else around it.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {websiteTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() =>
              setValue("websiteType", type, { shouldValidate: true, shouldDirty: true })
            }
            className={cn(
              "rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
              selected === type
                ? "border-brand bg-brand-light text-brand"
                : "border-border bg-background hover:border-foreground/40",
            )}
          >
            {type}
          </button>
        ))}
      </div>
      {formState.errors.websiteType && (
        <p className="mt-4 text-sm text-red-600">
          {formState.errors.websiteType.message}
        </p>
      )}
    </div>
  );
}
