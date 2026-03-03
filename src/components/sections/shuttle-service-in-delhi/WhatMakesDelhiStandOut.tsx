import React from 'react';
import Image from 'next/image';

const WhatMakesDelhiStandOut = () => {
    const listItems = [
        {
            title: "Fixed Time Slots & Nearest Pick",
            desc: "Employees always know their nearest pick up point and exactly when their ride will arrive. No guesswork."
        },
        {
            title: "Ride in Comfort",
            desc: "Air-conditioned, spacious vehicles. No cramming, no crowding. Just a calm, reliable ride."
        },
        {
            title: "Fastest Route, Always",
            desc: "Routing decisions are based on real-time traffic patterns. We avoid traffic jams so your team arrives fresh and on time."
        },
        {
            title: "Security Features",
            desc: "Each ride is equipped with essential security features, including SOS alert, so your employees always feel safe."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-0.5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#E31E24" strokeWidth="2" fill="transparent" />
                <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#E31E24" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#E31E24" strokeWidth="1.5" fill="transparent" />
            </svg>
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-[#Eef2f6]">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left: Content */}
                    <div className="w-full md:w-[50%] md:pr-4">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            What Makes Our Delhi<br className="hidden lg:block" />Shuttle Stand Out?
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            At Fiesta, we shape our shuttle service in Delhi based on real feedback from corporate teams. Here&apos;s how we ensure smooth operations:
                        </p>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2A2A2A] mb-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#555555] text-[15px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[50%] relative h-[450px] md:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-delhi/unnamed-2-8.jpg"
                            alt="Large cyan bus"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatMakesDelhiStandOut;
