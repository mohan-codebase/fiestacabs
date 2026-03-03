import React from "react";
import Image from "next/image";

const ReachUsHero = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] bg-gray-900 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/banner/banner-1.png" // Using banner-1 as temporary placeholder
                    alt="Reach Us"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Reach Us</h1>
            </div>
        </section>
    );
};

export default ReachUsHero;
