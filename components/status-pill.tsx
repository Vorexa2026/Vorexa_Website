import type { ProductStatus } from "@/content/products";

// Sits on the dark navy background. Colour is never the only signal — the
// status word itself is always present — so this stays readable for
// colour-blind users and passes WCAG AA on navy (white text 15.4:1).
const styles: Record<ProductStatus, { dot: string; text: string; border: string }> = {
  Production: {
    dot: "bg-cyan",
    text: "text-white",
    border: "border-cyan/50",
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
