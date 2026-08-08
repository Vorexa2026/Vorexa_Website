import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { book, howWeBuild } from "@/content/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vorexa is an independent, founder-operated technology group in Cape Town, building systems from real operational friction.",
  alternates: { canonical: "/about" },
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-7 bg-teal" aria-hidden="true" />
      <p className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-teal">
        {children}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(90% 70% at 85% 10%, rgba(20,121,255,0.14), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        {/* Intro */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-16 md:flex-row md:gap-20 md:pb-20">
          <div className="md:w-[34%] md:flex-shrink-0">
            <SectionHeading
              eyebrow="About Vorexa"
              heading="Built from operational reality, not a whiteboard."
              variant="light"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="mb-6 max-w-[62ch] text-[18px] leading-relaxed text-white sm:text-[19px]">
              Vorexa was founded to close a specific gap: the systems used to run complex
              operations are fragmented. Information lives in spreadsheets, messages, inboxes and
              memory. Decisions get made without the context that should inform them.
            </p>
            <p className="mb-8 max-w-[62ch] text-[18px] leading-relaxed text-[#A9B4C4] sm:text-[19px]">
              Vorexa&rsquo;s platforms are built by starting inside the operation itself,
              identifying where information breaks down, and designing a system that holds it
              together.
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                "Independent platform ecosystem",
                "Founder-operated, privately funded",
                "Built from real operational friction",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founder */}
        <div className="flex flex-col gap-10 border-b border-white/10 py-16 md:flex-row md:gap-20 md:py-20">
          <div className="md:w-[34%] md:flex-shrink-0">
            <Label>Founder</Label>
            <div className="mt-6 max-w-[260px]">
              <Image
                src="/brand/people/mornay-walters.jpg"
                alt="Mornay Walters, founder of Vorexa"
                width={720}
                height={956}
                className="w-full border border-white/10 object-cover"
              />
              <p className="mt-4 font-heading text-[20px] font-semibold text-white">
                Mornay Walters
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-[#A9B4C4]">
                Founder and sole operator · Cape Town, South Africa
              </p>
            </div>
          </div>
          <div className="min-w-0 flex-1 border-l-2 border-blue pl-8">
            <p className="mb-6 max-w-[62ch] text-[18px] leading-relaxed text-white sm:text-[19px]">
              Vorexa was not created from a business plan or a startup accelerator. It grew from
              years of working inside property operations, financial administration and family
              coordination, and repeatedly hitting the same problem: the available tools were
              either too generic, too complex, or simply did not exist.
            </p>
            <p className="max-w-[62ch] text-[18px] leading-relaxed text-[#A9B4C4] sm:text-[19px]">
              With a professional background in commercial property management, and direct
              experience across tenant operations, financial reporting, maintenance workflows,
              compliance and family administration, each Vorexa platform is built from practical
              operational friction rather than from market research.
            </p>
          </div>
        </div>

        {/* How we build */}
        <div className="flex flex-col gap-10 border-b border-white/10 py-16 md:flex-row md:gap-20 md:py-20">
          <div className="md:w-[34%] md:flex-shrink-0">
            <Label>How we build</Label>
            <p className="mt-6 max-w-[28ch] font-heading text-[22px] font-medium leading-snug text-white">
              No venture capital. No growth-at-all-costs pressure.
            </p>
          </div>
          <div className="min-w-0 flex-1">
            <ol className="flex flex-col">
              {howWeBuild.map((item, i) => (
                <li
                  key={item.title}
                  className="flex items-start gap-6 border-t border-white/10 py-6 first:border-t-0 first:pt-0"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue font-body text-[20px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-heading text-[19px] font-semibold leading-snug text-white sm:text-[21px]">
                      {item.title}
                    </span>
                    <span className="mt-2 block max-w-[54ch] text-[16px] leading-relaxed text-[#A9B4C4]">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Published work */}
        <div className="flex flex-col gap-10 pt-16 md:flex-row md:gap-20 md:pt-20">
          <div className="md:w-[34%] md:flex-shrink-0">
            <Label>Published work</Label>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <Image
                src={book.cover}
                alt={`Cover of ${book.title}`}
                width={296}
                height={445}
                className="w-[148px] flex-shrink-0 border border-white/10"
              />
              <div className="min-w-0">
                <h2 className="font-heading text-[24px] font-semibold text-white sm:text-[28px]">
                  {book.title}
                </h2>
                <p className="mt-1 text-[15px] font-semibold text-teal">{book.subtitle}</p>
                <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-[#A9B4C4]">
                  {book.description}
                </p>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[44px] items-center border-b border-white/35 text-[16px] font-semibold text-white transition-colors duration-200 hover:border-teal hover:text-teal"
                >
                  Read on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
