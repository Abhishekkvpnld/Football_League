import "../styles/home.css";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import { useCountdown } from "../hooks/useCountdown";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Facts from "../components/Facts";
import { facts } from "../utils/facts";
import { table } from "../utils/table";
import { teams } from "../utils/teams";
import { steps } from "../utils/steps";
import LeagueTable from "../components/LeagueTable";
import { medalColor } from "../utils/medalColors";





// Countdown to next Sunday 7:00 AM
export function nextSunday7am() {
  const now = new Date();
  const target = new Date(now);
  const day = now.getDay();
  let daysUntil = (7 - day) % 7;
  target.setHours(7, 0, 0, 0);
  if (daysUntil === 0 && now.getTime() > target.getTime()) daysUntil = 7;
  target.setDate(now.getDate() + daysUntil);
  return target;
}

// Pad a number with leading zeros
export function pad(n) {
  return String(n).padStart(2, "0");
}


// Main Kickabout page component
export default function Kickabout() {
  const [navOpen, setNavOpen] = useState(false);
  const { days, hours, mins, secs } = useCountdown();

  return (
    <div className="min-h-screen w-full relative" style={{ background: colors.pitchDark, color: colors.chalk, fontFamily: fonts.body }}>

      <div className="grain" />

      {/* Header */}
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />

      {/* Hero */}
      <Hero />

      {/* Facts strip */}
      <Facts />

      {/* League table */}
      <LeagueTable />

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
            Rain, shine, or monsoon — <span style={{ color: colors.lime }}>we're on the pitch by seven.</span>
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
      <Footer />
    </div>
  );
}
