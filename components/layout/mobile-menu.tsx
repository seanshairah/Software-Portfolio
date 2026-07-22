"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { navItems } from "@/content/navigation";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import { pad, cn } from "@/lib/utils";
import { Wordmark } from "@/components/ui/brand";
import { StatusDot } from "@/components/ui/badge";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus management for the modal sheet: focus the close button on open,
  // close on Escape, and trap Tab within the dialog.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          key="mobile-sheet"
          data-world="dark"
          className="fixed inset-0 z-[60] flex flex-col bg-background text-foreground lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="shell flex h-16 shrink-0 items-center justify-between border-b border-border">
            <Wordmark compact />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="shell flex flex-1 flex-col justify-center gap-1 py-8">
            {navItems.map((item, i) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-baseline justify-between border-b border-border/60 py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-faint">
                        {pad(i + 1)}
                      </span>
                      <span
                        className={cn(
                          "text-[2rem] font-medium tracking-tight",
                          active ? "text-accent" : "text-foreground",
                        )}
                      >
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 text-faint transition-transform group-active:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="shell shrink-0 space-y-5 border-t border-border py-6">
            <StatusDot label={profile.hero.availability.label} />
            <a
              href={`mailto:${profile.email}`}
              className="block text-lg font-medium tracking-tight text-foreground"
            >
              {profile.email}
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted"
                  {...(s.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
