import Image from "next/image";
import Link from "next/link";
import StatusPill from "@/components/status-pill";
import type { Product } from "@/content/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/technologies/${product.slug}`}
      className="group flex flex-col border border-white/10 border-t-4 border-t-blue bg-white/[0.04] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-t-teal"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
          <Image
            src={product.logo}
            alt={`${product.name} logo`}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </div>
        <span className="mt-1">
          <StatusPill status={product.status} />
        </span>
      </div>

      <h3 className="mb-2 font-heading text-[22px] font-semibold text-white">{product.name}</h3>
      <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-teal">
        {product.category}
      </p>
      <p className="mb-5 text-[15px] leading-relaxed text-[#A9B4C4]">{product.description}</p>

      <p className="mb-5 border-l-2 border-white/15 pl-4 text-[14px] leading-relaxed text-white">
        {product.solves}
      </p>

      <span className="mt-auto inline-flex items-center gap-2 text-[14px] font-semibold text-white group-hover:text-teal">
        Learn more
        <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
