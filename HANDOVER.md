# Handover Note

## Atlas & Core relaunch

The Notara/Obstrata/Ledgera/Vaulta portfolio has been fully retired from the public
site. Vorexa now presents two production platforms:

- **Vorexa Atlas** — `https://atlas.vorexa.co.za` (property operations)
- **Vorexa Core** — `https://core.vorexa.co.za` (personal operating system)

`content/products.ts` is still the single source of truth — the `Product` type grew
`url` (external platform link), `capabilities` (major operational/personal areas),
`problem`, `philosophy` and `theme` (`"atlas" | "core"`, drives card geometry), and
`ProductStatus` was collapsed to the single `"Production"` value used going forward.
Every consumer (cards, detail pages under `/technologies/[slug]`, sitemap, `llms.txt`,
OG images, JSON-LD) reads from that one array, so there's nowhere else that needs
editing to add a third product later.

Brand palette moved to the supplied Deep Navy / Royal Blue / Electric Blue / Cyan set
(`tailwind.config.ts`) — the old teal accent (`#00B6A6`) is now `cyan` (`#00E5FF`)
throughout; there is no remaining `teal` token in the codebase.

Product logos (`public/brand/products/vorexa-{atlas,core}.png` and matching
`-lockup.png` full lockups) were derived from the supplied lockup PNGs by cropping to
the mark and converting the flat white background to a real alpha channel — the
artwork itself wasn't redrawn. If native transparent exports become available later,
prefer those over the derived versions.

Legacy product mentions (Notara, Obstrata, Ledgera, Vaulta, "Four platforms", and the
old three-tier Live/Private beta/In development status model) were removed from every
public-facing route, including the Legal Notice's IP paragraph.


## Contact form diagnosis + legal footer

### Contact form: root cause found

Posting a valid payload to the live endpoint returned **503 before Resend was ever called** — confirming `RESEND_API_KEY` is **not set in the Vercel project**. That is the whole reason the Resend dashboard shows "No sent emails yet": no send was ever attempted. The earlier `onboarding@resend.dev` concern was real but secondary.

**To make the form work, add `RESEND_API_KEY` to the Vercel project environment variables and redeploy.** Nothing else is required — the Resend account owner address is `info@vorexa.co.za`, which is also where enquiries are sent, and Resend's shared testing sender delivers to the account owner. So it will work immediately on the default sender.

The sender is now configurable via `CONTACT_FROM_EMAIL` (`app/api/contact/route.ts`), defaulting to `Vorexa Website <onboarding@resend.dev>`. Once `vorexa.co.za` is verified in Resend (add domain, add the DNS records in cPanel Zone Editor, wait for verification), set `CONTACT_FROM_EMAIL="Vorexa <website@vorexa.co.za>"` for branded sending. No code change needed.

Resend failures are now logged server-side (`console.error`, visible in Vercel runtime logs) so a rejected send is diagnosable; the browser still gets a generic message.

### Legal footer

Footer legal links are now **Legal Notice, Terms of Service, Data & Privacy**, matching the MJW structure.

Route paths were deliberately left as `/terms` and `/privacy` — they are already indexed and in the sitemap, so only the public labels and page titles changed. A new `/legal-notice` page was added (company, founder, registered address, contact, responsibility for content, IP, external links), added to the sitemap, and reflected in `llms.txt`.

**No CIPC registration number is published** — it was never supplied, and inventing or placeholder-ing one publicly would be worse than omitting it. Add it to `app/legal-notice/page.tsx` as another `<Row>` when available.

## Live-site review + MJW content migration

Triggered by a review of the now-live https://www.vorexa.co.za. Three technical faults were found and fixed, and the product content was rebuilt from the MJW site's (much stronger) source copy ahead of that site being retired.

### Technical fixes

- **www canonical mismatch.** `vorexa.co.za` 308-redirects to `www.vorexa.co.za`, so **www is canonical** — but the site was publishing the non-www form everywhere (sitemap, robots, JSON-LD, `og:image`), because `SITE_URL` was never set in Vercel and fell back to a placeholder. `lib/site.ts` now defaults to `https://www.vorexa.co.za`, so this is correct with or without the env var. Verified: all 10 sitemap URLs, canonicals and OG image URLs now resolve without a redirect.
- **No canonical tags existed.** Added `alternates.canonical` to every page including the homepage (which had no metadata export at all).
- **ACE removed** per instruction. `/technologies/ace` now 404s and is out of the sitemap. It was live for roughly a day with no inbound links, so no redirect was added — say the word if you'd rather it 301 to `/technologies`.

