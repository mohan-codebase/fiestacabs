"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const VehicleSelection = () => {
    const vehicleTypes = [
        {
            title: "Sedans",
            description: "Efficient & comfortable for small families or solo travelers.",
            image: "/images/services-offered/premium-car-rentals/outstation-rides/sedans.jpg",
        },
        {
            title: "SUVs",
            description: "More space and power for long-distance comfort.",
            image: "/images/services-offered/premium-car-rentals/outstation-rides/suvs.jpg",
        },
        {
            title: "Minivans & Tempo Travellers",
            description: "Ideal for large groups, team outings, and family events.",
            image: "/images/services-offered/premium-car-rentals/outstation-rides/mini-vans.png",
        },
        {
            title: "Premium cars",
            description: "Luxury travel for executive needs and special occasions.",
            image: "/images/services-offered/premium-car-rentals/outstation-rides/premium-cars.png",
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
