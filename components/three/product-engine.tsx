"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Billboard, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { dprCeiling, type PerfTier } from "@/lib/performance";

/* ──────────────────────────────────────────────────────────────────────────
   The Product Engine — an orbital systems diagram. A luminous core (the
   product) sits inside concentric orbits (interface · logic/data · infra);
   nodes ride the orbits, data signals travel along them, and a few live
   nodes glow and wire back to the core. Pure geometry + additive glow — the
   full description lives in accessible HTML alongside it.
   ────────────────────────────────────────────────────────────────────────── */

const ACCENT = "#3c7dff"; // system blue
const SIGNAL = "#dcecff"; // bright data pulse (cool white-blue)
const LIVE = "#5eead4"; // teal — a "live" node
const BASE = "#7f8ba3"; // quiet node

interface OrbitDef {
  r: number;
  count: number;
  speed: number;
  dir: 1 | -1;
}
const ORBITS: OrbitDef[] = [
  { r: 2.0, count: 5, speed: 0.20, dir: 1 },
  { r: 3.15, count: 7, speed: 0.135, dir: -1 },
  { r: 4.3, count: 9, speed: 0.092, dir: 1 },
];

interface NodeDef {
  orbit: number;
  r: number;
  angle: number; // base phase
  speed: number;
  dir: 1 | -1;
  yJit: number;
  live: boolean;
  color: THREE.Color;
}

function buildNodes(density: number): NodeDef[] {
  const nodes: NodeDef[] = [];
  ORBITS.forEach((o, oi) => {
    const count = Math.max(3, o.count - (6 - density));
    // one or two live nodes per orbit
    const liveA = Math.floor(Math.random() * count);
    const liveB = (liveA + Math.floor(count / 2)) % count;
    for (let i = 0; i < count; i++) {
      const live = i === liveA || (oi > 0 && i === liveB);
      nodes.push({
        orbit: oi,
        r: o.r,
        angle: (i / count) * Math.PI * 2 + Math.random() * 0.3,
        speed: o.speed,
        dir: o.dir,
        yJit: (Math.random() - 0.5) * 0.35,
        live,
        color: new THREE.Color(live ? (i % 2 ? LIVE : ACCENT) : BASE),
      });
    }
  });
  return nodes;
}

