type IconProps = { className?: string };

export function BusinessIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="12" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 12V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 18h20" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function PortfolioIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="6" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="13" r="2.25" stroke="currentColor" strokeWidth="1.75" />
      <path d="M7 24l6-6 4 4 3-3 5 5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

export function BlogIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M8 6h13l3 3v17a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M11 14h10M11 18h10M11 22h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function LandingPageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="7" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 12h12M10 16h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="10" y="20" width="7" height="3" rx="1.5" fill="currentColor" />
    </svg>
  );
}
