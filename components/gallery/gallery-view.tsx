"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { GalleryVideo } from "./gallery-video";
import { galleryItems, galleryFilters, type GalleryFilter } from "@/content/gallery";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function GalleryView() {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [active, setActive] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const shown = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((i) => i.kind === filter)),
    [filter],
  );
  const counts = useMemo(() => {
    const c: Record<string, number> = { All: galleryItems.length };
    for (const f of galleryFilters) if (f !== "All") c[f] = galleryItems.filter((i) => i.kind === f).length;
    return c;
  }, []);

  const openAt = (i: number) => setActive(i);
  const close = () => setActive(null);
  const step = (d: number) =>
    setActive((a) => (a === null ? a : (a + d + shown.length) % shown.length));

  useEffect(() => setActive(null), [filter]); // reset lightbox when filter changes

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, shown.length]);

  const current = active === null ? null : shown[active];

  return (
    <>
      {/* Filters */}
      <div className="shell flex flex-wrap items-center gap-2 border-t border-border pt-6 pb-8">
        {galleryFilters.map((f) => {
          const on = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={on}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-300",
                on
                  ? "border-transparent bg-foreground text-background"
                  : "border-border text-muted hover:border-border-strong hover:text-foreground",
              )}
            >
              {f}
              <span className={cn("font-mono text-[0.625rem]", on ? "text-background/60" : "text-faint")}>
                {counts[f]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry-uniform grid */}
      <div className="shell pb-24 md:pb-32">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {shown.map((it, i) => (
            <motion.button
              key={it.slug}
              type="button"
              onClick={() => openAt(i)}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: Math.min(i * 0.025, 0.4) }}
              aria-label={`${it.title} — ${it.tag}. Open`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface shadow-soft"
            >
              {it.type === "video" ? (
                <GalleryVideo
                  src={it.src}
                  poster={it.poster}
                  className="absolute inset-0 size-full object-cover"
                />
              ) : (
                <Image
                  src={it.src}
                  alt={`${it.title} — ${it.tag}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[600ms] ease-out-expo group-hover:scale-[1.04]"
                />
              )}

              {/* caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-white">{it.title}</span>
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-white/70">
                  {it.tag}
                </span>
              </div>

              {it.type === "video" && (
                <span className="pointer-events-none absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-black/45 px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-wide text-white backdrop-blur-sm">
                  <Play className="size-2.5 fill-current" /> Motion
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${current.title}, ${current.tag}`}
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-5" />
            </button>

            {/* Prev / Next */}
            {shown.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); step(-1); }}
                  aria-label="Previous"
                  className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:left-6"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); step(1); }}
                  aria-label="Next"
                  className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:right-6"
                >
                  <ArrowRight className="size-5" />
                </button>
              </>
            )}

            {/* Media */}
            <motion.div
              key={current.slug}
              className="flex max-h-full max-w-5xl flex-col items-center gap-4"
              initial={reduced ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
                {current.type === "video" ? (
                  <GalleryVideo
                    src={current.src}
                    poster={current.poster}
                    controls
                    className="max-h-[78vh] w-auto max-w-full"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={current.src}
                    alt={`${current.title} — ${current.tag}`}
                    width={current.w}
                    height={current.h}
                    className="max-h-[78vh] w-auto max-w-full object-contain"
                  />
                )}
              </div>
              <div className="flex items-center gap-3 text-center">
                <span className="text-sm font-medium text-white">{current.title}</span>
                <span className="size-1 rounded-full bg-white/30" />
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-white/60">
                  {current.tag}
                </span>
                <span className="font-mono text-[0.625rem] text-white/40">
                  {active! + 1}/{shown.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
