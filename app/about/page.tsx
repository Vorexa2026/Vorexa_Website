import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import { howWeWork } from "@/content/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vorexa was founded to close a specific gap: the systems used to run complex operations are fragmented.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-offwhite">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
          <div className="flex flex-col gap-10 md:flex-row md:gap-20">
            <div className="md:w-[34%] md:flex-shrink-0">
              <SectionHeading
                eyebrow="About Vorexa"
                heading="Built from operational reality, not a whiteboard."
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-6 max-w-[62ch] text-[18px] leading-relaxed text-charcoal sm:text-[19px]">
                Vorexa was founded to close a specific gap: the systems used to run complex
                operations are fragmented. Information lives in spreadsheets, messages, inboxes
                and memory. Decisions get made without the context that should inform them.
              </p>
              <p className="max-w-[62ch] text-[18px] leading-relaxed text-muted sm:text-[19px]">
                Vorexa&rsquo;s platforms are built by starting inside the operation itself,
                identifying where information breaks down, and designing a system that holds it
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
          <div className="flex flex-col gap-10 md:flex-row md:gap-20">
            <div className="md:w-[34%] md:flex-shrink-0">
              <p className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
                Founder
              </p>
            </div>
            <div className="min-w-0 flex-1">
              <p className="max-w-[62ch] text-[18px] leading-relaxed text-charcoal sm:text-[19px]">
                Vorexa was founded by Mornay Walters, who leads the group&rsquo;s product
                direction. His background is in operational management within complex, multi
                site environments, where the gap between available information and usable
                information is a daily constraint. Vorexa&rsquo;s product portfolio is shaped
                directly by that experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
          <div className="flex flex-col gap-10 md:flex-row md:gap-20">
            <div className="md:w-[34%] md:flex-shrink-0">
              <p className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
                How we work
              </p>
            </div>
            <div className="min-w-0 flex-1">
              <ol className="flex flex-col">
                {howWeWork.map((text, i) => (
                  <li
                    key={text}
                    className="flex items-baseline gap-6 border-t border-border py-5 first:border-t-0"
                  >
                    <span className="flex-shrink-0 font-body text-[13px] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-[19px] font-medium leading-snug text-navy sm:text-[22px]">
                      {text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
