import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Calendar,
    MapPin,
    Clock,
} from "lucide-react";

import { posters } from "../utils/posters"; 

export default function PosterSlider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % posters.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? posters.length - 1 : prev - 1
        );
    };

    return (
        <section className="py-16 bg-slate-950">

            <div className="max-w-7xl mx-auto px-4">

                <div className="relative overflow-hidden rounded-3xl">

                    {/* Slides */}

                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${current * 100}%)`,
                        }}
                    >
                        {posters.map((poster) => (
                            <div
                                key={poster.id}
                                className="min-w-full relative h-[500px]"
                            >
                                <img
                                    src={poster.image}
                                    alt={poster.title}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                                <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-xl">

                                    <span className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                                        Football League
                                    </span>

                                    <h2 className="text-5xl font-black text-white mt-6">
                                        {poster.title}
                                    </h2>

                                    <p className="text-slate-300 text-xl mt-4">
                                        {poster.subtitle}
                                    </p>

                                    <div className="flex flex-wrap gap-6 mt-8 text-white">

                                        <div className="flex items-center gap-2">
                                            <Calendar size={18} />
                                            {poster.date}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Clock size={18} />
                                            {poster.time}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <MapPin size={18} />
                                            {poster.place}
                                        </div>

                                    </div>

                                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition">
                                        Join Match
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Previous */}

                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center transition"
                    >
                        <ChevronLeft className="text-white" />
                    </button>

                    {/* Next */}

                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center transition"
                    >
                        <ChevronRight className="text-white" />
                    </button>

                    {/* Dots */}

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                        {posters.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`transition-all rounded-full ${current === index
                                        ? "w-10 h-3 bg-blue-500"
                                        : "w-3 h-3 bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>

                </div>

            </div>

        </section>
    );
}