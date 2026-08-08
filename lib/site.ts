// Single source of truth for the site's base URL.
//
// The production domain serves on www — https://vorexa.co.za issues a 308
// redirect to https://www.vorexa.co.za — so the www form is canonical and is
// what we publish everywhere (sitemap, robots, JSON-LD, metadataBase,
// canonical tags, Open Graph image URLs).
//
// SITE_URL can still override this per-environment (e.g. a preview domain);
// it just isn't required any more now that the real domain is known.
export const SITE_URL = (process.env.SITE_URL ?? "https://www.vorexa.co.za").replace(/\/$/, "");
