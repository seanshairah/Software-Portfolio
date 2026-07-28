import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

const cell = (o = 1) => ({ width: 9, height: 9, borderRadius: 3, background: `rgba(255,255,255,${o})` });

/** Flat, simple favicon — a small grid on a solid accent tile (the wall of work). */
export default function Icon() {
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
          borderRadius: 11,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ display: "flex", gap: 5 }}>
            <div style={cell()} />
            <div style={cell()} />
          </div>
          <div style={{ display: "flex", gap: 5 }}>
            <div style={cell()} />
            <div style={cell(0.5)} />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
