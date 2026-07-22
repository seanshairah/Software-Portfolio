export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  { label: "Work", href: "/work", description: "Selected systems & case studies" },
  { label: "Services", href: "/services", description: "How I can help" },
  { label: "About", href: "/about", description: "Background & approach" },
  { label: "Playground", href: "/playground", description: "Creative experiments" },
  { label: "Contact", href: "/contact", description: "Start a project" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Explore",
    items: [
      { label: "Selected Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Playground", href: "/playground" },
    ],
  },
  {
    title: "More",
    items: [
      { label: "Process", href: "/#process" },
      { label: "Uses", href: "/uses" },
      { label: "Résumé", href: "/resume" },
      { label: "Archive", href: "/archive" },
    ],
  },
];
