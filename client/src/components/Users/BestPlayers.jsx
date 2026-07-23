import { useState } from "react";
import { Trophy, Goal, Handshake, Crown, Sparkles, PartyPopper } from "lucide-react";
import { topPlayers } from "../../utils/Players";

const FIREWORK_COLORS = ["#a3e635", "#22d3ee", "#fbbf24", "#f472b6", "#ffffff"];

const BestPlayer = () => {
    const [particles, setParticles] = useState([]);

    const champion = topPlayers[0];
    const rest = topPlayers.slice(1);

    const celebrate = () => {
        const burst = Array.from({ length: 100 }).map((_, i) => ({
            id: `${Date.now()}-${i}`,
            angle: Math.random() * 360,
            distance: 70 + Math.random() * 800,
            size: 4 + Math.random() * 5,
            color: FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
            duration: 2.4 + Math.random() * 0.6, // was 0.7 + Math.random() * 0.6
        }));
        setParticles(burst);
        window.clearTimeout(celebrate._t);
        celebrate._t = window.setTimeout(() => setParticles([]), 5000); // was 1700
    };

    return (
        <section className="py-20 bg-slate-950 overflow-hidden">
            <style>{`
        @keyframes firework-burst {
          0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--distance)) scale(0);
            opacity: 0;
          }
        }
        .firework-particle {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 9999px;
          transform: translate(-50%, -50%);
          animation-name: firework-burst;
          animation-timing-function: cubic-bezier(0.2, 0.7, 0.3, 1);
          animation-fill-mode: forwards;
          pointer-events: none;
        }
        @keyframes crown-float {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-6px) rotate(-2deg); }
        }
        .crown-float {
          animation: crown-float 2.4s ease-in-out infinite;
        }
      `}</style>

            <div className="max-w-7xl mx-auto mb-10 px-4">
                <div className="flex items-center gap-3">
                    <div className="bg-lime-400 text-slate-900 p-3 rounded-2xl">
                        <Trophy size={28} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-white">Best Players</h2>
                        <p className="text-slate-400 mt-2">Top performers this season</p>
                    </div>
                </div>
            </div>

            {/* Champion / Player of the Tournament */}
            {champion && (
                <div className="max-w-5xl mx-auto px-4 mb-16 ">
                    <div className="relative max-w-md mx-auto">
                        {/* glow ring */}
                        <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-lime-400 via-cyan-400 to-lime-400 opacity-60 blur-xl" />

                        <div
                            className="
                relative
                bg-gradient-to-b from-slate-900 to-slate-950
                border-2 border-lime-400
                rounded-[2rem]
                p-8
                shadow-[0_0_60px_rgba(163,230,53,.35)]
              "
                        >
                            {/* firework particles, centered on card */}
                            <div className="absolute inset-0 overflow-visible pointer-events-none">
                                {particles.map((p) => (
                                    <span
                                        key={p.id}
                                        className="firework-particle"
                                        style={{
                                            "--angle": `${p.angle}deg`,
                                            "--distance": `${p.distance}px`,
                                            width: p.size,
                                            height: p.size,
                                            backgroundColor: p.color,
                                            animationDuration: `${p.duration}s`,
                                            boxShadow: `0 0 8px 2px ${p.color}`,
                                        }}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-center">
                                <span className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/40 text-lime-300 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full">
                                    <Sparkles size={14} />
                                    Player of the Tournament
                                </span>
                            </div>

                            <div className="relative mt-8 flex justify-center">
                                <Crown
                                    size={40}
                                    className="crown-float absolute -top-8 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,.8)]"
                                    fill="#fbbf24"
                                />
                                <img
                                    src={champion.image}
                                    alt={champion.name}
                                    className="
                    w-36 h-36
                    rounded-full
                    object-cover
                    border-4 border-lime-400
                    shadow-[0_0_30px_rgba(163,230,53,.5)]
                  "
                                />
                            </div>

                            <h3 className="text-center text-white text-3xl font-extrabold mt-6">
                                {champion.name}
                            </h3>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="bg-slate-800 rounded-2xl p-5 text-center">
                                    <Goal className="mx-auto text-lime-400" size={26} />
                                    <p className="text-4xl font-bold text-white mt-2">{champion.goals}</p>
                                    <p className="text-slate-400 text-sm">Goals</p>
                                </div>
                                <div className="bg-slate-800 rounded-2xl p-5 text-center">
                                    <Handshake className="mx-auto text-cyan-400" size={26} />
                                    <p className="text-4xl font-bold text-white mt-2">{champion.assists}</p>
                                    <p className="text-slate-400 text-sm">Assists</p>
                                </div>
                            </div>

                            <button
                                onClick={celebrate}
                                className="
                  mt-6 w-full
                  flex items-center justify-center gap-2
                  bg-lime-400 hover:bg-lime-300
                  text-slate-900 font-bold
                  py-3 rounded-xl
                  transition-all duration-200
                  active:scale-95
                  cursor-pointer
                "
                            >
                                <PartyPopper size={20} />
                                Celebrate
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Rest of the players, scrolling */}
            <div className="relative overflow-hidden py-4">

                <div className="flex gap-6 animate-[scroll_25s_linear_infinite] w-max">

                    {[...rest, ...rest].map((player, index) => (

                        <div
                            key={index}
                            className="
          relative
          w-72
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-6
          flex-shrink-0
          transition-all
          duration-300
          hover:-translate-y-3
          hover:scale-105
          hover:border-lime-400
          hover:shadow-[0_0_35px_rgba(163,230,53,.35)]
        "
                        >

                            {/* Rank Badge */}
                            {index < 2 && (
                                <div
                                    className={`
              absolute
              top-4
              left-4
              w-12
              h-12
              rounded-full
              flex
              items-center
              justify-center
              text-xl
              font-black
              shadow-xl
              border-4
              border-slate-900
              ${index === 0
                                            ? "bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900"
                                            : "bg-gradient-to-br from-amber-500 to-orange-700 text-white"
                                        }
            `}
                                >
                                    {index + 2}
                                </div>
                            )}

                            {/* Profile */}
                            <img
                                src={player.image}
                                alt={player.name}
                                className="
            w-24
            h-24
            rounded-full
            mx-auto
            object-cover
            border-4
            border-lime-400
            transition-all
            duration-300
            hover:scale-110
          "
                            />

                            {/* Name */}
                            <h3 className="text-center text-white text-xl font-bold mt-5">
                                {player.name}
                            </h3>

                            {/* Stats */}
                            <div className="mt-6 grid grid-cols-2 gap-4">

                                <div className="bg-slate-800 rounded-xl p-4 text-center transition hover:bg-slate-700">

                                    <Goal
                                        className="mx-auto text-lime-400"
                                        size={22}
                                    />

                                    <p className="text-3xl font-bold text-white mt-2">
                                        {player.goals}
                                    </p>

                                    <p className="text-slate-400 text-sm">
                                        Goals
                                    </p>

                                </div>

                                <div className="bg-slate-800 rounded-xl p-4 text-center transition hover:bg-slate-700">

                                    <Handshake
                                        className="mx-auto text-cyan-400"
                                        size={22}
                                    />

                                    <p className="text-3xl font-bold text-white mt-2">
                                        {player.assists}
                                    </p>

                                    <p className="text-slate-400 text-sm">
                                        Assists
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default BestPlayer;