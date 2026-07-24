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
        eyebrow="Gallery"
        index="01"
        titleLines={["Design, brand", "and motion."]}
        lead={`A working gallery of the visual side — logos and identity, product interfaces and motion. ${galleryCount} selected pieces; tap any to open it full-size.`}
      />
      <GalleryView />
      <ContactCta />
    </>
  );
}
