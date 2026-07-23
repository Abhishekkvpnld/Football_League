import { Link } from "react-router-dom";
import { Eye, EyeOff, Home, Trophy } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4 py-10">
      <div className="grid lg:grid-cols-2 max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-green-700 via-emerald-600 to-lime-600 text-white p-12">

          <div className="bg-white/20 p-6 rounded-full">
            <Trophy size={70} />
          </div>

          <h1 className="text-5xl font-extrabold mt-8 text-center">
            Football League
          </h1>

          <p className="mt-6 text-center text-green-100 max-w-md text-lg leading-relaxed">
            Join your friends every Sunday for exciting football matches.
            Register, confirm your availability, view teams, track your
            statistics, and never miss a game.
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
              <div className="text-3xl">🏆</div>
              <p className="mt-2">Player Rankings</p>
            </div>

            <div>
              <div className="text-3xl">👥</div>
              <p className="mt-2">Balanced Teams</p>
            </div>

            <div>
              <div className="text-3xl">📊</div>
              <p className="mt-2">Match Statistics</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">

          {/* Home Button */}
          <Link
            to="/"
            className="inline-flex  items-center gap-2 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-4 py-2 rounded-xl transition mb-8"
          >
            <Home size={18} />
            Home
          </Link>

          <h2 className="text-3xl font-bold text-slate-800">
            Create Account
          </h2>


          <p className="text-slate-500 mt-2">
            Sign up and join this Sunday's friendly match.
          </p>

          <form className="space-y-5 mt-8">

            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="w-full border rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-green-600 outline-none"
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

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 font-medium">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  className="w-full border rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-green-600 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-green-600 transition"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* Signup Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 transition text-white rounded-xl py-3 font-semibold">
              Join Football League
            </button>

          </form>

          <p className="text-center mt-6 text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}