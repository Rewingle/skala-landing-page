import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Monogram } from "@/components/ui/Monogram";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { footer, site } from "@/content/site";
import { NewsletterForm } from "./NewsletterForm";

const columnTitle = "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-clay";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-ivory">
      <div className="shell pt-20 md:pt-28">
        <div className="flex flex-col gap-10 border-b border-ivory/15 pb-14 md:flex-row md:items-end md:justify-between">
          <p className="font-serif text-[clamp(2.2rem,4.6vw,3.7rem)] leading-[1.02]">
            <span className="block">{footer.title[0]}</span>
            <span className="block italic text-ivory/75">{footer.title[1]}</span>
          </p>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {footer.clients.initials.map((initials) => (
                  <Monogram
                    key={initials}
                    initials={initials}
                    className="size-9 border-2 border-ink bg-clay text-sm text-ink"
                  />
                ))}
              </div>
              <p className="text-sm">
                <span className="font-medium">{footer.clients.count}</span>{" "}
                <span className="text-ivory/70">{footer.clients.label}</span>
              </p>
            </div>
            <ButtonLink href={footer.cta.href} variant="light">
              {footer.cta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.5fr]">
          <div>
            <h2 className={columnTitle}>Contact</h2>
            <ul className="mt-5 space-y-3.5 text-sm text-ivory/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                <span>
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-ivory">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-ivory">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className={columnTitle}>{column.title}</h2>
              <ul className="mt-5 space-y-3 text-sm text-ivory/75">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-ivory">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className={columnTitle}>{footer.newsletter.title}</h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/75">{footer.newsletter.body}</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-ivory/15 py-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex gap-3">
            {footer.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:bg-ivory hover:text-ink"
                >
                  <SocialIcon name={social.icon} className="size-[1.1rem]" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-ivory/55">
            © <CurrentYear /> {site.name} {site.tagline}. Photography via{" "}
            <a href="https://unsplash.com" className="underline underline-offset-2 hover:text-ivory">
              Unsplash
            </a>
            .
          </p>
        </div>
      </div>

      <p
        aria-hidden
        className="select-none text-center font-serif text-[length:min(46vw,44rem)] leading-[0.82] tracking-[-0.035em] text-ivory"
      >
        {site.name}
      </p>
    </footer>
  );
}
