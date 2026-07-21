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
import Header from "../components/Header";

const Poll = () => {
    const [selected, setSelected] = useState("");
    const [note, setNote] = useState("");

    const poll = {
        playing: 12,
        maybe: 3,
        notPlaying: 2,
    };

    const total = poll.playing + poll.maybe + poll.notPlaying;
    const playingPercent = (poll.playing / total) * 100;

    const handleSubmit = () => {
        console.log({
            status: selected,
            note,
        });
    };

    return (
        <>
            <Header />
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
                                7:30 PM
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin />
                                Green Park Turf
                            </div>

                            <div className="flex items-center gap-3">
                                <IndianRupee />
                                ₹200 Per Player
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
                                <CheckCircle2
                                    className="mx-auto text-white"
                                    size={36}
                                />

                                <h3 className="mt-3 text-xl font-bold text-white">
                                    Playing
                                </h3>

                            </button>

                            <button
                                onClick={() => setSelected("maybe")}
                                className={`rounded-2xl p-6 transition duration-300 ${selected === "maybe"
                                    ? "bg-yellow-500"
                                    : "bg-slate-800 hover:bg-yellow-500"
                                    }`}
                            >
                                <HelpCircle
                                    className="mx-auto text-white"
                                    size={36}
                                />

                                <h3 className="mt-3 text-xl font-bold text-white">
                                    Maybe
                                </h3>

                            </button>

                            <button
                                onClick={() => setSelected("notPlaying")}
                                className={`rounded-2xl p-6 transition duration-300 ${selected === "notPlaying"
                                    ? "bg-red-600"
                                    : "bg-slate-800 hover:bg-red-600"
                                    }`}
                            >
                                <XCircle
                                    className="mx-auto text-white"
                                    size={36}
                                />

                                <h3 className="mt-3 text-xl font-bold text-white">
                                    Not Playing
                                </h3>

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

                            <span>
                                {poll.playing} / {total}
                            </span>

                        </div>

                        <div className="w-full bg-slate-700 h-4 rounded-full mt-4 overflow-hidden">

                            <div
                                className="bg-gradient-to-r from-lime-400 to-green-500 h-full rounded-full transition-all duration-700"
                                style={{
                                    width: `${playingPercent}%`,
                                }}
                            />

                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8">

                            <div className="bg-green-600 rounded-xl p-4 text-center">

                                <h3 className="text-3xl font-bold text-white">
                                    {poll.playing}
                                </h3>

                                <p className="text-green-100">
                                    Playing
                                </p>

                            </div>

                            <div className="bg-yellow-500 rounded-xl p-4 text-center">

                                <h3 className="text-3xl font-bold text-white">
                                    {poll.maybe}
                                </h3>

                                <p className="text-white">
                                    Maybe
                                </p>

                            </div>

                            <div className="bg-red-600 rounded-xl p-4 text-center">

                                <h3 className="text-3xl font-bold text-white">
                                    {poll.notPlaying}
                                </h3>

                                <p className="text-red-100">
                                    Not Playing
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Poll;