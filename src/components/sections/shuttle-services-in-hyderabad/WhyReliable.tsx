import React from 'react';
import Image from 'next/image';

const WhyReliable = () => {
    const listItems = [
        {
            title: "Smart Routing & Scheduling",
            desc: "We design every route with your team in mind. From real-time planning to customer-first service delivery, Fiesta ensures that your employees ride better every day."
        },
        {
            title: "Convenient Boarding",
            desc: "Employees know exactly when and where to board their shuttle. From metro-connected stops to well-known landmarks, our pickup locations are easy to access."
        },
        {
            title: "Comfort & Productivity",
            desc: "Our spacious, air-conditioned buses offer more than just a seat, they provide a peaceful, stress-free ride so your team arrives fresh and ready."
        },
        {
            title: "Reliable and Prompt",
            desc: "We study traffic patterns and road conditions to ensure every trip follows the most efficient directions. It's part of our commitment to reliable, timely service."
        },
        {
            title: "Safety and Support",
            desc: "From trained drivers to basic safety protocols in every vehicle, we make sure every passenger enjoys a secure experience."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2.5 2.5L16 9" />
            </svg>
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
                    {/* Left: Content */}
                    <div className="w-full md:w-[60%] md:pr-8">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-10 leading-tight">
                            What Makes Our Hyderabad Shuttle Services Reliable?
                        </h2>

                        <div className="space-y-8">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <div>
                                        <h3 className="text-[17px] font-bold text-[#E31E24] mb-1">{item.title}</h3>
                                        <p className="text-[#555555] leading-relaxed text-[15px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[40%] relative h-[500px] md:h-[650px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-hyderabad/unnamed-3-6.jpg"
                            alt="Reliable Shuttle Services"
                            fill
                            style={{ objectFit: "cover", objectPosition: "top" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyReliable;
