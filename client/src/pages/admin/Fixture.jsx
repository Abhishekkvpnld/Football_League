import { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  IndianRupee,
  Plus,
  Trash2,
  CalendarPlus,
} from "lucide-react";

const initialMatches = [
  {
    id: 1,
    date: "2026-08-02",
    time: "18:30",
    turf: "Greenfield Arena, Turf 2",
    fee: 150,
  },
  {
    id: 2,
    date: "2026-08-09",
    time: "20:00",
    turf: "Kickoff Sports Complex",
    fee: 200,
  },
];

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTime(timeStr) {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":");
  const hour = Number(h);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${m} ${period}`;
}

export default function FixturesPage() {
  const [matches, setMatches] = useState(initialMatches);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [turf, setTurf] = useState("");
  const [fee, setFee] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setDate("");
    setTime("");
    setTurf("");
    setFee("");
  };

  const handleCreate = (e) => {
    e.preventDefault();

    if (!date || !time || !turf.trim() || fee === "") {
      setError("Fill in date, time, turf and fee to create a match.");
      return;
    }

    if (Number(fee) < 0) {
      setError("Fee can't be negative.");
      return;
    }

    const newMatch = {
      id: Date.now(),
      date,
      time,
      turf: turf.trim(),
      fee: Number(fee),
    };

    setMatches((prev) =>
      [...prev, newMatch].sort(
        (a, b) =>
          new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
      )
    );

    setError("");
    resetForm();
  };

  const deleteMatch = (id) => {
    setMatches((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Fixtures</h1>

        <p className="text-slate-500">
          Schedule new matches and manage upcoming fixtures.
        </p>
      </div>

      {/* Create match form */}
      <div className="rounded-2xl bg-white p-6 shadow">
        <div className="mb-5 flex items-center gap-2">
          <CalendarPlus size={20} className="text-slate-500" />

          <h2 className="text-lg font-semibold">Create new match</h2>
        </div>

        <form
          onSubmit={handleCreate}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Date
            </label>

            <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
              <CalendarDays size={16} className="shrink-0 text-slate-400" />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Time
            </label>

            <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
              <Clock size={16} className="shrink-0 text-slate-400" />

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Turf
            </label>

            <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
              <MapPin size={16} className="shrink-0 text-slate-400" />

              <input
                type="text"
                value={turf}
                onChange={(e) => setTurf(e.target.value)}
                placeholder="Turf name"
                className="w-full text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Fee (per player)
            </label>

            <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
              <IndianRupee size={16} className="shrink-0 text-slate-400" />

              <input
                type="number"
                min="0"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                placeholder="0"
                className="w-full text-sm outline-none"
              />
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            {error && (
              <p className="mb-3 text-sm font-medium text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              <Plus size={16} />
              Create match
            </button>
          </div>
        </form>
      </div>

      {/* Existing matches */}
      <div className="rounded-2xl bg-white shadow">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            Upcoming matches
            <span className="ml-2 text-sm font-normal text-slate-400">
              ({matches.length})
            </span>
          </h2>
        </div>

        {matches.length === 0 ? (
          <div className="px-6 py-10 text-center text-sm text-slate-400">
            No matches scheduled yet. Create one above.
          </div>
        ) : (
          <ul className="divide-y">
            {matches.map((match) => (
              <li
                key={match.id}
                className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <CalendarDays size={16} className="text-slate-400" />
                    {formatDate(match.date)}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Clock size={16} className="text-slate-400" />
                    {formatTime(match.time)}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <MapPin size={16} className="text-slate-400" />
                    {match.turf}
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                    <IndianRupee size={13} />
                    {match.fee}
                  </div>
                </div>

                <button
                  onClick={() => deleteMatch(match.id)}
                  className="inline-flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
                >
                  <Trash2 size={15} />
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
