import { colors } from "../utils/colors"
import { fonts } from "../utils/fonts"
import { table } from "../utils/table"
import { medalColor } from "../utils/medalColors"
import { Trophy } from "lucide-react";


const LeagueTable = () => {
    return (
        <section
            id="table"
            className="py-20 md:py-24 relative overflow-hidden"
            style={{
                background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${colors.pitch} 0%, ${colors.pitchDark} 70%)`,
            }}
        >
            {/* mown-grass stripe texture */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 60px, transparent 60px, transparent 120px)`,
                }}
            />
            {/* soft vignette to ground the card */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,0,0,0.35) 0%, transparent 70%)`,
                }}
            />

            <div className="max-w-6xl mx-auto px-8 relative">
                <div className="flex flex-wrap justify-between items-end gap-5 mb-11">
                    <div>
                        <span
                            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                            style={{
                                fontFamily: fonts.mono,
                                color: colors.lime,
                                border: `1px solid ${colors.lime}33`,
                                background: `${colors.lime}14`,
                            }}
                        >
                            <Trophy size={12} strokeWidth={2.5} />
                            Season standings
                        </span>
                        <h2 style={{ fontFamily: fonts.display, textTransform: "uppercase", fontSize: "clamp(28px,4vw,42px)", color: colors.chalk ?? "#fff" }}>
                            League table
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm" style={{ color: colors.chalkDim }}>
                        Updated after every Sunday. Three points a win, one for a draw — same as it's always been.
                    </p>
                </div>

                <div
                    className="rounded-lg border overflow-hidden overflow-x-auto"
                    style={{
                        background: `linear-gradient(180deg, ${colors.pitch}, ${colors.pitchDark})`,
                        borderColor: colors.line,
                        boxShadow: "0 40px 80px -35px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                >
                    <table className="w-full border-collapse min-w-[600px]">
                        <thead>
                            <tr>
                                {["#", "Team", "P", "W", "D", "L", "GD", "Pts"].map((h, i) => (
                                    <th
                                        key={h}
                                        className={`text-[11px] uppercase tracking-wide px-4 py-4 border-b ${i > 1 ? "text-center" : "text-left"}`}
                                        style={{
                                            fontFamily: fonts.mono,
                                            color: colors.chalkDim,
                                            borderColor: colors.line,
                                            background: "rgba(255,255,255,0.02)",
                                        }}
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((row, i) => (
                                <tr
                                    key={row.name}
                                    className="row-hover"
                                    style={{
                                        borderBottom: i === table.length - 1 ? "none" : `1px solid ${colors.line}`,
                                        background: i % 2 === 1 ? "rgba(255,255,255,0.015)" : "transparent",
                                    }}
                                >
                                    <td className="px-4 py-4">
                                        <div
                                            className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                                            style={{
                                                fontFamily: fonts.mono,
                                                background: i < 3 ? medalColor(i) : "transparent",
                                                color: i < 3 ? colors.pitchDark : colors.chalkDim,
                                                border: i < 3 ? "none" : `1px solid ${colors.line}`,
                                                boxShadow: i < 3 ? "0 2px 8px rgba(0,0,0,0.35)" : "none",
                                            }}
                                        >
                                            {i + 1}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 flex items-center gap-3 font-semibold text-sm" style={{ fontFamily: fonts.body, color: colors.chalk ?? "#fff" }}>
                                        <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: row.swatch, boxShadow: `0 0 6px ${row.swatch}66` }} />
                                        {row.name}
                                    </td>
                                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono, color: colors.chalkDim }}>{row.p}</td>
                                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono, color: colors.chalkDim }}>{row.w}</td>
                                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono, color: colors.chalkDim }}>{row.d}</td>
                                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono, color: colors.chalkDim }}>{row.l}</td>
                                    <td className="text-center px-4 py-4 text-sm" style={{ fontFamily: fonts.mono, color: colors.chalkDim }}>{row.gd}</td>
                                    <td className="text-center px-4 py-4 text-sm font-bold" style={{ fontFamily: fonts.mono, color: colors.lime }}>{row.pts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default LeagueTable
