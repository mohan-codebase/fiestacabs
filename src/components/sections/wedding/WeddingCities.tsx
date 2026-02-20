"use client";

import React from "react";
import { FaCity, FaLandmark, FaBuilding, FaArchway, FaGopuram } from "react-icons/fa6";

const WeddingCities = () => {
    const cities = [
        {
            name: "Wedding Cars in Gurgaon",
            desc: "Whether it’s Cyber City or Udyog Vihar, Fiesta’s wedding car rentals in Gurgaon make every bridal entry truly memorable with luxury vehicles and on-time arrivals.",
            icon: <FaCity />
        },
        {
            name: "Wedding Cars in Mumbai",
            desc: "Celebrate your big day in Mumbai with our pristine wedding car rentals, ensuring comfort and grandeur from South Bombay to the suburbs.",
            icon: <FaBuilding />
        },
        {
            name: "Wedding Cars in Bangalore",
            desc: "Arrive in style on your special day in Bangalore with our elegant vehicles, navigating the city's charm with ease and elegance.",
            icon: <FaLandmark />
        },
        {
            name: "Wedding Cars in Hyderabad",
            desc: "Add a touch of royalty to your Hyderabad wedding with our luxury cars that complement the grandeur of your celebrations.",
            icon: <FaArchway />
        },
        {
            name: "Wedding Cars in Chennai",
            desc: "Make your grand entrance in Chennai with our premium wedding fleet, tailored for traditional and contemporary weddings alike.",
            icon: <FaGopuram />
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Wedding Car Rentals Across Major Cities
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="bg-[#FAF2F2] p-8 md:p-10 rounded-[40px] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <div className="bg-white text-gray-800 w-28 h-28 rounded-full flex items-center justify-center text-5xl mb-8 shadow-sm">
                                {city.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{city.name}</h3>
                            <p className="text-gray-700 text-base leading-relaxed">{city.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingCities;
