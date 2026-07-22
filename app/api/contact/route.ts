import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { insertInquiry } from "@/lib/db";

export const runtime = "nodejs";

/** Fire-and-forget email notification via Resend, if configured. */
async function notifyByEmail(data: {
  name: string;
  email: string;
  message: string;
  organisation?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
}) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return;

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.organisation && `Organisation: ${data.organisation}`,
    data.projectType && `Project type: ${data.projectType}`,
    data.budget && `Budget: ${data.budget}`,
    data.timeline && `Timeline: ${data.timeline}`,
    "",
    data.message,
  ].filter(Boolean);

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: data.email,
        subject: `New project inquiry — ${data.name}`,
        text: lines.join("\n"),
      }),
    });
  } catch {
    // Email is best-effort; the inquiry is already persisted.
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the highlighted fields.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot: a filled hidden field means a bot. Accept silently, store nothing.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    const userAgent = request.headers.get("user-agent") ?? undefined;
    const result = await insertInquiry(data, { userAgent });

    // Best-effort email notification (does not block the response on failure).
    await notifyByEmail({
      name: data.name,
      email: data.email,
      message: data.message,
      organisation: data.organisation || undefined,
      projectType: data.projectType || undefined,
      budget: data.budget || undefined,
      timeline: data.timeline || undefined,
    });

    return NextResponse.json({ ok: true, persisted: result.persisted });
  } catch (err) {
    console.error("contact inquiry failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong on our side. Please email directly." },
      { status: 500 },
    );
  }
}
