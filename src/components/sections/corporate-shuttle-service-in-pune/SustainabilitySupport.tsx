import React from 'react';
import Image from 'next/image';

const SustainabilitySupport = () => {
    const listItems = [
        {
            title: "Shared transportation benefits",
            desc: "Reducing traffic congestion and lowering carbon emissions."
        },
        {
            title: "Sustainability goals",
            desc: "Helping companies achieve green targets through real-time route optimization."
        },
        {
            title: "Quick-access schedules",
            desc: "Employees can check ride status and routes through our live app."
        },
        {
            title: "Dedicated customer support",
            desc: "Fast resolution of issues to ensure smooth, uninterrupted operations."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
            <Image
                src="/images/icon/tyre-icon.svg"
                alt="Tyre Icon"
                width={24}
                height={24}
                className="w-6 h-6"
            />
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
                    <div className="w-full md:w-[50%] md:pr-4 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Sustainable and Efficient Corporate Transportation
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Our shuttle services combine technology, professional drivers, and a modern fleet to deliver top-tier corporate shuttle services that support both business efficiency and environmental goals.
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

                    <div className="w-full md:w-[50%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-5-4.jpg"
                            alt="Sustainability and Dedicated Support in Pune"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySupport;
