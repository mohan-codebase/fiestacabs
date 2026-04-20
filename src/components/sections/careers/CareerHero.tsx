"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CareerHeroProps {
    title: string;
    subtitle: string;
    imageSrc: string;
}

const CareerHero = ({ title, subtitle, imageSrc }: CareerHeroProps) => {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    priority
                    className="object-cover rounded-none"
                />
                <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center text-white pt-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight px-2">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
                <div className="flex justify-center">
                    <Link
                        href="#open-positions"
                        className="bg-[#EC2028] text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-2xl"
                    >
                        Explore Open Roles
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CareerHero;
