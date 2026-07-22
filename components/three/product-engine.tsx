"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { dprCeiling, type PerfTier } from "@/lib/performance";

/* ──────────────────────────────────────────────────────────────────────────
   The Product Engine — a digital system assembling itself from interface
   layers, user/data/API/AI/payment nodes and the connectors between them.
   Pure geometry; all labels + a full description live in accessible HTML.
   ────────────────────────────────────────────────────────────────────────── */

interface Node {
  pos: THREE.Vector3;
  layer: number;
  role: "base" | "accent" | "signal";
  color: THREE.Color;
}

const C_BASE = new THREE.Color("#5b6472");
const C_ACCENT = new THREE.Color("#3c7dff");
const C_GREEN = new THREE.Color("#39ff88");
const C_RED = new THREE.Color("#ff5a5a");
const LAYERS = [1.7, 0, -1.7];

function buildGraph(density: number) {
  const nodes: Node[] = [];
  const cols = density;
  const rows = 3;
  LAYERS.forEach((y, li) => {
    for (let cx = 0; cx < cols; cx++) {
      for (let cz = 0; cz < rows; cz++) {
        const x = (cx / (cols - 1) - 0.5) * 7.2 + (Math.random() - 0.5) * 0.5;
        const z = (cz / (rows - 1) - 0.5) * 3.6 + (Math.random() - 0.5) * 0.4;
        const yy = y + (Math.random() - 0.5) * 0.5;
        const r = Math.random();
        const role: Node["role"] =
          r > 0.86 ? "signal" : r > 0.66 ? "accent" : "base";
        const color =
          role === "signal"
            ? [C_GREEN, C_RED, C_ACCENT][Math.floor(Math.random() * 3)]
            : role === "accent"
              ? C_ACCENT
              : C_BASE;
        nodes.push({ pos: new THREE.Vector3(x, yy, z), layer: li, role, color });
      }
    }
  });

  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const d = nodes[i].pos.distanceTo(nodes[j].pos);
      if (d < 2.2 && Math.random() < 0.5) edges.push([i, j]);
    }
  }
  return { nodes, edges };
}

