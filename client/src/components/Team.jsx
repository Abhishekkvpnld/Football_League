import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import { teams } from "../utils/teams";



const Team = () => {
    return (
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
    )
}

export default Team