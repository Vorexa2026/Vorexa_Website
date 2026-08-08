import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import { SITE_URL } from "@/lib/site";
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

// NOTE: SITE_URL (lib/site.ts) currently falls back to a placeholder domain —
// update the SITE_URL env var once the production domain is confirmed (see
// HANDOVER.md). Nothing else needs to change; metadataBase and every other
// consumer read from that one constant.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Vorexa",
                url: SITE_URL,
                logo: `${SITE_URL}/brand/vorexa-symbol.png`,
              },
              {
                "@type": "WebSite",
                name: "Vorexa",
                url: SITE_URL,
              },
            ],
          }}
        />
        <a
          href="#main"
          className="absolute left-[-9999px] top-0 z-[100] bg-navy px-5 py-3 text-[14px] font-semibold text-white focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
