// Shared shell for /legal-notice, /terms and /privacy so the three legal pages
// stay visually identical by construction rather than by three copies of the
// same markup drifting apart. Matches the dark navy treatment used site-wide.
export function LegalPage({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "radial-gradient(80% 60% at 85% 0%, rgba(0,122,255,0.12), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
        <div className="max-w-[70ch]">
          <h1 className="mb-3 font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
            {title}
          </h1>
          <p className="text-[15px] text-coolgray">Last updated: {lastUpdated}</p>

          {intro ? (
            <div className="mb-12 mt-10 text-[18px] leading-relaxed text-coolgray">{intro}</div>
          ) : (
            <div className="mb-12" />
          )}

          {children}
        </div>
      </div>
    </section>
  );
}

/** Label + body block, used for the numbered clauses on each legal page. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-cyan">
        {heading}
      </p>
      <div className="text-[17px] leading-relaxed text-coolgray">{children}</div>
    </div>
  );
}

/** Inline link styling that stays legible on the dark background. */
export const legalLinkClass = "text-white underline underline-offset-4 hover:text-cyan";
