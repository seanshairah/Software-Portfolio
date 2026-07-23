export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  { label: "Work", href: "/work", description: "Selected work & case studies" },
  { label: "Lab", href: "/playground", description: "Experiments & prototypes" },
  { label: "About", href: "/about", description: "Background & approach" },
  { label: "Contact", href: "/contact", description: "Start a project" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Explore",
    items: [
      { label: "Selected Work", href: "/work" },
      { label: "Lab", href: "/playground" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "More",
    items: [
      { label: "Uses", href: "/uses" },
      { label: "Résumé", href: "/resume" },
      { label: "Archive", href: "/archive" },
    ],
  },
];
