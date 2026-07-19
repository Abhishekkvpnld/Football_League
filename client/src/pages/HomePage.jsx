import { useState, useEffect } from "react";

const colors = {
  pitchDark: "#0c1b15",
  pitch: "#173226",
  pitchLight: "#234a34",
  chalk: "#f6f2e6",
  chalkDim: "#c9c2ac",
  lime: "#d7ff5c",
  limeDeep: "#a9e02a",
  clay: "#d1723a",
  gold: "#f2c14e",
  silver: "#cfd6d8",
  bronze: "#c98a4e",
  line: "rgba(246,242,230,0.12)",
};

const fonts = {
  display: "'Anton', sans-serif",
  body: "'Work Sans', sans-serif",
  mono: "'Space Mono', monospace",
};

const table = [
  { name: "Green Kites", swatch: colors.lime, p: 10, w: 8, d: 1, l: 1, gd: "+19", pts: 25 },
  { name: "Red Clay", swatch: colors.clay, p: 10, w: 7, d: 1, l: 2, gd: "+14", pts: 22 },
  { name: "Blue Monks", swatch: "#7ea8ff", p: 10, w: 5, d: 3, l: 2, gd: "+6", pts: 18 },
  { name: "Chalk United", swatch: colors.chalk, p: 10, w: 4, d: 2, l: 4, gd: "+1", pts: 14 },
  { name: "Purple Herons", swatch: "#b784e0", p: 10, w: 3, d: 3, l: 4, gd: "-3", pts: 12 },
  { name: "Rose FC", swatch: "#e07ea0", p: 10, w: 2, d: 2, l: 6, gd: "-10", pts: 8 },
];

const teams = [
  { code: "GK", name: "Green Kites", rec: "8-1-1", bg: colors.lime },
  { code: "RC", name: "Red Clay", rec: "7-1-2", bg: colors.clay },
  { code: "BM", name: "Blue Monks", rec: "5-3-2", bg: "#7ea8ff" },
  { code: "CU", name: "Chalk United", rec: "4-2-4", bg: colors.chalk },
  { code: "PH", name: "Purple Herons", rec: "3-3-4", bg: "#b784e0" },
  { code: "RF", name: "Rose FC", rec: "2-2-6", bg: "#e07ea0" },
  { code: "AT", name: "Amber Talons", rec: "4-4-2", bg: "#ffb454" },
  { code: "SW", name: "Seawater", rec: "3-2-5", bg: "#5ecf9e" },
];

const steps = [
  { tag: "BY FRIDAY", title: "Say you're in", body: "Message the group or fill the form. Spots fill up by Friday night, so don't wait for Sunday morning." },
  { tag: "SATURDAY", title: "Get your team", body: "Teams are balanced and posted Saturday evening — you'll know your side and your bibs colour." },
  { tag: "5:00 PM SHARP", title: "Show up and play", body: "Riverside Turf, Pitch 2. Bring boots and water. We bring the ball, bibs, and a referee." },
];

const facts = [
  { num: "08", label: "Teams playing" },
  { num: "5PM", label: "Kickoff, every week" },
  { num: "₹0", label: "Cost to join a game" },
  { num: "52", label: "Sundays a year" },
];

function medalColor(i) {
  if (i === 0) return colors.gold;
  if (i === 1) return colors.silver;
  if (i === 2) return colors.bronze;
  return "transparent";
}

function nextSunday5pm() {
  const now = new Date();
  const target = new Date(now);
  const day = now.getDay();
  let daysUntil = (7 - day) % 7;
  target.setHours(17, 0, 0, 0);
  if (daysUntil === 0 && now.getTime() > target.getTime()) daysUntil = 7;
  target.setDate(now.getDate() + daysUntil);
  return target;
}

