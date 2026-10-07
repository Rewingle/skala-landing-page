"use client";

import { MotionConfig } from "motion/react";

/** Honours the OS "reduce motion" setting: transform animations are skipped, fades remain. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
