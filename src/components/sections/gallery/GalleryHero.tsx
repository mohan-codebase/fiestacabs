"use client";

const GalleryHero = () => {
    return (
        <section
            className="relative min-h-[420px] md:min-h-[480px] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url("/images/gallery/live/DSC09145-min-scaled.jpg")',
                backgroundPosition: "0% 30%",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
                    Gallery
                </h1>
            </div>
        </section>
    );
};

export default GalleryHero;
