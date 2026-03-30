import React from 'react';
import Image from 'next/image';

const TechFeatures = () => {
    const listItems = [
  "Live tracking and GPS-enabled shuttles to monitor arrival and departure times",
  "Real-time route optimisation to avoid traffic congestion during peak hours",
  "Dedicated online support for employees and corporate managers to manage schedules and track rides"
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
                    <div className="w-full md:w-[45%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-4-7.jpg"
                            alt="Technology-Driven Shuttle Features Pune"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}/>
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Technology-Driven Shuttle Features
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Fiesta Smart Mobility Services leverages modern technology to make corporate commuting efficient, transparent, and stress-free.
                        </p>

                        <h2 className="text-2xl font-bold text-[#2A2A2A] mb-6">
                            Key Features Include:
                        </h2>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <p className="text-[#555555] text-[15px] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechFeatures;
