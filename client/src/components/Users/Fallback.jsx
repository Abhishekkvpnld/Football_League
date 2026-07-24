import { Trophy } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-50">

      {/* Background Effects */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-lime-200/40 blur-3xl" />

      <div className="absolute h-[550px] w-[550px] rounded-full border border-emerald-100" />

      <div className="absolute h-[420px] w-[420px] rounded-full border border-emerald-200 animate-pulse" />

      {/* Content */}
      <div className="relative flex flex-col items-center">

        {/* Football */}
        <div className="relative">

          <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-700 shadow-2xl">

            <span className="animate-bounce text-5xl">
              ⚽
            </span>

          </div>

        </div>

        {/* Title */}
        <h1 className="mt-8 text-3xl font-extrabold text-slate-800">
          Football Club
        </h1>

        <p className="mt-2 text-slate-500">
          Preparing your dashboard...
        </p>

        {/* Progress */}
        <div className="mt-8 h-2 w-72 overflow-hidden rounded-full bg-slate-200">

          <div className="h-full w-1/3 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-emerald-500 to-lime-500" />

        </div>

        <div className="mt-5 flex items-center gap-2 text-emerald-600">

          <Trophy className="animate-pulse" size={18} />

          <span className="text-sm font-medium">
            Loading Club Data...
          </span>

        </div>

      </div>

    </div>
  );
}