"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const VehicleSelection = () => {
    const vehicleTypes = [
        {
            title: "Sedans",
            description: "For quick trips, airport drops, 2–4 passengers",
            image: "/images/home/car-categories/standard.png",
        },
        {
            title: "SUVs",
            description: "Spacious, great for long travel and heavy luggage",
            image: "/images/home/car-categories/muv.png",
        },
        {
            title: "Minivans & Tempo Travellers",
            description: "Large teams, client groups, or VIP guests",
            image: "/images/home/car-categories/luxury.png",
        },
        {
            title: "Premium cars",
            description: "Corolla, Camry, and Innova Crysta for top-level executives",
            image: "/images/home/car-categories/premium.png",
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D32F2F]">Choose from a Wide Range of Vehicles</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Some rides need a small hatchback. Others need an 8-seater tempo traveller. For business needs, we keep a diverse fleet ready.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {vehicleTypes.map((vehicle, index) => (
                        <Link key={index} href="/premium-car-rentals" className="relative h-[400px] rounded-2xl overflow-hidden group block shadow-lg">
                            {/* Background Image */}
                            <Image
                                src={vehicle.image}
                                alt={vehicle.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-[#EC2028]">
                                <h4 className="text-2xl font-bold mb-2 text-[#EC2028]">{vehicle.title}</h4>
                                <p className="text-gray-700 text-md font-medium leading-relaxed">{vehicle.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VehicleSelection;
