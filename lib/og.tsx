// Shared visual template for all opengraph-image.tsx files. Kept deliberately
// simple (flat navy background, no gradients) — Satori (the renderer behind
// next/og's ImageResponse) has limited CSS support and gradients are the most
// likely thing to silently misrender. Every element with more than one child
// needs an explicit display:"flex" per Satori's constraints.
import { readFile } from "node:fs/promises";
import path from "node:path";

const dataUriCache = new Map<string, string>();

async function getDataUri(relativePath: string) {
  const cached = dataUriCache.get(relativePath);
  if (cached) return cached;
  const buf = await readFile(path.join(process.cwd(), relativePath));
  const uri = `data:image/png;base64,${buf.toString("base64")}`;
  dataUriCache.set(relativePath, uri);
  return uri;
}

export async function OgTemplate({
  eyebrow,
  title,
  subtitle,
  logoPath,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Public-relative path (e.g. "public/brand/products/ace.png") to show as a
   * logo chip instead of the plain Vorexa symbol mark. */
  logoPath?: string;
}) {
  const symbol = await getDataUri("public/brand/vorexa-icon.png");
  const logo = logoPath ? await getDataUri(logoPath) : null;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0B1F44",
        padding: "72px",
      }}
    >
      {/* No white tile behind the logo — Brand Identity v2.1, section 02. */}
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} width={72} height={53} alt="" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={symbol} width={72} height={53} alt="" />
      )}

      <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#00E5FF",
            marginBottom: 20,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Space Grotesk",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            marginBottom: 24,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontSize: 28,
            lineHeight: 1.4,
            color: "#A7B5C8",
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontFamily: "Inter",
          fontSize: 20,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#FFFFFF",
        }}
      >
        VOREXA
      </div>
    </div>
  );
}
