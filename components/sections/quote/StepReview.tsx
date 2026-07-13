import type { UseFormReturn } from "react-hook-form";
import type { QuoteClientValues } from "@/lib/validations/quote";

export function StepReview({ form }: { form: UseFormReturn<QuoteClientValues> }) {
  const values = form.watch();

  const rows: { label: string; value: string }[] = [
    { label: "Website type", value: values.websiteType || "—" },
    {
      label: "Features",
      value: values.features?.length ? values.features.join(", ") : "None selected",
    },
    { label: "Budget", value: values.budgetRange || "—" },
    { label: "Timeline", value: values.timeline || "—" },
    { label: "Name", value: values.name || "—" },
    { label: "Email", value: values.email || "—" },
    { label: "Company", value: values.company || "—" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Review your request</h2>
      <p className="mt-2 text-muted-foreground">
        Make sure everything looks right before you submit.
      </p>

      <dl className="mt-8 divide-y divide-border rounded-2xl border border-border">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
            <dt className="w-40 shrink-0 text-sm font-medium text-muted-foreground">
              {row.label}
            </dt>
            <dd className="text-sm font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>

      {values.projectDetails && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-muted-foreground">Project details</h3>
          <p className="mt-2 text-sm leading-relaxed">{values.projectDetails}</p>
        </div>
      )}
    </div>
  );
}
