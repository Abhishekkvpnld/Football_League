import { Link } from "react-router-dom";
import { Eye, EyeOff, BriefcaseBusiness } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="grid lg:grid-cols-2 w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white p-12">
          <BriefcaseBusiness size={70} />
          <h1 className="text-4xl font-bold mt-6">
            Welcome Back
          </h1>
          <p className="text-center mt-4 text-blue-100 max-w-md">
            Login to access your dashboard, manage your applications,
            connect with employers, and continue your career journey.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-slate-800">
              Sign In
            </h2>

            <p className="text-slate-500 mt-2">
              Enter your credentials to continue.
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
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
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
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl py-3 font-semibold"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t"></div>
              <span className="px-4 text-slate-400 text-sm">OR</span>
              <div className="flex-1 border-t"></div>
            </div>

            {/* Google */}
            <button className="w-full border rounded-xl py-3 flex justify-center items-center gap-3 hover:bg-slate-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            {/* Signup */}
            <p className="mt-8 text-center text-slate-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}