"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Fade + rise on scroll into view. For reduced-motion users the element renders
 * with no entrance animation. We always render a `motion.div` (never swapping to
 * a plain div) so framer clears any server-rendered initial styles on mount —
 * otherwise reduced-motion visitors can be left with hidden content after
 * hydration.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
} & HTMLMotionProps<"div">) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      // Reduced-motion: actively drive to the visible state so framer clears any
      // hidden styles the server rendered (SSR can't detect the preference).
      animate={reduced ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={reduced ? { duration: 0 } : { duration: 0.8, ease: EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers direct <StaggerItem> children into view. */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <motion.div className={className} initial={false}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <motion.div
        className={className}
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Masked line reveal for editorial headlines. Each line rises from behind a clip
 * mask. Always renders motion spans (with initial disabled under reduced motion)
 * so content is never left hidden after hydration.
 */
export function MaskLines({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
  delay = 0,
  trigger = "inView",
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  /** "mount" plays immediately (hero/above-the-fold); "inView" waits for scroll. */
  trigger?: "inView" | "mount";
}) {
  const reduced = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, i) => {
        const anim = reduced
          ? { initial: false as const, animate: { y: "0%" } }
          : trigger === "mount"
            ? { initial: { y: "110%" }, animate: { y: "0%" } }
            : {
                initial: { y: "110%" },
                whileInView: { y: "0%" },
                viewport: { once: true, margin: "-12% 0px" } as const,
              };
        return (
          <span key={i} className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className={cn("block", lineClassName)}
              {...anim}
              transition={
                reduced
                  ? { duration: 0 }
                  : { duration: 0.9, ease: EASE, delay: delay + i * 0.09 }
              }
            >
              {line}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
