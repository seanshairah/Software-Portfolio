"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/content/gallery";
import { GalleryVideo } from "./gallery-video";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Measure a container's width, reactively. */
function useContainerWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setW(entry.contentRect.width));
    ro.observe(el);
    setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);
  return [ref, w] as const;
}

interface Row {
  items: GalleryItem[];
  h: number;
  last?: boolean;
}

/** Justified rows: pack items left→right, scaling each row to fill the width
 *  exactly at a shared height. Edge-to-edge, gap-free, varied widths. */
function justify(items: GalleryItem[], width: number, target: number): Row[] {
  const rows: Row[] = [];
  let row: GalleryItem[] = [];
  let arSum = 0;
  for (const it of items) {
    row.push(it);
    arSum += it.w / it.h;
    if (arSum * target >= width) {
      rows.push({ items: row, h: width / arSum });
      row = [];
      arSum = 0;
    }
  }
  if (row.length) rows.push({ items: row, h: Math.min(target, width / arSum), last: true });
  return rows;
}

export function HomeGallery() {
  const [ref, width] = useContainerWidth();
  const [active, setActive] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const target = width < 560 ? 148 : width < 900 ? 190 : width < 1300 ? 232 : 264;
  const rows = useMemo(
    () => (width > 0 ? justify(galleryItems, width, target) : []),
    [width, target],
  );

  const close = () => setActive(null);
  const step = (d: number) =>
    setActive((a) => (a === null ? a : (a + d + galleryItems.length) % galleryItems.length));

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
  }, [active]);

  const current = active === null ? null : galleryItems[active];
  let idx = -1; // running index across rows → maps back to galleryItems order

  return (
    <>
      <div ref={ref} className="w-full">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className={`flex w-full${row.last ? " justify-center" : ""}`}
            style={{ height: row.h }}
          >
            {row.items.map((it) => {
              idx += 1;
              const i = idx;
              const w = row.h * (it.w / it.h);
              return (
                <button
                  key={it.slug}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${it.title} — ${it.tag}. Open`}
                  className="group relative block h-full overflow-hidden bg-surface-muted"
                  style={row.last ? { flex: `0 0 ${w}px` } : { flex: `${it.w / it.h} 1 0` }}
                >
                  {it.type === "video" ? (
                    <GalleryVideo src={it.src} poster={it.poster} className="absolute inset-0 size-full object-cover" />
                  ) : (
                    <Image
                      src={it.src}
                      alt={`${it.title} — ${it.tag}`}
                      fill
                      sizes="(min-width: 1300px) 30vw, (min-width: 560px) 45vw, 90vw"
                      className="object-cover transition-transform duration-[650ms] ease-out-expo group-hover:scale-[1.045]"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex w-full items-end justify-between gap-2 p-2.5">
                      <span className="text-[0.8125rem] font-medium leading-tight text-white">{it.title}</span>
                      <span className="shrink-0 font-mono text-[0.5rem] uppercase tracking-[0.1em] text-white/70">{it.tag}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
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
            <button onClick={close} aria-label="Close" className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white">
              <X className="size-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:left-6">
              <ArrowLeft className="size-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:right-6">
              <ArrowRight className="size-5" />
            </button>
            <motion.div
              key={current.slug}
              className="flex max-h-full max-w-5xl flex-col items-center gap-4"
              initial={reduced ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-lg border border-white/10 bg-black/40">
                {current.type === "video" ? (
                  <GalleryVideo src={current.src} poster={current.poster} controls className="max-h-[78vh] w-auto max-w-full" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={current.src} alt={`${current.title} — ${current.tag}`} className="max-h-[78vh] w-auto max-w-full object-contain" />
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-white">{current.title}</span>
                <span className="size-1 rounded-full bg-white/30" />
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-white/60">{current.tag}</span>
                <span className="font-mono text-[0.625rem] text-white/40">{active! + 1}/{galleryItems.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
