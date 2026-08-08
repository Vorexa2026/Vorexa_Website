import Image from "next/image";
import { PrimaryLink, TextLink } from "@/components/button";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-navy" aria-labelledby="hero-heading">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 42%, rgba(20,121,255,0.18), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-content flex-col items-center gap-12 px-5 py-16 sm:px-10 md:flex-row md:gap-16 md:py-28 lg:py-36">
        <div className="min-w-0 flex-1">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-7 bg-teal" aria-hidden="true" />
            <p className="font-body text-[12px] font-semibold tracking-[0.2em] text-teal">
              VOREXA
            </p>
          </div>

          <h1
            id="hero-heading"
            className="mb-7 max-w-[16ch] font-heading text-[clamp(2.75rem,7.4vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white"
          >
            Intelligence<span className="text-blue">.</span> Systems
            <span className="text-teal">.</span> Decisions
            <span className="text-blue">.</span>
          </h1>

          <p className="mb-10 max-w-[48ch] text-[18px] leading-relaxed text-[#A9B4C4] sm:text-[20px]">
            Vorexa builds focused technology systems that turn operational complexity into
            clearer action.
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <PrimaryLink href="/technologies">Explore our technologies</PrimaryLink>
            <TextLink href="/about" light>
              About Vorexa
            </TextLink>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative hidden aspect-square w-full max-w-[320px] flex-shrink-0 items-center justify-center md:flex"
        >
          <div className="absolute inset-0 border border-white/10" />
          <div className="absolute left-[-1px] top-[-1px] h-4 w-4 border-l-2 border-t-2 border-blue" />
          <div className="absolute bottom-[-1px] right-[-1px] h-4 w-4 border-b-2 border-r-2 border-teal" />
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
          <div className="absolute bottom-0 left-1/2 top-0 w-px bg-white/10" />
          <Image
            src="/brand/vorexa-symbol.png"
            alt=""
            width={220}
            height={167}
            className="relative w-3/5"
          />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-wrap gap-6 px-5 py-5 sm:gap-12 sm:px-10">
          {["VOREXA", "TECHNOLOGY GROUP", "SOUTH AFRICA"].map((m) => (
            <p key={m} className="font-body text-[11px] tracking-[0.2em] text-white/55">
              {m}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
