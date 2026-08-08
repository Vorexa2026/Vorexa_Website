import type { Metadata } from "next";
import { contactAddress, contactEmail, contactPhone, contactPhoneHref } from "@/content/products";

export const metadata: Metadata = {
  alternates: { canonical: "/legal-notice" },
  title: "Legal Notice",
  description: "Company information and legal details for Vorexa (Pty) Ltd.",
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-t border-white/10 py-5 sm:flex-row sm:gap-8">
      <p className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-teal sm:w-[220px] sm:flex-shrink-0">
        {label}
      </p>
      <div className="text-[17px] leading-relaxed text-white">{children}</div>
    </div>
  );
}

export default function LegalNoticePage() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(80% 60% at 85% 0%, rgba(20,121,255,0.12), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <div className="max-w-[70ch]">
          <h1 className="mb-3 font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
            Legal Notice
          </h1>
          <p className="mb-10 text-[15px] text-[#A9B4C4]">Last updated: June 2026</p>

          <p className="mb-12 text-[18px] leading-relaxed text-[#A9B4C4]">
            Company information for the operator of this website, published in the interests of
            transparency.
          </p>

          <div className="flex flex-col">
            <Row label="Company">Vorexa (Pty) Ltd</Row>
            <Row label="Founder">Mornay Walters</Row>
            <Row label="Registered address">{contactAddress}</Row>
            <Row label="Country">South Africa</Row>
            <Row label="Email">
              <a
                href={`mailto:${contactEmail}`}
                className="underline underline-offset-4 hover:text-teal"
              >
                {contactEmail}
              </a>
            </Row>
            <Row label="Telephone">
              <a
                href={`tel:${contactPhoneHref}`}
                className="underline underline-offset-4 hover:text-teal"
              >
                {contactPhone}
              </a>
            </Row>
          </div>

          <div className="mt-14 flex flex-col gap-10 border-t border-white/10 pt-12">
            <div>
              <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-teal">
                Responsibility for content
              </p>
              <p className="text-[17px] leading-relaxed text-[#A9B4C4]">
                Vorexa (Pty) Ltd is responsible for the content published on this website. Content
                is provided for general information about the company and its platforms, and does
                not constitute professional, financial, legal or medical advice.
              </p>
            </div>

            <div>
              <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-teal">
                Intellectual property
              </p>
              <p className="text-[17px] leading-relaxed text-[#A9B4C4]">
                All content on this site, including text, graphics, logos and the product names
                Notara, Obstrata, Ledgera and Vaulta, is the property of Vorexa (Pty) Ltd unless
                otherwise stated, and may not be reproduced without written permission.
              </p>
            </div>

            <div>
              <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-teal">
                External links
              </p>
              <p className="text-[17px] leading-relaxed text-[#A9B4C4]">
                This website may link to third-party sites. Vorexa has no control over their
                content and accepts no responsibility for it.
              </p>
            </div>

            <div>
              <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-teal">
                Related terms
              </p>
              <p className="text-[17px] leading-relaxed text-[#A9B4C4]">
                Use of this website is also governed by our{" "}
                <a href="/terms" className="text-white underline underline-offset-4 hover:text-teal">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-white underline underline-offset-4 hover:text-teal"
                >
                  Data &amp; Privacy
                </a>{" "}
                notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
