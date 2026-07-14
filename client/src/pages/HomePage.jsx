
import {
  BriefcaseBusiness,
  Search,
  Users,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold">
              CareerHub
            </h1>
          </div>

          <div className="space-x-8 hidden md:flex">
            <a href="/">Home</a>
            <a href="/">Jobs</a>
            <a href="/">Companies</a>
            <a href="/">About</a>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Profile
          </button>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Find Your Dream Job
          </h1>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Search thousands of verified jobs from trusted companies across
            multiple industries.
          </p>

          <div className="mt-10 max-w-3xl mx-auto flex bg-white rounded-xl shadow">

            <input
              placeholder="Search jobs..."
              className="flex-1 px-5 py-4 outline-none rounded-l-xl"
            />

            <button className="bg-blue-600 text-white px-8 rounded-r-xl flex items-center gap-2">
              <Search size={18} />
              Search
            </button>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">

        <div className="bg-white rounded-2xl shadow p-8">
          <BriefcaseBusiness className="text-blue-600 mb-5" />
          <h3 className="font-bold text-xl">
            10,000+ Jobs
          </h3>

          <p className="text-slate-500 mt-3">
            Explore jobs from verified employers.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <Building2 className="text-green-600 mb-5" />
          <h3 className="font-bold text-xl">
            Verified Companies
          </h3>

          <p className="text-slate-500 mt-3">
            Every employer is verified before posting.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <ShieldCheck className="text-purple-600 mb-5" />
          <h3 className="font-bold text-xl">
            Secure Platform
          </h3>

          <p className="text-slate-500 mt-3">
            Safe hiring with candidate verification.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <Users className="text-orange-600 mb-5" />
          <h3 className="font-bold text-xl">
            Community
          </h3>

          <p className="text-slate-500 mt-3">
            Connect with recruiters and professionals.
          </p>
        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 text-white py-16">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Ready to Grow Your Career?
          </h2>

          <p className="mt-4 text-blue-100">
            Join thousands of professionals using CareerHub.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold">
            Get Started
          </button>

        </div>

      </section>

    </div>
  );
}