import { colors } from "../utils/colors"
import { fonts } from "../utils/fonts"
import { table } from "../utils/table"
import { medalColor } from "../utils/medalColors"


const LeagueTable = () => {
    return (
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
    )
}

export default LeagueTable