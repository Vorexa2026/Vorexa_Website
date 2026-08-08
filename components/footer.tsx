import Image from "next/image";
import Link from "next/link";
import { legalLinks, navLinks } from "@/content/products";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto flex max-w-content flex-col gap-6 border-t border-white/10 px-5 py-8 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/vorexa-symbol.png"
              alt="Vorexa"
              width={28}
              height={22}
              className="h-7 w-auto object-contain"
            />
            <p className="font-body text-[12px] tracking-[0.08em] text-[#A9B4C4]">
              Intelligence. Systems. Decisions.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#A9B4C4] transition-colors duration-200 hover:text-teal"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-[13px] text-[#A9B4C4]">© 2026 Vorexa. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-[12px] text-[#A9B4C4]">Vorexa (Pty) Ltd</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] text-[#A9B4C4] transition-colors duration-200 hover:text-teal"
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
