"use client";

import React from "react";
import GalleryHero from "../../components/sections/gallery/GalleryHero";
import GalleryEvents from "../../components/sections/gallery/GalleryEvents";

const GalleryPage = () => {
    return (
        <main className="w-full bg-white">
            <GalleryHero />
            <GalleryEvents />
        </main>
    );
};

export default GalleryPage;
