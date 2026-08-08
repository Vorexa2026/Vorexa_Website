import { ImageResponse } from "next/og";
import { OgTemplate } from "@/lib/og";
import { getOgFonts } from "@/lib/og-font";

export const alt = "Vorexa | Intelligence. Systems. Decisions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fonts, element] = await Promise.all([
    getOgFonts(),
    OgTemplate({
      eyebrow: "Technology Group",
      title: "Intelligence. Systems. Decisions.",
      subtitle: "Focused technology systems for clearer operations and better decisions.",
    }),
  ]);

  return new ImageResponse(element, { ...size, fonts });
}
