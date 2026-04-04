import React from 'react';
import Image from 'next/image';

const SafetyComfort = () => {
    const listItems = [
        "Professional drivers with verified backgrounds",
        "Real-time ride tracking for all trips",
        "Comfortable, spacious seating and well-equipped vehicles",
        "Safe boarding and alighting procedures at office and residential locations"
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
                <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-stretch">
                    <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-[500px] lg:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/corporate-shuttle-service-in-pune/WhatsApp Image 2026-03-30 at 13.16.24 (3).jpeg"
                            alt="Employee Safety and Comfort in Pune"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Employee Safety and Comfort
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            At Fiesta Smart Mobility Services, employee safety and comfort are top priorities.</p>

                        <h2 className="text-2xl font-bold text-[#2A2A2A] mb-6">
                            Our Safety and Comfort Measures Include:
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
                        <p className="text-[#555555] text-[16px] leading-relaxed mt-8 font-medium">
                            These measures ensure employees arrive on time, relaxed, and focused, improving overall job satisfaction and well-being.                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyComfort;
