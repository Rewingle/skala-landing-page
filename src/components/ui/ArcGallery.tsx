"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Photo } from "@/content/site";
import { cn } from "@/lib/cn";

const CLIP_ID = "skala-arc-clip";

/**
 * Row of photos clipped to a gently curved band — the edges stand taller than the
 * centre, like a panoramic screen. On small screens only the middle three show.
 */
export function ArcGallery({ images }: { images: Photo[] }) {
  const centre = Math.floor(images.length / 2);

  return (
    <div className="relative">
      <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
        <defs>
          <clipPath id={CLIP_ID} clipPathUnits="objectBoundingBox">
            <path d="M0,0 Q0.5,0.16 1,0 L1,1 Q0.5,0.62 0,1 Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        className="grid aspect-[4/2.5] grid-cols-3 gap-1.5 sm:gap-2 md:aspect-[16/6] md:grid-cols-5"
        style={{ clipPath: `url(#${CLIP_ID})`, WebkitClipPath: `url(#${CLIP_ID})` }}
      >
        {images.map((image, i) => {
          const distance = Math.abs(i - centre);
          return (
            <motion.div
              key={image.alt}
              className={cn(
                "relative h-full overflow-hidden bg-sand",
                distance > 1 && "hidden md:block",
              )}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35 + distance * 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 20vw, 34vw"
                placeholder="blur"
                loading="eager"
                fetchPriority={i === centre ? "high" : "auto"}
                className="object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
