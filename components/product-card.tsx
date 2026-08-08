import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/technologies/${product.slug}`}
      className="group flex flex-col border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-blue"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <Image
          src={product.logo}
          alt={`${product.name} logo`}
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
        <span className="mt-1 flex flex-shrink-0 items-center gap-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
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
