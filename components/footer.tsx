import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/content/products";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-6 px-5 py-8 sm:px-10">
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
              key={link.id}
              href={`#${link.id}`}
              className="text-[13px] text-[#A9B4C4] transition-colors duration-200 hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-[13px] text-[#7C8AA3]">© 2026 Vorexa. All rights reserved.</p>
      </div>
    </footer>
  );
}
