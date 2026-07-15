type IconProps = { className?: string };

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="8" width="24" height="17" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M5 10l11 8 11-8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 5h4l2 6-3 2a14 14 0 0 0 7 7l2-3 6 2v4a2 2 0 0 1-2 2C15.3 25 7 16.7 7 7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M18.5 12h-2a1.5 1.5 0 0 0-1.5 1.5V15h3.5l-.5 3H15v6.5h-3V18h-2v-3h2v-2c0-2.2 1.3-4 4-4h2.5v3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function QuoteBubbleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-9l-6 5v-5H8a3 3 0 0 1-3-3V8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M11 12h10M11 16h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
