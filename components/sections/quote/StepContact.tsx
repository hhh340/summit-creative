import type { UseFormReturn } from "react-hook-form";
import type { QuoteClientValues } from "@/lib/validations/quote";
import { FormField, inputClasses } from "@/components/ui/FormField";

export function StepContact({ form }: { form: UseFormReturn<QuoteClientValues> }) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h2 className="text-2xl font-semibold">How can we reach you?</h2>
      <p className="mt-2 text-muted-foreground">
        We&apos;ll send your quote here — usually within one business day.
      </p>

      <div className="mt-8 space-y-5">
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
      </div>
    </div>
  );
}
