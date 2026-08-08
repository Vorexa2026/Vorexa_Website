// Single source of truth for the site's base URL. Set the SITE_URL env var
// once the production domain is confirmed — every consumer (sitemap, robots,
// JSON-LD, metadataBase) reads from here, so that's the only place to change.
export const SITE_URL = (process.env.SITE_URL ?? "https://vorexa.co.za").replace(/\/$/, "");
