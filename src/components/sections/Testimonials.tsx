import { Quote } from "lucide-react";
import Image from "next/image";
import { CountUp } from "@/components/ui/CountUp";
import { Monogram } from "@/components/ui/Monogram";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/site";

function Attribution({ name, role, initials }: { name: string; role: string; initials: string }) {
  return (
    <figcaption className="flex items-center gap-3">
      <Monogram initials={initials} />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted">{role}</p>
      </div>
      <Quote aria-hidden className="ml-auto size-6 fill-terracotta/15 text-terracotta/45" strokeWidth={1.25} />
    </figcaption>
  );
}

export function Testimonials() {
  const { featured } = testimonials;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-sand py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="testimonials-title"
            align="center"
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11]">
              <Image
                src={testimonials.image.src}
                alt={testimonials.image.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
              <figure className="absolute inset-x-4 bottom-4 bg-ivory/95 p-5 backdrop-blur sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:p-6">
                <blockquote>
                  <p className="text-[0.95rem] leading-relaxed">“{featured.quote}”</p>
                </blockquote>
                <div className="mt-5">
                  <Attribution name={featured.name} role={featured.role} initials={featured.initials} />
                </div>
              </figure>
            </div>

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-balance font-serif text-[1.85rem] leading-[1.1] sm:max-w-[9em]">
                {testimonials.summary}
              </p>
              <dl className="grid grid-cols-3 gap-6 sm:gap-10">
                {testimonials.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse">
                    <dt className="mt-1.5 text-xs text-muted">{stat.label}</dt>
                    <dd className="font-serif text-[2.6rem] leading-none">
                      <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 lg:gap-5">
            {testimonials.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.1} className="flex-1">
                <figure className="flex h-full flex-col justify-between gap-6 border border-stone bg-ivory p-6 md:p-7">
                  <blockquote>
                    <p className="text-[0.95rem] leading-relaxed text-espresso/90">“{item.quote}”</p>
                  </blockquote>
                  <Attribution name={item.name} role={item.role} initials={item.initials} />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
