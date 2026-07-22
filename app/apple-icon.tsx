import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#0b0c0e",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 82,
            height: 82,
            border: "9px solid #f7f5ef",
            borderRadius: 22,
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", left: -34, width: 18, height: 18, borderRadius: 18, background: "#3c7dff" }} />
          <div style={{ position: "absolute", right: -34, width: 18, height: 18, borderRadius: 18, background: "#3c7dff" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
