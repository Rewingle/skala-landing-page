"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

/**
 * Counts up to `value` when scrolled into view. The final value is server-rendered,
 * so the figure is correct without JavaScript or with reduced motion.
 */
export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = usePrefersReducedMotion();
  const format = (n: number) => `${n.toFixed(decimals)}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = `${latest.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, decimals, suffix]);

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
}
