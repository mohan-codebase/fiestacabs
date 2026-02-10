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
            className={`relative ${heightClasses[height]} flex items-center justify-center`}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
                {subtitle && (
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
