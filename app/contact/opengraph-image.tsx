import { ImageResponse } from "next/og";
import { OgTemplate } from "@/lib/og";
import { getOgFonts } from "@/lib/og-font";

export const alt = "Contact Vorexa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fonts, element] = await Promise.all([
    getOgFonts(),
    OgTemplate({
      eyebrow: "Contact Vorexa",
      title: "Start a focused conversation.",
      subtitle: "For product, partnership or business enquiries, contact Vorexa directly.",
    }),
  ]);

  return new ImageResponse(element, { ...size, fonts });
}
