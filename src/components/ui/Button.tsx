import { cn } from "@/lib/cn";

type Variant = "dark" | "outline" | "light";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  dark: "bg-espresso text-ivory hover:bg-terracotta",
  outline:
    "border border-espresso/25 bg-ivory/60 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory",
  light: "bg-ivory text-espresso hover:bg-sand",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.8125rem]",
  sm: "px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-[0.8125rem]",
};

export function buttonClasses(variant: Variant = "dark", className?: string, size: Size = "md") {
  return cn(base, variants[variant], sizes[size], className);
}

/** Pill-shaped link styled as a button (all page links are in-page anchors). */
export function ButtonLink({
  href,
  variant = "dark",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={buttonClasses(variant, className, size)}>
      {children}
    </a>
  );
}
