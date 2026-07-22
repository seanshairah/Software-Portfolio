import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

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
          background: "#0b0c0e",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 22,
            height: 22,
            border: "2.5px solid #f7f5ef",
            borderRadius: 6,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: -9,
              width: 5,
              height: 5,
              borderRadius: 5,
              background: "#3c7dff",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -9,
              width: 5,
              height: 5,
              borderRadius: 5,
              background: "#3c7dff",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
