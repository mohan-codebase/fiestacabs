"use client";

import GallerySlider from "../../common/GallerySlider";

interface GalleryEvent {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
    showDots: boolean;
    pauseOnHover?: boolean;
}

const events: GalleryEvent[] = [
    {
        title: "Grand Unveiling: Introducing Our All-New Electric Vehicle",
        subtitle: "The Future of Smart Mobility Begins Now!",
        description:
            "Fiesta has unlocked another milestone in smart mobility with the launch of our new fleet of electric cars! Designed to drive a cleaner, greener future, this launch underscores our commitment to innovation and sustainability.",
        images: [
            "/images/gallery/live/optimized-img-1.avif",
            "/images/gallery/live/optimized-img-2.avif",
            "/images/gallery/live/optimized-img-3.avif",
            "/images/gallery/live/optimized-img-4.avif",
            "/images/gallery/live/optimized-img-5.avif",
            "/images/gallery/live/optimized-img-6.avif",
            "/images/gallery/live/optimized-img-7.avif",
            "/images/gallery/live/optimized-img-9.avif",
            "/images/gallery/live/optimized-img-10.avif",
            "/images/gallery/live/optimized-img-11.avif",
            "/images/gallery/live/optimized-img-12.avif",
            "/images/gallery/live/optimized-img-13.avif",
        ],
        showDots: true,
    },
    {
        title: "25th Anniversary Client Meet at Westin",
        subtitle: "Celebrating 25+ years of reliable movement",
        description:
            "A thank-you evening for the partners and teams who keep our commuters moving—captured at The Westin.",
        images: [
            "/images/gallery/live/6.jpg",
            "/images/gallery/live/1.jpg",
            "/images/gallery/live/3-1.jpg",
            "/images/gallery/live/4.jpg",
            "/images/gallery/live/5.jpg",
            "/images/gallery/live/8.jpg",
            "/images/gallery/live/9-1.jpg",
            "/images/gallery/live/20.jpg",
        ],
        showDots: true,
    },
    {
        title: "Leadership Training at Landmark Pallava Beach Resort",
        subtitle: "Managing performance in the 21st century",
        description:
            "Snapshots from our two-day residential workshop with Shri S.G. Apte—focusing on smarter execution and team growth.",
        images: ["/images/gallery/live/08-2.jpg", "/images/gallery/live/06-2.jpg", "/images/gallery/live/03-2.jpg"],
        showDots: false,
    },
];

const GalleryEvents = () => {
    return (
        <div className="w-full bg-slate-50 py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 lg:px-6 space-y-10">
                {events.map((event, index) => (
                    <section key={index} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-[38%] p-6 md:p-8 space-y-3 border-b lg:border-b-0 lg:border-r border-slate-100">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{event.title}</h3>
                                {event.subtitle && (
                                    <p className="text-base md:text-lg font-semibold text-[#EC2028]">
                                        {event.subtitle}
                                    </p>
                                )}
                                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{event.description}</p>
                            </div>
                            <div className="lg:w-[62%] p-5 md:p-6">
                                <GallerySlider
                                    images={event.images}
                                    title={event.title}
                                    showDots={event.showDots}
                                    pauseOnHover={event.pauseOnHover}
                                />
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default GalleryEvents;
