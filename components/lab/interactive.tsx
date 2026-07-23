"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";

/* Small, live interaction studies for the Lab. Each is self-contained,
   reduced-motion aware, and tactile rather than decorative. */

/** A control that leans toward the cursor within its field, then springs back. */
export function MagneticButton({ label = "Pull me" }: { label?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 260, damping: 18 });
  const y = useSpring(0, { stiffness: 260, damping: 18 });

  function onMove(e: React.PointerEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.4);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <motion.button
        ref={ref}
        style={{ x, y }}
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
      >
        {label}
      </motion.button>
    </div>
  );
}

/** A chip you can throw around; it settles back with spring physics. */
export function SpringDrag() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        drag
        dragElastic={0.35}
        dragConstraints={{ left: -70, right: 70, top: -46, bottom: 46 }}
        dragTransition={{ bounceStiffness: 360, bounceDamping: 16 }}
        whileTap={{ scale: 1.06 }}
        className="grid cursor-grab place-items-center rounded-xl border border-border-strong bg-surface-raised px-4 py-3 text-sm font-medium text-foreground shadow-soft active:cursor-grabbing"
      >
        Drag me
      </motion.div>
    </div>
  );
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>#*·";

/** Text that decodes from noise on mount and on hover. */
export function Scramble({
  text = "SYSTEMS",
  className,
}: {
  text?: string;
  className?: string;
}) {
  const [out, setOut] = useState(text);
  const reduced = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  function run() {
    if (reduced) return;
    let i = 0;
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setOut(
        text
          .split("")
          .map((ch, idx) =>
            ch === " "
              ? " "
              : idx < i
                ? text[idx]
                : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join(""),
      );
      if (i >= text.length && timer.current) clearInterval(timer.current);
      i += 1 / 3;
    }, 45);
  }

  useEffect(() => {
    run();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      onPointerEnter={run}
      className={className}
      aria-label={text}
      style={{ fontVariantLigatures: "none" }}
    >
      {out}
    </button>
  );
}

/** A tiny network where a signal packet travels the wires on a loop. */
export function SignalGraph() {
  const reduced = useReducedMotion();
  const nodes = [
    { x: 20, y: 50 },
    { x: 90, y: 22 },
    { x: 90, y: 78 },
    { x: 160, y: 50 },
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ];
  const paths = edges.map(
    ([a, b]) => `M${nodes[a].x},${nodes[a].y} L${nodes[b].x},${nodes[b].y}`,
  );
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 180 100" className="h-20 w-full max-w-[12rem]" aria-hidden>
        {paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="var(--border-strong)" strokeWidth="1" />
        ))}
        {!reduced &&
          paths.map((d, i) => (
            <circle key={`s${i}`} r="2.5" fill="var(--accent)">
              <animateMotion
                dur={`${2.4 + i * 0.6}s`}
                repeatCount="indefinite"
                path={d}
                begin={`${i * 0.3}s`}
              />
            </circle>
          ))}
        {nodes.map((n, i) => (
          <circle
            key={`n${i}`}
            cx={n.x}
            cy={n.y}
            r="4"
            fill="var(--surface-raised)"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
          />
        ))}
      </svg>
    </div>
  );
}
