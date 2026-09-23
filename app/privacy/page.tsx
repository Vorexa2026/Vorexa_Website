import type { Metadata } from "next";
import { LegalPage, LegalSection, legalLinkClass } from "@/components/legal-page";
import { contactAddress, contactEmail } from "@/content/products";

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
    heading: "Analytics and performance telemetry",
    body: (
      <p>
        This website uses Vercel Analytics and Vercel Speed Insights to understand aggregate site
        usage and page performance. Neither sets tracking cookies or builds an individual profile
        of you, and neither is used for advertising. Beyond this, the site does not use cookies
        for tracking.
      </p>
    ),
  },
  {
    heading: "Cross-border processing",
    body: (
      <p>
        Contact form submissions are processed using Resend, and site analytics are processed
        using Vercel; both are hosting/infrastructure operators that may process data outside
        South Africa in the course of providing their service. Data is not sold or shared with
        any other third party.
      </p>
    ),
  },
  {
    heading: "Access to information (PAIA)",
    body: (
      <p>
        Requests for access to information held by Vorexa under the Promotion of Access to
        Information Act 2 of 2000 (PAIA) can be directed to the Information Officer below.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <>
        <p>
          Questions about this policy can be directed to{" "}
          <a href={`mailto:${contactEmail}`} className={legalLinkClass}>
            {contactEmail}
          </a>
          .
        </p>
        <p className="mt-3">Vorexa (Pty) Ltd, {contactAddress}.</p>
      </>
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
