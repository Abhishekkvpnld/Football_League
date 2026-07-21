import {
  Trophy,
  Goal,
  Handshake,
  Shield,
  Flag,
  MapPin,
  User,
  Star,
  Pencil,
  Crown,
} from "lucide-react";

export default function ProfilePage() {
  const player = {
    name: "Abhishek KV",
    username: "@abhishekkv",
    image: "https://i.pravatar.cc/300?img=12",
    club: "Real Madrid",
    country: "India",
    favouriteCountry: "Brazil",
    position: "Central Midfielder",
    foot: "Right Foot",
    matches: 18,
    goals: 14,
    assists: 10,
    motm: 6,
    wins: 11,
    yellow: 2,
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white">

      {/* Banner */}

      <div className="h-64 bg-gradient-to-r from-green-700 via-lime-500 to-emerald-700 relative">

        <div className="absolute inset-0 bg-black/20" />

      </div>

      {/* Profile */}

      <div className="max-w-6xl mx-auto px-6 -mt-28">

        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">

          {/* Top */}

          <div className="p-8 text-center">

            <div className="relative inline-block">

              <img
                src={player.image}
                className="w-40 h-40 rounded-full border-4 border-lime-400 object-cover mx-auto"
              />

              <div className="absolute -top-3 -right-3 bg-yellow-400 p-3 rounded-full">

                <Crown className="text-slate-900" />

              </div>

            </div>

            <h1 className="text-4xl font-bold mt-6">
              {player.name}
            </h1>

            <p className="text-slate-400 mt-2">
              {player.position}
            </p>

            <button className="mt-6 bg-lime-500 hover:bg-lime-400 text-slate-900 px-8 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto">

              <Pencil size={18} />

              Edit Profile

            </button>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 border-y border-slate-800">

            {[
              { label: "Matches", value: player.matches },
              { label: "Goals", value: player.goals },
              { label: "Assists", value: player.assists },
              { label: "MOTM", value: player.motm },
            ].map((item) => (

              <div
                key={item.label}
                className="text-center py-8 border-r last:border-r-0 border-slate-800"
              >

                <h2 className="text-4xl font-bold text-lime-400">

                  {item.value}

                </h2>

                <p className="text-slate-400 mt-2">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

          {/* Info */}

          <div className="grid lg:grid-cols-2 gap-8 p-8">

            <div className="bg-slate-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Personal Information
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <User className="text-lime-400" />
                  <span>{player.username}</span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-lime-400" />
                  <span>{player.country}</span>
                </div>

                <div className="flex items-center gap-4">
                  <Shield className="text-lime-400" />
                  <span>{player.club}</span>
                </div>

                <div className="flex items-center gap-4">
                  <Flag className="text-lime-400" />
                  <span>{player.favouriteCountry}</span>
                </div>

                <div className="flex items-center gap-4">
                  <Goal className="text-lime-400" />
                  <span>{player.position}</span>
                </div>

                <div className="flex items-center gap-4">
                  ⚽
                  <span>{player.foot}</span>
                </div>

              </div>

            </div>

            {/* Achievements */}

            <div className="bg-slate-800 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Achievements
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <Trophy className="text-yellow-400" />
                  <span>MVP x3</span>
                </div>

                <div className="flex items-center gap-4">
                  <Star className="text-lime-400" />
                  <span>Top Scorer</span>
                </div>

                <div className="flex items-center gap-4">
                  <Handshake className="text-cyan-400" />
                  <span>Playmaker Award</span>
                </div>

                <div className="flex items-center gap-4">
                  🟨
                  <span>Yellow Cards : {player.yellow}</span>
                </div>

                <div className="flex items-center gap-4">
                  🏅
                  <span>Wins : {player.wins}</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}