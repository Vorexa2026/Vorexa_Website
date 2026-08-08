import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/technologies/${product.slug}`}
      className="group flex flex-col border-t-4 border-blue bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-t-teal"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: "#F1F6FF" }}
        >
          <Image
            src={product.logo}
            alt={`${product.name} logo`}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </div>
        <span
          className="mt-1 flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-navy"
          style={{ background: "#E7F7F5" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
          {product.status}
        </span>
      </div>
      <h3 className="mb-2 font-heading text-[22px] font-semibold text-navy">{product.name}</h3>
      <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-navy">
        {product.category}
      </p>
      <p className="mb-5 text-[15px] leading-relaxed text-muted">{product.description}</p>
      <span className="mt-auto inline-flex items-center gap-2 text-[14px] font-semibold text-navy group-hover:text-blue">
        Learn more
        <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
