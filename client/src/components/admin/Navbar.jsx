import {
  Bell,
  CalendarDays,
  ChevronDown,
  Menu,
  Search,
  ShieldCheck,
  Trophy,
} from "lucide-react";

export default function Navbar({ setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950 shadow-lg">

      {/* Football Accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-500" />

      <div className="flex h-20 items-center gap-6 px-6">

        {/* Left */}
        <div className="flex min-w-0 shrink-0 items-center gap-4">

          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2 text-slate-300 transition hover:bg-slate-800 lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div className="min-w-0">

            <h1 className="truncate text-2xl font-bold text-white">
              Football Club Dashboard
            </h1>

            <p className="truncate text-sm text-slate-400">
              Manage players, fixtures & club operations
            </p>

          </div>

        </div>

        {/* Search */}
        <div className="hidden flex-1 justify-center lg:flex">

          <div className="flex w-full max-w-lg items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3">

            <Search
              size={18}
              className="text-slate-500"
            />

            <input
              type="text"
              placeholder="Search players, matches..."
              className="ml-3 flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
            />

            <kbd className="rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-400">
              Ctrl K
            </kbd>

          </div>

        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-3">

          {/* Live */}
          <div className="hidden items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 2xl:flex">

            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

            <span className="text-sm font-medium text-red-400">
              Live Match
            </span>

          </div>

          {/* Season */}
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 xl:flex">

            <Trophy
              size={18}
              className="text-emerald-400"
            />

            <span className="text-sm font-medium text-emerald-400">
              Season 2026
            </span>

          </div>

          {/* Stadium */}
          <div className="hidden items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 2xl:flex">

            <ShieldCheck
              size={18}
              className="text-sky-400"
            />

            <span className="text-sm text-sky-400">
              Home Stadium
            </span>

          </div>

          {/* Fixtures */}
          <button className="hidden h-11 items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 text-slate-300 transition hover:bg-slate-800 xl:flex">

            <CalendarDays size={18} />

            <span className="text-sm font-medium">
              Fixtures
            </span>

          </button>

          {/* Notification */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:bg-slate-800">

            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-red-500" />

          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 transition hover:border-emerald-500 hover:bg-slate-800">

            <img
              src="https://i.pravatar.cc/100"
              alt="Admin"
              className="h-11 w-11 rounded-full border-2 border-emerald-500 object-cover"
            />

            <div className="hidden text-left xl:block">

              <p className="font-semibold text-white">
                Club Admin
              </p>

              <p className="text-xs text-slate-400">
                Football Manager
              </p>

            </div>

            <ChevronDown
              size={18}
              className="hidden text-slate-500 xl:block"
            />

          </button>

        </div>

      </div>
    </header>
  );
}