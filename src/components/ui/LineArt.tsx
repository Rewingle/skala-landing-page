/**
 * Faint one-point-perspective room sketch behind the hero headline.
 * Points are placed on rectangles that scale out from the vanishing point:
 * depth `s` = 1 is the back wall, larger values come towards the viewer;
 * `u` / `v` run from -1 to 1 across each rectangle.
 */
const VP = { x: 720, y: 300 };
const HALF = { w: 220, h: 150 };
const FAR = 6;

const pt = (s: number, u: number, v: number) =>
  [VP.x + HALF.w * s * u, VP.y + HALF.h * s * v] as const;

const line = (a: readonly [number, number], b: readonly [number, number]) =>
  `M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${b[0].toFixed(1)} ${b[1].toFixed(1)}`;

const corners = [
  [-1, -1],
  [1, -1],
  [1, 1],
  [-1, 1],
] as const;

const paths = [
  // Back wall and the four room edges.
  `M${pt(1, -1, -1).join(" ")}H${pt(1, 1, -1)[0]}V${pt(1, 1, 1)[1]}H${pt(1, -1, 1)[0]}Z`,
  ...corners.map(([u, v]) => line(pt(1, u, v), pt(FAR, u, v))),
  // Floor boards running towards the back wall, and cross joints.
  ...[-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75].map((u) => line(pt(1, u, 1), pt(FAR, u, 1))),
  ...[1.35, 1.85, 2.6].map((s) => line(pt(s, -1, 1), pt(s, 1, 1))),
  // Ceiling beams.
  ...[-0.5, 0, 0.5].map((u) => line(pt(1, u, -1), pt(FAR, u, -1))),
  line(pt(1.5, -1, -1), pt(1.5, 1, -1)),
  // Window on the left wall, with mullion and transom.
  `M${pt(1.25, -1, -0.55).join(" ")}L${pt(1.75, -1, -0.55).join(" ")}L${pt(1.75, -1, 0.3).join(" ")}L${pt(1.25, -1, 0.3).join(" ")}Z`,
  line(pt(1.5, -1, -0.55), pt(1.5, -1, 0.3)),
  line(pt(1.25, -1, -0.1), pt(1.75, -1, -0.1)),
  // Shelving on the right wall.
  line(pt(1.15, 1, -0.7), pt(1.15, 1, 1)),
  line(pt(1.6, 1, -0.7), pt(1.6, 1, 1)),
  ...[-0.7, -0.3, 0.1, 0.5].map((v) => line(pt(1.15, 1, v), pt(1.6, 1, v))),
  // Arched opening in the back wall.
  "M670 450V345A50 50 0 0 1 770 345V450",
  // Pendant light.
  "M720 30V96",
  "M698 112A22 22 0 0 1 742 112Z",
];

export function LineArt({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMin slice"
      className={className}
      style={{
        maskImage: "linear-gradient(to bottom, black 45%, transparent 92%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 45%, transparent 92%)",
      }}
    >
      <g fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke">
        {paths.map((d, i) => (
          <path key={i} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  );
}
