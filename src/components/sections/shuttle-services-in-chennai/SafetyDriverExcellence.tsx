import React from 'react';
import Image from 'next/image';

const SafetyDriverExcellence = () => {
    const listItems = [
        {
            title: "Comprehensive driver verification and ongoing professional training.",
            desc: ""
        },
        {
            title: "Coordinated emergency response systems.",
            desc: ""
        },
        {
            title: "Regular fleet maintenance and operational monitoring.",
            desc: ""
        },
        {
            title: "Structured route assignments to ensure driver familiarity.",
            desc: ""
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
                    <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-[500px] lg:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-chennai/WhatsApp Image 2026-04-01 at 18.42.47.jpeg"
                            alt="Safety and Driver Excellence in Chennai"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Safety and Driver Excellence
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
Our experienced drivers are thoroughly familiar with Chennai's geography and adhere to strict safety protocols, including:                        </p>

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
                        
                        <p className="text-[#555555] text-[16px] leading-relaxed mt-8 font-medium">
Safety is a top priority, with GPS-enabled vehicles, emergency alerts, and rigorous protocols to guarantee secure travel for employees.                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyDriverExcellence;
