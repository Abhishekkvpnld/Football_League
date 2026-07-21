import { colors } from "../utils/colors"
import { fonts } from "../utils/fonts"
import { useCountdown } from "../hooks/useCountdown"
import { pad } from "../pages/HomePage";
import { Menu, User, LogOut, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProfileComponent from "./ProfileComponent";


const Header = ({ navOpen, setNavOpen }) => {
    const { days, hours, mins } = useCountdown();

    const [profileOpen, setProfileOpen] = useState(false);

    const profileRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(e.target)
            ) {
                setProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () =>
            document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
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
                    <Link to="/" style={{ fontFamily: fonts.display, fontSize: 20, textTransform: "uppercase", letterSpacing: "0.02em" }}>Kickabout</Link>
                </div>

                <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
                    {["Fixture", "Table", "Teams", "Poll",].map((item) => (
                        <a
                            key={item}
                            href={item === "Poll" ? "/poll" : `#${item.toLowerCase()}`}
                            className="opacity-75 hover:opacity-100 transition-opacity"
                            style={{ color: colors.chalk }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = colors.lime)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = colors.chalk)}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">

                    {/* Countdown */}

                    <div
                        className="hidden sm:flex items-center gap-2 text-xs rounded-full border px-3.5 py-1.5"
                        style={{
                            fontFamily: fonts.mono,
                            borderColor: colors.line,
                            color: colors.chalkDim,
                        }}
                    >
                        <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                                background: colors.lime,
                                boxShadow: `0 0 8px ${colors.lime}`,
                            }}
                        />

                        Kickoff in {days}d {pad(hours)}h {pad(mins)}m

                    </div>

                    {/* Profile */}
                    <ProfileComponent setProfileOpen={setProfileOpen} profileOpen={profileOpen} profileRef={profileRef} />

                </div>

                <button className="md:hidden text-sm cursor-pointer hover:scale-110 transition-all" onClick={() => setNavOpen(!navOpen)} style={{ color: colors.chalk }}>
                    <Menu size={20} />
                </button>
            </div>

            {navOpen && (
                <div className="md:hidden flex flex-col gap-4 px-8 pb-5 text-sm uppercase tracking-wider">
                    {["Fixture", "Table", "Teams", "Join", "Profile"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-lime hover:text-white-700 hover:scale-110 transition-all" onClick={() => setNavOpen(false)}>
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header
