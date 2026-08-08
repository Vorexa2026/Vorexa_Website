import type { Metadata } from "next";
import { contactEmail } from "@/content/products";

export const metadata: Metadata = {
  title: "Terms of Use",
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
        Products referenced on this site are at varying stages of development. Descriptions
        reflect current intent and functionality and may change without notice. No product
        listed constitutes an offer of sale unless explicitly stated.
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
        <a href={`mailto:${contactEmail}`} className="text-navy underline hover:text-blue">
          {contactEmail}
        </a>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <div className="max-w-[65ch]">
          <h1 className="mb-3 font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-navy">
            Terms of Use
          </h1>
          <p className="mb-2 text-[15px] text-muted">Last updated: [date]</p>
          <div
            dangerouslySetInnerHTML={{
              __html: "<!-- TODO(launch): fill in the publication date above before going live. -->",
            }}
          />

          <p className="mb-10 mt-6 text-[18px] leading-relaxed text-charcoal">
            These terms govern use of the Vorexa website. By accessing this site, you agree to
            these terms.
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
          </div>
        </div>
      </div>
    </section>
  );
}
