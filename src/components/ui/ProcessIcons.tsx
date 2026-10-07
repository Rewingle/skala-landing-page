/** Geometric line drawings for the three process steps. */
type IconProps = { className?: string };

function Frame({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    >
      {children}
    </svg>
  );
}

/** Faceted crystal — the brief taking shape. */
export function ConsultationIcon({ className }: IconProps) {
  const outer = [
    [60, 8],
    [112, 60],
    [60, 112],
    [8, 60],
  ];
  const inner = [
    [38, 38],
    [82, 38],
    [82, 82],
    [38, 82],
  ];
  // Each outer point connects to the two nearest inner corners.
  const facets = [
    [0, 0], [0, 1], [1, 1], [1, 2], [2, 2], [2, 3], [3, 3], [3, 0],
  ];
  return (
    <Frame className={className}>
      <path d={`M${outer.map((p) => p.join(" ")).join("L")}Z`} />
      <path d={`M${inner.map((p) => p.join(" ")).join("L")}Z`} />
      {facets.map(([o, i]) => (
        <line key={`${o}-${i}`} x1={outer[o][0]} y1={outer[o][1]} x2={inner[i][0]} y2={inner[i][1]} />
      ))}
      <line x1={38} y1={38} x2={82} y2={82} />
      <line x1={82} y1={38} x2={38} y2={82} />
    </Frame>
  );
}

/** Radiating lines — ideas developing outwards. */
export function ConceptIcon({ className }: IconProps) {
  const rays = Array.from({ length: 36 }, (_, i) => {
    const a = (i / 36) * Math.PI * 2;
    const r1 = i % 2 === 0 ? 16 : 26;
    return {
      x1: 60 + Math.cos(a) * r1,
      y1: 60 + Math.sin(a) * r1,
      x2: 60 + Math.cos(a) * 52,
      y2: 60 + Math.sin(a) * 52,
    };
  });
  return (
    <Frame className={className}>
      <circle cx={60} cy={60} r={52} />
      <circle cx={60} cy={60} r={16} />
      <circle cx={60} cy={60} r={5} />
      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1.toFixed(2)}
          y1={r.y1.toFixed(2)}
          x2={r.x2.toFixed(2)}
          y2={r.y2.toFixed(2)}
        />
      ))}
    </Frame>
  );
}

/** Wireframe sphere — the finished, rounded whole. */
export function ExecutionIcon({ className }: IconProps) {
  return (
    <Frame className={className}>
      <circle cx={60} cy={60} r={52} />
      <ellipse cx={60} cy={60} rx={18} ry={52} />
      <ellipse cx={60} cy={60} rx={36} ry={52} />
      <ellipse cx={60} cy={60} rx={52} ry={18} />
      <line x1={8} y1={60} x2={112} y2={60} />
      <line x1={15} y1={34} x2={105} y2={34} />
      <line x1={15} y1={86} x2={105} y2={86} />
      <rect x={42} y={42} width={36} height={36} />
    </Frame>
  );
}

export const processIcons = [ConsultationIcon, ConceptIcon, ExecutionIcon];
