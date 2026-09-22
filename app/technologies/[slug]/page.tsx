import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/json-ld";
import StatusPill from "@/components/status-pill";
import { SITE_URL } from "@/lib/site";
import { products, productSlugParams } from "@/content/products";

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

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
      {children}
    </p>
  );
}

export default function TechnologyDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

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
          background: "radial-gradient(80% 60% at 85% 0%, rgba(29,78,216,0.14), transparent 60%)",
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
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-white/[0.06] p-2.5">
                <Image
                  src={product.logo}
                  alt={`${product.name} symbol`}
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
                  {product.name}
                </h1>
                <p className="mt-1 text-[15px] font-semibold uppercase tracking-[0.06em] text-cyan">
                  {product.tagline}
                </p>
              </div>
            </div>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <StatusPill status={product.status} prefix="Status:" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-coolgray">
                {product.category}
              </span>
            </div>

            <div className="mb-10">
              <Label>What it is</Label>
              <p className="text-[18px] leading-relaxed text-white sm:text-[19px]">
                {product.whatItDoes}
              </p>
            </div>

            <div className="mb-10 border-l-2 border-cyan pl-6">
              <Label>The problem it solves</Label>
              <p className="text-[18px] leading-relaxed text-white sm:text-[19px]">
                {product.problem}
              </p>
            </div>

            <div className="mb-10">
              <Label>Built for</Label>
              <p className="text-[18px] leading-relaxed text-[#A9B4C4] sm:text-[19px]">
                {product.builtFor}
              </p>
            </div>

            <div className="mb-10 border-t border-white/10 pt-8">
              <Label>Product philosophy</Label>
              <p className="text-[18px] leading-relaxed text-[#A9B4C4] sm:text-[19px]">
                {product.philosophy}
              </p>
            </div>

            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center bg-blue px-7 py-4 text-[18px] font-bold text-white transition-colors duration-200 hover:bg-electric"
            >
              Open {product.name}
            </a>
          </div>

          <div className="lg:w-[320px] lg:flex-shrink-0">
            <Label>Major operational areas</Label>
            <ul className="flex flex-col gap-3 border-t border-white/10 pt-5">
              {product.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-snug text-white"
                >
                  <span
                    className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan"
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