/** Reusable soft radial-gradient sprite for additive glows. */
function useGlowTexture() {
  return useMemo(() => {
    const s = 128;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = s;
    const ctx = canvas.getContext("2d")!;
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.22, "rgba(255,255,255,0.55)");
    g.addColorStop(0.5, "rgba(255,255,255,0.16)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
}

function Glow({
  tex,
  color,
  scale,
  opacity = 1,
}: {
  tex: THREE.Texture;
  color: string;
  scale: number;
  opacity?: number;
}) {
  return (
    <Billboard>
      <mesh scale={scale}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={tex}
          color={color}
          transparent
          opacity={opacity}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </Billboard>
  );
}

/** A single tilted orbit ring. */
function OrbitRing({ r }: { r: number }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[r, 0.008, 8, 128]} />
      <meshBasicMaterial
        color={ACCENT}
        transparent
        opacity={0.22}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}

function Engine({ tier }: { tier: PerfTier }) {
  const group = useRef<THREE.Group>(null);
  const baseRef = useRef<THREE.InstancedMesh>(null);
  const signalRef = useRef<THREE.InstancedMesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const linkRef = useRef<THREE.LineSegments>(null);
  const liveRefs = useRef<(THREE.Group | null)[]>([]);
  const { pointer } = useThree();
  const tex = useGlowTexture();

  const density = tier === "premium" ? 6 : 5;
  const nodes = useMemo(() => buildNodes(density), [density]);
  const baseNodes = useMemo(() => nodes.filter((n) => !n.live), [nodes]);
  const liveNodes = useMemo(() => nodes.filter((n) => n.live), [nodes]);

  // Data signals — a couple travel each orbit ring.
  const signals = useMemo(() => {
    const arr: { r: number; angle: number; speed: number; dir: 1 | -1 }[] = [];
    ORBITS.forEach((o) => {
      const n = tier === "premium" ? 2 : 1;
      for (let k = 0; k < n; k++) {
        arr.push({
          r: o.r,
          angle: Math.random() * Math.PI * 2,
          speed: o.speed * 3.2,
          dir: o.dir,
        });
      }
    });
    return arr;
  }, [tier]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const linkGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(new Array(liveNodes.length * 6).fill(0), 3),
    );
    return g;
  }, [liveNodes.length]);

  const pos = (r: number, a: number, y = 0) =>
    dummy.position.set(Math.cos(a) * r, y, Math.sin(a) * r);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      const g = group.current;
      g.rotation.y += delta * 0.04;
      const tx = 0.5 + pointer.y * 0.14; // base tilt + parallax
      const tz = pointer.x * 0.08;
      g.rotation.x += (tx - g.rotation.x) * 0.04;
      g.rotation.z += (-tz - g.rotation.z) * 0.04;
    }

    // Core breathe
    if (coreRef.current) {
      const s = 1 + Math.sin(t * 1.4) * 0.05;
      coreRef.current.scale.setScalar(s);
    }

    // Base nodes ride their orbits
    if (baseRef.current) {
      baseNodes.forEach((n, i) => {
        const a = n.angle + t * n.speed * n.dir;
        pos(n.r, a, n.yJit);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        baseRef.current!.setMatrixAt(i, dummy.matrix);
      });
      baseRef.current.instanceMatrix.needsUpdate = true;
    }

    // Live nodes (glowing) + wires back to the core
    const linkArr = linkGeo.getAttribute("position") as THREE.BufferAttribute;
    liveNodes.forEach((n, i) => {
      const a = n.angle + t * n.speed * n.dir;
      const x = Math.cos(a) * n.r;
      const z = Math.sin(a) * n.r;
      const g = liveRefs.current[i];
      if (g) {
        g.position.set(x, n.yJit, z);
        const s = 1 + Math.sin(t * 2.2 + i) * 0.12;
        g.scale.setScalar(s);
      }
      linkArr.setXYZ(i * 2, 0, 0, 0);
      linkArr.setXYZ(i * 2 + 1, x, n.yJit, z);
    });
    linkArr.needsUpdate = true;

    // Travelling data signals
    if (signalRef.current) {
      signals.forEach((s, i) => {
        const a = s.angle + t * s.speed * s.dir;
        pos(s.r, a, 0);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        signalRef.current!.setMatrixAt(i, dummy.matrix);
      });
      signalRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={group} rotation={[0.5, 0, 0]}>
      {/* Orbits */}
      {ORBITS.map((o, i) => (
        <OrbitRing key={i} r={o.r} />
      ))}

      {/* Core wires to live nodes */}
      <lineSegments ref={linkRef} geometry={linkGeo}>
        <lineBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </lineSegments>

      {/* Core */}
      <group>
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={2.2}
            roughness={0.25}
            toneMapped={false}
          />
        </mesh>
        <Glow tex={tex} color={ACCENT} scale={4.4} opacity={0.55} />
        <Glow tex={tex} color={SIGNAL} scale={2.0} opacity={0.9} />
      </group>

      {/* Base nodes */}
      <instancedMesh
        ref={baseRef}
        args={[undefined, undefined, Math.max(1, baseNodes.length)]}
      >
        <sphereGeometry args={[0.055, 14, 14]} />
        <meshStandardMaterial
          color={BASE}
          emissive={BASE}
          emissiveIntensity={0.5}
          roughness={0.5}
        />
      </instancedMesh>

      {/* Live nodes with halos */}
      {liveNodes.map((n, i) => (
        <group
          key={i}
          ref={(el) => {
            liveRefs.current[i] = el;
          }}
        >
          <mesh>
            <sphereGeometry args={[0.075, 18, 18]} />
            <meshStandardMaterial
              color={n.color.getStyle()}
              emissive={n.color.getStyle()}
              emissiveIntensity={1.8}
              roughness={0.3}
              toneMapped={false}
            />
          </mesh>
          <Glow tex={tex} color={n.color.getStyle()} scale={0.95} opacity={0.85} />
        </group>
      ))}

      {/* Travelling signals */}
      <instancedMesh
        ref={signalRef}
        args={[undefined, undefined, Math.max(1, signals.length)]}
      >
        <sphereGeometry args={[0.05, 10, 10]} />
        <meshBasicMaterial color={SIGNAL} toneMapped={false} />
      </instancedMesh>

      {/* Depth field */}
      <Sparkles
        count={tier === "premium" ? 70 : 36}
        scale={[13, 6, 13]}
        size={1.6}
        speed={0.25}
        opacity={0.5}
        color={SIGNAL}
      />
    </group>
  );
}

export default function ProductEngine({
  tier = "premium",
  active = true,
}: {
  tier?: PerfTier;
  active?: boolean;
}) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 1.6, 9.2], fov: 42 }}
      dpr={dprCeiling(tier)}
      gl={{
        antialias: tier === "premium",
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ pointerEvents: "none" }}
    >
      <fog attach="fog" args={["#0b0c0e", 10, 19]} />
      <ambientLight intensity={0.7} />
      <pointLight position={[6, 5, 6]} intensity={38} color={ACCENT} />
      <pointLight position={[-7, -3, 2]} intensity={16} color="#ffffff" />
      <Engine tier={tier} />
    </Canvas>
  );
}
