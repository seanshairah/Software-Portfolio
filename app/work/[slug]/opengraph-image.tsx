import { ImageResponse } from "next/og";
import { projects, getProject } from "@/content/projects";

export const alt = "Case study — Sean Muchenje";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "Case study";
  const category = project?.category ?? "Project";
  const accent = project?.accent ?? "#3c7dff";

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
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#9da4ad", fontSize: 22 }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: accent }} />
          <span style={{ fontFamily: "monospace", textTransform: "uppercase", letterSpacing: 2 }}>
            {category}
          </span>
        </div>

        <div
          style={{
            color: "#f7f5ef",
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#9da4ad", fontSize: 22 }}>
          <span>Sean Muchenje · Case study</span>
          <span style={{ fontFamily: "monospace" }}>HARARE, ZIMBABWE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