### Product status — now accurate per product

Previously every product claimed "In development" while the MJW site simultaneously claimed all four were "Active". Confirmed actual state:

| Product | Status |
|---|---|
| Notara | **Live** |
| Obstrata | **Live** |
| Ledgera | **Private beta** |
| Vaulta | **Private beta** |

A new `components/status-pill.tsx` renders all three states distinctly. Colour is never the only signal — the status word is always present — so it stays readable for colour-blind users, and all three pass WCAG AA on navy.

**`llms.txt` was stating a falsehood** and has been rewritten. It previously told AI systems "None of Vorexa's products are currently live, purchasable, or open for public signup" — untrue for two products. It now states per-product availability, and explicitly instructs AI systems not to generalise across products, not to invent pricing/user numbers, not to claim app-store listings, and not to confuse Vorexa (Pty) Ltd with the similarly-named UK and US entities.

### Content migrated from MJW

Pulled from the live MJW site (no repo access needed):

- **Sharper product copy** for all four, including the "what it solves" one-liner pattern, now shown on both cards and detail pages.
- **Mobile app descriptions** — deliberately worded as *developed* rather than *published*, mirroring MJW's own framing, since no app-store listings were found. Do not upgrade this language without store links to point at.
- **Full founder narrative** plus a real photo (`public/brand/people/mornay-walters.jpg`, optimised 1.7MB → 44KB) — the About page previously had no photo and a much thinner bio.
- **The Family Caregiver** book with cover art, linking to Amazon (tracking params stripped).
- **"How we build"** — MJW's three principles *with* their explanatory text, replacing four unexplained one-liners. Headline "No venture capital. No growth-at-all-costs pressure." carried across.

Music was deliberately left behind as personal/MJW-brand.

## Open items

1. **Contact form is probably not delivering.** `app/api/contact/route.ts` still sends `from: onboarding@resend.dev` — Resend's shared testing sender, which only delivers to the Resend account owner's own address. Verify a domain in Resend and change this to e.g. `website@vorexa.co.za`. **This is the only conversion path on the site.**
2. **Product links / CTAs not added.** The four products are live at `notara|obstrata|ledgera|vaulta.mjwgroup.co.za`. These were deliberately *not* linked from Vorexa, because retiring `mjwgroup.co.za` would break them. Decide whether those apps stay on that domain or move to `vorexa.co.za` subdomains, then the links are a one-line addition.
3. **Retiring MJW**: 301-redirect `mjw-ecosystem.vercel.app` to the Vorexa equivalents rather than deleting, and forward `info@mjwgroup.co.za` — it is published and in use.
4. **Vercel Web Analytics** — confirm it is toggled on in the project dashboard; the scripts 404 locally by design but should serve in production.
5. **Privacy policy scope.** It currently covers only website contact-form data. With two products live and holding real user data (including health data in Vaulta), the products likely need their own privacy terms — worth a legal check, especially for POPIA and health information.

## Industry benchmark review: quick-win pass

A full plan for this pass lives in the session's plan file; summarized here for the permanent record. Requested: a review of the site against comparable industry offerings (venture-studio/multi-product tech group sites, B2B SaaS conventions) and a prioritized list of quick fixes. Confirmed scope: add Vercel Analytics, add a homepage portfolio-preview strip, domain confirmed as linked via Vercel (exact string not available from the connected Vercel account — see "Open item" below).

**What changed:**

