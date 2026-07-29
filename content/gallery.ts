/**
 * Gallery — Hurudza Thinkpad. A deep product-design body of work: the "Snack"
 * keyboard-first productivity app, a personality-assessment flow, the ZimLoan
 * micro-finance app, an assistive navigation app, dynamic widgets and the
 * marketing around them. Assets in /public/gallery (optimized webp). Order is
 * hand-curated for masonry rhythm.
 */

export type GalleryKind = "Product" | "Mobile" | "Marketing";

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

export const galleryFilters = ["All", "Product", "Mobile", "Marketing"] as const;
export type GalleryFilter = (typeof galleryFilters)[number];

const img = (
  slug: string,
  w: number,
  h: number,
  title: string,
  tag: string,
  kind: GalleryKind,
): GalleryItem => ({ slug, type: "image", src: `/gallery/${slug}.webp`, w, h, title, tag, kind });

export const galleryItems: GalleryItem[] = [
  img("hz-snack-hero", 1440, 484, "Snack", "Next-level productivity", "Marketing"),
  img("hz-dashboard", 1440, 1244, "Good morning", "Snack · daily home", "Product"),
  img("hz-showcase", 2000, 1235, "Showcase", "Mobile UI", "Mobile"),
  img("hz-sidebar", 1200, 675, "Sidebar", "Snack · navigation", "Product"),
  img("hz-widgets", 1440, 1024, "Modular widgets", "Dynamic UI", "Marketing"),
  img("hz-zimloan", 2000, 1712, "ZimLoan", "Micro-finance app", "Mobile"),
  img("hz-commandbar", 1200, 675, "Command bar", "Snack · keyboard-first", "Product"),
  img("hz-personality-landing", 1440, 1024, "Personality Test", "Landing page", "Marketing"),
  img("hz-inbox-3d", 1358, 734, "Inbox", "Snack · perspective", "Marketing"),
  img("hz-nav-lunch", 1440, 1024, "Grab lunch", "Navigation app", "Mobile"),
  img("hz-dropdown", 1200, 675, "Nested actions", "Snack · menus", "Product"),
  img("hz-introvert", 1440, 1024, "Introvert", "Result screen", "Product"),
  img("hz-paynow", 1185, 553, "Paynow SDK", "Payments · React SDK", "Marketing"),
  img("hz-nav-walk", 390, 844, "Guided walk", "Navigation · wayfinding", "Mobile"),
  img("hz-snack-card", 1440, 1024, "Snack", "Product card", "Marketing"),
  img("hz-analyzing", 1440, 1024, "Analyzing", "Personality · flow", "Product"),
  img("hz-icons", 2000, 1304, "Iconography", "Snack · icon system", "Product"),
  img("hz-snack-mobile", 390, 844, "On the go", "Snack · mobile", "Mobile"),
  img("hz-onboarding", 1440, 1024, "Onboarding", "Personality · welcome", "Product"),
  img("hz-inbox", 1566, 1175, "Inbox", "Snack · glass", "Product"),
  img("hz-nav-steps", 477, 916, "Wayfinding", "Navigation · steps", "Mobile"),
  img("hz-assessment", 1440, 1024, "Assessment", "Personality · question", "Product"),
  img("hz-task-actions", 1460, 802, "Task actions", "Snack · mobile menu", "Mobile"),
  img("hz-someday", 1746, 1024, "Someday", "Snack · views", "Product"),
];

export const galleryCount = galleryItems.length;
export const galleryVideoCount = galleryItems.filter((i) => i.type === "video").length;
