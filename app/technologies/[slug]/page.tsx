import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/json-ld";
import StatusPill from "@/components/status-pill";
import { SITE_URL } from "@/lib/site";
import { products, productSlugParams, type Product } from "@/content/products";

export const generateStaticParams = productSlugParams;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.whatItDoes,
    alternates: { canonical: `/technologies/${product.slug}` },
  };
}

const themeAccent: Record<Product["theme"], { text: string; border: string; dot: string }> = {
  atlas: { text: "text-atlas-gold", border: "border-atlas-bronze", dot: "bg-atlas-gold" },
  core: { text: "text-core-mint", border: "border-core-teal", dot: "bg-core-mint" },
};

function Label({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <p className={`mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] ${accent}`}>
      {children}
    </p>
  );
}

export default function TechnologyDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();
  const accent = themeAccent[product.theme];

  return (
    <section className="relative overflow-hidden bg-navy">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: product.name,
          description: product.whatItDoes,
          applicationCategory: product.category,
          url: product.url,
          publisher: { "@type": "Organization", name: "Vorexa", url: SITE_URL },
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(80% 60% at 85% 0%, rgba(0,122,255,0.14), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <Link
          href="/technologies"
          className="mb-10 inline-flex items-center gap-2 text-[14px] font-semibold text-white hover:text-cyan"
        >
          <span aria-hidden="true">&larr;</span> Back to Platforms
        </Link>

        <div className="flex flex-col gap-14 lg:flex-row lg:gap-20">
          <div className="min-w-0 max-w-[65ch] flex-1">
            <Image
              src={product.lockup}
              alt={product.name}
              width={1200}
              height={420}
              className="mb-6 h-[52px] w-auto object-contain sm:h-[64px]"
              priority
            />
            <p className={`mb-8 text-[15px] font-semibold uppercase tracking-[0.06em] ${accent.text}`}>
              {product.tagline}
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <StatusPill status={product.status} prefix="Status:" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-coolgray">
                {product.category}
              </span>
            </div>

            <div className="mb-10">
              <Label accent={accent.text}>What it is</Label>
              <p className="text-[18px] leading-relaxed text-white sm:text-[19px]">
                {product.whatItDoes}
              </p>
            </div>

            <div className={`mb-10 border-l-2 pl-6 ${accent.border}`}>
              <Label accent={accent.text}>The problem it solves</Label>
              <p className="text-[18px] leading-relaxed text-white sm:text-[19px]">
                {product.problem}
              </p>
            </div>

            <div className="mb-10">
              <Label accent={accent.text}>Built for</Label>
              <p className="text-[18px] leading-relaxed text-coolgray sm:text-[19px]">
                {product.builtFor}
              </p>
            </div>

            <div className="mb-10 border-t border-white/10 pt-8">
              <Label accent={accent.text}>Product philosophy</Label>
              <p className="text-[18px] leading-relaxed text-coolgray sm:text-[19px]">
                {product.philosophy}
              </p>
            </div>

            <div className="mb-10 rounded-panel border border-white/10 bg-panel/60 p-6">
              <Label accent={accent.text}>In production</Label>
              <ul className="flex flex-col gap-3">
                {product.proof.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-white">
                    <span
                      className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${accent.dot}`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-card bg-blue px-7 py-4 text-[18px] font-bold text-white transition-colors duration-200 hover:bg-cyan"
            >
              Open {product.name}
            </a>
          </div>

          <div className="lg:w-[320px] lg:flex-shrink-0">
            <Label accent={accent.text}>Major operational areas</Label>
            <ul className="flex flex-col gap-3 border-t border-white/10 pt-5">
              {product.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-snug text-white"
                >
                  <span
                    className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${accent.dot}`}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
