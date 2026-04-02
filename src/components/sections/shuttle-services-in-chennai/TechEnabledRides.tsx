import React from 'react';
import Image from 'next/image';

const TechEnabledRides = () => {
    const listItems = [
        {
            title: "Real-time GPS Tracking",
            desc: "Real-time GPS tracking allows employees and management to stay informed about commute status."
        },
        {
            title: "Centralized Route Planning",
            desc: "Centralized route planning and proactive trip monitoring to avoid peak-hour traffic."
        },
        {
            title: "24/7 Customer Support",
            desc: "All-time customer support for instant issue resolution."
        },
        {
            title: "Live Communication Updates",
            desc: "Live communication updates for employees and operations teams."
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
                            src="/images/shuttle-services-in-chennai/WhatsApp Image 2026-04-01 at 18.42.47 (2).jpeg"
                            alt="Technology-Enabled Rides in Chennai"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Technology-Enabled Rides
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
Every shuttle is equipped with advanced operational technology to monitor rides and maintain complete control over employee commutes. Key features include:                        </p>

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

export default TechEnabledRides;
