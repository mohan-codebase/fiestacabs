"use client";

import React from "react";
import Image from "next/image";
import { FaRegCircleDot } from "react-icons/fa6"; // Using circle dot as placeholder/stylized wheel

const GroupTravel = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content - Left */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Manage Group Travel Without Any Stress
                        </h2>

                        <div className="space-y-8">
                            {[
                                "When your business needs to move people in groups, be it employees, vendors, or clients, it shouldn’t feel like a logistics headache. With our outstation cab booking setup, you can easily manage group travel without last-minute delays or confusion. Whether it’s a weekend road trip for fresh air, off-site training, or vendor visit, we offer tempo traveller, SUV, and minibus options that fit every need.",
                                "Our support team helps you schedule multiple stops, confirm vehicle capacity, and adjust routes based on real-time availability. All vehicles come with professional drivers, clear route planning, and driver details shared in advance. Companies also use this service to manage bulk airport transfers during events or shift changeovers.",
                                "No calls. No last-minute changes. We help you run smooth trips without stress. You focus on the work. We handle the road."
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="shrink-0 w-8 h-8 rounded-full border-2 border-[#EC2028] flex items-center justify-center text-[#EC2028] bg-white mt-1">
                                        <FaRegCircleDot className="text-sm" />
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] order-1 lg:order-2">
                        <div className="absolute inset-0 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop"
                                alt="Friends enjoying a road trip group travel"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GroupTravel;