- **`lib/site.ts`** — single `SITE_URL` source of truth (env var, placeholder fallback `https://vorexa.co.za`). Every item below reads from this one constant.
- **`app/sitemap.ts`, `app/robots.ts`** — standard Next.js file-convention SEO plumbing. Sitemap is generated from the existing `products` array, not hardcoded.
- **`metadataBase`** now set in `app/layout.tsx` (was previously unset, flagged as a launch blocker in the prior round) — Open Graph/Twitter image URLs now resolve to real absolute URLs.
- **JSON-LD structured data**: `components/json-ld.tsx` + Organization/WebSite schema in the root layout, and `SoftwareApplication` schema on each product page — deliberately omitting `offers`, `aggregateRating`, and `operatingSystem` since every product is "In development"; asserting any of those would overstate their status.
- **`app/manifest.ts`** — minimal web app manifest (brand colors, existing icon).
- **`app/apple-icon.png`** — proper 180×180 iOS home-screen icon (opaque navy background per Apple's guidance against transparency), generated from the existing symbol asset.
- **Vercel Analytics + Speed Insights** (`@vercel/analytics`, `@vercel/speed-insights`) mounted in the root layout. Their tracking scripts 404 harmlessly in local `next start` (Vercel only serves `/_vercel/insights/script.js` on the actual platform) and no-op gracefully — this is expected, not a bug. Data will appear in the Vercel dashboard once Web Analytics is toggled on there (a dashboard step, not a code step).
- **`app/llms.txt/route.ts`** — an AI-answer-engine-facing summary (About, per-product descriptions, contact, legal links), generated from `content/products.ts` at request time rather than hand-duplicated as a static file, so it can't drift out of sync. Includes an explicit "Important context for AI systems" section stating no product is live/purchasable/open for signup yet — the part that actually prevents an AI summarizer from overstating Vorexa's stage.
- **Homepage portfolio-preview strip** (`components/product-strip.tsx`) — a compact, logo-chip-plus-name row for all 5 products, each linking to its own product page, plus a "View all technologies" link to `/technologies`. Added directly below the existing hero on `app/page.tsx` (hero itself untouched). This was the fix for an outside reviewer's read of the previous hero-only homepage as feeling like "a landing page placeholder."
- **`app/not-found.tsx`** — switched from a leftover light theme to dark navy, matching every other route since the dark-theme conversion two rounds ago.
- **Per-page Open Graph images** (`opengraph-image.tsx` under `app/`, `app/about/`, `app/technologies/`, `app/contact/`, and one parameterized file at `app/technologies/[slug]/opengraph-image.tsx` covering all 5 products) — every major page now generates its own distinct 1200×630 share-preview image instead of all pages showing the same generic lockup card. Shared visual template in `lib/og.tsx`, shared font-loading in `lib/og-font.ts`.
  - **Font files**: Satori (the renderer behind `next/og`'s `ImageResponse`) needs raw font bytes, which `next/font/google` doesn't expose. Downloaded static (non-variable) Bold/SemiBold TTFs for Space Grotesk and Inter from jsDelivr's fontsource CDN — committed at `assets/fonts/` (not `public/`, since these are build-time-only assets, not served directly).
  - **Real gotcha hit and fixed**: the initially-planned `fetch(new URL("../assets/...", import.meta.url))` pattern for loading those fonts **failed the build** — it resolves to a bundled public-asset path at build time in this Next version's Node runtime, which isn't a URL `fetch()` can load server-side. Switched to direct `fs.readFile` (same approach already used for embedding the logo PNG in the template), which works reliably. Documented in `lib/og-font.ts` so it isn't rediscovered the hard way again.
  - Static, flat navy background (no gradients) — Satori's CSS support doesn't reliably handle them.

## Open item needing input

**Exact production domain string.** A Vercel MCP lookup on the connected account didn't find a project matching this site (checked `list_projects` against team "MJW" — none of the 6 projects listed matched). `SITE_URL` currently falls back to a placeholder (`https://vorexa.co.za`, matching the existing contact email's domain). Set the real value as the `SITE_URL` environment variable in the Vercel project settings — everything above (sitemap, robots, structured data, OG image URLs) reads from that one place, so this is a single env var change, not a code change.

## Second round of post-launch-review fixes

Further feedback from the deployed Vercel preview, addressed:

- **Header nav**: was showing three plain text links plus a separate navy
  "Contact" button — a visible duplicate of the Contact link, and
  inconsistent styling against the other two. All three nav items (About,
  Technologies, Contact) are now uniform navy blocks matching that button's
  look, with a teal underline marking the current page. The extra duplicate
  Contact button is gone, on both desktop and the mobile menu.
- **About and Technologies pages**: were light/white-themed, which read as
  inconsistent against Home and Contact's dark navy theme. Both (including
  the technology detail pages) are now dark navy throughout, reusing the
  same `SectionHeading` "light" variant, radial-glow background treatment
  and text colours (`white`/`#A9B4C4`/`teal`) as Home and Contact. Product
  cards became dark panels (`bg-white/[0.04]`, `border-white/10`) with white
  logo chips and a bordered status pill, so logos and light-card contrast
  still pop against the dark background. Every new colour pairing was
  contrast-checked (all ≥5.4:1, well above the 4.5:1 minimum) before
  building — see the previous round's note below for why that check matters.

