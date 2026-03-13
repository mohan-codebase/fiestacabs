"use client";

const GalleryHero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/images/gallery/live/DSC09145-min-scaled.jpg")',
                        backgroundPosition: "50% 40%",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/60" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
                <div className="text-white space-y-4 max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-200">Inside Fiesta</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        Stories from our fleet, events, and celebrations
                    </h1>
                    <p className="text-lg text-slate-200/85 leading-relaxed">
                        A visual log of launches, anniversaries, client meets, and the people who keep every ride on time.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-100/90">
                        <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10">Electric fleet launch</span>
                        <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10">25+ years milestones</span>
                        <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10">Team culture</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full md:w-80">
                    {[
                        "/images/gallery/live/optimized-img-6.avif",
                        "/images/gallery/live/optimized-img-2.avif",
                        "/images/gallery/live/optimized-img-9.avif",
                        "/images/gallery/live/3-1.jpg",
                    ].map((img, idx) => (
                        <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${img})` }}
                            />
                            <div className="absolute inset-0 bg-slate-900/15" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryHero;
