export type ProductStatus = "Production";

/** Drives the product's material accent — bronze/gold for Atlas, teal/mint
 * for Core. Card geometry itself is shared across both products. */
export type ProductTheme = "atlas" | "core";

export type Product = {
  name: string;
  slug: string;
  /** Short label used on cards and in the nav strip. */
  category: string;
  status: ProductStatus;
  /** Fuller positioning line used on cards and the detail page. */
  tagline: string;
  /** Concise card copy. */
  description: string;
  /** External production URL the platform lives at. */
  url: string;
  /** Icon-only sculpted mark, transparent background. */
  logo: string;
  /** Full lockup (mark + wordmark), transparent background. */
  lockup: string;
  theme: ProductTheme;
  /** What it is, in a sentence or two. */
  whatItDoes: string;
  /** The problem it removes. */
  problem: string;
  /** Who it is built for. */
  builtFor: string;
  /** Major operational / personal areas the product covers. */
  capabilities: string[];
  /** Product philosophy paragraph for the detail page. */
  philosophy: string;
  /** Honest, non-fabricated production-proof statements — no invented
   * metrics, user counts or screenshots. */
  proof: string[];
};

export const products: Product[] = [
  {
    name: "Vorexa Atlas",
    slug: "atlas",
    category: "Property Technology / Property Operations",
    status: "Production",
    tagline: "Property operations. One command centre.",
    description:
      "A professional property operating system that centralises portfolio, building, tenant, leasing, finance, arrears, operational and reporting workflows in one structured environment.",
    url: "https://atlas.vorexa.co.za",
    logo: "/brand/products/vorexa-atlas-icon.png",
    lockup: "/brand/products/vorexa-atlas-logo.png",
    theme: "atlas",
    whatItDoes:
      "Vorexa Atlas is a professional property operating system designed to centralise portfolio, building, tenant, leasing, finance, arrears, operational, reporting and management workflows in one structured environment.",
    problem:
      "Commercial property operations are typically spread across spreadsheets, inboxes and disconnected tools, so portfolio teams lose the single, current view they need to manage risk and performance. Atlas replaces that fragmentation with one operating system.",
    builtFor:
      "Commercial property managers and portfolio teams who need one structured environment for managing complex property operations, rather than a collection of disconnected tools.",
    capabilities: [
      "Portfolio oversight",
      "Buildings and tenants",
      "Leasing workflows",
      "Arrears and turnover tracking",
      "Financial and operational visibility",
      "Action and accountability management",
      "Site visits and reporting",
      "Documents and records",
      "Management intelligence",
    ],
    philosophy:
      "Atlas is built around the operation, not around a feature list. Every workflow in the product mirrors how a portfolio is actually run day to day, so information stays connected, accountability stays visible, and reporting stays current instead of reconstructed after the fact.",
    proof: [
      "In production, managing live commercial property portfolios day to day.",
      "Every workflow mirrors how a portfolio is actually run, not a generic property template.",
      "Refined through real operational use, not a feature roadmap built in isolation.",
    ],
  },
  {
    name: "Vorexa Core",
    slug: "core",
    category: "Personal Operating System",
    status: "Production",
    tagline: "Your life, organised around you.",
    description:
      "A private personal operating system that brings the important areas of life, tasks, calendar, finance, documents and personal information, into one structured, connected environment.",
    url: "https://core.vorexa.co.za",
    logo: "/brand/products/vorexa-core-icon.png",
    lockup: "/brand/products/vorexa-core-logo.png",
    theme: "core",
    whatItDoes:
      "Vorexa Core is a private personal operating system that brings the important areas of life into one structured digital environment, rather than spreading them across isolated apps.",
    problem:
      "Personal life is usually managed across a scatter of apps that don't talk to each other, tasks in one, calendar in another, documents somewhere else, so nothing stays connected. Core gives it all one home.",
    builtFor:
      "Individuals who want their commitments, records and personal administration to live in one connected environment, organised around them rather than around a category of app.",
    capabilities: [
      "Today and personal priorities",
      "Commitments and tasks",
      "Calendar",
      "Personal finance",
      "Documents and records",
      "Personal information organisation",
      "Connected personal administration",
    ],
    philosophy:
      "Core is designed around the individual, not around isolated categories of app. Information, commitments and records stay connected to each other, so daily use never means switching between tools that don't share context.",
    proof: [
      "In production and in active daily use as a private, individual operating system.",
      "Every module reflects a real personal-administration workflow, not a generic productivity template.",
      "Access stays private to the individual — Core is not a public, open-signup product.",
    ],
  },
];

