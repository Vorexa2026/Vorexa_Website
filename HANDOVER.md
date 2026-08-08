# Handover Note

Built from the supplied `Vorexa_Claude_Design_Brief.md` and the Vorexa brand asset
folder (Google Drive). This implements the brief's section 7 spec directly rather
than the two `.dc.html` mockups in the same folder — those were drafts in a
proprietary page-builder format (custom `<x-dc>` / `sc-if` / `sc-for` markup, not
valid HTML/React) and were used only as visual reference, not copied.

## Assets used

From the Drive folder, three brand PNGs (transparent, web-optimised, as supplied):

- `public/brand/vorexa-symbol.png` — the X mark (header, hero, footer)
- `public/brand/vorexa-wordmark.png` — navy "VOREXA" wordmark (header)
- `public/brand/vorexa-lockup.png` — wordmark + "Intelligence. Systems. Decisions." (contact card)

Generated from those, not supplied:

- `app/icon.png` — square favicon padded from the symbol
- `public/brand/vorexa-og.png` — 1200×630 Open Graph image (lockup centred on off-white)

**Not used:** the four `ChatGPT Image Aug 7…png` files in the Drive folder. These
are rough exploratory renders of the wordmark on a plain grey background (glow
effect, no transparency) — not production assets, and the brief itself says not
to trace or re-render the wordmark with effects. Flagging this explicitly in case
they were intended as something else.

## Bugs found and fixed during build

Two issues would have shipped broken if not caught in testing:

1. **Technologies and Contact sections rendered invisible.** An early scroll-reveal
   animation (fade-in via `IntersectionObserver`) never fired for those sections in
   some rendering paths, leaving them at `opacity: 0` permanently. Removed entirely —
   content is now always visible on load, consistent with the brief's "never delay
   access to content" rule.
2. **Failed WCAG AA contrast in several places**: teal (`#00B6A6`) and electric blue
   (`#1479FF`) as small text on white/off-white backgrounds both fall below the
   4.5:1 minimum (2.55:1 and 4.03:1 respectively). Fixed by using navy/muted-grey
   for that text (product card categories, section eyebrows, list numerals) and
   reserving teal/blue text for use on the dark navy sections, where contrast
   passes (6:1+). The primary button was also bumped to 18px/bold so its
   white-on-blue text qualifies for the large-text 3:1 threshold. This is the kind
   of thing you may have been running into as "technologies" issues previously.

## Contact details (confirmed)

Supplied directly and used in the Contact section (`content/products.ts`):

- Email: `info@vorexa.co.za`
- Phone: `021 180 4244`
- Address: Office Suites, Okavango Road, Belami Ave, Cape Gate, Brackenfell, 7560

## Placeholders still requiring confirmation

Per the brief's section 16, these have not been guessed:

- **Production domain** — not set. `app/layout.tsx` has no `metadataBase`, so
  Open Graph/Twitter image URLs currently resolve relative to whatever host serves
  the page. Set `metadataBase: new URL("https://...")` once the domain is final.
- **LinkedIn** — not included (not supplied).

## Product logos

All five product logos were supplied afterwards (shared directly in chat, then
added to the Drive folder) and are now wired into the technology cards:
`public/brand/products/{ace,obstrata,ledgera,notara,vaulta}.png`, referenced via
the `logo` field on each entry in `content/products.ts`.

One integrity note: four of the five Drive uploads (`ledgera.png`, `notara.png`,
`obstrata.png`, `vaulta.png`) are 96×96 PNGs. When first retrieved, two of them
(`ledgera.png`, `notara.png`) came through with corrupted compressed data — this
was caught by validating each file's zlib stream before use, not by visual
inspection, and re-fetching resolved it. The fifth (ACE) was supplied as a
1254×1254 PNG with a solid black background and no alpha channel — placing it
directly on the white cards would have shown a black square. It was reprocessed
into a transparent PNG using luminance-based alpha extraction (alpha = max(R,G,B),
appropriate since the source is a glow-style graphic on pure black) and downscaled
to 256px — this changes only the background's opacity, not the artwork itself.
If a native transparent export of the ACE mark becomes available later, prefer it
over the derived version at `public/brand/products/ace.png`.

## What was deliberately left out

Per brief section 15: no extra routes, no contact form (no delivery/privacy
handling confirmed), no analytics, no CMS, no theme switcher, no social icons,
no fabricated testimonials/claims/history.

## Verification done

- `npm run build` and `npm run lint` — both clean.
- Visual check at 375px, 768px, 1280px, 1440px (see screenshots taken during build).
- Single `h1`, all four section landmarks present, skip-to-content link works on
  focus, mobile menu opens/closes and returns focus to the toggle button, nav
  scroll-spy and anchor scrolling work, zero browser console errors.
- Contrast-checked every text/background colour pairing in the palette against
  WCAG AA (see "Bugs found" above).

## Before deploying

1. Confirm the contact email, then update `contactEmail` in `content/products.ts`
   if it changes.
2. Set the production domain and add `metadataBase` in `app/layout.tsx`.
3. Run Lighthouse against the deployed build to confirm the brief's targets
   (Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+) — not run
   here since there's no production URL yet.
4. Decide on hosting (Vercel is the obvious fit for a Next.js app) — not deployed
   as part of this handover.
