import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  dark,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        dark
          ? "border-night-border bg-white/5 text-night-foreground"
          : "border-border bg-muted text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
