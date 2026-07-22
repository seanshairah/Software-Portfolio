"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { navItems } from "@/content/navigation";
import { useTheme } from "@/components/providers/theme-provider";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Wordmark } from "@/components/ui/brand";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  const sample = useCallback(() => {
    setScrolled(window.scrollY > 24);
    // Detect whether an explicit dark-world section sits under the navbar.
    const x = Math.round(window.innerWidth / 2);
    const el = document.elementFromPoint(x, 46);
    const dark = !!el?.closest('[data-world="dark"]');
    setOnDark(dark);
    ticking.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(sample);
      }
    };
    sample();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sample]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The navbar renders in the dark world when the global theme is dark or when
  // it sits over an explicit dark-world section (hero, cinematic moments).
  const world: "dark" | "light" = theme === "dark" || onDark ? "dark" : "light";

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="shell">
          <div
            data-world={world}
            className={cn(
              "pointer-events-auto mt-3 flex h-14 items-center justify-between rounded-full px-3 pl-4 transition-all duration-500 ease-out-expo",
              scrolled
                ? "border border-border bg-surface/70 shadow-soft backdrop-blur-xl"
                : "border border-transparent bg-transparent",
            )}
          >
            <Link
              href="/"
              aria-label="Sean Muchenje — home"
              className="shrink-0 rounded-full text-foreground"
            >
              <span className="hidden sm:block">
                <Wordmark />
              </span>
              <span className="sm:hidden">
                <Wordmark compact />
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-full bg-surface-muted" />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeSwitcher className="hidden sm:inline-flex" />
              <ButtonLink
                href="/contact"
                size="sm"
                className="hidden lg:inline-flex"
              >
                Start a Project
              </ButtonLink>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}
