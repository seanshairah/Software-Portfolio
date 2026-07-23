import type { Metadata, Viewport } from "next";
// Fonts are loaded from the `geist` package (local files) rather than
// next/font/google, so the production build never depends on a build-time fetch
// to Google Fonts (which cloud build IPs are frequently rate-limited by).
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { profile } from "@/content/profile";
import { ThemeProvider, ThemeScript } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { FloatingNavbar } from "@/components/layout/floating-navbar";
import { Footer } from "@/components/layout/footer";

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
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <FloatingNavbar />
          <SmoothScroll>
            {/* tabIndex=-1 so activating the skip link moves keyboard focus here */}
            <main id="main" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
