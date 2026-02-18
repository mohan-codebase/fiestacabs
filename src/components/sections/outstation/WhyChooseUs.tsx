"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaShieldAlt, FaClock, FaClipboardList } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Image Left */}
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                    <Image src="/images/premium-car-rentals/corporate-events.avif" alt="Why Choose Us" fill className="object-cover" />
                </div>

                {/* Text Right */}
                <div className="order-1 lg:order-2">
                    <p className="text-[#EC2028] font-bold mb-3 uppercase tracking-widest text-sm">WHY CHOOSE US</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">Top Reasons to Choose Our Intercity Service</h2>
                    <div className="text-gray-600 mb-10 text-lg leading-relaxed space-y-4">
                        <p>
                            Choosing our intercity service ensures a travel experience that is seamless, reliable, and comfortable. We prioritize punctuality and safety, offering well-maintained vehicles and professional drivers who are trained to deliver exceptional service.
                        </p>
                        <p>
                            Our routes are designed for convenience, connecting major cities with minimal hassle and maximum efficiency.
                        </p>
                        <p>
                            Our team tracks every ride. No guesswork. Just a comfortable ride with zero stress.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                        {[
                            {
                                title: "Flexible trip",
                                desc: "Book same-day or planned rides",
                                icon: <FaClipboardList className="text-white text-2xl" />
                            },
                            {
                                title: "Door-to-door pickup",
                                desc: "from office, airport or residence",
                                icon: <FaMapMarkerAlt className="text-white text-2xl" />
                            },
                            {
                                title: "Verified driver details",
                                desc: "are shared before every trip",
                                icon: <FaShieldAlt className="text-white text-2xl" />
                            },
                            {
                                title: "No hidden charges",
                                desc: "Arcu odio nulla vestibulum consequat enim velit turpis habitasse nostra.",
                                icon: <FaShieldAlt className="text-white text-2xl" />
                            },
                            {
                                title: "Custom billing",
                                desc: "GST invoices, direct bank transfers, UPI or company account",
                                icon: <FaClipboardList className="text-white text-2xl" />
                            },
                            {
                                title: "24/7 ride support",
                                desc: "We don’t close when your shift ends",
                                icon: <FaClock className="text-white text-2xl" />
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 group">
                                <div className="shrink-0 w-12 h-12 bg-[#EC2028] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
