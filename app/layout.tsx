import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Vorexa | Intelligence. Systems. Decisions.";
const description =
  "Vorexa builds focused technology systems for clearer operations, connected information and better decisions.";

// NOTE: metadataBase intentionally left unset — the production domain has not
// been confirmed yet (see HANDOVER.md). Set it once the domain is final so
// Open Graph / Twitter image URLs resolve to absolute paths.
export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Vorexa",
  },
  description,
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title,
    description,
    images: ["/brand/vorexa-og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/vorexa-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} overflow-x-hidden bg-offwhite font-body text-charcoal antialiased`}
      >
        <a
          href="#main"
          className="absolute left-[-9999px] top-0 z-[100] bg-navy px-5 py-3 text-[14px] font-semibold text-white focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
