"use client";

import React from "react";
import Image from "next/image";

const WeddingFleetGrid = () => {
    const fleet = [
        {
            title: "Premium ultra-luxury / Executive sedan",
            image: "/images/services-offered/premium-car-rentals/wedding-cars/executive-sedan.jpg"
        },
        {
            title: "Mid-size luxury / Business-class sedan",
            image: "/images/services-offered/premium-car-rentals/wedding-cars/buisness-class-sedan.png"
        },
        {
            title: "Premium sedan / Luxury SUV",
            image: "/images/services-offered/premium-car-rentals/wedding-cars/luxury-suv.jpg"
        },
        {
            title: "Premium MUV",
            image: "/images/services-offered/premium-car-rentals/wedding-cars/premium-muv.jpg"
        },
        {
            title: "Compact SUV",
            image: "/images/services-offered/premium-car-rentals/wedding-cars/compact-suv.jpg"
        },
        {
            title: "Vintage and classic vehicles",
            image: "/images/services-offered/premium-car-rentals/wedding-cars/vintage-classic-vehicles.jpg"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Luxury car rental for wedding
                    </h2>
                    <p className="text-gray-700 text-[15px] md:text-base max-w-5xl mx-auto leading-relaxed mb-6">
                        You need chauffeur-driven cars that make people look twice and a luxury car service that runs like clockwork. That&apos;s why we handpick every car model. Each wedding car is part of our carefully selected luxury car rental lineup.
                    </p>
                    <p className="text-gray-700 text-[15px] md:text-base max-w-5xl mx-auto">
                        Many of our luxury car rentals are booked weeks in advance, especially for destination events
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {fleet.map((car, index) => (
                        <div key={index} className="relative group overflow-hidden border border-gray-200">
                            {/* Image Container */}
                            <div className="relative h-[250px] w-full bg-gray-100">
                                <Image
                                    src={car.image}
                                    alt={car.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Bottom dark gradient for text readability */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                            </div>

                            {/* Title Positioned Over Image */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-white text-[15px] md:text-base font-medium italic drop-shadow-md">
                                    {car.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="text-center space-y-4">
                    <p className="text-gray-700 text-[15px] md:text-base max-w-4xl mx-auto leading-relaxed">
                        Each luxury car in our fleet is cleaned, fuelled, and fitted with fresh linen, and each vehicle undergoes 20+ point checks before every trip.
                    </p>
                    <p className="text-gray-700 text-[15px] md:text-base max-w-5xl mx-auto leading-relaxed">
                        We replace cars with issues within 30 minutes. Our chauffeurs stay in uniform. We offer real-time tracking if needed for our customers during their outstation tour.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default WeddingFleetGrid;
