import Image from "next/image";
import Link from "next/link";
import { legalLinks, navLinks, products } from "@/content/products";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto flex max-w-content flex-col gap-8 border-t border-white/10 px-5 py-10 sm:px-10">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/vorexa-icon.png"
              alt="Vorexa"
              width={400}
              height={296}
              className="h-7 w-auto object-contain"
            />
            <p className="font-body text-[12px] tracking-[0.08em] text-coolgray">
              Intelligence. Systems. Decisions.
            </p>
          </div>

          <div>
            <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-coolgray">
              Platforms
            </p>
            <nav aria-label="Platforms" className="flex flex-col gap-2">
              {products.map((product) => (
                <a
                  key={product.slug}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-coolgray transition-colors duration-200 hover:text-cyan"
                >
                  {product.name}
                </a>
              ))}
            </nav>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-coolgray transition-colors duration-200 hover:text-cyan"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-[12px] text-coolgray">Vorexa (Pty) Ltd</p>
            <p className="text-[12px] text-coolgray">Intelligence. Systems. Decisions.</p>
            <p className="text-[12px] text-coolgray">© 2026 Vorexa. All rights reserved.</p>
          </div>
          <nav aria-label="Legal" className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] text-coolgray transition-colors duration-200 hover:text-cyan"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
