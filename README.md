# Sean Muchenje — The Digital Systems Studio

A production-ready portfolio for **Sean Muchenje**, software designer and
full-stack product developer based in Harare, Zimbabwe.

> **Complex systems enter. Clear products emerge.**

The site is built around one idea: Sean doesn't just design screens or write
code — he designs the full system behind a digital product. It moves between two
art-directed worlds (a light editorial world and a dark cinematic world), carries
a single visual signature (the **System Line**), and features an interactive
WebGL hero (the **Product Engine**) with a full accessible fallback.

---

## Stack

- **Next.js 15** (App Router, server components by default) + **React 19**
- **TypeScript** end to end
- **Tailwind CSS v4** — token-driven, two-world theming
- **Framer Motion** + **GSAP-ready** motion system, **Lenis** smooth scroll
- **Three.js / React Three Fiber / Drei** — the Product Engine WebGL hero
- **React Hook Form** + **Zod** — validated, accessible contact flow
- **Neon Postgres** (`@neondatabase/serverless`) — persists contact inquiries
- **Resend-ready** email notifications (optional)
- Deploy target: **Vercel**

See [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) for the full design system.

---

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev                  # http://localhost:3000
```

### Database setup

The contact form persists inquiries to Postgres. Create the table once:

```bash
node --env-file=.env.local scripts/setup-db.mjs
```

The schema lives in [`db/schema.sql`](./db/schema.sql). The form still works
without `RESEND_API_KEY`; email notification is best-effort and optional. If
`DATABASE_URL` is unset the API responds successfully but does not persist.

### Scripts

| Script              | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Local dev server                 |
| `npm run build`     | Production build                 |
| `npm run start`     | Serve the production build       |
| `npm run lint`      | ESLint                           |
| `npm run typecheck` | `tsc --noEmit`                   |

---

## Environment variables

Copy `.env.example` to `.env.local` for local development, and set the same keys
in the Vercel dashboard for deployment.

| Variable               | Required | Purpose                                                        |
| ---------------------- | :------: | -------------------------------------------------------------- |
| `DATABASE_URL`         |   Yes    | Postgres connection string (Neon recommended) for the contact form |
| `NEXT_PUBLIC_SITE_URL` |   Yes    | Canonical site URL — metadata, sitemap, Open Graph             |
| `RESEND_API_KEY`       |    No    | Enables email notification of new inquiries                    |
| `CONTACT_TO_EMAIL`     |    No    | Where inquiry emails are sent (needs `RESEND_API_KEY`)         |

Secrets live only in `.env.local` (gitignored) or Vercel's encrypted env store —
never in the repository.

---

## Architecture

```text
app/                     Routes (App Router)
  page.tsx               Homepage — the full story
  work/ , work/[slug]/   Work index + case studies (SSG)
  about/ services/ …     Editorial pages
  contact/               Contact form
  api/contact/route.ts   Validated inquiry endpoint → Postgres (+ Resend)
  opengraph-image, icon, sitemap, robots, manifest, not-found, error, loading
components/
  layout/ sections/ portfolio/ motion/ three/ diagrams/ mockups/ forms/ ui/
content/                 All copy & data (edit here, not in components)
  profile, navigation, services, process, skills, playground, socials, uses
  projects/              Six typed case studies
lib/                     utils, hooks, performance tiers, db, validation
db/                      SQL schema
scripts/                 One-off DB setup
```

### Performance & accessibility

- Three rendering tiers (`lib/performance.ts`): **premium / balanced /
  lightweight**, chosen from device capability and reduced-motion preference.
- WebGL is dynamically imported, pauses off-screen and on tab-hide, caps DPR,
  and disposes cleanly. Every fact shown in WebGL also exists in accessible HTML.
- Semantic HTML, skip link, visible focus, labelled forms, keyboard operable,
  full reduced-motion support — the site is excellent with motion disabled.

---

## Deploy to Vercel

1. Import the repository into Vercel.
2. Add the environment variables above (Production + Preview).
3. Deploy. No extra configuration is required; the build is `next build`.

---

Designed & built in Harare, Zimbabwe. The Digital Systems Studio.
