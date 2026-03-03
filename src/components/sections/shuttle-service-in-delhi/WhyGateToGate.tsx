import React from 'react';
import Image from 'next/image';

const WhyGateToGate = () => {
    const listItems = [
        {
            title: "Precise Pick Up Points",
            desc: "Strategically selected for easy access, close to residential clusters, public transport, and main roads. No random detours."
        },
        {
            title: "Direct to Office Entrances",
            desc: "No lengthy walks from the drop point. We get your team as close to the door as possible."
        },
        {
            title: "Time Slots Hurray",
            desc: "Our time slots are built for convenience and punctuality, especially for early or late shift workers."
        },
        {
            title: "Boosted Attendance and Punctuality",
            desc: "Fixed schedules, no last-minute surprises. Teams arrive on time, every day."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-0.5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#E31E24" strokeWidth="2" fill="transparent" />
                <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#E31E24" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#E31E24" strokeWidth="1.5" fill="transparent" />
            </svg>
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left: Content */}
                    <div className="w-full md:w-[50%] md:pr-4">
                        <h2 className="text-3xl lg:text-[36px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Why Gate-to-Gate Matters:
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            At Fiesta, we shape our shuttle service in Delhi based on real feedback from corporate teams. Here&apos;s how we ensure smooth operations:
                        </p>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <div>
                                        <h3 className="text-[19px] font-bold text-[#2A2A2A] mb-1 leading-tight">
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

                    {/* Right: Image */}
                    <div className="w-full md:w-[50%] relative min-h-[400px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-delhi/unnamed-4-8.jpg"
                            alt="Bus Aisle"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyGateToGate;
