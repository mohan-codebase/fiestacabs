"use client";

import React from "react";
import { FaUserTie, FaClock, FaCar, FaShieldAlt, FaSprayCan } from "react-icons/fa";

const WeddingFeatures = () => {
    const features = [
        {
            title: "Courteous drivers",
            desc: "Professional chauffeurs trained to provide a seamless and polite experience.",
            icon: <FaUserTie />,
        },
        {
            title: "On-time arrival",
            desc: "We ensure punctual pickups so your special day runs exactly on schedule.",
            icon: <FaClock />,
        },
        {
            title: "Smooth ride",
            desc: "Enjoy a comfortable journey in our impeccably maintained luxury vehicles.",
            icon: <FaCar />,
        },
        {
            title: "Safe journey",
            desc: "Your safety is our priority with verified drivers and secure transport.",
            icon: <FaShieldAlt />,
        },
        {
            title: "Clean interiors & exteriors",
            desc: "Every car is thoroughly cleaned and sanitized for a pristine presentation.",
            icon: <FaSprayCan />,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        WHY CHOOSE US?
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
                        We don't just provide a car; we provide an experience. From the moment our chauffeurs arrive to the final drop, we ensure every detail is perfect for your big day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-full bg-red-50 text-[#EC2028] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#EC2028] group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingFeatures;