function Engine({ tier }: { tier: PerfTier }) {
  const group = useRef<THREE.Group>(null);
  const signalsRef = useRef<THREE.InstancedMesh>(null);
  const accentRef = useRef<THREE.InstancedMesh>(null);
  const { pointer } = useThree();

  const density = tier === "premium" ? 6 : 5;
  const { nodes, edges } = useMemo(() => buildGraph(density), [density]);

  // Split nodes into base + accent instanced sets.
  const baseNodes = useMemo(() => nodes.filter((n) => n.role === "base"), [nodes]);
  const liveNodes = useMemo(
    () => nodes.filter((n) => n.role !== "base"),
    [nodes],
  );

  // Line geometry for all connectors (single draw call).
  const lineGeo = useMemo(() => {
    const positions: number[] = [];
    edges.forEach(([a, b]) => {
      positions.push(
        nodes[a].pos.x,
        nodes[a].pos.y,
        nodes[a].pos.z,
        nodes[b].pos.x,
        nodes[b].pos.y,
        nodes[b].pos.z,
      );
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    return g;
  }, [nodes, edges]);

  // Travelling signals: pick a subset of edges, animate a dot along each.
  const signalCount = tier === "premium" ? 10 : 6;
  const signalEdges = useMemo(
    () =>
      edges
        .map((e, i) => ({ e, i }))
        .sort(() => Math.random() - 0.5)
        .slice(0, signalCount)
        .map(({ e }) => e),
    [edges, signalCount],
  );

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Pointer parallax + slow autorotation.
    const g = group.current;
    g.rotation.y += delta * 0.05;
    const targetX = pointer.y * 0.18;
    const targetZ = pointer.x * 0.12;
    g.rotation.x += (targetX - g.rotation.x) * 0.04;
    g.rotation.z += (-targetZ - g.rotation.z) * 0.04;

    const t = state.clock.elapsedTime;

    // Pulse live nodes.
    if (accentRef.current) {
      liveNodes.forEach((n, idx) => {
        const s = 0.045 + Math.sin(t * 2 + idx) * 0.02 + 0.05;
        dummy.position.copy(n.pos);
        dummy.scale.setScalar(s / 0.06);
        dummy.updateMatrix();
        accentRef.current!.setMatrixAt(idx, dummy.matrix);
      });
      accentRef.current.instanceMatrix.needsUpdate = true;
    }

    // Move signals along their edges.
    if (signalsRef.current) {
      signalEdges.forEach(([a, b], idx) => {
        const speed = 0.22 + (idx % 3) * 0.05;
        const p = (t * speed + idx * 0.37) % 1;
        // Mutate in place (copy then lerp) — no per-frame allocation.
        dummy.position.copy(nodes[a].pos).lerp(nodes[b].pos, p);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        signalsRef.current!.setMatrixAt(idx, dummy.matrix);
      });
      signalsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={group}>
      {/* Connectors */}
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial
          color="#5b6472"
          transparent
          opacity={0.28}
          depthWrite={false}
        />
      </lineSegments>

      {/* Base nodes */}
      <instancedMesh
        args={[undefined, undefined, baseNodes.length]}
        ref={(m) => {
          if (!m) return;
          baseNodes.forEach((n, i) => {
            dummy.position.copy(n.pos);
            dummy.scale.setScalar(0.5);
            dummy.updateMatrix();
            m.setMatrixAt(i, dummy.matrix);
          });
          m.instanceMatrix.needsUpdate = true;
        }}
      >
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial
          color="#8a93a3"
          emissive="#3a4250"
          emissiveIntensity={0.4}
          roughness={0.5}
        />
      </instancedMesh>

      {/* Live (accent / signal) nodes with colour + pulse */}
      <instancedMesh
        ref={accentRef}
        args={[undefined, undefined, liveNodes.length]}
      >
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          vertexColors={false}
          color="#3c7dff"
          emissive="#3c7dff"
          emissiveIntensity={1.6}
          roughness={0.3}
          toneMapped={false}
        />
      </instancedMesh>

      {/* Travelling data signals */}
      <instancedMesh
        ref={signalsRef}
        args={[undefined, undefined, signalEdges.length]}
      >
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color="#9dc2ff" toneMapped={false} />
      </instancedMesh>

      {/* Interface layer panels */}
      {LAYERS.map((y, i) => (
        <Panel key={i} y={y} tier={tier} index={i} />
      ))}
    </group>
  );
}

function Panel({ y, index }: { y: number; tier: PerfTier; index: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = y + Math.sin(state.clock.elapsedTime * 0.4 + index) * 0.06;
  });
  const w = 3.4 - index * 0.2;
  const h = 1.05;
  const edges = useMemo(() => {
    const geo = new THREE.PlaneGeometry(w, h);
    return new THREE.EdgesGeometry(geo);
  }, [w, h]);

  return (
    <group ref={ref} position={[index * 0.5 - 0.5, y, index * -0.4]} rotation={[0, 0.15, 0]}>
      <mesh>
        <planeGeometry args={[w, h]} />
        <meshBasicMaterial
          color="#0f1216"
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#3c7dff" transparent opacity={0.5} />
      </lineSegments>
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
      camera={{ position: [0, 0.4, 8.5], fov: 42 }}
      dpr={dprCeiling(tier)}
      gl={{
        antialias: tier === "premium",
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ pointerEvents: "none" }}
    >
      <fog attach="fog" args={["#0b0c0e", 9, 16]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 4, 6]} intensity={40} color="#3c7dff" />
      <pointLight position={[-6, -3, 2]} intensity={22} color="#ffffff" />
      <Engine tier={tier} />
    </Canvas>
  );
}
