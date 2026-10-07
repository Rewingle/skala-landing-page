/** Minimal line versions of social logos (lucide no longer ships brand icons). */
export type SocialIconName = "instagram" | "pinterest" | "linkedin";

export function SocialIcon({ name, className }: { name: SocialIconName; className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "instagram" && (
        <>
          <rect x={3.5} y={3.5} width={17} height={17} rx={5} />
          <circle cx={12} cy={12} r={3.8} />
          <circle cx={17.1} cy={6.9} r={0.6} fill="currentColor" stroke="none" />
        </>
      )}
      {name === "pinterest" && (
        <>
          <circle cx={12} cy={12} r={9} />
          <path d="M10.6 19.6 12.9 9.4" />
          <path d="M12.9 9.4c2.4-.5 4.1 1 3.8 3-.3 2.1-2.4 3.2-4.4 2.4" />
        </>
      )}
      {name === "linkedin" && (
        <>
          <rect x={3.5} y={3.5} width={17} height={17} rx={3} />
          <path d="M8.2 10.6v5.9" />
          <circle cx={8.2} cy={7.6} r={0.6} fill="currentColor" stroke="none" />
          <path d="M11.6 16.5v-5.9M11.6 13.1c0-1.6 1-2.6 2.3-2.6 1.3 0 2.2.9 2.2 2.6v3.4" />
        </>
      )}
    </svg>
  );
}
