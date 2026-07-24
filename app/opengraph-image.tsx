import { ImageResponse } from "next/og";

export const alt = "Sean Muchenje — Software Designer & Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: "72px",
          backgroundImage:
            "linear-gradient(to right, rgba(237,237,236,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,237,236,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        {/* Brand: system line + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 9, height: 9, borderRadius: 9, background: "#6a90f7" }} />
            <div style={{ width: 9, height: 3, background: "rgba(237,237,236,0.45)" }} />
            <div style={{ width: 34, height: 34, border: "3px solid #ededec", borderRadius: 8 }} />
            <div style={{ width: 9, height: 3, background: "rgba(237,237,236,0.45)" }} />
            <div style={{ width: 9, height: 9, borderRadius: 9, background: "#6a90f7" }} />
          </div>
          <div style={{ color: "#ededec", fontSize: 26, fontWeight: 500, marginLeft: 4 }}>
            Sean Muchenje
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ededec",
              fontSize: 70,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 960,
            }}
          >
            I design and engineer intelligent software.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#a0a0a8",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: 10, background: "#34d68b" }} />
            <span>Software Designer · Full-Stack Product Developer</span>
          </div>
          <span style={{ fontFamily: "monospace" }}>HARARE, ZIMBABWE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
