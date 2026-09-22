import type { Metadata } from "next";
import Image from "next/image";
import { PrimaryLink, TextLink } from "@/components/button";
import ProductCard from "@/components/product-card";
import SectionHeading from "@/components/section-heading";
import NumberedSteps from "@/components/numbered-steps";
import { products, businessModel, capabilityGroups, futureGrowth } from "@/content/products";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Vorexa | Intelligence. Systems. Decisions.",
  description:
    "Vorexa is a South African technology company that designs and builds focused operating systems from real operational problems. Vorexa Atlas and Vorexa Core are in production.",
};

/** Restrained "system architecture" panel — structured lines and data
 * fragments rather than a literal dashboard mock or stock imagery. */
function ArchitecturePanel() {
  return (
    <div
      aria-hidden="true"
      className="relative hidden aspect-square w-full max-w-[380px] flex-shrink-0 items-center justify-center md:flex"
    >
      <div
        className="absolute inset-0 rounded-full opacity-70"
        style={{
          background: "radial-gradient(closest-side, rgba(29,78,216,0.18), transparent 75%)",
        }}
      />
      <div
        className="absolute inset-6 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(closest-side, black 60%, transparent 100%)",
        }}
      />

      <div className="absolute left-2 top-6 w-[62%] border border-white/15 bg-white/[0.03] p-3 backdrop-blur-[1px]">
        <div className="mb-2 h-[3px] w-1/2 bg-blue" />
        <div className="flex flex-col gap-1.5">
          <div className="h-1 w-full bg-white/15" />
          <div className="h-1 w-4/5 bg-white/15" />
          <div className="h-1 w-3/5 bg-white/10" />
        </div>
      </div>

      <div className="absolute bottom-8 right-1 w-[54%] border border-white/15 bg-white/[0.03] p-3">
        <div className="mb-2 h-[3px] w-2/5 bg-cyan" />
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-3 border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>

      <Image
        src="/brand/vorexa-symbol.png"
        alt=""
        width={132}
        height={100}
        className="relative z-10 w-[34%] drop-shadow-[0_0_24px_rgba(0,229,255,0.25)]"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy" aria-labelledby="hero-heading">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 78% 42%, rgba(29,78,216,0.22), transparent 60%), radial-gradient(80% 70% at 82% 55%, rgba(0,229,255,0.14), transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-content flex-col items-center gap-12 px-5 py-16 sm:px-10 md:flex-row md:gap-16 md:py-28 lg:py-36">
          <div className="min-w-0 flex-1">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-cyan" aria-hidden="true" />
              <p className="font-body text-[12px] font-semibold tracking-[0.2em] text-cyan">
                VOREXA TECHNOLOGY GROUP
              </p>
            </div>

            <h1
              id="hero-heading"
              className="mb-7 max-w-[16ch] font-heading text-[clamp(2.75rem,7.4vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white"
            >
              Intelligence<span className="text-blue">.</span> Systems
              <span className="text-cyan">.</span> Decisions
              <span className="text-blue">.</span>
            </h1>

            <p className="mb-10 max-w-[48ch] text-[18px] leading-relaxed text-[#A9B4C4] sm:text-[20px]">
              We design and build focused technology systems that turn operational complexity
              into structured, actionable environments.
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <PrimaryLink href="/technologies">Explore our platforms</PrimaryLink>
              <TextLink href="/about" light>
                About Vorexa
              </TextLink>
            </div>
          </div>

          <ArchitecturePanel />
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-content flex-wrap gap-6 px-5 py-5 sm:gap-12 sm:px-10">
            {["VOREXA", "TECHNOLOGY GROUP", "SOUTH AFRICA"].map((m) => (
              <p key={m} className="font-body text-[11px] tracking-[0.2em] text-white/55">
                {m}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Active platforms */}
      <section className="relative overflow-hidden border-t border-white/10 bg-navy">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "radial-gradient(90% 70% at 15% 10%, rgba(0,229,255,0.1), transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Production platforms"
              heading="Built for real operations."
              intro="Two operating systems developed from real-world operational requirements."
              variant="light"
            />
            <TextLink href="/technologies" light>
              View all platforms
            </TextLink>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Business model */}
      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
          <div className="flex flex-col gap-10 md:flex-row md:gap-20">
            <div className="md:w-[34%] md:flex-shrink-0">
              <SectionHeading
                eyebrow="How Vorexa builds"
                heading="From operational friction to production systems."
                variant="light"
              />
            </div>
            <div className="min-w-0 flex-1">
              <NumberedSteps steps={businessModel} />
            </div>
          </div>
        </div>
      </section>

      {/* Capability */}
      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
          <SectionHeading eyebrow="Capability" heading="What we build around." variant="light" />

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="border-t-2 border-blue pt-5">
                <h3 className="mb-4 font-heading text-[17px] font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[14px] leading-snug text-[#A9B4C4]"
                    >
                      <span
                        className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-cyan"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future growth */}
      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-20">
          <div className="border border-white/10 bg-white/[0.03] px-7 py-12 sm:px-12 md:py-16">
            <p className="mb-4 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
              What&rsquo;s next
            </p>
            <h2 className="mb-5 max-w-[26ch] font-heading text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
              {futureGrowth.heading}
            </h2>
            <p className="max-w-[62ch] text-[17px] leading-relaxed text-[#A9B4C4] sm:text-[18px]">
              {futureGrowth.body}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
