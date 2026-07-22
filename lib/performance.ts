"use client";

/**
 * Three rendering tiers, chosen from device capability + user preference.
 * · premium     — full WebGL, refraction, higher geometry (strong desktops)
 * · balanced    — reduced geometry, capped DPR, fewer effects (laptops/tablets)
 * · lightweight — static/SVG alternative, minimal motion (mobile / reduced-motion)
 */
export type PerfTier = "premium" | "balanced" | "lightweight";

export function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

export function detectTier(): PerfTier {
  if (typeof window === "undefined") return "lightweight";

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reducedMotion || !detectWebGL()) return "lightweight";

  const coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  const narrow = window.matchMedia("(max-width: 820px)").matches;
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 4;
  const saveData =
    (navigator as unknown as { connection?: { saveData?: boolean } }).connection
      ?.saveData ?? false;

  if (saveData) return "lightweight";
  if (coarse || narrow) return "lightweight";
  if (cores <= 4 || memory <= 4) return "balanced";
  return "premium";
}

/** Device-pixel-ratio ceiling per tier — protects fill-rate on dense displays. */
export function dprCeiling(tier: PerfTier): [number, number] {
  switch (tier) {
    case "premium":
      return [1, 2];
    case "balanced":
      return [1, 1.5];
    default:
      return [1, 1];
  }
}
