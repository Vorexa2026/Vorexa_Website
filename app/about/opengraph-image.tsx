import { ImageResponse } from "next/og";
import { OgTemplate } from "@/lib/og";
import { getOgFonts } from "@/lib/og-font";

export const alt = "About Vorexa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fonts, element] = await Promise.all([
    getOgFonts(),
    OgTemplate({
      eyebrow: "About Vorexa",
      title: "Built from operational reality, not a whiteboard.",
      subtitle: "Founded to close the gap between fragmented information and clear decisions.",
    }),
  ]);

  return new ImageResponse(element, { ...size, fonts });
}
