import type { Metadata } from "next";
import Image from "next/image";
import { PrimaryLink, TextLink } from "@/components/button";
import ProductCard from "@/components/product-card";
import SectionHeading from "@/components/section-heading";
import NumberedSteps from "@/components/numbered-steps";
import {
  products,
  whyVorexa,
  businessModel,
  trustPoints,
  futureGrowth,
} from "@/content/products";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Vorexa | Operational intelligence, built into systems.",
  description:
    "Vorexa designs focused operating systems that turn fragmented information and workflows into connected environments for action, control and better decisions. Vorexa Atlas and Vorexa Core are in production.",
};

export default function Home() {
  return (
    <>
      {/* 01 — Hero */}
      <section className="relative overflow-hidden bg-midnight" aria-labelledby="hero-heading">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, rgba(0,122,255,0.2), transparent 60%), radial-gradient(80% 70% at 85% 60%, rgba(0,229,255,0.12), transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-content flex-col items-center px-5 py-20 text-center sm:px-10 md:py-28 lg:py-32">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-7 bg-cyan" aria-hidden="true" />
            <p className="font-body text-[12px] font-semibold tracking-[0.2em] text-cyan">
              VOREXA TECHNOLOGY GROUP
            </p>
            <span className="h-px w-7 bg-cyan" aria-hidden="true" />
          </div>

          <Image
            src="/brand/vorexa-logo.png"
            alt="Vorexa"
            width={1200}
            height={336}
            priority
            className="mb-10 h-auto w-full max-w-[560px] object-contain sm:max-w-[680px]"
          />

          <h1 id="hero-heading" className="sr-only">
            Vorexa — Operational intelligence, built into systems.
          </h1>
          <p className="mb-4 max-w-[30ch] font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
            Operational intelligence, built into systems.
          </p>

          <p className="mb-10 max-w-[56ch] text-[18px] leading-relaxed text-coolgray sm:text-[20px]">
            Vorexa designs focused operating systems that turn fragmented information and
            workflows into connected environments for action, control and better decisions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <PrimaryLink href="/technologies">Explore platforms</PrimaryLink>
            <TextLink href="/about" light>
              About Vorexa
            </TextLink>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-content flex-wrap justify-center gap-6 px-5 py-5 sm:gap-12 sm:px-10">
            {["VOREXA", "ATLAS", "CORE", "SOUTH AFRICA"].map((m) => (
              <p key={m} className="font-body text-[11px] tracking-[0.2em] text-white/45">
                {m}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Production platforms */}
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

      {/* 03 — Why Vorexa */}
      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
          <SectionHeading
            eyebrow="Why Vorexa"
            heading="Fragmentation becomes a system. A system becomes clarity."
            variant="light"
          />

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {whyVorexa.map((step, i) => (
              <div key={step.title} className="relative border-t-2 border-blue pt-5">
                <p className="mb-2 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
                  0{i + 1}
                </p>
                <h3 className="mb-3 font-heading text-[20px] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-coolgray">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Product proof */}
      <section className="border-t border-white/10 bg-panel">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
          <SectionHeading
            eyebrow="Product proof"
            heading="Real platforms, in real operational use."
            intro="Atlas and Core are production software, not concepts. Here is what's actually true today."
            variant="light"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {products.map((product) => {
              const accent = product.theme === "atlas" ? "border-atlas-bronze" : "border-core-teal";
              const dot = product.theme === "atlas" ? "bg-atlas-gold" : "bg-core-mint";
              return (
                <div
                  key={product.slug}
                  className={`rounded-panel border border-white/10 border-t-4 bg-navy p-7 sm:p-8 ${accent}`}
                >
                  <Image
                    src={product.logo}
                    alt={`${product.name} symbol`}
                    width={400}
                    height={296}
                    className="mb-5 h-10 w-auto object-contain"
                  />
                  <h3 className="mb-4 font-heading text-[20px] font-semibold text-white">
                    {product.name}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {product.proof.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-coolgray">
                        <span className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${dot}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — How Vorexa builds */}
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

      {/* 06 — Trust */}
      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Trust" heading="Credible by default, not by claim." variant="light" />
            <TextLink href="/security" light>
              Security &amp; Trust
            </TextLink>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="border-t-2 border-cyan pt-5">
                <h3 className="mb-3 font-heading text-[18px] font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-coolgray">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Founder / credibility */}
      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-20">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
            <Image
              src="/brand/people/mornay-walters.jpg"
              alt="Mornay Walters, founder of Vorexa"
              width={200}
              height={266}
              className="w-[120px] flex-shrink-0 border border-white/10 object-cover sm:w-[140px]"
            />
            <div className="min-w-0">
              <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
                Founder-led
              </p>
              <p className="mb-4 max-w-[62ch] text-[18px] leading-relaxed text-white sm:text-[19px]">
                Vorexa is founder-operated by Mornay Walters, built from years of hands-on
                commercial property operations rather than a startup pitch deck.
              </p>
              <TextLink href="/about" light>
                Read the full story
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Future ecosystem */}
      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-20">
          <div className="rounded-panel border border-white/10 bg-white/[0.03] px-7 py-12 sm:px-12 md:py-16">
            <p className="mb-4 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
              What&rsquo;s next
            </p>
            <h2 className="mb-5 max-w-[26ch] font-heading text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
              {futureGrowth.heading}
            </h2>
            <p className="max-w-[62ch] text-[17px] leading-relaxed text-coolgray sm:text-[18px]">
              {futureGrowth.body}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
