"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

/** Drifts its children vertically as the element passes through the viewport. */
export function Parallax({
  children,
  className,
  offset = 50,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const distance = reduceMotion ? 0 : offset;
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
