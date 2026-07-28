import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const cell = (o = 1) => ({ width: 34, height: 34, borderRadius: 11, background: `rgba(255,255,255,${o})` });

/** Flat Apple touch icon — full-bleed accent tile with the grid mark (iOS masks). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2c5fe0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={cell()} />
            <div style={cell()} />
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={cell()} />
            <div style={cell(0.5)} />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
