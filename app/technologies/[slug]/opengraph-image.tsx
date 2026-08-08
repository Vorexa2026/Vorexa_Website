import { ImageResponse } from "next/og";
import { OgTemplate } from "@/lib/og";
import { getOgFonts } from "@/lib/og-font";
import { products, productSlugParams } from "@/content/products";

export const generateStaticParams = productSlugParams;

export const alt = "Vorexa product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  const [fonts, element] = await Promise.all([
    getOgFonts(),
    OgTemplate({
      eyebrow: product?.category ?? "Vorexa",
      title: product?.name ?? "Vorexa",
      subtitle: product?.description ?? "",
      logoPath: product ? `public${product.logo}` : undefined,
    }),
  ]);

  return new ImageResponse(element, { ...size, fonts });
}
