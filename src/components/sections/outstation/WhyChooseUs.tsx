"use client";

import React from "react";
import Image from "next/image";
import { FaUserPlus, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Flexible Trips & Payment",
            desc: "Add stops, change route, or extend your trip. Pay only for what you travel.",
            icon: <FaMapMarkedAlt />,
        },
        {
            title: "Door-to-Door Pickup",
            desc: "We pick you up from your doorstep and drop you exactly where you need to be.",
            icon: <FaUserPlus />,
        },
        {
            title: "Verified Driver Details",
            desc: "Driver name, phone number, and car number shared before the trip.",
            icon: <FaShieldAlt />,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Top Reasons to Choose Our Intercity Service
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
                        We are not just a cab booking app. We are a travel partner that ensures your outstation journey is as smooth as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-20 h-20 rounded-full bg-red-50 text-[#EC2028] flex items-center justify-center text-3xl mb-6 group-hover:bg-[#EC2028] group-hover:text-white transition-colors duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
