import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journal } from "@/content/site";

export function Journal() {
  return (
    <section id="journal" aria-labelledby="journal-title" className="py-24 md:py-32">
      <div className="shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="journal-title" eyebrow={journal.eyebrow} title={journal.title} />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Ideas, references and lessons learned from the studio floor.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {journal.posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col border border-stone bg-ivory p-4 sm:p-5">
                <div className="grid grid-cols-[3.25rem_1fr] gap-4 sm:grid-cols-[4.5rem_1fr]">
                  <p className="pt-1">
                    <span className="block font-serif text-[2.6rem] leading-none">{post.day}</span>
                    <span className="mt-1.5 block text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                      {post.month}
                    </span>
                  </p>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 80vw"
                      placeholder="blur"
                      className="object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="mt-6 flex flex-1 flex-col sm:pl-[5.5rem]">
                  <h3 className="font-serif text-[1.6rem] leading-tight">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <a
                    href={post.href}
                    className="mt-5 inline-flex items-center gap-1.5 self-end text-[0.6875rem] font-medium uppercase tracking-[0.18em] transition-colors hover:text-terracotta"
                  >
                    Read more<span className="sr-only">: {post.title}</span>
                    <ArrowRight aria-hidden className="size-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
