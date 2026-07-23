import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Trophy,
  ArrowLeft,
  Home,
} from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="grid lg:grid-cols-2 w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-green-700 via-emerald-600 to-lime-600 text-white p-12">

          <div className="bg-white/20 p-6 rounded-full">
            <Trophy size={70} />
          </div>

          <h1 className="text-5xl font-extrabold mt-8 text-center">
            Football League
          </h1>

          <p className="text-center mt-6 text-green-100 max-w-md text-lg leading-relaxed">
            Get ready for another exciting Sunday Friendly Match.
            Confirm your availability, join your friends, view your team,
            and enjoy football every weekend.
          </p>

          <div className="mt-8 bg-white/20 px-5 py-3 rounded-full">
            <span className="font-semibold">
              ⚽ Every Sunday • Friendly Match
            </span>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-center">

            <div>
              <div className="text-3xl">⚽</div>
              <p className="mt-2">Weekly Match</p>
            </div>

            <div>
              <div className="text-3xl">👥</div>
              <p className="mt-2">Join Friends</p>
            </div>

            <div>
              <div className="text-3xl">🏆</div>
              <p className="mt-2">Player Stats</p>
            </div>

            <div>
              <div className="text-3xl">📅</div>
              <p className="mt-2">Every Sunday</p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-8 md:p-12">

          <div className="w-full max-w-md">

            {/* Home Button */}
            <Link
              to="/"
              className="inline-flex  items-center gap-2 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-4 py-2 rounded-xl transition mb-8"
            >
              <Home size={18} />
              Home
            </Link> 

            <h2 className="text-3xl font-bold text-slate-800">
              Welcome Back 👋
            </h2>

            <p className="text-slate-500 mt-2">
              Sign in to confirm your spot for this Sunday's friendly match.
            </p>

            <form className="mt-8 space-y-5">

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-green-600 transition"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>
              </div>

              {/* Remember Me */}
              <div className="flex justify-between items-center text-sm">

                <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    className="accent-green-600"
                  />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-green-600 hover:underline font-medium"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-semibold transition"
              >
                Sign In
              </button>

            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t"></div>
              <span className="px-4 text-slate-400 text-sm">
                OR
              </span>
              <div className="flex-1 border-t"></div>
            </div>

            {/* Google */}
            <button className="w-full border border-slate-300 rounded-xl py-3 flex justify-center items-center gap-3 hover:bg-slate-50 transition">

              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />

              Continue with Google

            </button>

            {/* Signup */}
            <p className="mt-8 text-center text-slate-600">
              New to Football League?{" "}
              <Link
                to="/signup"
                className="text-green-600 font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}