"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { WebGLFallback } from "@/components/three/webgl-fallback";
import { detectTier, type PerfTier } from "@/lib/performance";

const ProductEngine = dynamic(() => import("@/components/three/product-engine"), {
  ssr: false,
  loading: () => <WebGLFallback animate />,
});

/** Repurposes the orbital Product Engine as the Lab's featured 3D study, with
 *  the same graceful-degradation ladder the hero used. */
export function LabEngine() {
  const [tier, setTier] = useState<PerfTier | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    setTier(detectTier());
  }, []);

  if (tier === null) return <WebGLFallback />;
  if (tier === "lightweight") return <WebGLFallback animate={!reduced} />;
  return <ProductEngine tier={tier} active />;
}
