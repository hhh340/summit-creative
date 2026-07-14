export function BrowserMockup({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="browser-accent" x1="0" y1="0" x2="480" y2="320">
          <stop offset="0" stopColor="#4F46E5" />
          <stop offset="1" stopColor="#F2A93B" />
        </linearGradient>
        <linearGradient id="browser-accent-soft" x1="0" y1="0" x2="480" y2="0">
          <stop offset="0" stopColor="#4F46E5" stopOpacity="0.15" />
          <stop offset="1" stopColor="#F2A93B" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Window frame */}
      <rect x="8" y="8" width="464" height="304" rx="16" fill="white" stroke="#E6E6EA" strokeWidth="2" />

      {/* Title bar */}
      <rect x="8" y="8" width="464" height="36" rx="16" fill="#F6F6F8" />
      <rect x="8" y="28" width="464" height="16" fill="#F6F6F8" />
      <circle cx="30" cy="26" r="5" fill="#E6E6EA" />
      <circle cx="48" cy="26" r="5" fill="#E6E6EA" />
      <circle cx="66" cy="26" r="5" fill="#E6E6EA" />

      {/* Hero block */}
      <rect x="32" y="68" width="180" height="14" rx="4" fill="url(#browser-accent)" />
      <rect x="32" y="92" width="260" height="10" rx="4" fill="#E6E6EA" />
      <rect x="32" y="110" width="220" height="10" rx="4" fill="#E6E6EA" />
      <rect x="32" y="136" width="96" height="28" rx="14" fill="#0B0B0F" />

      {/* Content cards */}
      <rect x="32" y="196" width="130" height="92" rx="12" fill="url(#browser-accent-soft)" />
      <rect x="175" y="196" width="130" height="92" rx="12" fill="#F6F6F8" />
      <rect x="318" y="196" width="130" height="92" rx="12" fill="#F6F6F8" />

      <rect x="48" y="212" width="60" height="8" rx="4" fill="#4F46E5" opacity="0.5" />
      <rect x="48" y="228" width="90" height="6" rx="3" fill="#C9C9D2" />
      <rect x="48" y="240" width="70" height="6" rx="3" fill="#C9C9D2" />

      <rect x="191" y="212" width="60" height="8" rx="4" fill="#C9C9D2" />
      <rect x="191" y="228" width="90" height="6" rx="3" fill="#E6E6EA" />
      <rect x="191" y="240" width="70" height="6" rx="3" fill="#E6E6EA" />

      <rect x="334" y="212" width="60" height="8" rx="4" fill="#C9C9D2" />
      <rect x="334" y="228" width="90" height="6" rx="3" fill="#E6E6EA" />
      <rect x="334" y="240" width="70" height="6" rx="3" fill="#E6E6EA" />
    </svg>
  );
}
