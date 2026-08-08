import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import ProductCard from "@/components/product-card";
import { products } from "@/content/products";

export const metadata: Metadata = {
  alternates: { canonical: "/technologies" },
  title: "Technologies",
  description:
    "Four platforms built from real operational pressure: meetings and knowledge, property operations, financial administration and family health coordination.",
};

export default function TechnologiesPage() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(90% 70% at 15% 10%, rgba(0,182,166,0.14), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <SectionHeading
          eyebrow="Technologies"
          heading="Four platforms. One operating standard."
          intro="A focused ecosystem built from real operational pressure: meetings and knowledge, property operations, financial administration and family health coordination."
          variant="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <p className="mt-11 border-t border-white/10 pt-6 text-[15px] text-[#A9B4C4]">
          Each platform is built from a specific operational problem, and is developed and
          operated independently.
        </p>
      </div>
    </section>
  );
}
