import React from 'react';
import Image from 'next/image';

const CorporateSolution = () => {
    const locations = [
        {
            title: "Nehru Place & Saket",
            desc: "Connects dense housing zones with tech and BPO offices, no more mind numbing traffic battles."
        },
        {
            title: "Okhla Industrial Area",
            desc: "Structured pick up points ensure easy access and smoother travel for workers in this bustling industrial belt."
        },
        {
            title: "Connaught Place & Central Delhi",
            desc: "Fiesta links commercial zones with key home and office locations, helping employees start and end their day stress-free."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-0.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#E31E24" strokeWidth="2" fill="transparent" />
                <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#E31E24" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#E31E24" strokeWidth="1.5" fill="transparent" />
            </svg>
        </div>
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-delhi/unnamed-4-8.jpg"
                            alt="Bus Aisle"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] md:pl-4">
                        <h2 className="text-3xl lg:text-[36px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            A Corporate Solution That<br className="hidden lg:block" />Works
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-relaxed mb-6">
                            Our corporate shuttle service in Delhi is built to support businesses at scale. Whether your team is growing, shifting, or hybrid, our transport adapts:
                        </p>
                        <p className="text-[#555555] text-[15px] leading-relaxed font-semibold mb-12">
                            Monthly consolidated billing, HR attendance system integration, Custom onboarding for new hires, Real-time ride details and reports
                        </p>

                        <h2 className="text-3xl lg:text-[36px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Fiesta Now Serving Key Office<br className="hidden lg:block" />Locations in Delhi
                        </h2>

                        <p className="text-[#555555] text-[15px] leading-relaxed mb-8">
                            We cover all prominent business areas with rapidly expanding routes:
                        </p>

                        <div className="space-y-6 flex flex-col">
                            {locations.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <div>
                                        <h3 className="text-lg font-bold text-[#2A2A2A] mb-1 leading-tight">
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
            </div>
        </section>
    );
};

export default CorporateSolution;
