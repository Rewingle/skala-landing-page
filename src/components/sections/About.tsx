import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/site";
import { cn } from "@/lib/cn";

// Floating collage positions around the centred statement (desktop only).
const floating = [
  { wrapper: "left-[3%] top-0 w-36 xl:w-40", aspect: "aspect-square", offset: 40 },
  { wrapper: "right-[2%] top-[30%] w-48 xl:w-56", aspect: "aspect-[4/3]", offset: 70 },
  { wrapper: "bottom-0 left-[9%] w-52 xl:w-60", aspect: "aspect-[4/3]", offset: 55 },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 md:py-36">
      <div className="shell relative lg:flex lg:min-h-[36rem] lg:items-center lg:justify-center">
        {about.images.map((image, i) => (
          <Parallax
            key={image.alt}
            offset={floating[i].offset}
            className={cn("absolute hidden lg:block", floating[i].wrapper)}
          >
            <div className={cn("relative overflow-hidden", floating[i].aspect)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="15rem"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </Parallax>
        ))}

        <Reveal className="relative mx-auto max-w-2xl text-center">
          <SectionHeading id="about-title" align="center" eyebrow={about.eyebrow} title={about.title} />
          <p className="mx-auto mt-7 max-w-xl text-[0.95rem] leading-relaxed text-muted">{about.body}</p>
          <a
            href={about.link.href}
            className="mt-8 inline-flex items-center gap-2 border-b border-espresso/30 pb-1 text-[0.8125rem] font-medium transition-colors hover:border-terracotta hover:text-terracotta"
          >
            {about.link.label}
            <ArrowRight className="size-3.5" strokeWidth={1.75} />
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-3 lg:hidden">
          {about.images.map((image) => (
            <div key={image.alt} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="33vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
