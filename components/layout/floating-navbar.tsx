"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { navItems } from "@/content/navigation";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { useTheme } from "@/components/providers/theme-provider";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Wordmark } from "@/components/ui/brand";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const reduced = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  const sample = useCallback(() => {
    setScrolled(window.scrollY > 24);
    // Detect whether a dark cinematic section sits under the navbar. Sample
    // BELOW the bar (y=88, past its ~68px bottom) and ignore the navbar overlay
    // itself, then look for the [data-nav-dark] sentinel that only real dark
    // sections carry — the navbar's own container has data-world but not that
    // sentinel, which previously latched onDark to true forever.
    const x = Math.round(window.innerWidth / 2);
    const stack = document.elementsFromPoint(x, 88);
    const content = stack.find((n) => !n.closest("header"));
    setOnDark(!!content?.closest("[data-nav-dark]"));
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

  // Return focus to the trigger when the mobile sheet closes.
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !open) menuBtnRef.current?.focus();
    wasOpen.current = open;
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
              <Wordmark />
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
                    {active &&
                      (reduced ? (
                        <span className="absolute inset-0 rounded-full bg-surface-muted" />
                      ) : (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-surface-muted"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      ))}
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
                ref={menuBtnRef}
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
