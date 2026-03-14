"use client";

import React from "react";
import Image from "next/image";

const Technology = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px]">
                        <Image src="/images/premium-car-rentals/technology.png" alt="Technology" fill className="object-cover" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <span className="bg-[#EC2028] btn-animated text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Technology Travel Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">Technology</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            The Licensed software solution helps Fiesta Smart Mobility streamline operations by automating booking, billing, and fleet management. It provides real-time vehicle tracking, expense monitoring, and integrates with accounting systems, ensuring accuracy and efficiency.
                        </p>
                        <ul className="flex flex-col gap-6">
                            {[
                                "Streamlined booking, billing, and receipt management.",
                                "Supplier purchase tracking and payment management.",
                                "Digital duty slips with driver app for KM, time, and expense tracking.",
                                "Automatic garage-to-garage calculations.",
                                "Customizable reports and analytics for customer needs.",
                                "Integrated payment gateway for online transactions.",
                                "User management with permissions and activity logs.",
                                "Fuel and vehicle management for tracking.",
                                "Integration with Tally for accounting.",
                                "Real-time support from customer service."
                            ].map((item, index) => (
                                <li key={index} className="flex gap-4 items-start text-gray-700">
                                    <div className="relative w-6 h-6 mt-1 shrink-0">
                                        <Image src="/images/icon/tyre-icon.svg" alt="Tyre Icon" fill className="object-contain" />
                                    </div>
                                    <span className="text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
