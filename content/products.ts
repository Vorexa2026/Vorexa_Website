export type Product = {
  name: string;
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    name: "ACE",
    category: "Personal operating system",
    description:
      "A connected workspace for commitments, priorities, projects and daily decision support.",
  },
  {
    name: "Obstrata",
    category: "Property operations",
    description:
      "Operational management for property portfolios, including meetings, reporting, compliance, utilities and tenant workflows.",
  },
  {
    name: "Ledgera",
    category: "Financial management",
    description:
      "A structured view of income, expenses, obligations, cash position and debt.",
  },
  {
    name: "Notara",
    category: "Knowledge and action management",
    description:
      "A workspace for capturing notes, transcripts, decisions, actions and planning context.",
  },
  {
    name: "Vaulta",
    category: "Health information management",
    description:
      "A private system for organising health information, records and ongoing care context.",
  },
];

export const principles: string[] = [
  "Solve meaningful operational problems.",
  "Build clear, connected systems.",
  "Support decisions with usable information.",
  "Design for disciplined execution.",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "technologies", label: "Technologies" },
  { id: "contact", label: "Contact" },
];

export const contactEmail = "info@vorexa.co.za";
export const contactPhone = "021 180 4244";
export const contactPhoneHref = "+27211804244";
export const contactAddress = "Office Suites, Okavango Road, Belami Ave, Cape Gate, Brackenfell, 7560";
