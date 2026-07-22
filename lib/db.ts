import "server-only";
import { neon } from "@neondatabase/serverless";
import type { ContactInput } from "./validation";

/**
 * Lazily-created Neon SQL client. Kept server-only so the connection string
 * never reaches the browser bundle. Returns null when DATABASE_URL is unset, so
 * the app builds and runs without a database configured.
 */
function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

export async function insertInquiry(
  data: ContactInput,
  meta: { userAgent?: string } = {},
): Promise<{ ok: boolean; persisted: boolean }> {
  const sql = getSql();
  if (!sql) {
    // No database configured — surface success but signal it wasn't stored so
    // the API can decide whether that is acceptable (e.g. email-only setups).
    return { ok: true, persisted: false };
  }

  await sql`
    INSERT INTO contact_inquiries
      (name, email, organisation, project_type, budget, timeline, message, preferred_contact, source, user_agent)
    VALUES (
      ${data.name},
      ${data.email},
      ${data.organisation || null},
      ${data.projectType || null},
      ${data.budget || null},
      ${data.timeline || null},
      ${data.message},
      ${data.preferredContact || null},
      ${"portfolio"},
      ${meta.userAgent || null}
    )
  `;

  return { ok: true, persisted: true };
}
