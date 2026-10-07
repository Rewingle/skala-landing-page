/**
 * All copy and data for the landing page. Contact details, names, figures and
 * testimonials are placeholders — replace them with the studio's real content.
 */
import type { StaticImageData } from "next/image";

import hero1 from "@/assets/images/hero/hero-1.jpg";
import hero2 from "@/assets/images/hero/hero-2.jpg";
import hero3 from "@/assets/images/hero/hero-3.jpg";
import hero4 from "@/assets/images/hero/hero-4.jpg";
import hero5 from "@/assets/images/hero/hero-5.jpg";
import about1 from "@/assets/images/about/about-1.jpg";
import about2 from "@/assets/images/about/about-2.jpg";
import about3 from "@/assets/images/about/about-3.jpg";
import linden from "@/assets/images/projects/linden.jpg";
import atrium from "@/assets/images/projects/atrium.jpg";
import walnut from "@/assets/images/projects/walnut.jpg";
import taupe from "@/assets/images/projects/taupe.jpg";
import rose from "@/assets/images/projects/rose.jpg";
import oak from "@/assets/images/projects/oak.jpg";
import testimonialFeature from "@/assets/images/testimonials/feature.jpg";
import journalMaterials from "@/assets/images/journal/materials.jpg";
import journalLighting from "@/assets/images/journal/lighting.jpg";
import contactBanner from "@/assets/images/contact/banner.jpg";

export type Photo = { src: StaticImageData; alt: string };
export type Heading = readonly [string, string];

export const site = {
  name: "Skala",
  tagline: "Interior Design Studio",
  description:
    "Skala is an interior design studio shaping calm, considered homes and workplaces — where proportion, natural light and honest materials do the quiet work.",
  base: "Based in Istanbul — working worldwide",
  email: "hello@skala.example",
  phone: "+90 212 000 00 00",
  address: ["Atelier Street 18", "Beşiktaş, Istanbul"],
};

