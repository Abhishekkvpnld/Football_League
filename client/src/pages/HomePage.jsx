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
import Team from "../components/Team";
import Details from "../components/Details";
import BestPlayer from "../components/BestPlayers";
import GoalChart from "../components/Chart";
import { Link } from "react-router-dom";
import PosterSlider from "../components/PosterSlide";





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

      {/* Poster Slider */}
      <PosterSlider />

      {/* Facts strip */}
      <Facts />


      {/* Best players strip */}
      <BestPlayer />

      {/* Goal Chart */}
      <GoalChart />

      {/* League table */}
      <LeagueTable />

      {/* How it works */}
      <Details />

      {/* Teams */}
      <Team />

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
          <Link
            to="/poll"
            className="btn-primary-fx inline-flex items-center gap-2 rounded px-6 py-4 text-sm font-bold"
            style={{ fontFamily: fonts.mono, background: colors.lime, color: colors.pitchDark }}
          >
            Reserve your spot for Sunday →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
