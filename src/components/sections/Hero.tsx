import { ArcGallery } from "@/components/ui/ArcGallery";
import { ButtonLink } from "@/components/ui/Button";
import { LineArt } from "@/components/ui/LineArt";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <LineArt className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] w-full text-espresso/[0.14] md:h-[46rem]" />

      <div className="shell relative text-center">
        <Reveal>
          <h1 className="font-serif text-[clamp(2.9rem,7.2vw,5.75rem)] leading-[0.98] tracking-[-0.015em]">
            <span className="block text-balance">{hero.title[0]}</span>
            <span className="block text-balance italic">{hero.title[1]}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted">{hero.intro}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <ButtonLink href={hero.cta.href} className="mt-8">
            {hero.cta.label}
          </ButtonLink>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-14 max-w-[100rem] px-[var(--gutter)] md:mt-20">
        <ArcGallery images={hero.images} />
      </div>
    </section>
  );
}