## Post-launch-review fixes (post v2)

Feedback from the deployed Vercel preview, addressed:

- **Legal pages**: "Last updated" set to June 2026 on `/privacy` and `/terms`;
  Privacy's Information Officer set to Mornay Walters. Both were previously
  literal `[date]`/`[Name]` placeholders — now filled in, so their HTML-comment
  TODO flags and the now-unused flag helper were removed.
- **Home hero decoration**: removed the full-hero background grid pattern and
  the bordered/corner-bracketed box around the X symbol (felt like a technical
  wireframe rather than a mark). Replaced with just the symbol on a soft radial
  glow — same restrained motif, no lines or blocks.
- **More colour on `/about` and `/technologies`**: added a light blue-tinted
  background section, a blue left-border accent and numbered blue badge
  circles on `/about`; a light blue page wash, blue top-border accent and
  teal/navy status pills, and soft blue logo chips on the product cards and
  detail pages. Every new colour pairing was contrast-checked against WCAG AA
  — the initial tint (`#EAF2FF`) put muted grey text at 4.42:1 against the
  4.5:1 minimum, so it was lightened to `#F1F6FF` (4.59:1) and the Founder
  section's label switched to navy rather than muted for extra margin.

Built from the supplied `Vorexa_Claude_Design_Brief.md`, the Vorexa brand asset
folder (Google Drive), and a follow-up "v2 launch readiness" prompt that
extended the original single-page brief into a multi-page site. The original
brief's single-page constraint was superseded by that later instruction — this
isn't a case of scope creep, it was an explicit, confirmed pivot.

## Site structure (v2)

The site is now multi-page:

- `/` — Home. Trimmed to the hero only; About/Technologies/Contact moved to
  their own routes rather than being duplicated on both Home and dedicated
  pages (confirmed choice — avoids duplicate content).
- `/about` — About + one-paragraph Founder note (Mornay Walters).
- `/technologies` — overview grid, each card linking to its detail page, with
  a status label ("In development" on all five per the v2 spec).
- `/technologies/[slug]` — one page per product (ace, obstrata, ledgera,
  notara, vaulta), statically generated.
