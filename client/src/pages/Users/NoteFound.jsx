import { Link } from "react-router-dom";
import { Home, ArrowLeft, Trophy } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">

        {/* Football Icon */}
        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
            <Trophy className="w-14 h-14 text-green-600" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-8xl font-black text-green-600 tracking-tight">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-4xl font-bold text-slate-800">
          Oops! The Ball Went Out of Play ⚽
        </h2>

        {/* Description */}
        <p className="mt-5 text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
          Looks like this page has left the stadium. Let's get you back onto
          the pitch before the next <strong>Sunday Friendly Match</strong>.
        </p>

        {/* Fun Card */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5">

          <h3 className="text-xl font-semibold text-green-700">
            🗓 Next Match
          </h3>

          <p className="mt-2 text-slate-700">
            <strong>Sunday</strong> • 7:00 AM
          </p>

          <p className="text-slate-500">
            Don't forget to confirm your spot!
          </p>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

        </div>

        {/* Footer */}
        <div className="mt-10 border-t pt-6">

          <p className="text-slate-500 text-sm">
            ⚽ Football League • Every Sunday • Play. Compete. Enjoy.
          </p>

        </div>

      </div>
    </div>
  );
}