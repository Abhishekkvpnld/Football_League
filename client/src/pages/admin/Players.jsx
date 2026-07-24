import { useState } from "react";
import {
  Search,
  Ban,
  CheckCircle,
  Plus,
  Minus,
  HeartPulse,
} from "lucide-react";

const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    image: "https://i.pravatar.cc/150?img=11",

    role: "user",
    blocked: false,

    jerseyNumber: 9,
    position: "ST",

    goals: 18,
    assists: 7,

    injury: false,
    matches: 22,
  },
  {
    id: 2,
    name: "Alex Morgan",
    email: "alex@example.com",
    image: "https://i.pravatar.cc/150?img=12",

    role: "admin",
    blocked: false,

    jerseyNumber: 10,
    position: "LW",

    goals: 9,
    assists: 14,

    injury: true,
    matches: 20,
  },
];

// Small reusable stepper for adjusting a numeric stat (goals / assists)
function StatStepper({ label, value, onChange }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </span>

      <div className="flex items-center gap-2 rounded-lg border bg-slate-50 px-1.5 py-1">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-slate-500 shadow-sm hover:bg-slate-100 hover:text-slate-700 disabled:opacity-40"
          disabled={value <= 0}
          aria-label={`Decrease ${label}`}
        >
          <Minus size={13} />
        </button>

        <span className="w-6 text-center text-sm font-semibold text-slate-800">
          {value}
        </span>

        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-slate-500 shadow-sm hover:bg-slate-100 hover:text-slate-700"
          aria-label={`Increase ${label}`}
        >
          <Plus size={13} />
        </button>
      </div>
    </div>
  );
}

export default function UsersPage() {
  const [users, setUsers] = useState(dummyUsers);
  const [search, setSearch] = useState("");

  const toggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              blocked: !user.blocked,
            }
          : user
      )
    );
  };

  const changeRole = (id, role) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              role,
            }
          : user
      )
    );
  };

  const updateStat = (id, field, value) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              [field]: value,
            }
          : user
      )
    );
  };

  const toggleInjury = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              injury: !user.injury,
            }
          : user
      )
    );
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Users Management</h1>

          <p className="text-slate-500">
            Manage users, roles, account status and player stats.
          </p>
        </div>

        <div className="flex h-11 w-full max-w-md items-center rounded-xl border bg-white px-4 lg:w-96">
          <Search size={18} className="text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="ml-3 flex-1 outline-none"
          />
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl bg-white shadow">
        <table className="w-full min-w-[940px] border-collapse">
          <thead className="bg-slate-100">
            <tr>
              <th className="whitespace-nowrap px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                User
              </th>

              <th className="whitespace-nowrap px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Role
              </th>

              <th className="whitespace-nowrap px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>

              <th className="whitespace-nowrap px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Stats
              </th>

              <th className="whitespace-nowrap px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Injury
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t border-slate-100">
                <td className="px-6 py-5 align-middle">
                  <div className="flex items-center gap-4">
                    <img
                      src={user.image}
                      className="h-14 w-14 shrink-0 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-semibold leading-tight">
                        {user.name}
                      </h3>

                      <p className="text-sm leading-tight text-slate-500">
                        {user.email}
                      </p>

                      <p className="mt-1.5 text-xs font-medium leading-tight text-slate-400">
                        #{user.jerseyNumber} · {user.position} ·{" "}
                        {user.matches} matches
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-5 align-middle">
                  <select
                    value={user.role}
                    onChange={(e) => changeRole(user.id, e.target.value)}
                    className="rounded-lg border px-3 py-2 text-sm"
                  >
                    <option value="user">User</option>

                    <option value="admin">Admin</option>
                  </select>
                </td>

                <td className="px-4 py-5 align-middle">
                  {user.blocked ? (
                    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-red-100 px-3 py-1 text-sm text-red-600">
                      <Ban size={15} />
                      Blocked
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                      <CheckCircle size={15} />
                      Active
                    </span>
                  )}
                </td>

                <td className="px-4 py-5 align-middle">
                  <div className="flex items-center justify-center gap-6">
                    <StatStepper
                      label="Goals"
                      value={user.goals}
                      onChange={(v) => updateStat(user.id, "goals", v)}
                    />

                    <StatStepper
                      label="Assists"
                      value={user.assists}
                      onChange={(v) => updateStat(user.id, "assists", v)}
                    />
                  </div>
                </td>

                <td className="px-4 py-5 align-middle">
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => toggleInjury(user.id)}
                      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                        user.injury
                          ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                    >
                      <HeartPulse size={15} />
                      {user.injury ? "Injured" : "Fit"}
                    </button>
                  </div>
                </td>

                <td className="px-6 py-5 align-middle">
                  <div className="flex justify-end">
                    <button
                      onClick={() => toggleBlock(user.id)}
                      className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium text-white ${
                        user.blocked
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      {user.blocked ? "Unblock" : "Block"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
