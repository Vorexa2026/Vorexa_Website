import type { ProductStatus } from "@/content/products";

// All three treatments sit on the dark navy background. Colour is never the
// only signal — the status word itself is always present — so this stays
// readable for colour-blind users and passes WCAG AA on navy (white text
// 15.4:1, #A9B4C4 7.3:1).
const styles: Record<ProductStatus, { dot: string; text: string; border: string }> = {
  Live: {
    dot: "bg-teal",
    text: "text-white",
    border: "border-teal/50",
  },
  "Private beta": {
    dot: "bg-blue",
    text: "text-white",
    border: "border-blue/50",
  },
  "In development": {
    dot: "bg-[#A9B4C4]",
    text: "text-[#A9B4C4]",
    border: "border-white/20",
  },
};

export default function StatusPill({
  status,
  prefix,
}: {
  status: ProductStatus;
  prefix?: string;
}) {
  const style = styles[status];

  return (
    <span
      className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border bg-white/5 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.08em] ${style.border} ${style.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
      {prefix ? `${prefix} ` : ""}
      {status}
    </span>
  );
}
