import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

/** Favicon — the hand-drawn little guy (Sean) on a solid accent tile. */
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
        <svg width={34} height={34} viewBox="0 0 32 32" fill="none">
          <path
            d="M8 15.2C8 20.4 11.4 23.8 16 23.8C20.6 23.8 24 20.4 24 15.2"
            stroke="#fff"
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 15.2C7.3 10.2 9.4 6.3 12 6.1C11.7 7.6 13.2 8 14 6.4C14.9 8 17.1 8 18 6.4C18.8 8 20.3 7.6 20 6.1C22.6 6.3 24.7 10.2 24 15.2"
            stroke="#fff"
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.8 18C14.2 19.8 17.8 19.8 19.2 18"
            stroke="#fff"
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="13" cy="14.6" r="1.2" fill="#fff" />
          <circle cx="19" cy="14.6" r="1.2" fill="#fff" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
