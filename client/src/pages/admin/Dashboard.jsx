import {
  Users,
  Trophy,
  CalendarDays,
  Dumbbell,
  ArrowUp,
} from "lucide-react";

export default function Dashboard() {
  const cards = [
    {
      title: "Players",
      value: "28",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Upcoming Matches",
      value: "6",
      icon: CalendarDays,
      color: "bg-orange-500",
    },
    {
      title: "Training Sessions",
      value: "14",
      icon: Dumbbell,
      color: "bg-emerald-500",
    },
    {
      title: "Club Trophies",
      value: "12",
      icon: Trophy,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Welcome */}

      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 p-8 text-white relative overflow-hidden">

        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10"/>

        <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-white/10"/>

        <h1 className="text-4xl font-bold">
          Welcome Back ⚽
        </h1>

        <p className="mt-3 max-w-xl text-emerald-50">
          Manage players, matches, fixtures and everything related
          to your football club from one dashboard.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-lg transition"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {card.value}
                </h2>

                <div className="mt-4 flex items-center text-sm text-emerald-600">

                  <ArrowUp size={16}/>

                  12% this month

                </div>

              </div>

              <div
                className={`${card.color} h-16 w-16 rounded-2xl flex items-center justify-center text-white`}
              >

                <card.icon size={30}/>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Middle */}

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">

          <h2 className="mb-6 text-xl font-bold">
            Team Performance
          </h2>

          <div className="flex h-80 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200">

            Chart goes here

          </div>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="mb-6 text-xl font-bold">
            Upcoming Fixtures
          </h2>

          <div className="space-y-5">

            <Fixture
              team="FC United"
              date="24 July"
            />

            <Fixture
              team="Real Tigers"
              date="30 July"
            />

            <Fixture
              team="Green Eagles"
              date="08 Aug"
            />

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-bold">
            Recent Activities
          </h2>

          <Activity text="Player John added" />

          <Activity text="Match scheduled" />

          <Activity text="Training updated" />

          <Activity text="New sponsor added" />

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-bold">
            Squad Availability
          </h2>

          <Progress
            title="Available"
            value={24}
            total={28}
          />

          <Progress
            title="Injured"
            value={3}
            total={28}
          />

          <Progress
            title="Suspended"
            value={1}
            total={28}
          />

        </div>

      </div>

    </div>
  );
}

function Fixture({ team, date }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

      <div>

        <h3 className="font-semibold">
          {team}
        </h3>

        <p className="text-sm text-slate-500">
          League Match
        </p>

      </div>

      <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
        {date}
      </span>

    </div>
  );
}

function Activity({ text }) {
  return (
    <div className="mb-4 flex items-center gap-3">

      <div className="h-3 w-3 rounded-full bg-emerald-500"/>

      <p>{text}</p>

    </div>
  );
}

function Progress({ title, value, total }) {
  const percentage = (value / total) * 100;

  return (
    <div className="mb-5">

      <div className="mb-2 flex justify-between">

        <span>{title}</span>

        <span>{value}</span>

      </div>

      <div className="h-3 rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-emerald-500"
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>
  );
}