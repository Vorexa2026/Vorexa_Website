import type { Metadata } from "next";
import { LegalPage, LegalSection, legalLinkClass } from "@/components/legal-page";
import { contactAddress, contactEmail, contactPhone, contactPhoneHref } from "@/content/products";

export const metadata: Metadata = {
  alternates: { canonical: "/legal-notice" },
  title: "Legal Notice",
  description: "Company information and legal details for Vorexa (Pty) Ltd.",
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-t border-white/10 py-5 sm:flex-row sm:gap-8">
      <p className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan sm:w-[220px] sm:flex-shrink-0">
        {label}
      </p>
      <div className="text-[17px] leading-relaxed text-white">{children}</div>
    </div>
  );
}

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Legal Notice"
      lastUpdated="June 2026"
      intro={
        <p>
          Company information for the operator of this website, published in the interests of
          transparency.
        </p>
      }
    >
      <div className="flex flex-col">
        <Row label="Company">Vorexa (Pty) Ltd</Row>
        <Row label="Legal status">Private company, registered and operating in South Africa</Row>
        <Row label="Founder">Mornay Walters</Row>
        <Row label="Registered address">{contactAddress}</Row>
        <Row label="Country">South Africa</Row>
        <Row label="Email">
          <a href={`mailto:${contactEmail}`} className={legalLinkClass}>
            {contactEmail}
          </a>
        </Row>
        <Row label="Telephone">
          <a href={`tel:${contactPhoneHref}`} className={legalLinkClass}>
            {contactPhone}
          </a>
        </Row>
      </div>

      <div className="mt-14 flex flex-col gap-10 border-t border-white/10 pt-12">
        <LegalSection heading="Responsibility for content">
          <p>
            Vorexa (Pty) Ltd is responsible for the content published on this website. Content is
            provided for general information about the company and its platforms, and does not
            constitute professional, financial, legal or medical advice.
          </p>
        </LegalSection>

        <LegalSection heading="Intellectual property">
          <p>
            All content on this site, including text, graphics, logos and the product names
            Vorexa Atlas and Vorexa Core, is the property of Vorexa (Pty) Ltd unless otherwise
            stated, and may not be reproduced without written permission.
          </p>
        </LegalSection>

        <LegalSection heading="External links">
          <p>
            This website may link to third-party sites. Vorexa has no control over their content
            and accepts no responsibility for it.
          </p>
        </LegalSection>

        <LegalSection heading="Related terms">
          <p>
            Use of this website is also governed by our{" "}
            <a href="/terms" className={legalLinkClass}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className={legalLinkClass}>
              Data &amp; Privacy
            </a>{" "}
            notice.
          </p>
        </LegalSection>
      </div>
    </LegalPage>
  );
}
