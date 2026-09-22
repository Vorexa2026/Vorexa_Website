import Image from "next/image";
import Link from "next/link";
import StatusPill from "@/components/status-pill";
import type { Product } from "@/content/products";

// Atlas reads sharp, architectural and enterprise; Core reads calmer and
// personal. Same panel, same data model, different geometry and accent.
const themeStyles: Record<Product["theme"], { card: string; logo: string; accent: string }> = {
  atlas: {
    card: "border-t-4 border-t-blue",
    logo: "rounded-lg bg-white/[0.06]",
    accent: "group-hover:border-t-electric",
  },
  core: {
    card: "rounded-3xl border-t-4 border-t-cyan",
    logo: "rounded-full bg-white/[0.06]",
    accent: "group-hover:border-t-cyan",
  },
};

export default function ProductCard({ product }: { product: Product }) {
  const theme = themeStyles[product.theme];

  return (
    <div
      className={`group flex flex-col border border-white/10 bg-white/[0.04] p-7 transition-all duration-200 hover:-translate-y-1 sm:p-8 ${theme.card} ${theme.accent}`}
    >
      <div className="mb-6 flex items-start justify-between gap-3">
        <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center p-2 ${theme.logo}`}>
          <Image
            src={product.logo}
            alt={`${product.name} symbol`}
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </div>
        <StatusPill status={product.status} />
      </div>

      <Link href={`/technologies/${product.slug}`} className="group/title">
        <h3 className="font-heading text-[24px] font-semibold text-white group-hover/title:text-cyan sm:text-[26px]">
          {product.name}
        </h3>
      </Link>
      <p className="mb-3 mt-1 text-[13px] font-semibold uppercase tracking-[0.06em] text-cyan">
        {product.category}
      </p>
      <p className="mb-5 text-[15px] font-semibold leading-snug text-white">{product.tagline}</p>
      <p className="mb-6 text-[15px] leading-relaxed text-coolgray">{product.description}</p>

      <ul className="mb-7 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {product.capabilities.slice(0, 6).map((item) => (
          <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-[#A9B4C4]">
            <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-cyan" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center bg-blue px-6 py-3 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-electric"
        >
          Open {product.name}
        </a>
        <Link
          href={`/technologies/${product.slug}`}
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-white transition-colors duration-200 hover:text-cyan"
        >
          Learn more
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
