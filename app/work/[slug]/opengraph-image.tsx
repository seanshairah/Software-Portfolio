import { ImageResponse } from "next/og";
import { projects, getProject } from "@/content/projects";
import { PROJECT_GLYPHS, appIconGradient } from "@/components/ui/app-icon";

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
  const accent = project?.accent ?? "#2c5fe0";
  const glyph = project ? PROJECT_GLYPHS[project.mockup] : null;

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
        {/* Product app icon + category */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 24,
              backgroundImage: appIconGradient(accent),
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            {glyph && (
              <svg width="96" height="96" viewBox="0 0 100 100">
                <g
                  stroke="#fff"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.97"
                >
                  {glyph}
                </g>
              </svg>
            )}
          </div>
          <span
            style={{
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#a0a0a8",
              fontSize: 22,
            }}
          >
            {category}
          </span>
        </div>

        <div
          style={{
            color: "#ededec",
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            maxWidth: 960,
          }}
        >
          {title}
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
          <span>Sean Muchenje · Case study</span>
          <span style={{ fontFamily: "monospace" }}>HARARE, ZIMBABWE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
