// Local static font files for use inside next/og's ImageResponse (Satori
// needs raw font bytes, not the CSS next/font/google normally produces).
// Read directly from disk rather than fetch(new URL(...)) — the latter
// resolves to a bundled public asset path at build time in this Next
// version's Node runtime, which fetch() can't load as a real URL.
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getOgFonts() {
  const fontsDir = path.join(process.cwd(), "assets/fonts");
  const [spaceGroteskBold, interSemiBold] = await Promise.all([
    readFile(path.join(fontsDir, "SpaceGrotesk-Bold.ttf")),
    readFile(path.join(fontsDir, "Inter-SemiBold.ttf")),
  ]);

  return [
    { name: "Space Grotesk", data: spaceGroteskBold, weight: 700 as const, style: "normal" as const },
    { name: "Inter", data: interSemiBold, weight: 600 as const, style: "normal" as const },
  ];
}
