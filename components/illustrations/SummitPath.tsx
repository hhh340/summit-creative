export function SummitPath({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="summit-path-grad" x1="0" y1="200" x2="480" y2="0">
          <stop offset="0" stopColor="#4F46E5" />
          <stop offset="1" stopColor="#F2A93B" />
        </linearGradient>
      </defs>

      {/* Mountain silhouette */}
      <path
        d="M0 180L90 70L150 130L230 30L300 110L360 60L480 180Z"
        fill="url(#summit-path-grad)"
        fillOpacity="0.12"
      />
      <path
        d="M0 180L90 70L150 130L230 30L300 110L360 60L480 180"
        stroke="url(#summit-path-grad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Summit marker */}
      <circle cx="230" cy="30" r="6" fill="white" stroke="url(#summit-path-grad)" strokeWidth="2.5" />

      {/* Dotted ascent path */}
      <path
        d="M40 170C90 150 140 160 180 120C210 90 200 60 230 30"
        stroke="#0B0B0F"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
    </svg>
  );
}
