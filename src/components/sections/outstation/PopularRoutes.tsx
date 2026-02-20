"use client";

import React from "react";

const PopularRoutes = () => {
    const routes = [
        { from: "Chennai", destination: "Bangalore", distance: "350 km", vehicles: "Sedan, SUV, Tempo" },
        { from: "Chennai", destination: "Pondicherry", distance: "150 km", vehicles: "Sedan, SUV" },
        { from: "Delhi", destination: "Jaipur", distance: "270 km", vehicles: "Sedan, Innova, Minibus" },
        { from: "Bangalore", destination: "Mysore", distance: "160 km", vehicles: "SUV, Tempo Traveller" },
        { from: "Mumbai", destination: "Pune", distance: "150 km", vehicles: "Sedan, SUV" },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Explore Popular Outstation Routes We Cover
                    </h2>
                    <div className="w-24 h-1 bg-[#EC2028] mb-6"></div>
                    <p className="text-gray-600 leading-relaxed max-w-4xl">
                        Some journeys are business. Some are bonding. Either way, we cover all major outstation cab routes for your teams, guests, friends and executives.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Here are some popular routes companies frequently hire with us:
                    </p>
                </div>

                {/* Table / Grid */}
                <div className="overflow-x-auto mb-10">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 text-gray-500 font-medium">From (City) :</th>
                                <th className="py-4 text-gray-500 font-medium">Destination :</th>
                                <th className="py-4 text-gray-500 font-medium">Approx Distance :</th>
                                <th className="py-4 text-gray-500 font-medium">Vehicle Types :</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routes.map((route, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="py-4 font-semibold text-gray-900">{route.from}</td>
                                    <td className="py-4 text-gray-800">{route.destination}</td>
                                    <td className="py-4 text-gray-600">{route.distance}</td>
                                    <td className="py-4 text-gray-600">{route.vehicles}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Text */}
                <div className="mb-8">
                    <p className="text-gray-600 leading-relaxed max-w-6xl">
                        Whether you&apos;re booking a road trip, airport drop or interstate cab, we have vehicle availability across most regions in India. Companies in manufacturing, IT, retail, and pharma all use our cab services for reliable travel with family or professional contacts.
                    </p>
                </div>
                <div className="w-24 h-1 bg-[#EC2028]"></div>
            </div>
        </section>
    );
};

export default PopularRoutes;
