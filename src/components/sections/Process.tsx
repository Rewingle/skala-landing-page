import { processIcons } from "@/components/ui/ProcessIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workProcess } from "@/content/site";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="process-title"
            align="center"
            eyebrow={workProcess.eyebrow}
            title={workProcess.title}
          />
        </Reveal>

        <ol className="mt-16 grid border-y border-stone md:mt-20 md:grid-cols-3 md:border-y-0">
          {workProcess.steps.map((step, i) => {
            const Icon = processIcons[i];
            return (
              <li
                key={step.step}
                className="border-stone py-12 md:px-10 md:py-2 [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-t-0 md:[&:not(:first-child)]:border-l"
              >
                <Reveal delay={i * 0.12}>
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted">
                    <span aria-hidden>{"// "}</span>Step {step.step}
                  </p>
                  <Icon className="mt-10 size-28 text-espresso/65" />
                  <h3 className="mt-10 font-serif text-[1.7rem] leading-tight">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{step.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
