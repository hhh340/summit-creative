type IconProps = { className?: string };

export function ClipboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="6" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <rect x="12" y="4" width="8" height="4" rx="1.5" fill="currentColor" />
      <path d="M11 14h10M11 18h10M11 22h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 6a11 11 0 1 0 0 22h1.5a2.5 2.5 0 0 0 2.1-3.9 2 2 0 0 1 1.7-3.1H23a5 5 0 0 0 5-5c0-5.5-5.4-10-12-10Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="15" r="1.6" fill="currentColor" />
      <circle cx="16" cy="11" r="1.6" fill="currentColor" />
      <circle cx="21" cy="14" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function ReviewIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 5h11l4 4v18a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M12 17l2.5 2.5L20 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RocketIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 4c3 2 6 6 6 12 0 3-1 6-2 8l-4 3-4-3c-1-2-2-5-2-8 0-6 3-10 6-12Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="13" r="2.25" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 22l-3 4M20 22l3 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
