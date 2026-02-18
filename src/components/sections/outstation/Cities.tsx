"use client";

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Cities = () => {
    const cities = [
        { name: "Chennai", desc: "Comfortable intercity rides from Chennai to Pondicherry, Bangalore, Vellore, and more.", icon: <FaMapMarkerAlt /> },
        { name: "Hyderabad", desc: "Travel hassle-free from Hyderabad to Vijayawada, Warangal, and other popular routes.", icon: <FaMapMarkerAlt /> },
        { name: "Bangalore", desc: "Safe and timely rides from Bangalore to Mysore, Coorg, Chikmagalur, and beyond.", icon: <FaMapMarkerAlt /> },
        { name: "Delhi", desc: "Convenient cab services from Delhi to Jaipur, Agra, Chandigarh, and nearby states.", icon: <FaMapMarkerAlt /> },
        { name: "Gurgaon", desc: "Reliable outstation taxis from Gurgaon to Manesar, Neemrana, Jaipur, and more.", icon: <FaMapMarkerAlt /> }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">Book Your Outstation Cabs Across All Cities in India</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {cities.map((city, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all group flex flex-col items-center text-center h-full">
                            <div className="bg-red-50 text-[#EC2028] w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[#EC2028] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                {city.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-900">{city.name}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{city.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cities;
