


import { Link } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4 py-10">
      <div className="grid lg:grid-cols-2 max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-700 text-white p-12">
          <BriefcaseBusiness size={70} />

          <h1 className="text-4xl font-bold mt-6">
            Start Your Career Journey
          </h1>

          <p className="mt-5 text-center text-blue-100 max-w-md">
            Join thousands of candidates and employers. Create your account and
            discover better opportunities.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-800">
            Create Account
          </h2>

          <p className="text-slate-500 mt-2">
            Register to get started.
          </p>

          <form className="space-y-5 mt-8">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="********"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="********"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold">
              Create Account
            </button>

          </form>

          <p className="text-center mt-6 text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}