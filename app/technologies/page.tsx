import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import ProductCard from "@/components/product-card";
import { products } from "@/content/products";

export const metadata: Metadata = {
  alternates: { canonical: "/technologies" },
  title: "Platforms",
  description:
    "Vorexa Atlas and Vorexa Core are Vorexa's production platforms: a property operating system and a personal operating system, each built from real operational workflows.",
};

export default function TechnologiesPage() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(90% 70% at 15% 10%, rgba(0,229,255,0.12), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <SectionHeading
          eyebrow="Platforms"
          heading="Technology built around operations."
          intro="Vorexa develops focused operating systems designed around real workflows rather than generic software categories."
          variant="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <p className="mt-11 border-t border-white/10 pt-6 text-[15px] text-[#A9B4C4]">
          Each platform is built from a specific operational problem, and is developed and
          operated independently within one shared Vorexa product standard.
        </p>
      </div>
    </section>
  );
}
