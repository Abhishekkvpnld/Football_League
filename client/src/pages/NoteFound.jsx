import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center">
        <div className="flex justify-center">
          <div className="bg-red-100 p-5 rounded-full">
            <AlertTriangle className="w-14 h-14 text-red-600" />
          </div>
        </div>

        <h1 className="mt-8 text-7xl font-extrabold text-slate-800">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-700">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-500">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            <Home size={20} />
            Go to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border border-slate-300 hover:bg-slate-100 px-6 py-3 rounded-xl transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}