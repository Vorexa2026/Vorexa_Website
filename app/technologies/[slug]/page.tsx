import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/content/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.whatItDoes,
  };
}

export default function TechnologyDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(80% 60% at 85% 0%, rgba(20,121,255,0.14), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <Link
          href="/technologies"
          className="mb-10 inline-flex items-center gap-2 text-[14px] font-semibold text-white hover:text-teal"
        >
          <span aria-hidden="true">&larr;</span> Back to Technologies
        </Link>

        <div className="max-w-[65ch]">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white">
              <Image
                src={product.logo}
                alt={`${product.name} logo`}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            </div>
            <div>
              <h1 className="font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
                {product.name}
              </h1>
              <p className="mt-1 text-[15px] font-semibold uppercase tracking-[0.06em] text-teal">
                {product.category}
              </p>
            </div>
          </div>

          <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-white/5 px-4 py-2 font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
            Status: {product.status}
          </div>

          <div className="mb-10">
            <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-teal">
              What it does
            </p>
            <p className="text-[18px] leading-relaxed text-white sm:text-[19px]">
              {product.whatItDoes}
            </p>
          </div>

          <div>
            <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-teal">
              Built for
            </p>
            <p className="text-[18px] leading-relaxed text-[#A9B4C4] sm:text-[19px]">
              {product.builtFor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
