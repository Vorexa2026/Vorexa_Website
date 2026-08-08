import Image from "next/image";
import { PrimaryLink, TextLink } from "@/components/button";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-navy" aria-labelledby="hero-heading">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 42%, rgba(20,121,255,0.22), transparent 60%), radial-gradient(80% 70% at 82% 55%, rgba(0,182,166,0.14), transparent 60%)",
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
          <div
            className="absolute inset-0 rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(closest-side, rgba(20,121,255,0.16), transparent 75%)",
            }}
          />
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
