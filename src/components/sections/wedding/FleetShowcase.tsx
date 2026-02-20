"use client";

import React from "react";
import Image from "next/image";

const FleetShowcase = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">

                {/* Top Image Section */}
                <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-lg">
                    <Image
                        src="/images/wedding/wedding-couple-1.jpg"
                        alt="Wedding Couple with Car"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Text Content */}
                <div className="max-w-4xl mx-auto">
                    <p className="text-[#EC2028] tracking-[0.2em] font-medium text-sm md:text-base mb-4 uppercase">
                        Make Your Grand
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        Entrance in Style and Grace
                    </h2>

                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Every luxury car we use reflects elegance, comfort, and prestige. A wedding day is about emotions, but it’s also about impressions, especially on special occasions. Every luxury car rental in our fleet is cleaned, polished, and prepped to match your big day energy.
                        </p>
                        <p>
                            Businesses organising events, managing hospitality, or delivering wedding packages need cars that reflect excellence within your budget.
                        </p>
                        <p>
                            That’s where our luxury car rentals, wedding packages, and car rental for weddings shine. From convertible cars to classic vintage cars, we have it all. Every wedding car model we offer carries the mark of class.
                        </p>
                        <p>
                            Mid-size luxury sedans (C and E class type) are part of our popular luxury car rentals. Our range includes:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 font-medium text-gray-800">
                            <li>Premium Luxury Sedans (Audi, BMW, Mercedes)</li>
                            <li>Mid-Size Luxury Sedans (C and E Class)</li>
                            <li>Premium Full-Size SUVs (Fortuner, Endeavour)</li>
                            <li>Classic Vintage Cars for Royal Entrances</li>
                        </ul>

                        <div className="pt-6">
                            <a href="#booking-form" className="inline-flex justify-center items-center gap-2 bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded transition-colors text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                                Contact Now
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FleetShowcase;
