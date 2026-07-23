import {
  LayoutDashboard,
  Users,
  UserCog,
  CalendarDays,
  Trophy,
  Shield,
  Ticket,
  Newspaper,
  Image,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    title: "Players",
    icon: Users,
    path: "/admin/players",
  },
  {
    title: "Coaches",
    icon: UserCog,
    path: "/admin/coaches",
  },
  {
    title: "Matches",
    icon: Shield,
    path: "/admin/matches",
  },
  {
    title: "Fixtures",
    icon: CalendarDays,
    path: "/admin/fixtures",
  },
  {
    title: "Tournament",
    icon: Trophy,
    path: "/admin/tournaments",
  },
  {
    title: "Tickets",
    icon: Ticket,
    path: "/admin/tickets",
  },
  {
    title: "News",
    icon: Newspaper,
    path: "/admin/news",
  },
  {
    title: "Gallery",
    icon: Image,
    path: "/admin/gallery",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:relative z-40 flex flex-col w-72 h-screen bg-slate-900 border-r border-slate-800 transition-transform duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="relative border-b border-slate-800 px-6 py-6">
          <button
            className="absolute right-4 top-5 lg:hidden text-slate-400"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>

          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center shadow-lg">
              <span className="text-2xl">⚽</span>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                FC Admin
              </h2>

              <p className="text-xs text-slate-400">
                Football Club Manager
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="px-4 mb-3 text-xs uppercase tracking-widest text-slate-500">
            Main Menu
          </p>

          <nav className="space-y-2">
            {menus.map((menu) => (
              <NavLink
                key={menu.title}
                to={menu.path}
                end={menu.path === "/admin"}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300
                  ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <menu.icon
                      size={20}
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    />

                    <span className="font-medium">
                      {menu.title}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Admin Profile */}
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-800 p-3">
            <img
              src="https://i.pravatar.cc/100"
              alt="Admin"
              className="h-11 w-11 rounded-full object-cover"
            />

            <div className="flex-1">
              <h4 className="font-semibold text-white">
                Club Admin
              </h4>

              <p className="text-xs text-slate-400">
                administrator
              </p>
            </div>

            <button className="text-slate-400 hover:text-red-400 transition">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}