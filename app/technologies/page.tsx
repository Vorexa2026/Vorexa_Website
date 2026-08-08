import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import ProductCard from "@/components/product-card";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Vorexa develops focused platforms for operational management, financial clarity, information capture and personal decision support.",
};

export default function TechnologiesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <SectionHeading
          eyebrow="Technologies"
          heading="A connected technology portfolio."
          intro="Vorexa develops focused platforms for operational management, financial clarity, information capture and personal decision support."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <p className="mt-11 border-t border-border pt-6 text-[15px] text-muted">
          Each platform is being developed around a defined operational use case.
        </p>
      </div>
    </section>
  );
}
