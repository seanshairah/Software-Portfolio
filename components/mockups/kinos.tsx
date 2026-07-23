import { Pill, CalendarCheck, Receipt, Mic, ShieldCheck, Check } from "lucide-react";

/* KinOS — the private family operating system. A calm, warm product, so the
   mockup wears its real "Dusk" identity (warm paper + dusk indigo, ember =
   attention, calm = well) rather than the neutral studio shell. Everything is
   deliberately quiet: ember only ever means attention. */

const C = {
  paper: "#f6f2ec",
  card: "#fbf8f3",
  cardHi: "#fefcf9",
  line: "#e6dfd3",
  ink: "#211d19",
  inkSoft: "#5a534b",
  inkFaint: "#928a7e",
  dusk: "#4e4b90",
  duskDeep: "#35335f",
  halo: "#a9a7e0",
  duskInk: "#edebf6",
  ember: "#d98a3d",
  emberSoft: "#f0d9be",
  emberText: "#8a531b",
  emberBg: "#fdf6ec",
  calm: "#4e9e7e",
  calmSoft: "#cfe6db",
  calmText: "#2f6a52",
};

/** The KinOS Orbit mark — a body, its ring, and two people in orbit. */
function OrbitMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <defs>
        <linearGradient id="km-dusk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4b4890" />
          <stop offset="1" stopColor="#2e2c54" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#km-dusk)" />
      <circle cx="24" cy="24" r="13" fill="none" stroke="#EDEBF6" strokeWidth="1.6" />
      <circle cx="24" cy="24" r="4.4" fill="#EDEBF6" />
      <circle cx="35.25" cy="12.75" r="3" fill="#EDEBF6" />
      <circle cx="10.3" cy="30.1" r="2.1" fill="#EDEBF6" opacity="0.55" />
    </svg>
  );
}

type Status = "well" | "attention";
interface Member {
  name: string;
  initials: string;
  status: Status;
  you?: boolean;
}
const members: Member[] = [
  { name: "Gogo Esther", initials: "GE", status: "attention" },
  { name: "Amai Chipo", initials: "AC", status: "well" },
  { name: "Baba Farai", initials: "BF", status: "well" },
  { name: "Tapiwa", initials: "T", status: "well" },
  { name: "Rudo", initials: "R", status: "well", you: true },
];

