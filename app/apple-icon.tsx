import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — full-bleed (iOS applies its own squircle mask). The full
 *  "system line": a signal enters a processing core and resolves to a product. */
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
          background: "#0b0b0d",
          backgroundImage: "linear-gradient(150deg,#1e1e24,#09090a)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 17, height: 17, borderRadius: 17, background: "#6a90f7" }} />
          <div style={{ width: 15, height: 6, background: "rgba(242,242,240,0.5)" }} />
          <div style={{ width: 66, height: 66, border: "9px solid #f2f2f0", borderRadius: 18 }} />
          <div style={{ width: 15, height: 6, background: "rgba(242,242,240,0.5)" }} />
          <div style={{ width: 17, height: 17, borderRadius: 17, background: "#6a90f7" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
