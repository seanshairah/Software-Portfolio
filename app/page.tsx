import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeGallery } from "@/components/gallery/home-gallery";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { galleryCount } from "@/content/gallery";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* The work wall */}
      <section id="work" className="scroll-mt-24">
        <div className="shell mb-6 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-8">
          <div>
            <p className="label mb-2">Selected work · Hurudza Thinkpad</p>
            <h2 className="max-w-2xl text-balance text-[clamp(1.4rem,3vw,2rem)] font-medium leading-tight tracking-[-0.02em] text-foreground">
              A keyboard-first productivity app and the world around it — {galleryCount} screens of product, mobile and marketing design.
            </h2>
          </div>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
            Hover to name · tap to open
          </p>
        </div>
        <div className="mx-auto max-w-[120rem] px-3 pb-4 sm:px-5">
          <Reveal y={20}>
            <HomeGallery />
          </Reveal>
        </div>
      </section>

      {/* Into the products */}
      <section className="shell flex flex-wrap items-center justify-between gap-5 border-t border-border py-10 md:py-14">
        <p className="max-w-md text-pretty leading-relaxed text-muted">
          Beyond this, the systems I&apos;ve shipped for real businesses —
          logistics, student housing, family care, commercial farming.
        </p>
        <Link
          href="/work"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 ease-out-expo hover:-translate-y-0.5"
        >
          Selected work &amp; case studies
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>

      <ContactCta />
    </>
  );
}
