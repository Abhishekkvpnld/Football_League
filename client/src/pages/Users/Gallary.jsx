import { ImageIcon, Upload } from "lucide-react";
import Header from "../../components/Users/Header";
import { useState } from "react";
import toast from "react-hot-toast";

const galleryImages = [
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
    "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
    "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a",
    "https://images.unsplash.com/photo-1518604666860-9ed391f76460",
    "https://images.unsplash.com/photo-1508098682722-e99c643e7485",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    "https://images.unsplash.com/photo-1552667466-07770ae110d0",
];

export default function GalleryPage() {

    const [images, setImages] = useState(galleryImages);
    const [navOpen, setNavOpen] = useState(false);


    const handleUpload = async () => {
        // Handle image upload logic here
        toast.error("Image upload feature is not implemented yet.");
    }

    return (
        <>
            <Header navOpen={navOpen} setNavOpen={setNavOpen} />

            <div className="space-y-8">

                {/* Header */}
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between p-4">

                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">
                            Football Gallery
                        </h1>

                        <p className="mt-2 max-w-2xl text-slate-500">
                            Browse football ground, training sessions, tournaments and club
                            memories.
                        </p>
                    </div>

                    <button 
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700 sm:w-auto"
                        onClick={handleUpload}
                    >
                        <Upload size={18} />
                        Upload Image
                    </button>

                </div>



                {/* Gallery */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-6">

                    {galleryImages.map((image, index) => (

                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            <div className="relative aspect-[4/3] overflow-hidden">

                                <img
                                    src={image}
                                    alt={`Football ${index + 1}`}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />

                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition group-hover:opacity-100">

                                    <h3 className="font-semibold">
                                        Playground #{index + 1}
                                    </h3>

                                    <p className="text-sm text-slate-200">
                                        Football Training Session
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-center justify-between p-4">

                                <div>
                                    <h4 className="font-semibold text-slate-800">
                                        Football Ground
                                    </h4>

                                    <p className="text-sm text-slate-500">
                                        July 2026
                                    </p>
                                </div>

                                <div className="rounded-full bg-emerald-100 p-2">
                                    <ImageIcon
                                        size={18}
                                        className="text-emerald-600"
                                    />
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}