# Vorexa Website

Single-page corporate website for Vorexa, built per `Vorexa_Claude_Design_Brief.md` (the source brief, supplied via Google Drive, is not included in this repo). See `HANDOVER.md` for asset provenance, outstanding placeholders and pre-launch steps.

## Stack

- Next.js 14 (App Router) + TypeScript (strict)
- Tailwind CSS
- `next/font` for Space Grotesk (headings) and Inter (body)
- No component libraries, no analytics, no CMS — static single route (`/`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```text
app/
  layout.tsx      — fonts, metadata, OG/Twitter tags, icon
  page.tsx         — assembles Home / About / Technologies / Contact
  globals.css
  icon.png         — generated favicon (square, from vorexa-symbol.png)
components/
  header.tsx        — sticky nav, mobile menu, scroll-spy
  footer.tsx
  section-heading.tsx
  product-card.tsx
  button.tsx
content/
  products.ts        — the 5 product entries, nav links, principles, contact email
public/
  brand/              — Vorexa logo assets (see HANDOVER.md)
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (Next core-web-vitals config)

## Deployment

No hosting has been configured yet. This is a static Next.js app and deploys cleanly to Vercel or any Node host that can run `next build && next start`.
