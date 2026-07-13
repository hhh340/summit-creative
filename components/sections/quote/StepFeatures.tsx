import type { UseFormReturn } from "react-hook-form";
import type { QuoteClientValues } from "@/lib/validations/quote";
import { featureCategories } from "@/content/services-data";
import { cn } from "@/lib/utils";

export function StepFeatures({ form }: { form: UseFormReturn<QuoteClientValues> }) {
  const { watch, setValue } = form;
  const selected = watch("features") ?? [];

  const toggle = (feature: string) => {
    const next = selected.includes(feature)
      ? selected.filter((f) => f !== feature)
      : [...selected, feature];
    setValue("features", next, { shouldDirty: true });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Which features do you need?</h2>
      <p className="mt-2 text-muted-foreground">
        Select as many as apply — you can always add more later.
      </p>

      <div className="mt-8 space-y-8">
        {featureCategories.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.features.map((feature) => {
                const isSelected = selected.includes(feature);
                return (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => toggle(feature)}
                    aria-pressed={isSelected}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      isSelected
                        ? "border-brand bg-brand-light text-brand"
                        : "border-border bg-background hover:border-foreground/40",
                    )}
                  >
                    {feature}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
