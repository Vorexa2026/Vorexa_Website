import Image from "next/image";
import Link from "next/link";
import StatusPill from "@/components/status-pill";
import { products } from "@/content/products";

export default function ProductStrip() {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <li key={product.slug}>
          <Link
            href={`/technologies/${product.slug}`}
            className="group flex items-start gap-3"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white">
              <Image
                src={product.logo}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </span>
            <span className="min-w-0">
              <span className="block text-[15px] font-semibold text-white group-hover:text-teal">
                {product.name}
              </span>
              <span className="mt-0.5 block text-[12px] uppercase tracking-[0.08em] text-teal">
                {product.category}
              </span>
              <span className="mt-2 block">
                <StatusPill status={product.status} />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
