import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { GalleryView } from "@/components/gallery/gallery-view";
import { galleryCount } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual gallery of Sean Muchenje's design and brand work — logos, identity, product interfaces and motion.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery · Hurudza Thinkpad"
        index="01"
        titleLines={["Product design,", "end to end."]}
        lead={`Selected screens from Hurudza Thinkpad — the Snack keyboard-first productivity app, ZimLoan micro-finance, an assistive navigation app, and the marketing around them. ${galleryCount} pieces; tap any to open it full-size.`}
      />
      <GalleryView />
      <ContactCta />
    </>
  );
}
