"use client";

import React from "react";

const GalleryHero = () => {
    return (
        <section
            className="relative h-[60vh] md:h-[70vh] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url("/images/gallery/banner.avif")', // Placeholder: Team/Group
                backgroundAttachment: "fixed"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-xl">
                    Gallery
                </h1>
                <div className="w-24 h-1.5 bg-[#EC2028] mx-auto mt-6 rounded-full"></div>
            </div>
        </section>
    );
};

export default GalleryHero;
