import { colors } from "../utils/colors"
import { fonts } from "../utils/fonts"
import { useCountdown } from "../hooks/useCountdown"
import { pad } from "../pages/HomePage";

const Hero = () => {
   
    const { days, hours, mins, secs } = useCountdown();

    return (
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
                    <p className="mt-8 max-w-md text-lg" style={{ color: colors.chalkDim }}>
                        No trials, no fees to join, no egos. Turn up with boots, we sort the teams. Kickoff is always 7:00 AM
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
                                <div className="text-sm font-bold">7:00 AM</div>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase opacity-50 tracking-wide">Pitch</div>
                                <div className="text-sm font-bold">Kolappa Turf, Pitch 2</div>
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
    )
}

export default Hero
