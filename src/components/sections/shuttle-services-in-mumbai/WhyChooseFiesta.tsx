import React from 'react';
import Image from 'next/image';

const WhyChooseFiesta = () => {
    const listItems = [
        {
            title: "Built for Mumbai's Business Ecosystem",
            desc: "Shuttle routes are planned to align with major commercial corridors, residential clusters, and transit access points. Service planning reflects real travel behavior across the city, helping organizations maintain consistent workforce movement across peak and non-peak hours."
        },
        {
            title: "Data-Driven Route Optimization",
            desc: "Trip data, passenger demand, and pickup density are used to refine routes and schedules. Continuous route evaluation supports reduced travel time, improved bus utilization, and better trip reliability."
        },
        {
            title: "Centralized Control and Reporting",
            desc: "Corporate transport managers receive structured visibility into trip activity, passenger usage, and route performance. Consolidated reporting supports budget planning, compliance tracking, and operational reviews."
        },
        {
            title: "Passenger Experience and Engagement",
            desc: "Mobile access allows passengers to manage bookings, receive trip notifications, and track shuttle movement. The email & chat communication and account-level access provide clarity and accountability for every trip."
        },
        {
            title: "Compliance, Safety, and Operational Standards",
            desc: "Vehicles operate under defined safety protocols with trained drivers, GPS monitoring, and routine inspections. Operational governance supports consistent service delivery across routes and shifts."
        },
        {
            title: "Scalable for Growing Organizations",
            desc: "Fiesta shuttle programs expand with workforce growth, new office locations, and changing shift structures. Fleet allocation and route capacity can be adjusted to match evolving business needs."
        },
        {
            title: "Measurable Business Value",
            desc: "Organizations benefit from structured transportation that supports employee attendance, improves operational predictability, and strengthens workforce engagement. Shuttle programs also reduce reliance on high-cost travel options and exposure to fluctuating market pricing."
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
