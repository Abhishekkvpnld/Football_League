import { useState } from "react";
import {
    Calendar,
    Clock,
    MapPin,
    IndianRupee,
    CheckCircle2,
    XCircle,
    HelpCircle,
} from "lucide-react";
import Header from "../../components/Users/Header";

const poll = {
    playing: [
        { id: 1, name: "Abhishek KV", image: "https://i.pravatar.cc/100?img=12" },
        { id: 2, name: "Rahul", image: "https://i.pravatar.cc/100?img=15" },
        { id: 3, name: "Arjun", image: "https://i.pravatar.cc/100?img=22" },
        { id: 4, name: "Akhil", image: "https://i.pravatar.cc/100?img=18" },
    ],
    maybe: [
        { id: 5, name: "Nikhil", image: "https://i.pravatar.cc/100?img=32" },
        { id: 6, name: "Ajmal", image: "https://i.pravatar.cc/100?img=33" },
    ],
    notPlaying: [
        { id: 7, name: "Fazil", image: "https://i.pravatar.cc/100?img=44" },
    ],
};

const total = poll.playing.length + poll.maybe.length + poll.notPlaying.length;
const playingPercent = (poll.playing.length / total) * 100;

const Poll = () => {
    const [selected, setSelected] = useState("");
    const [note, setNote] = useState("");
    const [navOpen, setNavOpen] = useState(false);

    const handleSubmit = () => {
        console.log({
            status: selected,
            note,
        });
    };

    return (
        <>
            <Header navOpen={navOpen} setNavOpen={setNavOpen} />
            <section className="min-h-screen bg-slate-950 py-16 px-4">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-700 to-lime-600 rounded-3xl p-8 text-white shadow-xl">

                        <h1 className="text-4xl font-bold">
                            ⚽ Sunday Football Poll
                        </h1>

                        <p className="mt-2 text-green-100">
                            Confirm your availability for this week's friendly match.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mt-8">

                            <div className="flex items-center gap-3">
                                <Calendar />
                                Sunday, 27 July
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock />
                                7:00 AM
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin />
                                Kolappa Turf
                            </div>

                            <div className="flex items-center gap-3">
                                <IndianRupee />
                                ₹40 Per Player
                            </div>

                        </div>

                    </div>

                    {/* Poll */}

                    <div className="bg-slate-900 rounded-3xl p-8 mt-8 border border-slate-800">

                        <h2 className="text-2xl text-white font-bold">
                            Will you play?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-5 mt-8">

                            <button
                                onClick={() => setSelected("playing")}
                                className={`rounded-2xl p-6 transition duration-300 ${selected === "playing"
                                    ? "bg-green-600"
                                    : "bg-slate-800 hover:bg-green-700"
                                    }`}
                            >
                                <CheckCircle2 className="mx-auto text-white" size={36} />
                                <h3 className="mt-3 text-xl font-bold text-white">Playing</h3>
                            </button>

                            <button
                                onClick={() => setSelected("maybe")}
                                className={`rounded-2xl p-6 transition duration-300 ${selected === "maybe"
                                    ? "bg-yellow-500"
                                    : "bg-slate-800 hover:bg-yellow-500"
                                    }`}
                            >
                                <HelpCircle className="mx-auto text-white" size={36} />
                                <h3 className="mt-3 text-xl font-bold text-white">Maybe</h3>
                            </button>

                            <button
                                onClick={() => setSelected("notPlaying")}
                                className={`rounded-2xl p-6 transition duration-300 ${selected === "notPlaying"
                                    ? "bg-red-600"
                                    : "bg-slate-800 hover:bg-red-600"
                                    }`}
                            >
                                <XCircle className="mx-auto text-white" size={36} />
                                <h3 className="mt-3 text-xl font-bold text-white">Not Playing</h3>
                            </button>

                        </div>

                        {/* Note */}

                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            rows={4}
                            placeholder="Leave a note (optional)"
                            className="w-full mt-8 bg-slate-800 rounded-xl p-4 text-white outline-none border border-slate-700 focus:border-green-500"
                        />

                        <button
                            onClick={handleSubmit}
                            className="w-full mt-6 bg-green-600 hover:bg-green-700 rounded-xl py-4 text-lg font-semibold text-white transition"
                        >
                            Submit Response
                        </button>

                    </div>

                    {/* Progress */}

                    <div className="bg-slate-900 rounded-3xl p-8 mt-8 border border-slate-800">

                        <div className="flex justify-between text-white">
                            <span>Players Confirmed</span>
                            <span>{poll.playing.length} / {total}</span>
                        </div>

                        <div className="w-full bg-slate-700 h-4 rounded-full mt-4 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-lime-400 to-green-500 h-full rounded-full transition-all duration-700"
                                style={{ width: `${playingPercent}%` }}
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8">

                            <div className="bg-green-600 rounded-xl p-4 text-center">
                                <h3 className="text-3xl font-bold text-white">
                                    {poll.playing.length}
                                </h3>
                                <p className="text-green-100">Playing</p>
                            </div>

                            <div className="bg-yellow-500 rounded-xl p-4 text-center">
                                <h3 className="text-3xl font-bold text-white">
                                    {poll.maybe.length}
                                </h3>
                                <p className="text-white">Maybe</p>
                            </div>

                            <div className="bg-red-600 rounded-xl p-4 text-center">
                                <h3 className="text-3xl font-bold text-white">
                                    {poll.notPlaying.length}
                                </h3>
                                <p className="text-red-100">Not Playing</p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 mt-8">

                <h2 className="text-2xl font-bold text-white mb-8">
                    Player Responses
                </h2>

                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Playing */}
                    <div className="bg-slate-800 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-5">
                            <CheckCircle2 className="text-green-400" />
                            <h3 className="text-lg font-bold text-white">
                                Playing ({poll.playing.length})
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {poll.playing.map((player) => (
                                <div
                                    key={player.id}
                                    className="flex items-center gap-3 bg-slate-700 rounded-xl p-3 hover:bg-slate-600 transition"
                                >
                                    <img
                                        src={player.image}
                                        alt={player.name}
                                        className="w-11 h-11 rounded-full object-cover border-2 border-green-400"
                                    />
                                    <span className="text-white font-medium">{player.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Maybe */}
                    <div className="bg-slate-800 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-5">
                            <HelpCircle className="text-yellow-400" />
                            <h3 className="text-lg font-bold text-white">
                                Maybe ({poll.maybe.length})
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {poll.maybe.map((player) => (
                                <div
                                    key={player.id}
                                    className="flex items-center gap-3 bg-slate-700 rounded-xl p-3 hover:bg-slate-600 transition"
                                >
                                    <img
                                        src={player.image}
                                        alt={player.name}
                                        className="w-11 h-11 rounded-full object-cover border-2 border-yellow-400"
                                    />
                                    <span className="text-white font-medium">{player.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Not Playing */}
                    <div className="bg-slate-800 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-5">
                            <XCircle className="text-red-400" />
                            <h3 className="text-lg font-bold text-white">
                                Not Playing ({poll.notPlaying.length})
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {poll.notPlaying.map((player) => (
                                <div
                                    key={player.id}
                                    className="flex items-center gap-3 bg-slate-700 rounded-xl p-3 hover:bg-slate-600 transition"
                                >
                                    <img
                                        src={player.image}
                                        alt={player.name}
                                        className="w-11 h-11 rounded-full object-cover border-2 border-red-400"
                                    />
                                    <span className="text-white font-medium">{player.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Poll;