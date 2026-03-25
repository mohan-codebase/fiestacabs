"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CarCategory {
    id: string;
    name: string;
    icon: string;
    image: string;
    description: string;
}

const CarCategories = () => {
    const categories: CarCategory[] = [
        {
            id: "ev",
            name: "EV",
            icon: "/images/home/car-categories/ev.png",
            image: "/images/home/car-categories/ev.png",
            description:
                "Fiesta's electric vehicle services represent our commitment to sustainable transportation. Our EV fleet offers zero-emission solutions for environmentally conscious businesses. Experience quiet, smooth rides while reducing your carbon footprint. Perfect for corporate transport with charging infrastructure support and cost-effective operations.",
        },
        {
            id: "standard",
            name: "Standard",
            icon: "/images/home/car-categories/standard.png",
            image: "/images/home/car-categories/standard.png",
            description:
                "Fiesta's standard car services deliver reliable and cost-effective transportation solutions without compromising on quality. Ideal for daily commuting and well-suited for employee transport services, our fleet of well-maintained vehicles ensures comfort, safety, and punctuality. Whether for work commutes, personal errands, or family travel, Fiesta offers a seamless travel experience backed by professional service and exceptional value. Free ride at great value.",
        },
        {
            id: "premium",
            name: "Premium",
            icon: "/images/home/car-categories/premium.png",
            image: "/images/home/car-categories/premium.png",
            description:
                "Fiesta's premium car services offer superior comfort and style for executives and special occasions. Our premium fleet features high-end vehicles with advanced amenities, ensuring a luxurious travel experience. Perfect for business meetings, airport transfers, and VIP transport with professional chauffeurs.",
        },
        {
            id: "muv",
            name: "MUV",
            icon: "/images/home/car-categories/muv.png",
            image: "/images/home/car-categories/muv.png",
            description:
                "Fiesta's MUV services provide spacious and versatile transportation for groups and families. Our multi-utility vehicles offer ample seating and luggage capacity, ideal for team outings, airport pickups, and group travel. Experience comfort and convenience with our well-maintained MUV fleet.",
        },
        {
            id: "luxury",
            name: "Luxury",
            icon: "/images/home/car-categories/luxury.png",
            image: "/images/home/car-categories/luxury.png",
            description:
                "Fiesta's luxury car services deliver the ultimate in sophistication and elegance. Our exclusive fleet of premium luxury vehicles provides unparalleled comfort, cutting-edge technology, and exceptional service. Perfect for high-profile executives, special events, and clients who demand the very best in corporate transportation.",
        },
    ];

    const [activeCategory, setActiveCategory] = useState<string>("standard");

    const activeCategoryData = categories.find(
        (cat) => cat.id === activeCategory
    );

    return (
        <section className="w-full py-5 md:py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                        Cars
                    </p>
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
                        Car Categories
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-8 mb-16 overflow-x-auto pb-4 hide-scrollbar">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex flex-col items-center gap-3 transition-all duration-300 ${activeCategory === category.id
                                ? "opacity-100"
                                : "opacity-60 hover:opacity-80"
                                }`}
                        >
                            <div className="relative w-20 h-16 md:w-24 md:h-20">
                                <Image
                                    src={category.icon}
                                    alt={category.name}
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <span
                                className={`text-sm md:text-base font-semibold ${activeCategory === category.id
                                    ? "text-gray-900"
                                    : "text-gray-600"
                                    }`}
                            >
                                {category.name}
                            </span>
                            {activeCategory === category.id && (
                                <div className="w-full h-1 bg-[#EC2028] rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                {activeCategoryData && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  p-8 md:p-12 ">
                        {/* Left Side - Car Image */}
                        <div className="relative w-full h-64 md:h-80 lg:h-96">
                            <Image
                                src={activeCategoryData.image}
                                alt={activeCategoryData.name}
                                fill
                                style={{ objectFit: "contain" }}
                                className="drop-shadow-lg"
                            />
                        </div>

                        {/* Right Side - Description */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                {activeCategoryData.name}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                {activeCategoryData.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CarCategories;
