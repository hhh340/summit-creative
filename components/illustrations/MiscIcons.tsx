type IconProps = { className?: string };

export function QuestionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12.5 13a3.5 3.5 0 1 1 5.5 2.9c-1 .7-1.5 1.3-1.5 2.4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="16.2" cy="22" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M17 5h6a2 2 0 0 1 2 2v6a2 2 0 0 1-.6 1.4L14 24.8a2 2 0 0 1-2.8 0l-4-4a2 2 0 0 1 0-2.8L17.6 5.6A2 2 0 0 1 19 5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="20.5" cy="10.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function PenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 24l1-5 12.5-12.5a2.1 2.1 0 0 1 3 3L12 22l-5 1Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M18.5 8.5l4 4" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}
