import Link from "next/link";
import type { ReactNode } from "react";

export function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[44px] items-center justify-center bg-blue px-7 py-4 text-[18px] font-bold text-white transition-colors duration-200 hover:bg-navy"
    >
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[44px] items-center border-b text-[16px] font-semibold transition-colors duration-200 ${
        light
          ? "border-white/35 text-white hover:border-cyan hover:text-cyan"
          : "border-border text-navy hover:border-navy"
      }`}
    >
      {children}
    </Link>
  );
}
