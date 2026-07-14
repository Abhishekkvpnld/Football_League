import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-slate-800">
          Forgot Password
        </h2>

        <p className="mt-2 text-slate-500">
          Enter your registered email address and we'll send you a password reset link.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition">
            Send Reset Link
          </button>
        </form>

        <Link
          to="/login"
          className="block text-center mt-6 text-blue-600 hover:underline"
        >
          ← Back to Login
        </Link>
      </div>
    </div>
  );
}