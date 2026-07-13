import { cn } from "@/lib/utils";

const stepLabels = ["Website Type", "Features", "Project Details", "Contact Info", "Review"];

export function ProgressSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-between gap-2">
      {stepLabels.map((label, i) => (
        <div key={label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full items-center">
            <div
              className={cn(
                "h-1 flex-1 rounded-full transition-colors",
                i === 0 ? "invisible" : i <= currentStep ? "bg-brand" : "bg-border",
              )}
            />
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors",
                i < currentStep && "border-brand bg-brand text-white",
                i === currentStep && "border-brand text-brand",
                i > currentStep && "border-border text-muted-foreground",
              )}
            >
              {i < currentStep ? (
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2 7.5L5.5 11L12 3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <div
              className={cn(
                "h-1 flex-1 rounded-full transition-colors",
                i === stepLabels.length - 1
                  ? "invisible"
                  : i < currentStep
                    ? "bg-brand"
                    : "bg-border",
              )}
            />
          </div>
          <span
            className={cn(
              "hidden text-center text-xs font-medium sm:block",
              i === currentStep ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
