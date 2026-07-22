"use client";

import { useEffect, useState } from "react";

/** SSR-safe media query hook. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** True once the component has mounted on the client. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/** Reduced-motion preference (reactive). */
export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** Coarse pointer / touch device detection. */
export function useIsTouch() {
  return useMediaQuery("(hover: none) and (pointer: coarse)");
}
