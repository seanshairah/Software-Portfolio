// Idempotent database setup for the contact-inquiries table.
// Usage:  node --env-file=.env.local scripts/setup-db.mjs
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set. Run with: node --env-file=.env.local scripts/setup-db.mjs");
  process.exit(1);
}

const sql = neon(url);

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS contact_inquiries (
      id                BIGSERIAL PRIMARY KEY,
      name              TEXT        NOT NULL,
      email             TEXT        NOT NULL,
      organisation      TEXT,
      project_type      TEXT,
      budget            TEXT,
      timeline          TEXT,
      message           TEXT        NOT NULL,
      preferred_contact TEXT,
      source            TEXT        NOT NULL DEFAULT 'portfolio',
      user_agent        TEXT,
      created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries (created_at DESC)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries (email)`;

  const [{ count }] = await sql`SELECT count(*)::int AS count FROM contact_inquiries`;
  console.log(`OK — contact_inquiries ready. Existing rows: ${count}`);
}

main().catch((err) => {
  console.error("DB setup failed:", err.message);
  process.exit(1);
});
