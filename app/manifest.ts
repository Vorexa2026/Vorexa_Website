import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vorexa",
    short_name: "Vorexa",
    description:
      "Vorexa designs focused operating systems that turn fragmented information and workflows into connected environments for action, control and better decisions.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7FAFC",
    theme_color: "#0B1F44",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
