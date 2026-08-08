import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vorexa",
    short_name: "Vorexa",
    description:
      "Vorexa builds focused technology systems for clearer operations, connected information and better decisions.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#0B2545",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
