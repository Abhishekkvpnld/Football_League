import { Construction, Clock3, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeatureInProgress({
  title = "Feature Under Development",
  description = "We're currently building this feature. It will be available in a future update.",
}) {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-140px)] items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
          <Construction className="h-12 w-12 text-emerald-600" />
        </div>

        {/* Title */}
        <h1 className="mt-8 text-center text-3xl font-bold text-slate-800">
          {title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-center leading-7 text-slate-500">
          {description}
        </p>

        {/* Status */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-amber-700">
            <Clock3 size={18} />
            <span className="font-medium">
              Work in Progress
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/admin")}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
          >
            Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}