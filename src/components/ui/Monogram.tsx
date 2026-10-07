import { cn } from "@/lib/cn";

/** Initials in a circle — stands in for client portraits. */
export function Monogram({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-sand font-serif text-base text-espresso",
        className,
      )}
    >
      {initials}
    </span>
  );
}
