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
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      {/* Football Accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-lime-500 to-emerald-500" />

      <div className="flex h-20 items-center gap-6 px-6">
        {/* Left */}
        <div className="flex items-center gap-4 shrink-0 min-w-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2 hover:bg-slate-100 lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-2xl font-bold text-slate-800">
              Football Club Dashboard
            </h1>

            <p className="truncate text-sm text-slate-500">
              Manage players, fixtures and club operations
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex w-full max-w-lg items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Search players, matches, coaches..."
              className="ml-3 flex-1 bg-transparent text-sm outline-none"
            />

            <kbd className="rounded-lg border bg-white px-2 py-1 text-xs text-slate-500 shadow-sm">
              Ctrl K
            </kbd>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Live */}
          <div className="hidden 2xl:flex items-center gap-2 rounded-full bg-red-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

            <span className="text-sm font-medium text-red-600">
              Live Match
            </span>
          </div>

          {/* Season */}
          <div className="hidden xl:flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
            <Trophy
              size={18}
              className="text-emerald-600"
            />

            <span className="text-sm font-medium text-emerald-700">
              Season 2026
            </span>
          </div>

          {/* Stadium */}
          <div className="hidden 2xl:flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2">
            <ShieldCheck
              size={18}
              className="text-sky-600"
            />

            <span className="text-sm text-sky-700">
              Home Stadium
            </span>
          </div>

          {/* Fixtures */}
          <button className="hidden xl:flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 hover:bg-slate-50">
            <CalendarDays size={18} />

            <span className="text-sm font-medium">
              Fixtures
            </span>
          </button>

          {/* Notification */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50">
            <Bell
              size={20}
              className="text-slate-700"
            />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 hover:shadow-md transition">
            <img
              src="https://i.pravatar.cc/100"
              alt="Admin"
              className="h-11 w-11 rounded-full border-2 border-emerald-500 object-cover"
            />

            <div className="hidden xl:block text-left">
              <p className="font-semibold text-slate-800">
                Club Admin
              </p>

              <p className="text-xs text-slate-500">
                Football Manager
              </p>
            </div>

            <ChevronDown
              size={18}
              className="hidden xl:block text-slate-400"
            />
          </button>
        </div>
      </div>
    </header>
  );
}