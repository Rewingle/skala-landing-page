"use client";

import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/site";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

// Repeating card rhythm that gives the track its staggered, editorial feel.
const layouts = [
  { width: "w-[min(82vw,27rem)]", aspect: "aspect-[5/4]", offset: "", sizes: "(min-width: 768px) 27rem, 82vw" },
  { width: "w-[min(66vw,17.5rem)]", aspect: "aspect-[4/5]", offset: "", sizes: "(min-width: 768px) 17.5rem, 66vw" },
  { width: "w-[min(66vw,17.5rem)]", aspect: "aspect-[3/4]", offset: "md:mt-28", sizes: "(min-width: 768px) 17.5rem, 66vw" },
  { width: "w-[min(72vw,20rem)]", aspect: "aspect-[3/4]", offset: "md:mt-10", sizes: "(min-width: 768px) 20rem, 72vw" },
];

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ prev: false, next: true });
  const reduceMotion = usePrefersReducedMotion();

  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanScroll({
      prev: track.scrollLeft > 4,
      next: track.scrollLeft + track.clientWidth < track.scrollWidth - 4,
    });
  };

  const scrollByCards = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.8, 560),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-sand py-24 md:py-32">
      <Reveal className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading id="projects-title" eyebrow={projects.eyebrow} title={projects.title} />
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            disabled={!canScroll.prev}
            aria-label="Previous projects"
            aria-controls="projects-track"
            className="inline-flex size-12 items-center justify-center rounded-full border border-espresso/30 transition-colors hover:border-espresso disabled:cursor-default disabled:opacity-35 disabled:hover:border-espresso/30"
          >
            <ArrowLeft className="size-4" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            disabled={!canScroll.next}
            aria-label="Next projects"
            aria-controls="projects-track"
            className="inline-flex size-12 items-center justify-center rounded-full bg-espresso text-ivory transition-colors hover:bg-terracotta disabled:cursor-default disabled:opacity-35 disabled:hover:bg-espresso"
          >
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </button>
        </div>
      </Reveal>

      <div
        id="projects-track"
        ref={trackRef}
        onScroll={updateArrows}
        tabIndex={0}
        role="region"
        aria-label="Project gallery"
        className="bleed-x scrollbar-none mt-14 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto pb-2 md:gap-7"
      >
        {projects.items.map((project, i) => {
          const layout = layouts[i % layouts.length];
          return (
            <article key={project.name} className={cn("group shrink-0 snap-start", layout.width, layout.offset)}>
              <div className={cn("relative overflow-hidden bg-stone", layout.aspect)}>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes={layout.sizes}
                  placeholder="blur"
                  className="object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-ivory/90 px-3 py-1.5 text-[0.6875rem] font-medium opacity-0 backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
                  {project.scope}
                </span>
              </div>
              <p className="mt-4 text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                {project.category} · {project.year}
              </p>
              <h3 className="mt-1.5 font-serif text-[1.45rem] leading-tight">{project.name}</h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
                <MapPin aria-hidden className="size-3.5" strokeWidth={1.5} />
                {project.location}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
