import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

const Footer = () => {
    return (
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
    )
}

export default Footer