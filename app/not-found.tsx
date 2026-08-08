import { PrimaryLink } from "@/components/button";

export default function NotFound() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto flex max-w-content flex-col items-start px-5 py-24 sm:px-10 md:py-32">
        <p className="mb-4 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
          404
        </p>
        <h1 className="mb-8 font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-navy">
          This page does not exist.
        </h1>
        <PrimaryLink href="/">Return home</PrimaryLink>
      </div>
    </section>
  );
}
