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

export const menus = [
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
