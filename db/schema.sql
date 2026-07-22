-- Sean Muchenje portfolio — database schema
-- Persists inbound project inquiries submitted through the /contact form.
-- Apply with:  node --env-file=.env.local scripts/setup-db.mjs

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
);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at
  ON contact_inquiries (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email
  ON contact_inquiries (email);
