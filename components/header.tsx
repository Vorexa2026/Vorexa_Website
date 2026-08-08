"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/products";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      firstLinkRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-offwhite/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-5 sm:px-10">
        <Link
          href="/"
          aria-label="Vorexa home"
          className="flex h-7 items-center gap-3"
          onClick={closeMenu}
        >
          <Image
            src="/brand/vorexa-symbol.png"
            alt=""
            width={26}
            height={20}
            className="h-6 w-auto object-contain"
            priority
          />
          <Image
            src="/brand/vorexa-wordmark.png"
            alt="Vorexa"
            width={140}
            height={20}
            className="h-[19px] w-auto object-contain"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
                isActive(link.href) ? "text-navy" : "text-muted hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-navy px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-blue"
          >
            Contact
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-border md:hidden"
        >
          <span
            className={`block h-[2px] w-5 bg-navy transition-transform duration-200 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-navy transition-transform duration-200 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex flex-col border-t border-border bg-offwhite px-5 pb-5 md:hidden"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              ref={i === 0 ? firstLinkRef : undefined}
              onClick={closeMenu}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="flex min-h-[56px] items-center border-b border-border font-heading text-[20px] font-semibold text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-4 flex min-h-[56px] items-center justify-center bg-navy text-[16px] font-semibold text-white"
          >
            Contact
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
