"use client";

import React from "react";
import { FaGopuram, FaLandmark, FaBuilding, FaArchway, FaCity } from "react-icons/fa6";

const Cities = () => {
    const cities = [
        {
            name: "Outstation Cabs in Chennai",
            desc: "Comfortable intercity rides from Chennai to Pondicherry, Bangalore, Vellore, and more.",
            icon: <FaGopuram />
        },
        {
            name: "Outstation Cabs in Hyderabad",
            desc: "Travel hassle-free from Hyderabad to Vijayawada, Warangal, and other popular routes.",
            icon: <FaLandmark />
        },
        {
            name: "Outstation Cabs in Bangalore",
            desc: "Safe and timely rides from Bangalore to Mysore, Coorg, Chikmagalur, and beyond.",
            icon: <FaBuilding />
        },
        {
            name: "Outstation Cabs in Delhi",
            desc: "Convenient cab services from Delhi to Jaipur, Agra, Chandigarh, and nearby states.",
            icon: <FaArchway />
        },
        {
            name: "Outstation Cabs in Gurgaon",
            desc: "Reliable outstation taxis from Gurgaon to Manesar, Neemrana, Jaipur, and more.",
            icon: <FaCity />
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Book Your Outstation Cabs Across All Cities in India
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Many companies in top metro hubs choose us to book outstation cabs for their teams, vendors, and field executives. We ensure you get reliable cars, experienced chauffeurs, and fair rates across regions.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="bg-red-50 p-8 rounded-2xl shadow-sm border-b-4 border-red-500 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center w-full md:w-[calc(33.333%-16px)] lg:w-[calc(30%-16px)] min-h-[300px]"
                        >
                            <div className="bg-white text-gray-700 w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {city.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-gray-900">{city.name}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{city.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cities;