export const nav = [
  { label: "Studio", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Journal", href: "#journal" },
];

export const hero = {
  title: ["Interiors at Human Scale", "Designed to Be Lived In"] as Heading,
  intro:
    "We shape calm, considered homes and workplaces — where proportion, natural light and honest materials do the quiet work.",
  cta: { label: "Start Your Project", href: "#contact" },
  images: [
    { src: hero1, alt: "Sunlit living and dining room with linen curtains and a walnut table" },
    { src: hero2, alt: "Bedroom with an upholstered headboard and a soft wall light" },
    { src: hero3, alt: "Open living room framed by oak shelving and plants" },
    { src: hero4, alt: "Globe chandelier above a sculptural bowl and vase" },
    { src: hero5, alt: "Arched white doorway opening onto a quiet lounge" },
  ] satisfies Photo[],
};

export const about = {
  eyebrow: "About Skala",
  title: ["Every Room Begins", "With How You Live"] as Heading,
  body: "We start with rituals, not mood boards: where the morning light falls, how you gather, what you want to keep. From there we refine proportion, material and light until a space feels effortless — and unmistakably yours.",
  link: { label: "See how we work", href: "#process" },
  images: [
    { src: about1, alt: "Antique chair beside a stoneware vase of pampas grass" },
    { src: about2, alt: "Sculpture lit inside a plaster wall niche" },
    { src: about3, alt: "Linen sofa with a throw beside a slim console and branches" },
  ] satisfies Photo[],
};

export const services = {
  eyebrow: "Our Services",
  title: ["Thoughtful Services for", "Spaces That Last"] as Heading,
  cta: { label: "Start a Project", href: "#contact" },
  items: [
    {
      icon: "planning",
      title: "Space Planning",
      body: "Layouts that follow how you move — measured flow, considered sightlines and storage that quietly disappears.",
    },
    {
      icon: "lighting",
      title: "Lighting Design",
      body: "Layered natural and artificial light, planned from the first sketch so every room shifts gracefully from day to night.",
    },
    {
      icon: "styling",
      title: "Furniture & Styling",
      body: "Bespoke and sourced pieces, textiles and art, curated to bring warmth, texture and a sense of permanence.",
    },
  ] as const,
};

export const projects = {
  eyebrow: "Selected Work",
  title: ["Quiet Rooms,", "Considered to the Detail"] as Heading,
  items: [
    {
      name: "Linden Residence",
      location: "Istanbul, Türkiye",
      category: "Residential",
      year: "2025",
      scope: "Full renovation · 180 m²",
      image: { src: linden, alt: "Bedroom washed in warm evening light through linen curtains" },
    },
    {
      name: "Atrium House",
      location: "Bodrum, Türkiye",
      category: "Residential",
      year: "2024",
      scope: "New build interiors · 240 m²",
      image: { src: atrium, alt: "Limewashed staircase rising to a landing with a single vase" },
    },
    {
      name: "Walnut Dining Room",
      location: "Copenhagen, Denmark",
      category: "Residential",
      year: "2025",
      scope: "Dining & lighting · 42 m²",
      image: { src: walnut, alt: "Dining room with a walnut-panelled wall and a globe chandelier" },
    },
    {
      name: "Taupe Apartment",
      location: "Lisbon, Portugal",
      category: "Apartment",
      year: "2024",
      scope: "Living spaces · 95 m²",
      image: { src: taupe, alt: "Taupe living room with a low sofa and a mirrored coffee table" },
    },
    {
      name: "Rosé Suite",
      location: "Milan, Italy",
      category: "Hospitality",
      year: "2023",
      scope: "Boutique hotel suite · 60 m²",
      image: { src: rose, alt: "Marble basin against a softly graded rose wall" },
    },
    {
      name: "Oak & Marble Kitchen",
      location: "Ankara, Türkiye",
      category: "Residential",
      year: "2025",
      scope: "Kitchen design · 38 m²",
      image: { src: oak, alt: "Kitchen with oak cabinetry, marble splashback and lit glass shelving" },
    },
  ],
};

export const workProcess = {
  eyebrow: "How We Work",
  title: ["From First Sketch", "To Final Styling"] as Heading,
  steps: [
    {
      step: "01",
      title: "Consultation & Vision",
      body: "We listen first — to how you live, what you love and what the space needs — then shape a clear brief and budget.",
    },
    {
      step: "02",
      title: "Concept & Development",
      body: "Plans, material palettes and 3D views bring the idea into focus, refined together until every detail is resolved.",
    },
    {
      step: "03",
      title: "Execution & Delivery",
      body: "We coordinate makers, contractors and installation, then style the final layer so you simply walk in and live.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Client Stories",
  title: ["Homes That Feel", "Entirely Their Own"] as Heading,
  image: {
    src: testimonialFeature,
    alt: "Neutral living room with a sculptural travertine table and abstract artwork",
  } satisfies Photo,
  featured: {
    quote:
      "Every detail was considered, yet nothing feels precious. Our home finally moves the way we do.",
    name: "Elif & Daniel K.",
    initials: "EK",
    role: "Linden Residence",
  },
  summary: "Real Homes, Beautifully Transformed",
  stats: [
    { value: 4.9, decimals: 1, suffix: "/5", label: "Client rating" },
    { value: 140, decimals: 0, suffix: "+", label: "Spaces designed" },
    { value: 12, decimals: 0, suffix: "", label: "Years in practice" },
  ],
  items: [
    {
      quote:
        "They understood the light in our house better than we did. Every room now has a purpose and a calm to it.",
      name: "Selin Aydın",
      initials: "SA",
      role: "Homeowner, Bodrum",
    },
    {
      quote:
        "From the first sketch to the final cushion, the process was clear and unhurried. The result is timeless.",
      name: "Marcus Holm",
      initials: "MH",
      role: "Restaurateur, Copenhagen",
    },
    {
      quote:
        "Our small apartment feels twice the size — warm, practical and beautifully finished.",
      name: "Ana Ribeiro",
      initials: "AR",
      role: "Apartment owner, Lisbon",
    },
  ],
};

export const journal = {
  eyebrow: "Journal",
  title: ["Notes on Living", "Well at Home"] as Heading,
  // `href` values are placeholders until the journal has its own pages.
  posts: [
    {
      day: "18",
      month: "Sep",
      title: "The Quiet Power of Natural Materials",
      excerpt: "Why limewash, oak and stone age gracefully — and how to combine them without a room feeling heavy.",
      href: "#journal",
      image: { src: journalMaterials, alt: "Dried branches in a stoneware vase beside a reclaimed timber chest" },
    },
    {
      day: "02",
      month: "Aug",
      title: "Layering Light, Room by Room",
      excerpt: "A practical guide to ambient, task and accent lighting that carries a home from morning to night.",
      href: "#journal",
      image: { src: journalLighting, alt: "Two woven rattan pendants casting soft shadows on a wall" },
    },
  ],
};

export const contact = {
  eyebrow: "Start a Project",
  title: ["Let’s Create Something", "Timeless Together"] as Heading,
  body: "Tell us a little about your space. We reply within two working days to arrange an initial consultation.",
  image: {
    src: contactBanner,
    alt: "Leaf shadows falling across a sheer curtain in golden light",
  } satisfies Photo,
};

export const footer = {
  title: ["Spaces That Feel", "Personal, Calm & Timeless"] as Heading,
  clients: { count: "220+", label: "happy homeowners", initials: ["EK", "SA", "MH"] },
  cta: { label: "Start a Conversation", href: "#contact" },
  columns: [
    {
      title: "Services",
      links: [
        { label: "Space Planning", href: "#services" },
        { label: "Lighting Design", href: "#services" },
        { label: "Furniture & Styling", href: "#services" },
      ],
    },
    {
      title: "Studio",
      links: [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Process", href: "#process" },
        { label: "Journal", href: "#journal" },
      ],
    },
  ],
  newsletter: {
    title: "Newsletter",
    body: "Seasonal notes on materials, light and living well — once a month at most.",
  },
  // Placeholder profile links.
  socials: [
    { label: "Instagram", icon: "instagram", href: "#" },
    { label: "Pinterest", icon: "pinterest", href: "#" },
    { label: "LinkedIn", icon: "linkedin", href: "#" },
  ] as const,
};
