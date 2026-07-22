"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Context-aware cursor for fine-pointer devices. A precise dot tracks exactly;
 * a ring follows with spring lag and grows over interactive elements, showing a
 * label when an element declares data-cursor. Disabled on touch and for
 * reduced-motion users, where the native cursor is left untouched.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [down, setDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 32, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const interactive = target.closest<HTMLElement>(
        "a, button, [role='button'], [data-cursor]",
      );
      setHovering(!!interactive);
      setLabel(interactive?.dataset.cursor ?? null);
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden lg:block">
      {/* Precise dot */}
      <motion.div
        className="fixed left-0 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x, y }}
      />
      {/* Lagging ring */}
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border border-foreground/40 backdrop-invert-0"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: label ? 68 : hovering ? 44 : 30,
          height: label ? 68 : hovering ? 44 : 30,
          opacity: 1,
          scale: down ? 0.85 : 1,
          backgroundColor: hovering ? "var(--accent-soft)" : "transparent",
          borderColor: hovering ? "var(--accent)" : "var(--border-strong)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {label && (
          <span className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-foreground">
            {label}
          </span>
        )}
      </motion.div>
    </div>
  );
}