/** Family members arranged on the orbit ring. */
function Orbit() {
  const n = members.length;
  const pts = members.map((m, i) => {
    const a = (-90 + (i * 360) / n) * (Math.PI / 180);
    return { m, x: 50 + Math.cos(a) * 37, y: 50 + Math.sin(a) * 37 };
  });
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[15rem]">
      {/* ring + connectors + centre */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="50" cy="50" r="37" fill="none" stroke={C.line} strokeWidth="0.6" />
        {pts.map((p, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={p.x}
            y2={p.y}
            stroke={C.line}
            strokeWidth="0.5"
          />
        ))}
        <circle cx="50" cy="50" r="12" fill={C.duskDeep} />
        <circle cx="50" cy="50" r="12" fill="none" stroke={C.halo} strokeWidth="0.5" opacity="0.5" />
      </svg>
      {/* centre label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-[0.5rem] font-medium uppercase tracking-[0.12em]" style={{ color: C.halo }}>
          Moyo
        </p>
        <p className="text-[0.5rem]" style={{ color: C.duskInk, opacity: 0.7 }}>
          home
        </p>
      </div>
      {/* avatars */}
      {pts.map((p, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <div className="relative">
            <span
              className="flex size-8 items-center justify-center rounded-full text-[0.625rem] font-semibold"
              style={{
                background: p.m.you ? C.dusk : C.cardHi,
                color: p.m.you ? C.duskInk : C.inkSoft,
                border: `1px solid ${p.m.you ? C.dusk : C.line}`,
              }}
            >
              {p.m.initials}
            </span>
            <span
              className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full"
              style={{
                background: p.m.status === "attention" ? C.ember : C.calm,
                border: `1.5px solid ${C.paper}`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const signals = [
  { icon: CalendarCheck, label: "Check-in" },
  { icon: Receipt, label: "Receipt" },
  { icon: Pill, label: "Medication" },
  { icon: CalendarCheck, label: "Appointment" },
  { icon: Mic, label: "Voice note" },
];

export function KinosMockup() {
  return (
    <div
      className="overflow-hidden rounded-2xl shadow-raised"
      style={{ background: C.paper, border: `1px solid ${C.line}`, color: C.ink }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between gap-3 px-4 py-3"
        style={{ borderBottom: `1px solid ${C.line}` }}
      >
        <div className="flex items-center gap-2">
          <OrbitMark />
          <span className="text-[0.9375rem] font-semibold tracking-tight" style={{ color: C.ink }}>
            Kin<span style={{ color: C.dusk }}>OS</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[0.625rem] uppercase tracking-[0.12em] sm:inline" style={{ color: C.inkFaint }}>
            Daily Brief
          </span>
          <span className="text-[0.6875rem]" style={{ color: C.inkFaint }}>
            Thu 23 Jul
          </span>
          <span
            className="flex size-6 items-center justify-center rounded-full text-[0.5625rem] font-semibold"
            style={{ background: C.dusk, color: C.duskInk }}
          >
            R
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-5">
        {/* Daily Brief */}
        <div className="md:col-span-3">
          <h3 className="text-[1.0625rem] font-semibold tracking-tight" style={{ color: C.ink }}>
            Good morning, Rudo.
          </h3>
          <p className="mt-0.5 text-[0.8125rem]" style={{ color: C.inkSoft }}>
            One thing needs attention. Everyone else is well.
          </p>

          {/* Attention (ember) */}
          <div className="mt-3.5">
            <p className="mb-1.5 flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em]" style={{ color: C.emberText }}>
              <span className="size-1.5 rounded-full" style={{ background: C.ember }} /> Attention needed
            </p>
            <div
              className="rounded-xl p-3"
              style={{ background: C.emberBg, border: `1px solid ${C.emberSoft}` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.8125rem] font-medium" style={{ color: C.ink }}>
                    Gogo Esther&rsquo;s blood-pressure check is overdue
                  </p>
                  <p className="mt-0.5 text-[0.6875rem]" style={{ color: C.inkSoft }}>
                    Last taken 3 days ago · below her usual rhythm
                  </p>
                </div>
                <span
                  className="shrink-0 rounded-md px-2 py-1 text-[0.625rem] font-semibold"
                  style={{ background: C.ember, color: "#fff" }}
                >
                  I&rsquo;ll do it
                </span>
              </div>
              <p className="mt-2 flex items-center gap-1 text-[0.625rem]" style={{ color: C.emberText }}>
                <ShieldCheck className="size-3" /> You&rsquo;re on duty today
              </p>
            </div>
          </div>

          {/* Worth a check (dusk soft) */}
          <div className="mt-3">
            <p className="mb-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em]" style={{ color: C.inkFaint }}>
              Worth a check
            </p>
            <div
              className="flex items-center gap-2.5 rounded-xl p-2.5"
              style={{ background: C.card, border: `1px solid ${C.line}` }}
            >
              <span className="flex size-7 items-center justify-center rounded-lg" style={{ background: C.duskInk, color: C.dusk }}>
                <Pill className="size-3.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.75rem] font-medium" style={{ color: C.ink }}>
                  Metformin runs out in 3 days
                </p>
                <p className="text-[0.625rem]" style={{ color: C.inkFaint }}>
                  Refill near Amai · she&rsquo;s closest
                </p>
              </div>
            </div>
          </div>

          {/* Quiet (calm) */}
          <div
            className="mt-3 flex items-center gap-2 rounded-xl p-2.5"
            style={{ background: C.calmSoft, border: `1px solid ${C.calmSoft}` }}
          >
            <span className="flex size-5 items-center justify-center rounded-full" style={{ background: C.calm }}>
              <Check className="size-3 text-white" />
            </span>
            <p className="text-[0.75rem]" style={{ color: C.calmText }}>
              Amai, Baba and Tapiwa are all well — nothing needs you.
            </p>
          </div>
        </div>

        {/* Orbit */}
        <div className="md:col-span-2">
          <p className="mb-2 font-mono text-[0.5625rem] uppercase tracking-[0.14em]" style={{ color: C.inkFaint }}>
            Your orbit
          </p>
          <div className="rounded-2xl p-3" style={{ background: C.card, border: `1px solid ${C.line}` }}>
            <Orbit />
            <div className="mt-2 flex items-center justify-center gap-3 text-[0.5625rem]" style={{ color: C.inkFaint }}>
              <span className="flex items-center gap-1">
                <span className="size-1.5 rounded-full" style={{ background: C.calm }} /> Well
              </span>
              <span className="flex items-center gap-1">
                <span className="size-1.5 rounded-full" style={{ background: C.ember }} /> Attention
              </span>
            </div>
          </div>
          <p className="mt-2 flex items-center gap-1 text-[0.625rem]" style={{ color: C.inkFaint }}>
            <ShieldCheck className="size-3" style={{ color: C.dusk }} />
            Baba sees health · Rudo sees money · grants revocable
          </p>
        </div>
      </div>

      {/* Life Signals footer */}
      <div
        className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3"
        style={{ borderTop: `1px solid ${C.line}`, background: C.cardHi }}
      >
        <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em]" style={{ color: C.inkFaint }}>
          Life Signals
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          {signals.map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.625rem]"
              style={{ background: C.paper, border: `1px solid ${C.line}`, color: C.inkSoft }}
            >
              <s.icon className="size-2.5" /> {s.label}
            </span>
          ))}
        </div>
        <span className="ml-auto hidden text-[0.5625rem] sm:inline" style={{ color: C.inkFaint }}>
          Normalised to each person&rsquo;s baseline
        </span>
      </div>
    </div>
  );
}
