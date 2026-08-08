import type { Metadata } from "next";
import { LegalPage, LegalSection, legalLinkClass } from "@/components/legal-page";
import { contactEmail } from "@/content/products";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service",
  description: "The terms governing use of the Vorexa website.",
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Content",
    body: (
      <p>
        All content on this site, including text, graphics, logos and product names, is the
        property of Vorexa (Pty) Ltd unless otherwise stated, and may not be reproduced without
        written permission.
      </p>
    ),
  },
  {
    heading: "Product status",
    body: (
      <p>
        Products referenced on this site are at varying stages of availability, and each product
        page states its current status. Descriptions reflect current intent and functionality and
        may change without notice. No product listed constitutes an offer of sale unless
        explicitly stated.
      </p>
    ),
  },
  {
    heading: "No warranty",
    body: (
      <p>
        This website and its content are provided &ldquo;as is&rdquo; without warranties of any
        kind, express or implied.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        Vorexa (Pty) Ltd shall not be liable for any indirect, incidental or consequential
        damages arising from use of this website.
      </p>
    ),
  },
  {
    heading: "Governing law",
    body: <p>These terms are governed by the laws of the Republic of South Africa.</p>,
  },
  {
    heading: "Contact",
    body: (
      <p>
        <a href={`mailto:${contactEmail}`} className={legalLinkClass}>
          {contactEmail}
        </a>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="June 2026"
      intro={
        <p>
          These terms govern use of the Vorexa website. By accessing this site, you agree to these
          terms.
        </p>
      }
    >
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <LegalSection key={section.heading} heading={section.heading}>
            {section.body}
          </LegalSection>
        ))}
      </div>
    </LegalPage>
  );
}
