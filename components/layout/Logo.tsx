import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-lg font-semibold tracking-tight",
        dark ? "text-night-foreground" : "text-foreground",
        className,
      )}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M12 2L22 20H2L12 2Z" fill="url(#summit-mark)" />
        <defs>
          <linearGradient id="summit-mark" x1="2" y1="20" x2="22" y2="2">
            <stop offset="0" stopColor="#4F46E5" />
            <stop offset="1" stopColor="#F2A93B" />
          </linearGradient>
        </defs>
      </svg>
      Summit Creative
    </span>
  );
}
