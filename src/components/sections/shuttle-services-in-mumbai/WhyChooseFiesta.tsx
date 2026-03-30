import React from 'react';
import Image from 'next/image';

const WhyChooseFiesta = () => {
    const listItems = [
        {
            title: "Built for Mumbai's Ecosystem",
            desc: "Routes aligned with major commercial corridors, residential clusters, and transit access points."
        },
        {
            title: "Data-Driven Optimization",
            desc: "Trip data and passenger demand are used to refine routes, reduce travel time, and improve reliability."
        },
        {
            title: "Centralized Control",
            desc: "Structured visibility into trip activity, passenger usage, and route performance for transport managers."
        },
        {
            title: "Passenger Experience",
            desc: "Mobile access for managing bookings, receiving trip notifications, and tracking shuttle movement in real-time."
        },
        {
            title: "Compliance & Safety",
            desc: "Vehicles operate under defined safety protocols with trained drivers, GPS monitoring, and routine inspections."
        },
        {
            title: "Scalable Programs",
            desc: "Service expands with your workforce growth, new office locations, and changing shift structures effortlessly."
        },
        {
            title: "Measurable Business Value",
            desc: "Supports employee attendance, improves predictability, and reduces reliance on high-cost travel options."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
            <Image
                src="/images/icon/tyre-icon.svg"
                alt="Tyre Icon"
                width={20}
                height={20}
                className="w-5 h-5"
            />
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-[42px] font-bold text-[#2A2A2A] mb-6 leading-[1.15] tracking-tight">
                        Why Choose Fiesta?
                    </h2>
                    <p className="text-[#555555] text-[16px] max-w-3xl mx-auto leading-relaxed">
                        Fiesta Smart Mobility Services delivers a structured approach to corporate transportation built for Mumbai's complex travel environment, focusing on clarity, accountability, and measurable operational value.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="w-full lg:w-[40%] relative min-h-[400px] lg:min-h-[600px] rounded-md overflow-hidden">
                        <Image
                            src="/images/employee-transportation-services-in-mumbai/unnamed-3-1.jpg"
                            alt="Why Choose Fiesta Mumbai"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-8">
                        {listItems.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <Icon />
                                <div>
                                    <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#555555] text-[14px] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFiesta;
