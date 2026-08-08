import type { Product } from "@/content/products";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="flex flex-col border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-blue">
      <span className="mb-4 font-body text-[12px] font-semibold tracking-[0.14em] text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mb-2 font-heading text-[22px] font-semibold text-navy">{product.name}</h3>
      <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-navy">
        {product.category}
      </p>
      <p className="text-[15px] leading-relaxed text-muted">{product.description}</p>
    </article>
  );
}
