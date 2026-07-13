import type { UseFormReturn } from "react-hook-form";
import type { QuoteClientValues } from "@/lib/validations/quote";
import { budgetRanges, timelines } from "@/lib/validations/quote";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { cn } from "@/lib/utils";

export function StepDetails({ form }: { form: UseFormReturn<QuoteClientValues> }) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const budgetRange = watch("budgetRange");
  const timeline = watch("timeline");

  return (
    <div>
      <h2 className="text-2xl font-semibold">Tell us about the project</h2>
      <p className="mt-2 text-muted-foreground">
        This helps us come back with an accurate, realistic quote.
      </p>

      <div className="mt-8 space-y-8">
        <div>
          <span className="text-sm font-medium">Budget range</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {budgetRanges.map((range) => (
              <button
                key={range}
                type="button"
                onClick={() =>
                  setValue("budgetRange", range, { shouldValidate: true, shouldDirty: true })
                }
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  budgetRange === range
                    ? "border-brand bg-brand-light text-brand"
                    : "border-border bg-background hover:border-foreground/40",
                )}
              >
                {range}
              </button>
            ))}
          </div>
          {errors.budgetRange && (
            <p className="mt-2 text-sm text-red-600">{errors.budgetRange.message}</p>
          )}
        </div>

        <div>
          <span className="text-sm font-medium">Timeline</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {timelines.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() =>
                  setValue("timeline", option, { shouldValidate: true, shouldDirty: true })
                }
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  timeline === option
                    ? "border-brand bg-brand-light text-brand"
                    : "border-border bg-background hover:border-foreground/40",
                )}
              >
                {option}
              </button>
            ))}
          </div>
          {errors.timeline && (
            <p className="mt-2 text-sm text-red-600">{errors.timeline.message}</p>
          )}
        </div>

        <FormField
          label="Project details"
          htmlFor="projectDetails"
          error={errors.projectDetails?.message}
        >
          <textarea
            id="projectDetails"
            rows={5}
            className={inputClasses}
            placeholder="Tell us about your business, your goals, and anything else that would help us scope this accurately..."
            {...register("projectDetails")}
          />
        </FormField>
      </div>
    </div>
  );
}
