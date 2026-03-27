"use client";

import React from "react";
import Link from "next/link";

const WeddingCities = () => {
    const cities = [
        {
            name: "Wedding Cars in\nChennai",
            desc: "Arrive in style at your Chennai wedding with Fiesta's luxury fleet. From vintage classics to modern sedans, we ensure a grand and elegant entry for your big day.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Temple icon */}
                    <path d="M32 8 L36 16 L28 16 Z" />
                    <rect x="28" y="16" width="8" height="4" />
                    <path d="M24 20 L40 20 L42 24 L22 24 Z" />
                    <rect x="22" y="24" width="20" height="4" />
                    <path d="M18 28 L46 28 L48 32 L16 32 Z" />
                    <rect x="16" y="32" width="32" height="16" />
                    <rect x="27" y="36" width="10" height="12" />
                    <line x1="16" y1="48" x2="48" y2="48" />
                </svg>
            ),
            link: "/wedding-car-rental-in-chennai"
        },
        {
            name: "Wedding Cars in\nHyderabad",
            desc: "Make your wedding day unforgettable in Hyderabad with Fiesta's premium cars. Our fleet is perfect for HITEC City, Gachibowli, and popular wedding venues across the city.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Charminar style icon */}
                    <rect x="16" y="44" width="32" height="12" />
                    <rect x="18" y="16" width="6" height="28" />
                    <rect x="40" y="16" width="6" height="28" />
                    <rect x="18" y="12" width="6" height="4" />
                    <rect x="40" y="12" width="6" height="4" />
                    <path d="M24 24 L40 24" />
                    <path d="M24 34 L40 34" />
                    <circle cx="21" cy="10" r="2" />
                    <circle cx="43" cy="10" r="2" />
                </svg>
            ),
            link: "/wedding-car-rental-in-hyderabad"
        },
        {
            name: "Wedding Cars in\nBangalore",
            desc: "From Whitefield to Electronic City, Fiesta provides luxury wedding cars in Bangalore that guarantee punctual service and photo-ready elegance.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Palace/Fort icon */}
                    <rect x="8" y="36" width="48" height="20" />
                    <rect x="14" y="24" width="36" height="12" />
                    <path d="M20 24 Q32 10 44 24" />
                    <rect x="8" y="32" width="8" height="4" />
                    <rect x="24" y="32" width="8" height="4" />
                    <rect x="40" y="32" width="8" height="4" />
                    <rect x="28" y="44" width="8" height="12" />
                    <line x1="8" y1="56" x2="56" y2="56" />
                </svg>
            ),
            link: "/wedding-cars-in-bangalore"
        },
        {
            name: "Wedding Cars in\nDelhi",
            desc: "Celebrate in style in the capital with Fiesta's curated fleet. Our wedding cars in Delhi are tailored for royal entries, complete with décor and trained chauffeurs.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* India Gate style icon */}
                    <rect x="12" y="44" width="40" height="12" />
                    <rect x="16" y="16" width="32" height="28" />
                    <rect x="24" y="28" width="16" height="16" />
                    <path d="M24 28 Q32 20 40 28" />
                    <rect x="14" y="12" width="36" height="4" />
                    <line x1="12" y1="56" x2="52" y2="56" />
                </svg>
            ),
            link: "/car-rent-for-marriage-in-delhi"
        },
        {
            name: "Wedding Cars in\nGurgaon",
            desc: "Whether it's Cyber City or Udyog Vihar, Fiesta's wedding car rentals in Gurgaon make every bridal entry truly memorable with luxury vehicles and on-time arrivals.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Modern Building style icon */}
                    <rect x="12" y="20" width="12" height="36" />
                    <rect x="24" y="12" width="16" height="44" />
                    <rect x="40" y="28" width="12" height="28" />
                    <line x1="8" y1="56" x2="56" y2="56" />
                    <rect x="14" y="24" width="8" height="4" />
                    <rect x="14" y="32" width="8" height="4" />
                    <rect x="26" y="16" width="12" height="4" />
                    <rect x="26" y="24" width="12" height="4" />
                </svg>
            ),
            link: "/shuttle-service-in-gurgaon"
        },
        {
            name: "Wedding Cars in\nMumbai",
            desc: "Whether it's anywhere in Mumbai or its surrounding areas, Fiesta's car rental services in Mumbai ensure a smooth and stylish ride with well-maintained vehicles and on-time service.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Gateway arch style icon */}
                    <rect x="10" y="40" width="10" height="16" />
                    <rect x="44" y="40" width="10" height="16" />
                    <path d="M20 40 Q32 14 44 40" />
                    <path d="M24 40 Q32 22 40 40" />
                    <rect x="8" y="36" width="48" height="4" />
                    <line x1="8" y1="56" x2="56" y2="56" />
                </svg>
            ),
            link: "/wedding-car-rental-mumbai"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Wedding Car Rentals Across Major Cities
                    </h2>
                    <p className="text-gray-700 max-w-5xl mx-auto text-lg leading-relaxed">
                        Fiesta offers premium wedding car rental services across India&apos;s top cities, ensuring your big day is as grand and memorable as it deserves to be. From luxury sedans and SUVs to stylish vintage models, our chauffeur-driven cars add elegance, comfort, and reliability to every celebration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {cities.map((city, index) => (
                        <Link
                            href={city.link}
                            key={index}
                            className="bg-[#FCF5F5] p-8 md:p-5 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-b-[6px] border-[#EC2028] group"
                        >
                            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm text-gray-700 group-hover:scale-110 transition-transform duration-300">
                                {city.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 whitespace-pre-line leading-tight group-hover:text-[#EC2028] transition-colors">
                                {city.name}
                            </h3>
                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                {city.desc}
                            </p>
                            <span className="mt-6 text-[#EC2028] font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingCities;
