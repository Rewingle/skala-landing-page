import type { Heading } from "@/content/site";
import { cn } from "@/lib/cn";

type Tone = "dark" | "light";

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[0.6875rem] font-medium uppercase tracking-[0.22em]",
        tone === "dark" ? "text-muted" : "text-ivory/75",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("size-1.5 rounded-full", tone === "dark" ? "bg-terracotta" : "bg-clay")}
      />
      {children}
    </p>
  );
}

/** Eyebrow plus the two-line serif heading used by every section (second line italic). */
export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  id,
  className,
}: {
  eyebrow: string;
  title: Heading;
  align?: "left" | "center";
  tone?: Tone;
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={cn(
          "mt-5 font-serif text-[clamp(2.4rem,5vw,3.9rem)] leading-[1.02] tracking-[-0.01em]",
          tone === "dark" ? "text-espresso" : "text-ivory",
        )}
      >
        <span className="block text-balance">{title[0]}</span>
        <span className="block text-balance italic">{title[1]}</span>
      </h2>
    </div>
  );
}
