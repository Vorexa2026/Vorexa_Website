import Image from "next/image";
import Link from "next/link";
import { products } from "@/content/products";

export default function ProductStrip() {
  return (
    <ul className="flex flex-wrap gap-x-10 gap-y-6">
      {products.map((product) => (
        <li key={product.slug}>
          <Link
            href={`/technologies/${product.slug}`}
            className="group flex items-center gap-3"
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
            <span>
              <span className="block text-[15px] font-semibold text-white group-hover:text-teal">
                {product.name}
              </span>
              <span className="block text-[12px] uppercase tracking-[0.08em] text-teal">
                {product.category}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
