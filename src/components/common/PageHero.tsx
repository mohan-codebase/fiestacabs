import React from "react";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    height?: "sm" | "md" | "lg";
}

const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    backgroundImage,
    height = "md",
}) => {
    const heightClasses = {
        sm: "h-[300px] md:h-[400px]",
        md: "h-[400px] md:h-[500px]",
        lg: "h-[500px] md:h-[600px]",
    };

    return (
        <section
            className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Cinematic Overlay - Darker and more centered for text readability */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight drop-shadow-2xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto drop-shadow-lg">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
