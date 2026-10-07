# Skala — Interior Design Studio landing page

A single-page marketing site built with Next.js 16 (App Router), Tailwind CSS 4 and Motion.
The design draws on the reference shots in `inspiration/`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (type-checks)
npm run lint
```

## Where things live

| Path | What |
|---|---|
| `src/content/site.ts` | All copy and data: hero, services, projects, testimonials, journal, contact details, footer |
| `src/content/options.ts` | Contact-form choices (project types, budgets), shared with server validation |
| `src/app/actions.ts` | Server Actions for the enquiry form and newsletter |
| `src/app/globals.css` | Colour tokens (`linen`, `sand`, `espresso`, `terracotta`, …) and layout utilities |
| `src/components/sections/` | One component per page section |
| `src/components/ui/` | Shared pieces: headings, buttons, reveal/parallax/count-up motion, line-art SVGs |
| `src/assets/images/` | Photos (statically imported for blur placeholders), with `CREDITS.md` |

## Before launch

- Replace the placeholder content in `src/content/site.ts`: contact details, figures,
  testimonials, project names and social links.
- Swap the Unsplash photos for the studio's own photography (see `src/assets/images/CREDITS.md`).
- Connect the form actions to an email provider or CRM. They currently only validate
  and `console.log` (see the `TODO`s in `src/app/actions.ts`).
- Set `NEXT_PUBLIC_SITE_URL` so Open Graph image URLs resolve to the real domain.
