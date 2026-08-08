export type ProductStatus = "In development" | "Private beta" | "Live";

export type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  logo: string;
  status: ProductStatus;
  whatItDoes: string;
  builtFor: string;
};

export const products: Product[] = [
  {
    name: "ACE",
    slug: "ace",
    category: "Personal operating system",
    description:
      "A connected workspace for commitments, priorities, projects and daily decision support.",
    logo: "/brand/products/ace.png",
    status: "In development",
    whatItDoes:
      "ACE is a connected workspace for commitments, priorities, projects and daily decision support. It brings scattered tasks and context into one structured system so decisions are made with full information rather than partial recall.",
    builtFor: "Individuals managing high complexity across multiple roles or projects.",
  },
  {
    name: "Obstrata",
    slug: "obstrata",
    category: "Property operations",
    description:
      "Operational management for property portfolios, including meetings, reporting, compliance, utilities and tenant workflows.",
    logo: "/brand/products/obstrata.png",
    status: "In development",
    whatItDoes:
      "Obstrata is operational management software for property portfolios. It structures meetings, reporting, compliance tracking, utilities and tenant workflows into a single connected system, replacing fragmented spreadsheets and email threads.",
    builtFor:
      "Property managers and portfolio teams running multi building commercial or retail operations.",
  },
  {
    name: "Ledgera",
    slug: "ledgera",
    category: "Financial management",
    description:
      "A structured view of income, expenses, obligations, cash position and debt.",
    logo: "/brand/products/ledgera.png",
    status: "In development",
    whatItDoes:
      "Ledgera gives a structured view of income, expenses, obligations, cash position and debt. It is built to separate business and personal financial clarity without forcing either into the wrong system.",
    builtFor: "Operators who need a clear financial picture without a full accounting platform.",
  },
  {
    name: "Notara",
    slug: "notara",
    category: "Knowledge and action management",
    description:
      "A workspace for capturing notes, transcripts, decisions, actions and planning context.",
    logo: "/brand/products/notara.png",
    status: "In development",
    whatItDoes:
      "Notara is a workspace for capturing notes, transcripts, decisions, actions and planning context. It turns unstructured input into tracked, actionable output.",
    builtFor:
      "Anyone who generates more information in meetings and conversations than they can reliably act on.",
  },
  {
    name: "Vaulta",
    slug: "vaulta",
    category: "Health information management",
    description:
      "A private system for organising health information, records and ongoing care context.",
    logo: "/brand/products/vaulta.png",
    status: "In development",
    whatItDoes:
      "Vaulta is a private system for organising health information, records and ongoing care context. It keeps critical health information structured and accessible when it is needed most.",
    builtFor: "Individuals and families managing ongoing or complex care.",
  },
];

export const principles: string[] = [
  "Solve meaningful operational problems.",
  "Build clear, connected systems.",
  "Support decisions with usable information.",
  "Design for disciplined execution.",
];

export const howWeWork: string[] = [
  "Start inside the operation, not the interface.",
  "Structure information before automating it.",
  "Build for the person making the decision, not the dashboard.",
  "Ship focused systems, not broad platforms.",
];

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