function useCountdown() {
  const [remaining, setRemaining] = useState(() => nextSunday5pm().getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(nextSunday5pm().getTime() - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const clamp = Math.max(0, remaining);
  const days = Math.floor(clamp / 86400000);
  const hours = Math.floor((clamp % 86400000) / 3600000);
  const mins = Math.floor((clamp % 3600000) / 60000);
  const secs = Math.floor((clamp % 60000) / 1000);
  return { days, hours, mins, secs };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Kickabout() {
  const [navOpen, setNavOpen] = useState(false);
  const { days, hours, mins, secs } = useCountdown();

  return (
    <div className="min-h-screen w-full relative" style={{ background: colors.pitchDark, color: colors.chalk, fontFamily: fonts.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;600&display=swap');

        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes floatSlow { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-10px); } }
        @keyframes drift { 0% { transform:rotate(0deg); } 100% { transform:rotate(360deg); } }

        .fade-up { animation: fadeUp .7s ease both; }
        .grain::before{
          content:"";
          position:fixed; inset:0; pointer-events:none; z-index:60;
          opacity:0.05; mix-blend-mode:overlay;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .ticket-perf::before, .ticket-perf::after{
          content:"";
          position:absolute; top:-11px;
          width:22px; height:22px; border-radius:9999px;
          background:${colors.pitchDark};
        }
        .ticket-perf::before{ left:-37px; }
        .ticket-perf::after{ right:-37px; }
        .ticket-card{ transform:rotate(2.2deg); transition:transform .35s ease, box-shadow .35s ease; animation: floatSlow 6s ease-in-out infinite; }
        .ticket-card:hover{ transform:rotate(0deg) translateY(-6px) scale(1.01); }
        .btn-primary-fx{ transition: transform .18s ease, box-shadow .18s ease; }
        .btn-primary-fx:hover{ transform:translateY(-3px); box-shadow:0 10px 0 0 rgba(0,0,0,0.28); }
        .btn-ghost-fx{ transition: border-color .2s ease, color .2s ease, background .2s ease; }
        .btn-ghost-fx:hover{ border-color:${colors.lime}; color:${colors.lime}; background:rgba(215,255,92,0.06); }
        .row-hover{ transition: background .2s ease; }
        .row-hover:hover{ background:rgba(215,255,92,0.05); }
        .team-card-fx{ transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
        .lined-bg{
          background-image:
            radial-gradient(700px 420px at 18% -10%, rgba(215,255,92,0.10), transparent 60%),
            radial-gradient(600px 400px at 100% 10%, rgba(209,114,58,0.10), transparent 60%),
            repeating-linear-gradient(90deg, transparent, transparent 79px, ${colors.line} 79px, ${colors.line} 80px);
        }
        .pitch-lines{ animation: drift 90s linear infinite; transform-origin: center; }
        ::selection{ background:${colors.lime}; color:${colors.pitchDark}; }
      `}</style>

      <div className="grain" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ background: "rgba(12,27,21,0.85)", borderColor: colors.line }}>
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full" style={{ background: `linear-gradient(135deg, ${colors.lime}, ${colors.limeDeep})`, boxShadow: `0 0 0 3px ${colors.pitchLight}, 0 0 18px rgba(215,255,92,0.35)` }}>
              <div
                className="absolute inset-2"
                style={{
                  background: colors.pitchDark,
                  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                }}
              />
            </div>
            <div style={{ fontFamily: fonts.display, fontSize: 20, textTransform: "uppercase", letterSpacing: "0.02em" }}>Kickabout</div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            {["Fixture", "Table", "Teams", "Join"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="opacity-75 hover:opacity-100 transition-opacity"
                style={{ color: colors.chalk }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.lime)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.chalk)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div
            className="hidden sm:flex items-center gap-2 text-xs rounded-full border px-3.5 py-1.5"
            style={{ fontFamily: fonts.mono, borderColor: colors.line, color: colors.chalkDim }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.lime, boxShadow: `0 0 8px ${colors.lime}` }} />
            Kickoff in {days}d {pad(hours)}h {pad(mins)}m
          </div>

          <button className="md:hidden text-sm" onClick={() => setNavOpen(!navOpen)} style={{ color: colors.chalk }}>
            Menu
          </button>
        </div>

        {navOpen && (
          <div className="md:hidden flex flex-col gap-4 px-8 pb-5 text-sm uppercase tracking-wider">
            {["Fixture", "Table", "Teams", "Join"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: colors.chalkDim }} onClick={() => setNavOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="lined-bg relative overflow-hidden pt-20 pb-10 md:pt-24">
        {/* decorative aerial pitch marking */}
        <svg
          className="pitch-lines absolute pointer-events-none opacity-[0.07]"
          style={{ right: "-180px", top: "-120px", width: 560, height: 560 }}
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="90" fill="none" stroke={colors.chalk} strokeWidth="0.6" />
          <circle cx="100" cy="100" r="28" fill="none" stroke={colors.chalk} strokeWidth="0.6" />
          <circle cx="100" cy="100" r="2" fill={colors.chalk} />
          <line x1="100" y1="10" x2="100" y2="190" stroke={colors.chalk} strokeWidth="0.6" />
          <rect x="10" y="60" width="30" height="80" fill="none" stroke={colors.chalk} strokeWidth="0.6" />
          <rect x="160" y="60" width="30" height="80" fill="none" stroke={colors.chalk} strokeWidth="0.6" />
        </svg>

        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <div className="fade-up" style={{ animationDelay: "0.05s" }}>
            <div className="flex items-center gap-2 mb-4 text-xs" style={{ fontFamily: fonts.mono, color: colors.lime, letterSpacing: "0.14em" }}>
              <span style={{ fontSize: 8 }}>●</span> FRIENDLY · 7-A-SIDE · ALL WELCOME
            </div>
            <h1 style={{ fontFamily: fonts.display, textTransform: "uppercase", lineHeight: 0.9, fontSize: "clamp(50px, 8vw, 100px)" }}>
              Football,
              <br />
              every{" "}
              <span style={{ background: `linear-gradient(120deg, ${colors.lime}, ${colors.limeDeep})`, color: colors.pitchDark, padding: "0 12px", boxShadow: "0 4px 0 rgba(0,0,0,0.15)" }}>
                Sunday
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg" style={{ color: colors.chalkDim }}>
              No trials, no fees to join, no egos. Turn up with boots, we sort the teams. Kickoff is always 5:00 PM
              — rain, shine, or monsoon drizzle.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                className="btn-primary-fx inline-flex items-center gap-2 rounded px-6 py-4 text-sm font-bold"
                style={{ fontFamily: fonts.mono, background: colors.lime, color: colors.pitchDark }}
              >
                Get a spot this week →
              </a>
              <a
                href="#fixture"
                className="btn-ghost-fx inline-flex items-center gap-2 rounded border px-6 py-4 text-sm"
                style={{ fontFamily: fonts.mono, borderColor: colors.line, color: colors.chalk }}
              >
                See this Sunday's match
              </a>
            </div>

            {/* countdown scoreboard */}
            <div className="mt-10 flex gap-3">
              {[["DAYS", days], ["HRS", hours], ["MIN", mins], ["SEC", secs]].map(([label, val]) => (
                <div
                  key={label}
                  className="rounded-md px-4 py-3 text-center"
                  style={{ background: colors.pitch, border: `1px solid ${colors.line}`, minWidth: 64 }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 26, color: colors.lime, fontWeight: 700 }}>{pad(val)}</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 9, color: colors.chalkDim, letterSpacing: "0.1em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Ticket */}
          <div className="relative fade-up" style={{ animationDelay: "0.2s" }}>
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ width: 340, height: 340, background: colors.lime, opacity: 0.16, filter: "blur(90px)", top: "-40px", right: "-30px" }}
            />
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ width: 260, height: 260, background: colors.clay, opacity: 0.14, filter: "blur(80px)", bottom: "-30px", left: "-20px" }}
            />

            <div
              id="fixture"
              className="ticket-card relative rounded-md"
              style={{ background: colors.chalk, color: colors.pitchDark, boxShadow: "0 40px 70px -25px rgba(0,0,0,0.6)" }}
            >
              <div className="flex justify-between items-start px-7 pt-6 pb-4">
                <div className="text-xs" style={{ fontFamily: fonts.mono, letterSpacing: "0.12em", color: colors.pitch, opacity: 0.6 }}>
                  MATCHDAY TICKET
                </div>
                <div className="text-xs" style={{ fontFamily: fonts.mono, letterSpacing: "0.12em", color: colors.pitch, opacity: 0.6 }}>
                  № 24
                </div>
              </div>

              <div className="flex items-center justify-between px-7 pb-5">
                <div className="flex-1 text-center">
                  <div
                    className="mx-auto mb-2 rounded-full flex items-center justify-center"
                    style={{ width: 54, height: 54, background: `linear-gradient(135deg, ${colors.pitch}, ${colors.pitchLight})`, color: colors.chalk, fontFamily: fonts.display, fontSize: 18, boxShadow: "0 6px 14px rgba(23,50,38,0.35)" }}
                  >
                    GK
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide">Green Kites</div>
                </div>
                <div className="px-2 text-sm" style={{ fontFamily: fonts.mono, color: colors.pitch, opacity: 0.45 }}>
                  VS
                </div>
                <div className="flex-1 text-center">
                  <div
                    className="mx-auto mb-2 rounded-full flex items-center justify-center"
                    style={{ width: 54, height: 54, background: `linear-gradient(135deg, ${colors.clay}, #e08a52)`, color: colors.chalk, fontFamily: fonts.display, fontSize: 18, boxShadow: "0 6px 14px rgba(209,114,58,0.35)" }}
                  >
                    RC
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide">Red Clay</div>
                </div>
              </div>

              <div className="ticket-perf relative mx-7" style={{ borderTop: "2px dashed rgba(15,32,25,0.25)" }} />

              <div className="grid grid-cols-2 gap-x-3 gap-y-3 px-7 pt-5 pb-5" style={{ fontFamily: fonts.mono }}>
                <div>
                  <div className="text-[10px] uppercase opacity-50 tracking-wide">Date</div>
                  <div className="text-sm font-bold">Sun, Jul 26</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase opacity-50 tracking-wide">Kickoff</div>
                  <div className="text-sm font-bold">5:00 PM</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase opacity-50 tracking-wide">Pitch</div>
                  <div className="text-sm font-bold">Riverside Turf, Pitch 2</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase opacity-50 tracking-wide">Format</div>
                  <div className="text-sm font-bold">7-a-side · 40 min</div>
                </div>
              </div>

              <div className="px-7 pb-6 flex items-center gap-[2px]" style={{ opacity: 0.35 }}>
                {Array.from({ length: 46 }).map((_, i) => (
                  <div key={i} style={{ width: i % 5 === 0 ? 2 : 1, height: 16, background: colors.pitch }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <div className="border-t border-b" style={{ borderColor: colors.line, background: colors.pitch }}>
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.label} className="text-center py-7 px-3" style={{ borderLeft: i === 0 ? "none" : `1px solid ${colors.line}` }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 28, color: colors.lime }}>{f.num}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide" style={{ fontFamily: fonts.mono, color: colors.chalkDim }}>
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* League table */}
      <section id="table" className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-11">
            <h2 style={{ fontFamily: fonts.display, textTransform: "uppercase", fontSize: "clamp(28px,4vw,42px)" }}>League table</h2>
            <p className="max-w-xs text-sm" style={{ color: colors.chalkDim }}>
              Updated after every Sunday. Three points a win, one for a draw — same as it's always been.
            </p>
          </div>

          <div className="rounded-lg border overflow-hidden overflow-x-auto" style={{ background: colors.pitch, borderColor: colors.line, boxShadow: "0 30px 60px -35px rgba(0,0,0,0.6)" }}>
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr>
                  {["#", "Team", "P", "W", "D", "L", "GD", "Pts"].map((h, i) => (
                    <th
                      key={h}
                      className={`text-[11px] uppercase tracking-wide px-4 py-4 border-b ${i > 1 ? "text-center" : "text-left"}`}
                      style={{ fontFamily: fonts.mono, color: colors.chalkDim, borderColor: colors.line }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => (
                  <tr key={row.name} className="row-hover" style={{ borderBottom: i === table.length - 1 ? "none" : `1px solid ${colors.line}` }}>
                    <td className="px-4 py-4">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                        style={{
                          fontFamily: fonts.mono,
                          background: i < 3 ? medalColor(i) : "transparent",
                          color: i < 3 ? colors.pitchDark : colors.chalkDim,
                          border: i < 3 ? "none" : `1px solid ${colors.line}`,
                        }}
                      >
                        {i + 1}
                      </div>
                    </td>
                    <td className="px-4 py-4 flex items-center gap-3 font-semibold text-sm" style={{ fontFamily: fonts.body }}>
                      <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: row.swatch }} />
                      {row.name}
                    </td>
                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono }}>{row.p}</td>
                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono }}>{row.w}</td>
                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono }}>{row.d}</td>
                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono }}>{row.l}</td>
                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono }}>{row.gd}</td>
                    <td className="text-center px-4 py-4 text-sm font-bold" style={{ fontFamily: fonts.mono, color: colors.lime }}>{row.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-11">
            <h2 style={{ fontFamily: fonts.display, textTransform: "uppercase", fontSize: "clamp(28px,4vw,42px)" }}>How Sunday works</h2>
            <p className="max-w-xs text-sm" style={{ color: colors.chalkDim }}>
              Three steps, every week. No app to download, no season-long commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-lg border overflow-hidden" style={{ background: colors.line, borderColor: colors.line }}>
            {steps.map((s) => (
              <div key={s.tag} className="p-8 relative overflow-hidden" style={{ background: colors.pitchDark }}>
                <div className="text-xs" style={{ fontFamily: fonts.mono, color: colors.lime }}>{s.tag}</div>
                <h3 className="mt-3 mb-2 text-xl" style={{ fontFamily: fonts.display, textTransform: "uppercase" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: colors.chalkDim }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section id="teams" className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-11">
            <h2 style={{ fontFamily: fonts.display, textTransform: "uppercase", fontSize: "clamp(28px,4vw,42px)" }}>The eight teams</h2>
            <p className="max-w-xs text-sm" style={{ color: colors.chalkDim }}>
              Rotating squads, drawn fresh each season so you play with different people every few weeks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {teams.map((t) => (
              <div
                key={t.code}
                className="team-card-fx text-center rounded-lg border px-4 py-6"
                style={{ background: colors.pitch, borderColor: colors.line, borderTop: `3px solid ${t.bg}` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = t.bg;
                  e.currentTarget.style.boxShadow = `0 16px 30px -18px ${t.bg}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = colors.line;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="mx-auto mb-3 rounded-full flex items-center justify-center"
                  style={{ width: 48, height: 48, background: t.bg, color: colors.pitchDark, fontFamily: fonts.display, fontSize: 14 }}
                >
                  {t.code}
                </div>
                <div className="text-[13px] font-semibold">{t.name}</div>
                <div className="mt-1.5 text-[11px]" style={{ fontFamily: fonts.mono, color: colors.chalkDim }}>{t.rec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div
        id="join"
        className="relative text-center py-24 md:py-28 border-t overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${colors.pitch} 0%, ${colors.pitchDark} 100%)`, borderColor: colors.line }}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 500, height: 500, background: colors.lime, opacity: 0.08, filter: "blur(140px)", top: "-120px", left: "50%", transform: "translateX(-50%)" }}
        />
        <div className="max-w-6xl mx-auto px-8 relative">
          <h2
            className="mx-auto"
            style={{ fontFamily: fonts.display, textTransform: "uppercase", fontSize: "clamp(34px,6vw,58px)", lineHeight: 1.02, maxWidth: "16ch" }}
          >
            Rain, shine, or monsoon — <span style={{ color: colors.lime }}>we're on the pitch by five.</span>
          </h2>
          <p className="mx-auto mt-6 mb-9 max-w-md text-base" style={{ color: colors.chalkDim }}>
            Bring a friend, bring boots, bring nothing at all. Every Sunday is a fresh game and everyone gets a run-out.
          </p>
          <a
            href="#"
            className="btn-primary-fx inline-flex items-center gap-2 rounded px-6 py-4 text-sm font-bold"
            style={{ fontFamily: fonts.mono, background: colors.lime, color: colors.pitchDark }}
          >
            Reserve your spot for Sunday →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-9" style={{ borderColor: colors.line }}>
        <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-between items-center gap-4">
          <div className="text-xs" style={{ fontFamily: fonts.mono, color: colors.chalkDim }}>
            KICKABOUT · Kolappa Turf, Pitch  · Kickoff 7:00 AM every Sunday
          </div>
          <div className="flex gap-5 text-sm" style={{ color: colors.chalkDim }}>
            <a href="#" onMouseEnter={(e) => (e.currentTarget.style.color = colors.lime)} onMouseLeave={(e) => (e.currentTarget.style.color = colors.chalkDim)}>Instagram</a>
            <a href="#" onMouseEnter={(e) => (e.currentTarget.style.color = colors.lime)} onMouseLeave={(e) => (e.currentTarget.style.color = colors.chalkDim)}>WhatsApp group</a>
            <a href="#" onMouseEnter={(e) => (e.currentTarget.style.color = colors.lime)} onMouseLeave={(e) => (e.currentTarget.style.color = colors.chalkDim)}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
