import type { Metadata } from "next";
import { LegalPage, LegalSection, legalLinkClass } from "@/components/legal-page";
import { contactEmail } from "@/content/products";

export const metadata: Metadata = {
  alternates: { canonical: "/security" },
  title: "Security & Trust",
  description:
    "Vorexa's verified security, hosting and privacy-by-design approach across the corporate website and production platforms.",
};

export default function SecurityPage() {
  return (
    <LegalPage
      title="Security & Trust"
      lastUpdated="September 2026"
      intro={
        <p>
          This page describes controls that are actually in place today. Vorexa does not publish
          unverified security, compliance or AI claims — where a control is not confirmed, it is
          left off this page rather than implied.
        </p>
      }
    >
      <div className="flex flex-col gap-10">
        <LegalSection heading="Hosting">
          <p>
            This website is hosted on Vercel&rsquo;s global edge network and served exclusively over
            HTTPS. No page on vorexa.co.za is served over an unencrypted connection.
          </p>
        </LegalSection>

        <LegalSection heading="Analytics and telemetry">
          <p>
            Vorexa uses Vercel Analytics and Vercel Speed Insights to understand site usage and
            performance. Neither sets tracking cookies. No third-party advertising or behavioural
            tracking scripts run on this website.
          </p>
        </LegalSection>

        <LegalSection heading="Contact form processing">
          <p>
            Enquiries submitted through the{" "}
            <a href="/contact" className={legalLinkClass}>
              contact form
            </a>{" "}
            are sent using Resend to Vorexa&rsquo;s own inbox. Form contents are not shared with any
            third party beyond that email delivery step.
          </p>
        </LegalSection>

        <LegalSection heading="Platform access model">
          <p>
            Vorexa Atlas and Vorexa Core are private, access-controlled production platforms.
            Neither offers open public account creation from this website — access is granted
            directly by Vorexa.
          </p>
        </LegalSection>

        <LegalSection heading="Privacy by design">
          <p>
            Vorexa collects the minimum information needed to respond to an enquiry or operate a
            platform, does not sell personal information, and does not use it for third-party
            marketing. Full detail is in the{" "}
            <a href="/privacy" className={legalLinkClass}>
              Privacy Policy
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection heading="Reporting a security concern">
          <p>
            If you believe you have found a security issue affecting Vorexa, its website or its
            platforms, report it to{" "}
            <a href={`mailto:${contactEmail}`} className={legalLinkClass}>
              {contactEmail}
            </a>
            . Please include enough detail to reproduce the issue; Vorexa will acknowledge
            genuine reports directly.
          </p>
        </LegalSection>
      </div>
    </LegalPage>
  );
}