- `/contact` — working form (see below) plus the existing email/phone/address.
- `/privacy`, `/terms` — see "Legal pages" below.
- 404 — handled by `app/not-found.tsx` (Next.js's catch-all convention;
  there's no literal `/404` route file, but visiting any unknown URL renders it).

Header and Footer were hoisted into `app/layout.tsx` so every route gets them
consistently. The header's active-link state is now route-based (`usePathname`)
instead of the old scroll-spy, since sections no longer live on one page.

Originally built from the supplied `Vorexa_Claude_Design_Brief.md` and the Vorexa
brand asset folder (Google Drive). The original single-page implementation used
the brief's section 7 spec directly rather than the two `.dc.html` mockups in
the same Drive folder — those were drafts in a proprietary page-builder format
(custom `<x-dc>` / `sc-if` / `sc-for` markup, not valid HTML/React) and were
used only as visual reference, not copied.

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
- Address: Office Suites, Roslyn Street, Brackenfell, 7560

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

## Contact form and Resend (needs an API key before launch)

`/contact` has a real form (Name, Email, Company, Enquiry type, Message) with
client-side validation, posting to `app/api/contact/route.ts`. That route uses
the [Resend](https://resend.com) SDK to send mail to `info@vorexa.co.za`.

**This will not send real email until `RESEND_API_KEY` is set.** Without it,
the route returns a real `503` with a clear message ("isn't connected to email
delivery yet... email us directly at...") — the form never claims success it
didn't achieve. Two things still need doing before launch:

1. Set `RESEND_API_KEY` — copy `.env.example` to `.env.local` for local dev
   (git-ignored, safe for the real key), and add it to your hosting provider's
   environment variables for production (e.g. Vercel project → Settings →
   Environment Variables). **Do not paste the key into chat or commit it** —
   it's a private secret, unlike a Supabase publishable key.
2. Replace the `from` address in `app/api/contact/route.ts` (currently
   `onboarding@resend.dev`, Resend's shared testing sender) with an address on
   a domain you've verified in Resend. The testing sender only reliably
   delivers to the Resend account owner's own address.

## Legal pages — need input before launch

- **`/privacy`**: POPIA-oriented policy using the supplied copy exactly.
  `Last updated: [date]` and the Information Officer `[Name]` are left as
  literal visible placeholders (plus an HTML comment in the page source
  flagging both) — per instruction, an officer name was not invented.
- **`/terms`**: minimal terms sufficient for a marketing site with no
  e-commerce or accounts. `Last updated: [date]` is flagged the same way.
  **A corporate attorney should review this before public launch**,
  particularly once any product goes live and starts processing user data
  beyond enquiry forms — this is placeholder-quality legal text, not
  attorney-reviewed.
- **Footer registration number**: the v2 spec asked for a
  "Vorexa (Pty) Ltd | Registration number" line, but only if CIPC-registered
  and a number is supplied. Neither was confirmed, so the footer shows
  "Vorexa (Pty) Ltd" with no registration number, rather than a placeholder
  visible to the public.

## What was deliberately left out

Per the v2 spec's explicit out-of-scope list: no blog/careers/press pages, no
analytics or cookie tracking, no content for Creative/Capital/Labs divisions,
no client names/logos/testimonials, no payment or product login system.

## Supabase (still not wired up)

A Supabase project was shared for possible future use on the site:

- URL: `https://maepyzofzytsmqukinlp.supabase.co`
- Publishable key: `sb_publishable_lPHUzyVni2BAuMKqfNJghg_V6LLvayA`

Per instruction, this is filed for later — nothing in the codebase uses it.
It doesn't correspond to either Supabase project visible from this session's
connected Supabase account, so its schema wasn't inspected. Now that the
contact form exists, it runs on Resend instead (see above) — if the intent
was ever for Supabase to back the form, say so and it can be swapped in.

## Verification done

- `npm run build` and `npm run lint` — both clean; all 16 routes (including the
  5 static `/technologies/[slug]` pages) build successfully.
- Every route returns the expected status: all real pages 200, unknown URLs 404.
- Contact form: empty submit shows inline validation errors; a valid submit
  (with no `RESEND_API_KEY` set) correctly surfaces the "not connected yet"
  error rather than a fake success.
- Visual check of every new page at desktop and mobile widths, plus the
  original 375/768/1280/1440 sweep on Home.
- Nav active-state correctly reflects the current route (including on
  `/technologies/[slug]` detail pages, which highlight "Technologies") and
  the mobile menu reflects the same state.
- `[date]`/`[Name]` placeholders and their HTML comment flags confirmed present
  in the rendered page source for `/privacy` and `/terms`.
- Re-ran the full WCAG AA contrast check against every colour pairing
  introduced in this pass, including the footer's copyright/legal text —
  found and fixed one more failure: `#7C8AA3` on navy was 4.41:1 (needs 4.5),
  present since the original build. Replaced with the `#A9B4C4` tone already
  used elsewhere in the footer, which passes at 7.3:1.
- Zero browser console errors across all pages tested.

## Before deploying

1. Set `RESEND_API_KEY` and verify a sending domain in Resend (see "Contact
   form and Resend" above) — the form is otherwise honest about being
   unconfigured, but obviously shouldn't ship that way.
2. Fill in `[date]` (both legal pages) and the Information Officer `[Name]`
   (privacy policy) — flagged in the page source via HTML comments.
3. Have a corporate attorney review `/terms` and `/privacy` before public launch.
4. Confirm the contact email, then update `contactEmail` in `content/products.ts`
   if it changes.
5. Set the production domain and add `metadataBase` in `app/layout.tsx`.
6. Run Lighthouse against the deployed build to confirm the brief's targets
   (Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+) — not run
   here since there's no production URL yet.
7. Decide on hosting (Vercel is the obvious fit for a Next.js app) — not deployed
   as part of this handover.
