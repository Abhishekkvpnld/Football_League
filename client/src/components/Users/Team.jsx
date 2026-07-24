import {
  ArrowRight,
  ShieldCheck,
  Trophy,
  Users,
  UserCircle2,
} from "lucide-react";

const teams = [
  {
    id: 1,
    name: "FC Team A",
    short: "A",
    captain: "John Doe",
    coach: "Michael Smith",
    players: 22,
    wins: 12,
    draws: 3,
    losses: 2,
    color: "emerald",
  },
  {
    id: 2,
    name: "FC Team B",
    short: "B",
    captain: "Alex Morgan",
    coach: "David Wilson",
    players: 22,
    wins: 10,
    draws: 5,
    losses: 2,
    color: "sky",
  },
];

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#10b98120,transparent_45%)]" />

      <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Football Club
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-white">
            Our Teams
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Two squads competing with passion, teamwork and determination.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {teams.map((team) => {

            const theme =
              team.color === "emerald"
                ? {
                    gradient: "from-emerald-500 via-green-500 to-lime-500",
                    glow: "shadow-emerald-500/30",
                    button: "bg-emerald-500 hover:bg-emerald-600",
                    badge: "bg-emerald-500",
                  }
                : {
                    gradient: "from-sky-500 via-blue-500 to-indigo-500",
                    glow: "shadow-sky-500/30",
                    button: "bg-sky-500 hover:bg-sky-600",
                    badge: "bg-sky-500",
                  };

            return (
              <div
                key={team.id}
                className={`group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl ${theme.glow} transition duration-500 hover:-translate-y-3`}
              >

                {/* Header */}

                <div
                  className={`relative bg-gradient-to-r ${theme.gradient} p-8`}
                >

                  <div className="absolute right-6 top-6 text-8xl opacity-10">
                    ⚽
                  </div>

                  <div className="flex items-center gap-6">

                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-full border-4 border-white text-5xl font-black text-white ${theme.badge}`}
                    >
                      {team.short}
                    </div>

                    <div>

                      <h3 className="text-4xl font-black text-white">
                        {team.name}
                      </h3>

                      <p className="mt-2 text-white/90">
                        {team.wins} Wins • {team.draws} Draws • {team.losses} Losses
                      </p>

                    </div>

                  </div>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-5 p-8">

                  <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5">

                    <UserCircle2 className="mb-4 text-emerald-400" />

                    <p className="text-sm text-slate-400">
                      Captain
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-white">
                      {team.captain}
                    </h4>

                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5">

                    <ShieldCheck className="mb-4 text-sky-400" />

                    <p className="text-sm text-slate-400">
                      Coach
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-white">
                      {team.coach}
                    </h4>

                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5">

                    <Users className="mb-4 text-orange-400" />

                    <p className="text-sm text-slate-400">
                      Players
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-white">
                      {team.players}
                    </h4>

                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5">

                    <Trophy className="mb-4 text-yellow-400" />

                    <p className="text-sm text-slate-400">
                      Season Record
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-white">
                      {team.wins}-{team.draws}-{team.losses}
                    </h4>

                  </div>

                </div>

                {/* Footer */}

                <div className="flex items-center justify-between border-t border-slate-800 px-8 py-6">

                  <span className="font-medium text-slate-400">
                    Professional Football Squad
                  </span>

                  <button
                    className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition ${theme.button}`}
                  >
                    View Squad
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}