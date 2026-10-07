import { Armchair, ArrowUpRight, DraftingCompass, LampCeiling } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/site";

const icons = {
  planning: DraftingCompass,
  lighting: LampCeiling,
  styling: Armchair,
};

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 md:py-32">
      <div className="shell">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.title} />
          <ButtonLink href={services.cta.href} className="self-start md:self-auto">
            {services.cta.label}
            <ArrowUpRight className="size-4" strokeWidth={1.75} />
          </ButtonLink>
        </Reveal>

        <ul className="mt-14 grid border border-stone md:grid-cols-3">
          {services.items.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <li
                key={service.title}
                className="border-stone [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-t-0 md:[&:not(:first-child)]:border-l"
              >
                <Reveal
                  delay={i * 0.1}
                  className="h-full px-8 py-12 text-center transition-colors duration-500 hover:bg-ivory md:px-10"
                >
                  <Icon aria-hidden className="mx-auto size-11 text-espresso/80" strokeWidth={1} />
                  <h3 className="mt-7 font-serif text-[1.7rem] leading-tight">{service.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">{service.body}</p>
                  <a
                    href="#contact"
                    className="mt-7 inline-block border-b border-espresso/40 pb-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.2em] transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    Enquire<span className="sr-only"> about {service.title}</span>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