// Vorexa's operating ethos — used on the About page.
export const howWeBuild: { title: string; body: string }[] = [
  {
    title: "Identify real friction",
    body: "Every platform starts with a lived, real operational problem, not a market opportunity or a pitch deck concept.",
  },
  {
    title: "Design structured solutions",
    body: "Clear data models, consistent workflows and reliable outputs, built for daily operational use.",
  },
  {
    title: "Independent by design",
    body: "Every decision serves the person using the software. No compromise, no features built for optics.",
  },
];

// "Why Vorexa" — fragmentation -> system -> operational clarity. Homepage only.
export const whyVorexa: { title: string; body: string }[] = [
  {
    title: "Fragmentation",
    body: "Operational information is scattered across spreadsheets, inboxes, messages and memory, so no one has a single, current view.",
  },
  {
    title: "System",
    body: "Vorexa structures that information, and the processes around it, into one coherent operating system built for how the work actually happens.",
  },
  {
    title: "Operational clarity",
    body: "The result is a connected environment for action, control and decision-making, instead of a permanent reconstruction effort.",
  },
];

// How a Vorexa product moves from friction to production — used on the homepage.
export const businessModel: { title: string; body: string }[] = [
  {
    title: "Identify real operational friction.",
    body: "Vorexa products start from real problems experienced inside complex workflows, not from a market opportunity or a pitch deck concept.",
  },
  {
    title: "Design the operating system.",
    body: "Information, processes, accountability and decision-making are structured into one coherent product, not bolted-on features.",
  },
  {
    title: "Build for daily use.",
    body: "Products are developed around actual workflows rather than feature lists, so they hold up under real, repeated use.",
  },
  {
    title: "Refine through operation.",
    body: "Active use informs product development and prioritisation, so the roadmap follows real operational signal.",
  },
  {
    title: "Scale the platform.",
    body: "Products are designed so successful operating systems can expand beyond their original use case.",
  },
];

// Homepage trust section — only verified, factual statements. See /security
// for the fuller Security & Trust page.
export const trustPoints: { title: string; body: string }[] = [
  {
    title: "South African company",
    body: "Vorexa (Pty) Ltd is an independent, founder-operated technology company based in Cape Town, South Africa.",
  },
  {
    title: "Restrained access model",
    body: "Atlas and Core are private, access-controlled production platforms, not open public sign-up products.",
  },
  {
    title: "Direct support",
    body: "Product, partnership and privacy enquiries reach Vorexa directly — no ticket queue, no chatbot.",
  },
];

export const futureGrowth = {
  heading: "A growing product ecosystem.",
  body: "Atlas and Core form the current production foundation of Vorexa. Future products will follow the same principle: focused technology built around real operational problems, with shared Vorexa design, infrastructure and product standards.",
};

export const book = {
  title: "The Family Caregiver",
  subtitle: "A Practical Operating System for Families in Crisis",
  description:
    "A structured practical guide for families managing complex care responsibilities, built around the same system thinking that underpins the Vorexa platforms.",
  cover: "/brand/publications/the-family-caregiver.webp",
  url: "https://www.amazon.com/dp/B0H4QZNXTW",
};

export const navLinks = [
  { href: "/technologies", label: "Platforms" },
  { href: "/about", label: "About" },
  { href: "/security", label: "Security & Trust" },
  { href: "/contact", label: "Contact" },
];

// Route paths are deliberately unchanged (/privacy, /terms are already indexed
// and listed in the sitemap) — only the public labels changed.
export const legalLinks = [
  { href: "/legal-notice", label: "Legal Notice" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Data & Privacy" },
  { href: "/security", label: "Security & Trust" },
];

export const contactEmail = "info@vorexa.co.za";
export const contactPhone = "021 180 4244";
export const contactPhoneHref = "+27211804244";
export const contactAddress = "Office Suites, Roslyn Street, Brackenfell, 7560";

// Shared by app/technologies/[slug]/page.tsx and its opengraph-image.tsx —
// both need the same static params, and Next doesn't infer one from the other.
export const productSlugParams = () => products.map((p) => ({ slug: p.slug }));
