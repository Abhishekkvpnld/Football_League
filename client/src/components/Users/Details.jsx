import { colors } from "../../utils/colors"
import { fonts } from "../../utils/fonts"
import { steps } from "../../utils/steps"

const Details = () => {
    return (
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
    )
}

export default Details