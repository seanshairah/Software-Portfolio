import { cn } from "@/lib/utils";

/**
 * Static, accessible stand-in for the Product Engine. Rendered for
 * lightweight-tier / no-WebGL / reduced-motion visitors. Communicates the same
 * idea — layered system, nodes, connectors, signals — in plain SVG.
 */
export function WebGLFallback({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  // Three strata: interface, logic/data, infrastructure.
  const layers = [
    { y: 70, label: "Interface", nodes: [90, 190, 300, 410, 520, 610] },
    { y: 180, label: "Logic · Data · AI", nodes: [120, 230, 340, 450, 560] },
    { y: 290, label: "Infrastructure", nodes: [90, 200, 320, 440, 560, 640] },
  ];
  const accent = new Set(["0-2", "1-1", "1-3", "2-4"]);
  const signal = new Set(["0-4", "2-1"]);

  return (
    <svg
      viewBox="0 0 700 360"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="The Product Engine — a layered system diagram of interface, logic and infrastructure connected by data pathways."
    >
      <defs>
        <linearGradient id="pe-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3c7dff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3c7dff" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Vertical connectors between layers */}
      {layers.slice(0, -1).map((layer, li) =>
        layer.nodes.map((x, ni) => {
          const next = layers[li + 1].nodes;
          const tx = next[Math.min(ni, next.length - 1)];
          return (
            <line
              key={`v-${li}-${ni}`}
              x1={x}
              y1={layer.y}
              x2={tx}
              y2={layers[li + 1].y}
              stroke="#5b6472"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          );
        }),
      )}

      {/* Horizontal connectors within a layer */}
      {layers.map((layer, li) =>
        layer.nodes.slice(0, -1).map((x, ni) => (
          <line
            key={`h-${li}-${ni}`}
            x1={x}
            y1={layer.y}
            x2={layer.nodes[ni + 1]}
            y2={layer.y}
            stroke="#5b6472"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
        )),
      )}

      {/* Nodes */}
      {layers.map((layer, li) =>
        layer.nodes.map((x, ni) => {
          const id = `${li}-${ni}`;
          const isAccent = accent.has(id);
          const isSignal = signal.has(id);
          return (
            <g key={id}>
              {(isAccent || isSignal) && (
                <circle
                  cx={x}
                  cy={layer.y}
                  r="9"
                  fill={isSignal ? "#39ff88" : "#3c7dff"}
                  fillOpacity="0.14"
                />
              )}
              <circle
                cx={x}
                cy={layer.y}
                r={isAccent || isSignal ? 4 : 3}
                fill={isSignal ? "#39ff88" : isAccent ? "#3c7dff" : "#8a93a3"}
              >
                {animate && (isAccent || isSignal) && (
                  <animate
                    attributeName="fill-opacity"
                    values="0.55;1;0.55"
                    dur="2.6s"
                    repeatCount="indefinite"
                    begin={`${ni * 0.2}s`}
                  />
                )}
              </circle>
            </g>
          );
        }),
      )}

      {/* Layer labels */}
      {layers.map((layer) => (
        <text
          key={layer.label}
          x="8"
          y={layer.y - 16}
          className="fill-current"
          fontSize="9"
          fontFamily="var(--font-mono), monospace"
          letterSpacing="1.5"
          style={{ textTransform: "uppercase" }}
          fill="#676d75"
        >
          {layer.label}
        </text>
      ))}
    </svg>
  );
}
