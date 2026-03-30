import React from 'react';
import Image from 'next/image';

const KeyFeatures = () => {
    const listItems = [
        {
            title: "Smart Route Design",
            desc: "Routes planned across residential areas, business hubs, and transit points to connect the city efficiently."
        },
        {
            title: "Transparent Billing",
            desc: "Monthly corporate invoices sent via email with simple, transparent payment options."
        },
        {
            title: "Safety and Comfort",
            desc: "Air-conditioned buses, verified drivers, and live GPS monitoring for complete peace of mind."
        },
        {
            title: "Corporate Integration",
            desc: "Compatibility with HR, attendance, and employee management systems for smooth onboarding."
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
                    <div className="w-full md:w-[45%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/employee-transportation-services-in-mumbai/unnamed-4-1.jpg"
                            alt="Key Features of Fiesta Shuttle Mumbai"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Key Features of Fiesta Shuttle Services
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Every Fiesta Shuttle ride in Mumbai is backed by intelligent planning and technology that makes corporate travel transparent and efficient.
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
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
