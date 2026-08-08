import Image from "next/image";
import type { Product } from "@/content/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-blue">
      <Image
        src={product.logo}
        alt={`${product.name} logo`}
        width={40}
        height={40}
        className="mb-5 h-10 w-10 object-contain"
      />
      <h3 className="mb-2 font-heading text-[22px] font-semibold text-navy">{product.name}</h3>
      <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-navy">
        {product.category}
      </p>
      <p className="text-[15px] leading-relaxed text-muted">{product.description}</p>
    </article>
  );
}
