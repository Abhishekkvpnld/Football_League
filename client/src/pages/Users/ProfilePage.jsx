import { useState } from "react";
import {
  Trophy,
  Goal,
  Handshake,
  Shield,
  Flag,
  MapPin,
  User,
  Star,
  Pencil,
  Crown,
  X,
  Save,
  ImageIcon,
  Footprints,
} from "lucide-react";

export default function ProfilePage() {
  const [player, setPlayer] = useState({
    name: "Abhishek KV",
    username: "@abhishekkv",
    image: "https://i.pravatar.cc/300?img=12",
    club: "Real Madrid",
    country: "India",
    favouriteCountry: "Brazil",
    position: "Central Midfielder",
    foot: "Right Foot",
    matches: 18,
    goals: 14,
    assists: 10,
    motm: 6,
    wins: 11,
    yellow: 2,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(player);

  const openModal = () => {
    setFormData(player);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setPlayer(formData);
    setIsModalOpen(false);
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white">
      {/* Banner */}
      <div className="h-64 bg-gradient-to-r from-green-700 via-lime-500 to-emerald-700 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Profile */}
      <div className="max-w-6xl mx-auto px-6 -mt-28">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          {/* Top */}
          <div className="p-8 text-center">
            <div className="relative inline-block">
              <div className="w-40 h-40 rounded-full mx-auto p-1 bg-gradient-to-br from-lime-400 to-emerald-500">
                <img
                  src={player.image}
                  className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                  alt={player.name}
                />
              </div>
              <div className="absolute -top-1 -right-1 bg-yellow-400 p-2.5 rounded-full shadow-lg shadow-yellow-400/30">
                <Crown className="text-slate-900" size={20} />
              </div>
            </div>

            <h1 className="text-4xl font-bold mt-6 tracking-tight">{player.name}</h1>
            <p className="text-lime-400/90 font-medium mt-1.5">{player.position}</p>

            <button
              onClick={openModal}
              className="mt-6 bg-lime-500 hover:bg-lime-400 text-slate-900 px-8 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto transition-all hover:scale-105 shadow-lg shadow-lime-500/20"
            >
              <Pencil size={18} />
              Edit Profile
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-y border-slate-800">
            {[
              { label: "Matches", value: player.matches },
              { label: "Goals", value: player.goals },
              { label: "Assists", value: player.assists },
              { label: "MOTM", value: player.motm },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center py-8 border-r last:border-r-0 border-slate-800 hover:bg-slate-800/40 transition-colors"
              >
                <h2 className="text-4xl font-bold text-lime-400">{item.value}</h2>
                <p className="text-slate-400 mt-2 text-sm uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-800">
              <h2 className="text-xl font-bold mb-6 text-slate-100">Personal Information</h2>
              <div className="space-y-4">
                <InfoRow icon={<User className="text-lime-400" size={18} />} value={player.username} />
                <InfoRow icon={<MapPin className="text-lime-400" size={18} />} value={player.country} />
                <InfoRow icon={<Shield className="text-lime-400" size={18} />} value={player.club} />
                <InfoRow icon={<Flag className="text-lime-400" size={18} />} value={player.favouriteCountry} />
                <InfoRow icon={<Goal className="text-lime-400" size={18} />} value={player.position} />
                <InfoRow icon={<Footprints className="text-lime-400" size={18} />} value={player.foot} />
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-800">
              <h2 className="text-xl font-bold mb-6 text-slate-100">Achievements</h2>
              <div className="space-y-4">
                <InfoRow icon={<Trophy className="text-yellow-400" size={18} />} value="MVP x3" />
                <InfoRow icon={<Star className="text-lime-400" size={18} />} value="Top Scorer" />
                <InfoRow icon={<Handshake className="text-cyan-400" size={18} />} value="Playmaker Award" />
                <InfoRow icon={<span className="text-base">🟨</span>} value={`Yellow Cards : ${player.yellow}`} />
                <InfoRow icon={<span className="text-base">🏅</span>} value={`Wins : ${player.wins}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto scrollbar-hide animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-slate-800 sticky top-0 bg-slate-900/95 backdrop-blur z-10">
              <div>
                <h2 className="text-xl font-bold">Edit Profile</h2>
                <p className="text-sm text-slate-500 mt-0.5">Update your player details</p>
              </div>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-7 space-y-7">
              {/* Avatar preview */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-lime-400 to-emerald-500">
                  <img
                    src={formData.image}
                    className="w-full h-full rounded-full object-cover border-2 border-slate-900"
                    alt="Preview"
                  />
                </div>
                <div className="relative w-full max-w-sm">
                  <ImageIcon
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                  />
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => handleChange("image", e.target.value)}
                    placeholder="Image URL"
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Basic Info */}
              <Section title="Basic Info">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="input-field"
                    />
                  </Field>
                  <Field label="Username">
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => handleChange("username", e.target.value)}
                      className="input-field"
                    />
                  </Field>
                </div>
              </Section>

              {/* Club & Country */}
              <Section title="Club & Country">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Club">
                    <input
                      type="text"
                      value={formData.club}
                      onChange={(e) => handleChange("club", e.target.value)}
                      className="input-field"
                    />
                  </Field>
                  <Field label="Country">
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => handleChange("country", e.target.value)}
                      className="input-field"
                    />
                  </Field>
                </div>
                <div className="mt-4">
                  <Field label="Favourite Country">
                    <input
                      type="text"
                      value={formData.favouriteCountry}
                      onChange={(e) => handleChange("favouriteCountry", e.target.value)}
                      className="input-field"
                    />
                  </Field>
                </div>
              </Section>

              {/* Playing Style */}
              <Section title="Playing Style">
                <Field label="Position">
                  <select
                    value={formData.position}
                    onChange={(e) => handleChange("position", e.target.value)}
                    className="input-field"
                  >
                    <option>Goalkeeper</option>
                    <option>Centre Back</option>
                    <option>Full Back</option>
                    <option>Defensive Midfielder</option>
                    <option>Central Midfielder</option>
                    <option>Attacking Midfielder</option>
                    <option>Winger</option>
                    <option>Striker</option>
                  </select>
                </Field>

                <div className="mt-4">
                  <label className="block text-sm text-slate-400 mb-2">Preferred Foot</label>
                  <div className="flex gap-3">
                    {["Left Foot", "Right Foot"].map((foot) => (
                      <button
                        key={foot}
                        type="button"
                        onClick={() => handleChange("foot", foot)}
                        className={`flex-1 px-5 py-2.5 rounded-xl font-medium transition-all ${
                          formData.foot === foot
                            ? "bg-lime-500 text-slate-900 shadow-md shadow-lime-500/20"
                            : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                        }`}
                      >
                        {foot}
                      </button>
                    ))}
                  </div>
                </div>
              </Section>

              {/* Stats */}
              <Section title="Stats">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Field label="Matches">
                    <input
                      type="number"
                      value={formData.matches}
                      onChange={(e) => handleChange("matches", Number(e.target.value))}
                      className="input-field text-center"
                    />
                  </Field>
                  <Field label="Goals">
                    <input
                      type="number"
                      value={formData.goals}
                      onChange={(e) => handleChange("goals", Number(e.target.value))}
                      className="input-field text-center"
                    />
                  </Field>
                  <Field label="Assists">
                    <input
                      type="number"
                      value={formData.assists}
                      onChange={(e) => handleChange("assists", Number(e.target.value))}
                      className="input-field text-center"
                    />
                  </Field>
                  <Field label="MOTM">
                    <input
                      type="number"
                      value={formData.motm}
                      onChange={(e) => handleChange("motm", Number(e.target.value))}
                      className="input-field text-center"
                    />
                  </Field>
                </div>
              </Section>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 px-7 py-5 border-t border-slate-800 sticky bottom-0 bg-slate-900/95 backdrop-blur">
              <button
                onClick={closeModal}
                className="px-6 py-3 rounded-xl font-bold text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-xl font-bold bg-lime-500 hover:bg-lime-400 text-slate-900 flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-lime-500/20"
              >
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function InfoRow({ icon, value }) {
  return (
    <div className="flex items-center gap-3.5 text-slate-200">
      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/60">
        {icon}
      </span>
      <span>{value}</span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3.5">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm text-slate-400 mb-2">{label}</label>
      {children}
    </div>
  );
}