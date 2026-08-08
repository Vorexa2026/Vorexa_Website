export type ProductStatus = "Live" | "Private beta" | "In development";

export type Product = {
  name: string;
  slug: string;
  /** Short label used on cards and in the nav strip. */
  category: string;
  /** Fuller positioning line used on the detail page. */
  tagline: string;
  /** Concise card copy. */
  description: string;
  /** The single problem this product removes. */
  solves: string;
  logo: string;
  status: ProductStatus;
  whatItDoes: string;
  builtFor: string;
  mobile: string;
};

export const products: Product[] = [
  {
    name: "Notara",
    slug: "notara",
    category: "Meetings and knowledge",
    tagline: "Meeting intelligence platform",
    description:
      "Meeting capture, notes and knowledge management for tracking decisions, actions and institutional knowledge.",
    solves:
      "Turns scattered meeting notes and decisions into one searchable, structured knowledge base.",
    logo: "/brand/products/notara.png",
    status: "Live",
    whatItDoes:
      "Notara is a meeting capture, notes and knowledge management platform for tracking decisions, actions and institutional knowledge, synchronised across desktop, tablet and mobile.",
    builtFor:
      "Anyone who generates more information in meetings and conversations than they can reliably act on.",
    mobile:
      "Capture meeting notes, track decisions and actions, and search your knowledge base — built for use in the room, not after it.",
  },
  {
    name: "Obstrata",
    slug: "obstrata",
    category: "Property operations",
    tagline: "Property manager platform",
    description:
      "Portfolio operations covering asset oversight, tenant management, arrears visibility, lease risk and compliance.",
    solves:
      "Converts fragmented property operations into one structured operational command environment.",
    logo: "/brand/products/obstrata.png",
    status: "Live",
    whatItDoes:
      "Obstrata is a property management and portfolio operations platform for asset oversight, tenant management, arrears visibility, lease risk, site reporting, compliance tracking, action items and operational accountability.",
    builtFor:
      "Property managers and portfolio teams running multi site commercial or retail operations.",
    mobile:
      "Site reporting, tenant issues, compliance logs, action tracking and operational follow-up. Built for daily property field operations.",
  },
  {
    name: "Ledgera",
    slug: "ledgera",
    category: "Financial operations",
    tagline: "Financial operations for South African businesses",
    description:
      "VAT calculations, tax structuring, expense tracking and audit-ready reporting for owner-managed businesses.",
    solves:
      "Replaces spreadsheet-heavy financial admin with structured, traceable operational reporting.",
    logo: "/brand/products/ledgera.png",
    status: "Private beta",
    whatItDoes:
      "Ledgera is a financial operations platform for South African owner-managed businesses, supporting VAT calculations, tax structuring, expense tracking, financial administration and audit-ready reporting.",
    builtFor:
      "South African owner-managed businesses that need a clear financial picture without a full accounting platform.",
    mobile:
      "VAT, expenses, tax structuring, financial records and audit-ready reporting, available away from the desk.",
  },
  {
    name: "Vaulta",
    slug: "vaulta",
    category: "Family health coordination",
    tagline: "Family health coordination",
    description:
      "A secure system for family medical records, emergency contacts, care plans and health documentation.",
    solves: "Keeps critical family health information structured, accessible and ready when needed.",
    logo: "/brand/products/vaulta.png",
    status: "Private beta",
    whatItDoes:
      "Vaulta is a secure platform for managing family medical records, emergency contacts, care plans, health documents and medication information.",
    builtFor: "Individuals and families managing ongoing or complex care.",
    mobile:
      "Medical records, emergency contacts, care plans and health documentation — structured, secure and ready when needed.",
  },
];

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

export const book = {
  title: "The Family Caregiver",
  subtitle: "A Practical Operating System for Families in Crisis",
  description:
    "A structured practical guide for families managing complex care responsibilities, built around the same system thinking that underpins the Vorexa platforms.",
  cover: "/brand/publications/the-family-caregiver.webp",
  url: "https://www.amazon.com/dp/B0H4QZNXTW",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/technologies", label: "Technologies" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export const contactEmail = "info@vorexa.co.za";
export const contactPhone = "021 180 4244";
export const contactPhoneHref = "+27211804244";
export const contactAddress = "Office Suites, Okavango Road, Belami Ave, Cape Gate, Brackenfell, 7560";

// Shared by app/technologies/[slug]/page.tsx and its opengraph-image.tsx —
// both need the same static params, and Next doesn't infer one from the other.
export const productSlugParams = () => products.map((p) => ({ slug: p.slug }));
