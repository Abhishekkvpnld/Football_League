import { useState, useRef } from "react";
import {
  Image as ImageIcon,
  Plus,
  Trash2,
  X,
  Upload,
  Link as LinkIcon,
} from "lucide-react";

const initialImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
    caption: "Match day warm-up",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&q=80",
    caption: "Team huddle",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
    caption: "Trophy lift",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80",
    caption: "Training session",
  },
];

export default function GalleryPage() {
  const [images, setImages] = useState(initialImages);
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(null);

  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const openModal = () => {
    setUrl("");
    setCaption("");
    setError("");
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setUrl(reader.result);
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!url.trim()) {
      setError("Add an image URL or upload a file.");
      return;
    }

    const newImage = {
      id: Date.now(),
      url: url.trim(),
      caption: caption.trim() || "Untitled",
    };

    setImages((prev) => [newImage, ...prev]);
    setShowModal(false);
  };

  const deleteImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
    if (preview?.id === id) setPreview(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gallery</h1>

          <p className="text-slate-500">
            Photos from matches, training and team moments.
          </p>
        </div>

        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
        >
          <Plus size={16} />
          Add photo
        </button>
      </div>

      {/* Grid */}
      {images.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white py-16 text-center shadow">
          <ImageIcon size={28} className="text-slate-300" />
          <p className="text-sm text-slate-400">
            No photos yet. Add your first one.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow"
            >
              <img
                src={img.url}
                alt={img.caption}
                onClick={() => setPreview(img)}
                className="h-full w-full cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              <p className="pointer-events-none absolute inset-x-0 bottom-0 truncate px-3 py-2 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {img.caption}
              </p>

              <button
                onClick={() => deleteImage(img.id)}
                className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 text-red-500 opacity-0 shadow transition-opacity duration-200 hover:bg-white group-hover:opacity-100"
                aria-label="Delete photo"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add photo modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Add photo</h2>

              <button
                onClick={closeModal}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-4">
              {url && (
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={url}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Image URL
                </label>

                <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
                  <LinkIcon size={16} className="shrink-0 text-slate-400" />

                  <input
                    type="text"
                    value={url.startsWith("data:") ? "" : url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      setError("");
                    }}
                    placeholder="https://..."
                    className="w-full text-sm outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs text-slate-400">or</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed px-3 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50"
              >
                <Upload size={16} />
                Upload from device
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Caption (optional)
                </label>

                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="e.g. Match day warm-up"
                  className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
                />
              </div>

              {error && (
                <p className="text-sm font-medium text-red-500">{error}</p>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800"
                >
                  <Plus size={16} />
                  Add photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Full-size preview */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-h-[85vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-10 right-0 rounded-full p-1.5 text-white hover:bg-white/10"
              aria-label="Close preview"
            >
              <X size={22} />
            </button>

            <img
              src={preview.url}
              alt={preview.caption}
              className="max-h-[85vh] w-full rounded-xl object-contain"
            />

            <p className="mt-2 text-center text-sm text-white/80">
              {preview.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
