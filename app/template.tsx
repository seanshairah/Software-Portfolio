"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Route-level transition. `template.tsx` re-mounts on every navigation, so each
 * page cross-fades in — an app-like sense of moving between views on top of the
 * per-section scroll reveals.
 *
 * Opacity only, deliberately: a `transform`/`filter` wrapper would establish a
 * containing block and break the `position: sticky` preview rails in the work
 * index and case studies. Reduced-motion users get the content immediately, and
 * we always render a motion element so framer clears the server-rendered
 * initial opacity on mount (never leaving content hidden after hydration).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reduced ? { duration: 0 } : { duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
