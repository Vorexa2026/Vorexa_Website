export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  variant = "dark",
  headingId,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  variant?: "dark" | "light";
  headingId?: string;
}) {
  const headingColor = variant === "light" ? "text-white" : "text-navy";
  const eyebrowColor = variant === "light" ? "text-teal" : "text-muted";
  const introColor = variant === "light" ? "text-[#A9B4C4]" : "text-muted";

  return (
    <div>
      <p
        className={`mb-4 font-body text-[13px] font-semibold uppercase tracking-[0.12em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className={`max-w-[20ch] font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] ${headingColor}`}
      >
        {heading}
      </h2>
      {intro ? (
        <p className={`mt-5 max-w-[62ch] text-[17px] leading-relaxed sm:text-[19px] ${introColor}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
