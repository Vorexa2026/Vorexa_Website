import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
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
  title,
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
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
