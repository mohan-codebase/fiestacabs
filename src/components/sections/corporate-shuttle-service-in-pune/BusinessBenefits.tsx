import React from 'react';
import Image from 'next/image';

const BusinessBenefits = () => {
    const listItems = [
        {
            title: "Reduced transportation costs",
            desc: "More affordable than individual commuting options."
        },
        {
            title: "Enhanced employee productivity",
            desc: "Reducing commute fatigue allows for better work performance."
        },
        {
            title: "Flexible scheduling",
            desc: "Customised routes and timings to meet corporate needs."
        },
        {
            title: "Ride reports and analytics",
            desc: "Data-driven insights for better planning and efficiency."
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
                            Business Benefits of Fiesta Shuttle Services
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Corporate clients benefit from partnering with Fiesta for employee transportation in Pune, ensuring reliable daily commute solutions for their teams.
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
                        
                        <p className="text-[#555555] text-[16px] leading-relaxed mt-8 font-medium italic">
                            Fiesta is a trusted partner for companies seeking dependable employee transport solutions.
                        </p>
                    </div>

                    <div className="w-full md:w-[50%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-bangalore/unnamed-9-1.jpg"
                            alt="Business Benefits of Pune Corporate Shuttle"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessBenefits;
