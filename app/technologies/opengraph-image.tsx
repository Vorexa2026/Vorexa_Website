import { ImageResponse } from "next/og";
import { OgTemplate } from "@/lib/og";
import { getOgFonts } from "@/lib/og-font";

export const alt = "Vorexa Technologies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fonts, element] = await Promise.all([
    getOgFonts(),
    OgTemplate({
      eyebrow: "Technologies",
      title: "A connected technology portfolio.",
      subtitle: "Operational management, financial clarity, information capture and decision support.",
    }),
  ]);

  return new ImageResponse(element, { ...size, fonts });
}
