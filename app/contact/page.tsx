import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import { contactAddress, contactEmail, contactPhone, contactPhoneHref } from "@/content/products";

export const metadata: Metadata = {
  title: "Contact",
  description: "For product, partnership or business enquiries, contact Vorexa directly.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(90% 80% at 20% 30%, rgba(0,182,166,0.14), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <div className="flex flex-col gap-14 md:flex-row md:gap-20">
          <div className="min-w-0 md:w-[38%] md:flex-shrink-0">
            <SectionHeading
              eyebrow="Contact Vorexa"
              heading="Start a focused conversation."
              intro="For product, partnership or business enquiries, use the form or contact us directly."
              variant="light"
            />

            <div className="mt-9 space-y-2 font-body text-[14px] leading-relaxed text-white/70">
              <p>
                <a href={`mailto:${contactEmail}`} className="hover:text-teal">
                  {contactEmail}
                </a>
              </p>
              <p>
                <a href={`tel:${contactPhoneHref}`} className="hover:text-teal">
                  {contactPhone}
                </a>
              </p>
              <p className="max-w-[36ch]">{contactAddress}</p>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
