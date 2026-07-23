import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

/** Favicon — the brand's "system line" (a signal enters a processing core and
 *  emerges as a resolved product) on a rounded near-black tile. */
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
          background: "#0b0b0d",
          backgroundImage: "linear-gradient(150deg,#1c1c21,#0a0a0b)",
          borderRadius: 11,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 5, height: 5, borderRadius: 5, background: "#6a90f7" }} />
          <div style={{ width: 3, height: 2.5, background: "rgba(242,242,240,0.55)" }} />
          <div style={{ width: 20, height: 20, border: "3px solid #f2f2f0", borderRadius: 5 }} />
          <div style={{ width: 3, height: 2.5, background: "rgba(242,242,240,0.55)" }} />
          <div style={{ width: 5, height: 5, borderRadius: 5, background: "#6a90f7" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
