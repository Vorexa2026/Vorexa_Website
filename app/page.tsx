import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";
import ProductCard from "@/components/product-card";
import { PrimaryLink, TextLink } from "@/components/button";
import {
  contactAddress,
  contactEmail,
  contactPhone,
  contactPhoneHref,
  principles,
  products,
} from "@/content/products";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-offwhite font-body text-charcoal">
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[100] bg-navy px-5 py-3 text-[14px] font-semibold text-white focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        {/* Home / Hero */}
        <section
          id="home"
          className="relative overflow-hidden bg-navy"
          aria-labelledby="hero-heading"
        >
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
                <PrimaryLink href="#technologies">Explore our technologies</PrimaryLink>
                <TextLink href="#about" light>
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
                <p
                  key={m}
                  className="font-body text-[11px] tracking-[0.2em] text-white/55"
                >
                  {m}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border bg-offwhite">
          <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
            <div className="flex flex-col gap-10 md:flex-row md:gap-20">
              <div className="md:w-[34%] md:flex-shrink-0">
                <SectionHeading eyebrow="01 / About" heading="Built around real operational needs." />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-6 max-w-[62ch] text-[18px] leading-relaxed text-charcoal sm:text-[19px]">
                  Vorexa is a technology group focused on building practical systems for
                  complex operations. Its products bring together information, workflows and
                  decisions that are often fragmented across disconnected tools.
                </p>
                <p className="mb-12 max-w-[62ch] text-[18px] leading-relaxed text-muted sm:text-[19px]">
                  The company&rsquo;s approach is grounded in operational experience: identify
                  the friction, structure the information and build a system that supports
                  better execution.
                </p>

                <ol className="flex flex-col">
                  {principles.map((text, i) => (
                    <li
                      key={text}
                      className="flex items-baseline gap-6 border-t border-border py-5 transition-colors duration-200 hover:bg-white"
                    >
                      <span className="flex-shrink-0 font-body text-[13px] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-[19px] font-medium leading-snug text-navy sm:text-[22px]">
                        {text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section id="technologies" className="border-t border-border bg-white">
          <div className="mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
            <SectionHeading
              eyebrow="02 / Technologies"
              heading="A connected technology portfolio."
              intro="Vorexa develops focused platforms for operational management, financial clarity, information capture and personal decision support."
            />

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>

            <p className="mt-11 border-t border-border pt-6 text-[15px] text-muted">
              Each platform is being developed around a defined operational use case.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden bg-navy">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(90% 80% at 20% 30%, rgba(0,182,166,0.14), transparent 60%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-content px-5 py-16 sm:px-10 md:py-24">
            <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16">
              <div className="min-w-0 flex-1">
                <SectionHeading
                  eyebrow="03 / Contact"
                  heading="Start a focused conversation."
                  intro="For product, partnership or business enquiries, contact Vorexa directly."
                  variant="light"
                />
                <div className="mt-9">
                  <PrimaryLink href={`mailto:${contactEmail}`}>Email Vorexa</PrimaryLink>
                </div>
                <div className="mt-6 space-y-2 font-body text-[14px] leading-relaxed text-white/70">
                  <p>
                    <a href={`mailto:${contactEmail}`} className="hover:text-teal">
                      {contactEmail}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${contactPhoneHref}`} className="hover:text-teal">
                      {contactPhone}
                    </a>
                  </p>
                  <p className="max-w-[36ch]">{contactAddress}</p>
                </div>
              </div>

              <div className="flex w-full flex-shrink-0 flex-col items-center gap-6 border border-white/10 bg-white px-9 py-11 md:w-[360px]">
                <Image
                  src="/brand/vorexa-lockup.png"
                  alt="Vorexa — Intelligence. Systems. Decisions."
                  width={720}
                  height={144}
                  className="h-auto w-full object-contain"
                />
                <div className="h-px w-full bg-border" />
                <p className="text-center font-body text-[11px] tracking-[0.2em] text-muted">
                  TECHNOLOGY GROUP / SOUTH AFRICA
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </section>
      </main>
    </div>
  );
}
