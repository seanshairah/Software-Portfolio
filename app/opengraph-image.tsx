import { ImageResponse } from "next/og";

export const alt =
  "Sean Muchenje — Software Designer & Full-Stack Product Developer";
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
          background: "#0b0c0e",
          padding: "72px",
          backgroundImage:
            "linear-gradient(to right, rgba(247,245,239,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,245,239,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              border: "3px solid #f7f5ef",
              borderRadius: 8,
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", left: -14, width: 7, height: 7, borderRadius: 7, background: "#3c7dff" }} />
            <div style={{ position: "absolute", right: -14, width: 7, height: 7, borderRadius: 7, background: "#3c7dff" }} />
          </div>
          <div style={{ color: "#f7f5ef", fontSize: 26, fontWeight: 500 }}>
            Sean Muchenje
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f7f5ef",
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            I design the systems behind intelligent digital products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9da4ad",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: 10, background: "#39ff88" }} />
            <span>Software Designer · Full-Stack Product Developer</span>
          </div>
          <span style={{ fontFamily: "monospace" }}>HARARE, ZIMBABWE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
