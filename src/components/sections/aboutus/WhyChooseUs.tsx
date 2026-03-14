import React from "react";
import Image from "next/image";

const features = [
    {
        id: "01",
        title: "Two Decades of Experience",
        description:
            "Since 1998, we have consistently understood and adapted to evolving customer needs, establishing Fiesta as a leading provider of employee transport services.",
        image: "/images/about-us/why-choose-us/01.avif",
    },
    {
        id: "02",
        title: "Customized End-to-End Solutions",
        description:
            "We design transport solutions tailored to your unique requirements — from car rentals to complex logistics, we have you covered.",
        image: "/images/about-us/why-choose-us/02.avif",
    },
    {
        id: "03",
        title: "Proactive Management Team",
        description:
            "Our leadership brings rich experience and passion for excellence, constantly innovating to maintain our reputation as a top-tier transport service.",
        image: "/images/about-us/why-choose-us/03.avif",
    },
    {
        id: "04",
        title: "Real-time Tracking & Safety",
        description:
            "We leverage cutting-edge technology for real-time tracking, automated billing, and enhanced safety — ensuring full transparency in every journey.",
        image: "/images/about-us/why-choose-us/04.avif",
    },
    {
        id: "05",
        title: "Eco-friendly Fleet Options",
        description:
            "We offer a growing fleet of electric and low-emission vehicles, helping our clients achieve sustainability goals without compromising on quality.",
        image: "/images/about-us/why-choose-us/05.avif",
    },
    {
        id: "06",
        title: "24/7 Reliable Operations",
        description:
            "With a dedicated control room and round-the-clock support, we ensure your transportation needs are met with absolute reliability, anytime, anywhere.",
        image: "/images/about-us/why-choose-us/06.avif",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-red-50 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-[#EC2028] btn-animated" />
                        <span className="text-[#EC2028] font-semibold text-sm tracking-wide uppercase">Why Fiesta</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Customers <span className="text-[#EC2028]">Choose Us</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Six pillars that make Fiesta the most trusted name in employee mobility across India.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <article
                            key={feature.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Number badge */}
                                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#EC2028] btn-animated text-white text-xs font-bold flex items-center justify-center shadow-lg">
                                    {feature.id}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="w-8 h-0.5 bg-[#EC2028] btn-animated mb-3" />
                                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                                    {feature.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
