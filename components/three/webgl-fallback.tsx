import { cn } from "@/lib/utils";

/**
 * Static, accessible stand-in for the Product Engine. Rendered for
 * lightweight-tier / no-WebGL / reduced-motion visitors. Communicates the same
 * idea — a luminous core inside concentric system orbits, with nodes and data
 * signals — in plain SVG.
 */
export function WebGLFallback({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  const cx = 350;
  const cy = 230;

  // Tilted concentric orbits (interface · logic/data · infrastructure).
  const orbits = [
    { rx: 120, ry: 44, label: "Interface" },
    { rx: 210, ry: 78, label: "Logic · Data · AI" },
    { rx: 300, ry: 112, label: "Infrastructure" },
  ];

  // Nodes riding each orbit; a few "live" ones glow.
  const nodesFor = (rx: number, ry: number, count: number, live: number[]) =>
    Array.from({ length: count }, (_, i) => {
      const a = (i / count) * Math.PI * 2 + rx * 0.01;
      return {
        x: cx + Math.cos(a) * rx,
        y: cy + Math.sin(a) * ry,
        live: live.includes(i),
        i,
      };
    });

  const rings = [
    { ...orbits[0], nodes: nodesFor(120, 44, 5, [1]) },
    { ...orbits[1], nodes: nodesFor(210, 78, 7, [2, 5]) },
    { ...orbits[2], nodes: nodesFor(300, 112, 9, [0, 6]) },
  ];

  // Ellipse path (for the visible ring + a travelling signal to follow).
  const ellipsePath = (rx: number, ry: number) =>
    `M ${cx - rx},${cy} a ${rx},${ry} 0 1,0 ${rx * 2},0 a ${rx},${ry} 0 1,0 ${-rx * 2},0`;

  return (
    <svg
      viewBox="0 0 700 460"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="The Product Engine — a luminous core inside concentric system orbits (interface, logic and infrastructure), with nodes and data signals travelling along them."
    >
      <defs>
        <radialGradient id="pe-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dcecff" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#3c7dff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3c7dff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pe-node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Orbits */}
      {rings.map((ring, li) => (
        <ellipse
          key={`o-${li}`}
          cx={cx}
          cy={cy}
          rx={ring.rx}
          ry={ring.ry}
          fill="none"
          stroke="#3c7dff"
          strokeOpacity={0.24}
          strokeWidth="1"
        />
      ))}

      {/* Core glow + core */}
      <circle cx={cx} cy={cy} r="90" fill="url(#pe-core)" />
      <circle cx={cx} cy={cy} r="11" fill="#3c7dff">
        {animate && (
          <animate
            attributeName="r"
            values="10;12.5;10"
            dur="3.2s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <circle cx={cx} cy={cy} r="5" fill="#dcecff" />

      {/* Nodes */}
      {rings.map((ring, li) =>
        ring.nodes.map((n) => (
          <g key={`n-${li}-${n.i}`}>
            {n.live && <circle cx={n.x} cy={n.y} r="10" fill="url(#pe-node)" />}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.live ? 3.6 : 2.4}
              fill={n.live ? "#5eead4" : "#7f8ba3"}
            >
              {animate && n.live && (
                <animate
                  attributeName="fill-opacity"
                  values="0.6;1;0.6"
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin={`${li * 0.4}s`}
                />
              )}
            </circle>
          </g>
        )),
      )}

      {/* Travelling data signals along the orbits */}
      {animate &&
        rings.map((ring, li) => (
          <circle key={`s-${li}`} r="2.6" fill="#dcecff">
            <animateMotion
              dur={`${7 + li * 2.5}s`}
              repeatCount="indefinite"
              path={ellipsePath(ring.rx, ring.ry)}
            />
          </circle>
        ))}
    </svg>
  );
}
