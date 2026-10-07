import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden">
      <Image
        src={contact.image.src}
        alt={contact.image.alt}
        fill
        sizes="100vw"
        placeholder="blur"
        className="-z-10 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-ink/85 via-ink/65 to-ink/35" />

      <div className="shell grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_minmax(0,31rem)] lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading id="contact-title" tone="light" eyebrow={contact.eyebrow} title={contact.title} />
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ivory/80">{contact.body}</p>
          <ul className="mt-10 space-y-3.5 text-sm text-ivory/85">
            <li className="flex items-center gap-3">
              <Mail aria-hidden className="size-4" strokeWidth={1.5} />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-ivory">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone aria-hidden className="size-4" strokeWidth={1.5} />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-ivory">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin aria-hidden className="size-4" strokeWidth={1.5} />
              {site.base}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
