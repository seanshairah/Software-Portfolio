import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sean Muchenje — The Digital Systems Studio",
    short_name: "Sean Muchenje",
    description:
      "Software designer building intelligent products, AI systems and scalable digital platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0c0e",
    theme_color: "#0b0c0e",
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
