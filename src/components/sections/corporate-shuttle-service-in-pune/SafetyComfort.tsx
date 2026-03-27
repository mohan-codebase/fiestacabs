import React from 'react';
import Image from 'next/image';

const SafetyComfort = () => {
    const listItems = [
        {
            title: "Professional Verified Drivers",
            desc: "Experienced drivers with background verification for maximum safety."
        },
        {
            title: "Real-time Tracking",
            desc: "Every trip is monitored to ensure secure and timely travel."
        },
        {
            title: "Spacious Seating",
            desc: "Comfortable and well-maintained vehicles for a relaxing commute."
        },
        {
            title: "Safe Boarding Procedures",
            desc: "Structured pick-up and drop-off at both office and residential locations."
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
                            src="/images/shuttle-service-in-bangalore/unnamed-8-1.jpg"
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
                            At Fiesta Smart Mobility Services, employee safety and comfort are top priorities, ensuring teams arrive on time, relaxed, and focused.
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

export default SafetyComfort;
