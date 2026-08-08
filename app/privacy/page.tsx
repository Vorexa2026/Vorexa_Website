import type { Metadata } from "next";
import { LegalPage, LegalSection, legalLinkClass } from "@/components/legal-page";
import { contactEmail } from "@/content/products";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Data & Privacy",
  description: "How Vorexa collects, uses and protects personal information, in accordance with POPIA.",
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Information we collect",
    body: (
      <p>
        When you contact us through this website, we collect the information you provide
        directly: your name, email address, company name and the contents of your message.
      </p>
    ),
  },
  {
    heading: "How we use your information",
    body: (
      <p>
        We use this information solely to respond to your enquiry and to maintain a record of
        business correspondence. We do not sell, rent or share your information with third
        parties for marketing purposes.
      </p>
    ),
  },
  {
    heading: "Data retention",
    body: (
      <p>
        We retain enquiry records for as long as reasonably necessary to fulfil the purpose for
        which they were collected, or as required by law.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        Under POPIA, you have the right to access, correct or request deletion of your personal
        information held by us. To exercise these rights, contact us at{" "}
        <a href={`mailto:${contactEmail}`} className={legalLinkClass}>
          {contactEmail}
        </a>
        .
      </p>
    ),
  },
  {
    heading: "Cookies",
    body: (
      <p>
        This website does not currently use cookies for analytics or tracking, beyond what is
        strictly necessary for the site to function.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about this policy can be directed to{" "}
        <a href={`mailto:${contactEmail}`} className={legalLinkClass}>
          {contactEmail}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="June 2026"
      intro={
        <p>
          Vorexa (Pty) Ltd (&ldquo;Vorexa&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is
          committed to protecting your personal information in accordance with the Protection of
          Personal Information Act 4 of 2013 (POPIA).
        </p>
      }
    >
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <LegalSection key={section.heading} heading={section.heading}>
            {section.body}
          </LegalSection>
        ))}

        <LegalSection heading="Information officer">
          <p>
            Mornay Walters,{" "}
            <a href={`mailto:${contactEmail}`} className={legalLinkClass}>
              {contactEmail}
            </a>
          </p>
        </LegalSection>
      </div>
    </LegalPage>
  );
}
