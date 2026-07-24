import {
    Crosshair,
    ArrowLeftRight,
    Flag,
    CalendarDays,
    HeartPulse,
    Footprints,
    ShieldHalf,
    Globe2,
    Repeat2,
    Star,
} from "lucide-react";
import Header from "../../components/Users/Header";
import { useState } from "react";

const players = [
    {
        id: 1,
        name: "Mateo Rivas",
        number: 10,
        position: "Forward",
        age: 27,
        nationality: "Argentina",
        goals: 18,
        assists: 14,
        appearances: 26,
        captain: true,
        injured: false,
        foot: "Left",
        favoriteClub: "Boca Juniors",
        nationalTeam: "Argentina",
        image:
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
    },
    {
        id: 2,
        name: "Owen Brackett",
        number: 17,
        position: "Midfielder",
        age: 29,
        nationality: "Belgium",
        goals: 9,
        assists: 19,
        appearances: 28,
        captain: false,
        injured: true,
        foot: "Right",
        favoriteClub: "RSC Anderlecht",
        nationalTeam: "Belgium",
        image:
            "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500",
    },
    {
        id: 3,
        name: "Sven Aldercrest",
        number: 4,
        position: "Defender",
        age: 26,
        nationality: "Netherlands",
        goals: 4,
        assists: 2,
        appearances: 29,
        captain: false,
        injured: false,
        foot: "Right",
        favoriteClub: "Feyenoord",
        nationalTeam: "Netherlands",
        image:
            "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=500",
    },
    {
        id: 4,
        name: "Rafael Souza",
        number: 1,
        position: "Goalkeeper",
        age: 25,
        nationality: "Brazil",
        goals: 0,
        assists: 1,
        appearances: 30,
        captain: false,
        injured: false,
        foot: "Right",
        favoriteClub: "Flamengo",
        nationalTeam: "Brazil",
        image:
            "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500",
    },
];

export default function PlayersPage() {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <Header navOpen={navOpen} setNavOpen={setNavOpen} />

            <section className="min-h-screen bg-slate-950 py-16">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Heading */}
                    <div className="mb-12 text-center">
                        <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
                            FIRST TEAM
                        </span>

                        <h1 className="mt-5 text-5xl font-black text-white">
                            Meet Our Players
                        </h1>

                        <p className="mt-4 text-slate-400">
                            Passion • Dedication • Victory
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {players.map((player) => (

                            <div
                                key={player.id}
                                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:-translate-y-3 hover:border-emerald-500"
                            >

                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">

                                    <img
                                        src={player.image}
                                        alt={player.name}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />

                                    <div className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-3xl font-black text-white shadow-xl">
                                        {player.number}
                                    </div>

                                    {player.captain && (
                                        <span className="absolute left-5 top-5 flex items-center gap-1 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-white">
                                            <Star size={12} fill="currentColor" />
                                            CAPTAIN
                                        </span>
                                    )}

                                </div>

                                {/* Content */}
                                <div className="p-6">

                                    <h2 className="text-2xl font-bold text-white">
                                        {player.name}
                                    </h2>

                                    <p className="mt-1 text-emerald-400">
                                        {player.position}
                                    </p>

                                    {/* Stats */}
                                    <div className="mt-6 grid grid-cols-2 gap-4">

                                        <div className="rounded-xl bg-slate-800 p-4">
                                            <Crosshair className="mb-2 text-emerald-400" />
                                            <p className="text-xs text-slate-400">
                                                Goals
                                            </p>
                                            <h3 className="text-xl font-bold text-white">
                                                {player.goals}
                                            </h3>
                                        </div>

                                        <div className="rounded-xl bg-slate-800 p-4">
                                            <ArrowLeftRight className="mb-2 text-sky-400" />
                                            <p className="text-xs text-slate-400">
                                                Assists
                                            </p>
                                            <h3 className="text-xl font-bold text-white">
                                                {player.assists}
                                            </h3>
                                        </div>

                                    </div>

                                    {/* Details */}
                                    <div className="mt-6 space-y-3 text-sm">

                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-slate-400">
                                                <CalendarDays size={16} />
                                                Age
                                            </span>

                                            <span className="text-white">
                                                {player.age}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-slate-400">
                                                <Flag size={16} />
                                                Nationality
                                            </span>

                                            <span className="text-white">
                                                {player.nationality}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-slate-400">
                                                <Footprints size={16} />
                                                Preferred Foot
                                            </span>

                                            <span className="text-white">
                                                {player.foot}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-slate-400">
                                                <ShieldHalf size={16} />
                                                Favorite Club
                                            </span>

                                            <span className="text-white">
                                                {player.favoriteClub}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-slate-400">
                                                <Globe2 size={16} />
                                                National Team
                                            </span>

                                            <span className="text-white">
                                                {player.nationalTeam}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-slate-400">
                                                <Repeat2 size={16} />
                                                Appearances
                                            </span>

                                            <span className="text-white">
                                                {player.appearances}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">

                                            <span className="flex items-center gap-2 text-slate-400">
                                                <HeartPulse size={16} />
                                                Status
                                            </span>

                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${player.injured
                                                    ? "bg-red-500/20 text-red-400"
                                                    : "bg-emerald-500/20 text-emerald-400"
                                                    }`}
                                            >
                                                {player.injured ? "Injured" : "Fit"}
                                            </span>

                                        </div>

                                    </div>

                                    {/* Button */}
                                    <button className="mt-8 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600">
                                        View Full Profile
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>
        </>
    );
}
