"use client";

import React from "react";
import Image from "next/image";

const events = [
    {
        title: "Grand Unveiling: Introducing Our All-New Electric Vehicle The Future of Smart Mobility Begins Now!",
        description: "Fiesta has unlocked another milestone in smart mobility with the launch of our new fleet of electric cars! Designed to drive a cleaner, greener future, this launch underscores our commitment to innovation and sustainability. Here's to embracing electric rides and a brighter, more sustainable tomorrow!",
        // images: [
        //     "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop",
        //     "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop",
        //     "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop"
        // ]
    },
    {
        title: "25th Anniversary Client Meet at Westin",
        description: "25 years of trusted journeys and many more to come! Celebrating our silver jubilee with our valued clients and partners at The Westin, Chennai. A night of gratitude, networking, and looking forward to the future of mobility.",
        // images: [
        //     "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
        //     "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop",
        //     "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop",
        //     "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop"
        // ]
    },
    {
        title: "Training Program at Land Mark Pallava - Beach Resort",
        description: "The Fiesta Family kicked off the New Year with a two-day residential training program at Land Mark Pallava Beach Resort on “Managing Performance in the 21st Century,” led by renowned trainer Shri S.G. Apte of Gapset Consultancy, Pune. Around 20 participants from the Executive and Middle Management teams attended, gaining insights to enhance their performance and expand Fiesta's horizons.",
        // images: [
        //     "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop",
        //     "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
        //     "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
        // ]
    }
];

const GalleryEvents = () => {
    return (
        <div className="bg-[#ffcccc] py-10">
            {events.map((event, index) => (
                <section key={index} className="py-20 bg-[#ffcccc] border-b border-gray-200 last:border-0 relative">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        {/* Header */}
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                {event.title}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {event.description}
                            </p>
                        </div>

                        {/* Image Grid */}
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {event.images.map((imgSrc, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    className="relative group overflow-hidden rounded-2xl shadow-lg aspect-video md:aspect-auto md:h-64"
                                >
                                    <Image
                                        src={imgSrc}
                                        alt={`${event.title} image ${imgIndex + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default GalleryEvents;
