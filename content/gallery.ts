/**
 * Gallery — Sean's visual design & brand work (logos, identity, product UI and
 * motion). Assets live in /public/gallery (optimized webp + transcoded mp4 with
 * poster frames). Order is hand-curated for masonry rhythm, strongest first.
 */

export type GalleryKind = "Brand" | "Interface" | "Motion";

export interface GalleryItem {
  slug: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  w: number;
  h: number;
  title: string;
  tag: string;
  kind: GalleryKind;
  featured?: boolean;
}

export const galleryFilters = ["All", "Brand", "Interface", "Motion"] as const;
export type GalleryFilter = (typeof galleryFilters)[number];

export const galleryItems: GalleryItem[] = [
  { slug: "showreel", type: "video", src: "/gallery/showreel.mp4", poster: "/gallery/showreel-poster.webp", w: 1280, h: 960, title: "Showreel", tag: "Product reel", kind: "Motion", featured: true },
  { slug: "logofolio", type: "image", src: "/gallery/logofolio.webp", w: 1024, h: 768, title: "Marks", tag: "Logofolio 2024–25", kind: "Brand", featured: true },
  { slug: "synth-era", type: "image", src: "/gallery/synth-era.webp", w: 1024, h: 768, title: "Synth Era", tag: "Art direction", kind: "Interface", featured: true },
  { slug: "reign", type: "image", src: "/gallery/reign.webp", w: 1024, h: 768, title: "Reign", tag: "Logotype", kind: "Brand" },
  { slug: "dispatch-1", type: "image", src: "/gallery/dispatch-1.webp", w: 1024, h: 768, title: "Dispatch", tag: "Fleet operations", kind: "Interface", featured: true },
  { slug: "fox", type: "image", src: "/gallery/fox.webp", w: 1024, h: 768, title: "Fox", tag: "Logo", kind: "Brand" },
  { slug: "reel-logos", type: "video", src: "/gallery/reel-logos.mp4", poster: "/gallery/reel-logos-poster.webp", w: 1200, h: 1172, title: "Logo animations", tag: "Motion reel", kind: "Motion", featured: true },
  { slug: "denta", type: "image", src: "/gallery/denta.webp", w: 800, h: 582, title: "Denta", tag: "Healthcare web", kind: "Interface", featured: true },
  { slug: "asterisk", type: "image", src: "/gallery/asterisk.webp", w: 1600, h: 1200, title: "Asterisk", tag: "Logo mark", kind: "Brand" },
  { slug: "strike-1", type: "image", src: "/gallery/strike-1.webp", w: 1024, h: 768, title: "Strike", tag: "Sports analytics", kind: "Interface", featured: true },
  { slug: "cloudzero", type: "video", src: "/gallery/cloudzero.mp4", poster: "/gallery/cloudzero-poster.webp", w: 1280, h: 720, title: "CloudZero", tag: "Brand identity", kind: "Brand", featured: true },
  { slug: "pig", type: "image", src: "/gallery/pig.webp", w: 1024, h: 768, title: "Pig", tag: "Logo", kind: "Brand" },
  { slug: "learning-os", type: "image", src: "/gallery/learning-os.webp", w: 1024, h: 768, title: "Learning OS", tag: "Product design", kind: "Interface" },
  { slug: "king", type: "image", src: "/gallery/king.webp", w: 1024, h: 768, title: "King", tag: "Logo", kind: "Brand" },
  { slug: "vitals-1", type: "image", src: "/gallery/vitals-1.webp", w: 1024, h: 768, title: "Vitals", tag: "Health app", kind: "Interface" },
  { slug: "world-makers", type: "image", src: "/gallery/world-makers.webp", w: 1024, h: 768, title: "World Makers", tag: "Vector sketches", kind: "Brand", featured: true },
  { slug: "hiring", type: "image", src: "/gallery/hiring.webp", w: 1024, h: 768, title: "Hiring", tag: "Mobile app", kind: "Interface" },
  { slug: "fire-hand", type: "image", src: "/gallery/fire-hand.webp", w: 1024, h: 768, title: "Fire Hand", tag: "Logo", kind: "Brand" },
  { slug: "expert-corner", type: "video", src: "/gallery/expert-corner.mp4", poster: "/gallery/expert-corner-poster.webp", w: 800, h: 600, title: "Expert’s Corner", tag: "Web / 3D", kind: "Interface" },
  { slug: "inbox-1", type: "image", src: "/gallery/inbox-1.webp", w: 752, h: 564, title: "Inbox", tag: "SaaS UI", kind: "Interface" },
  { slug: "robin", type: "image", src: "/gallery/robin.webp", w: 1024, h: 768, title: "Robin", tag: "Mascot logo", kind: "Brand" },
  { slug: "strike-4", type: "image", src: "/gallery/strike-4.webp", w: 1024, h: 768, title: "Strike", tag: "Shot analysis", kind: "Interface" },
  { slug: "concepts", type: "image", src: "/gallery/concepts.webp", w: 1024, h: 768, title: "Concepts", tag: "Logo studies", kind: "Brand" },
  { slug: "dispatch-2", type: "image", src: "/gallery/dispatch-2.webp", w: 1024, h: 768, title: "Dispatch", tag: "Live tracking", kind: "Interface" },
  { slug: "logo-database", type: "image", src: "/gallery/logo-database.webp", w: 1024, h: 768, title: "Logo Database", tag: "Logofolio 2025–26", kind: "Brand" },
  { slug: "mobile-service", type: "image", src: "/gallery/mobile-service.webp", w: 1024, h: 768, title: "Mobile app", tag: "Product UI", kind: "Interface" },
  { slug: "strike-3", type: "image", src: "/gallery/strike-3.webp", w: 1024, h: 768, title: "Strike", tag: "Power zones", kind: "Interface" },
  { slug: "vitals-2", type: "image", src: "/gallery/vitals-2.webp", w: 1024, h: 768, title: "Vitals", tag: "Health app", kind: "Interface" },
  { slug: "strike-5", type: "image", src: "/gallery/strike-5.webp", w: 1024, h: 768, title: "Strike", tag: "Zone map", kind: "Interface" },
  { slug: "inbox-2", type: "image", src: "/gallery/inbox-2.webp", w: 1024, h: 768, title: "Inbox", tag: "SaaS UI", kind: "Interface" },
  { slug: "strike-2", type: "image", src: "/gallery/strike-2.webp", w: 1024, h: 768, title: "Strike", tag: "In-hand analysis", kind: "Interface" },
];

export const galleryCount = galleryItems.length;
