"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const WeddingCities = () => {
    const cities = [
        {
            name: "Wedding Cars in\nChennai",
            desc: "Arrive in style at your Chennai wedding with Fiesta's luxury fleet. From vintage classics to modern sedans, we ensure a grand and elegant entry for your big day.",
            icon: "/images/services-offered/premium-car-rentals/wedding-cars/wedding-cars-in-chennai/luxury-wedding-cars.jpg",
            link: "/wedding-car-rental-in-chennai"
        },
        {
            name: "Wedding Cars in\nHyderabad",
            desc: "Make your wedding day unforgettable in Hyderabad with Fiesta's premium cars. Our fleet is perfect for HITEC City, Gachibowli, and popular wedding venues across the city.",
            icon: "/images/services-offered/premium-car-rentals/wedding-cars/luxury-suv.jpg",
            link: "/shuttle-services-in-hyderabad"
        },
        {
            name: "Wedding Cars in\nBangalore",
            desc: "From Whitefield to Electronic City, Fiesta provides luxury wedding cars in Bangalore that guarantee punctual service and photo-ready elegance.",
            icon: "/images/services-offered/premium-car-rentals/wedding-cars/wedding-cars-in-bangalore/wedd-cars-in-bangalore.jpg",
            link: "/wedding-cars-in-bangalore"
        },
        {
            name: "Wedding Cars in\nDelhi",
            desc: "Celebrate in style in the capital with Fiesta's curated fleet. Our wedding cars in Delhi are tailored for royal entries, complete with décor and trained chauffeurs.",
            icon: "/images/services-offered/premium-car-rentals/wedding-cars/wedding-cars-in-delhi/marriage-car-rent-in-delhi.jpg",
            link: "/car-rent-for-marriage-in-delhi"
        },
        {
            name: "Wedding Cars in\nGurgaon",
            desc: "Whether it's Cyber City or Udyog Vihar, Fiesta's wedding car rentals in Gurgaon make every bridal entry truly memorable with luxury vehicles and on-time arrivals.",
            icon: "/images/services-offered/premium-car-rentals/wedding-cars/entrance-in-style.jpg",
            link: "/shuttle-service-in-gurgaon"
        },
        {
            name: "Wedding Cars in\nMumbai",
            desc: "Whether it's anywhere in Mumbai or its surrounding areas, Fiesta's car rental services in Mumbai ensure a smooth and stylish ride with well-maintained vehicles and on-time service.",
            icon: "/images/services-offered/premium-car-rentals/wedding-cars/wedding-cars-in-mumbai/luxury-cars-in-fiesta.jpg",
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
                        Fiesta offers premium wedding car rental services across India's top cities, ensuring your big day is as grand and memorable as it deserves to be. From luxury sedans and SUVs to stylish vintage models, our chauffeur-driven cars add elegance, comfort, and reliability to every celebration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {cities.map((city, index) => (
                        <Link
                            href={city.link}
                            key={index}
                            className="bg-[#FCF5F5] p-8 md:p-10 rounded-[32px] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-b-[6px] border-[#EC2028] group"
                        >
                            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm overflow-hidden relative border border-gray-100 p-4 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={city.icon}
                                    alt={`${city.name.replace('\n', ' ')} icon`}
                                    width={64}
                                    height={64}
                                    className="object-contain grayscale opacity-80"
                                />
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
