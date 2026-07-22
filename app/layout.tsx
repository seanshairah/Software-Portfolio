import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";
import { ThemeProvider, ThemeScript } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { FloatingNavbar } from "@/components/layout/floating-navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/layout/custom-cursor";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seanmuchenje.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sean Muchenje — Software Designer & Full-Stack Product Developer",
    template: "%s — Sean Muchenje",
  },
  description: profile.primaryStatement,
  keywords: [
    "Sean Muchenje",
    "software designer",
    "product designer",
    "full-stack developer",
    "AI systems",
    "systems architecture",
    "Harare",
    "Zimbabwe",
    "product engineering",
    "intelligent automation",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Sean Muchenje — The Digital Systems Studio",
    title: "Sean Muchenje — Software Designer & Full-Stack Product Developer",
    description: profile.primaryStatement,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Muchenje — Software Designer",
    description: profile.primaryStatement,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f2ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <CustomCursor />
          <FloatingNavbar />
          <SmoothScroll>
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
