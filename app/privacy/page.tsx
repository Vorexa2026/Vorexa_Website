import type { Metadata } from "next";
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
        <a href={`mailto:${contactEmail}`} className="text-navy underline hover:text-blue">
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
        <a href={`mailto:${contactEmail}`} className="text-navy underline hover:text-blue">
          {contactEmail}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <div className="max-w-[65ch]">
          <h1 className="mb-3 font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-navy">
            Privacy Policy
          </h1>
          <p className="mb-2 text-[15px] text-muted">Last updated: June 2026</p>

          <p className="mb-10 mt-6 text-[18px] leading-relaxed text-charcoal">
            Vorexa (Pty) Ltd (&ldquo;Vorexa&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is
            committed to protecting your personal information in accordance with the Protection
            of Personal Information Act 4 of 2013 (POPIA).
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
                  {section.heading}
                </p>
                <div className="text-[17px] leading-relaxed text-charcoal">{section.body}</div>
              </div>
            ))}

            <div>
              <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
                Information officer
              </p>
              <p className="text-[17px] leading-relaxed text-charcoal">
                Mornay Walters,{" "}
                <a href={`mailto:${contactEmail}`} className="text-navy underline hover:text-blue">
                  {contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
