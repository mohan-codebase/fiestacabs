import React from 'react';
import Image from 'next/image';

const HowWeDeliver = () => {
    const listItems = [
        {
            title: "Employee Safety as Top Priority",
            desc: "Safety standards are non-negotiable. From driver background checks to real time tracking, we prioritize secure travel."
        },
        {
            title: "Real Time Monitoring",
            desc: "GPS tracking provides constant updates, ensuring travel arrangements are reliable and transparent."
        },
        {
            title: "Well Maintained Fleet",
            desc: "Every vehicle is inspected and maintained to create a smooth ride every time."
        },
        {
            title: "Professional Drivers",
            desc: "Employees benefit from experienced drivers trained in safety, punctuality, and professional service standards."
        },
        {
            title: "Travel Needs of Businesses",
            desc: "From regular daily commutes to outstation travel for corporate travel services, we meet diverse requirements."
        },
        {
            title: "Employee Satisfaction",
            desc: "When the workforce arrives refreshed and stress free, businesses experience higher productivity and reliability."
        }
    ];

    const Icon = () => (
        <Image src="/images/icon/tyre-icon.svg" alt="bullet icon" width={24} height={24} className="shrink-0 mt-1" />
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
                    {/* Left: Content */}
                    <div className="w-full md:w-[50%]">
                        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            How We Deliver Seamless<br />Employee Transportation
                        </h2>
                        <div className="w-24 h-1 bg-[#E31E24] mb-6"></div>
                        <p className="text-gray-700 text-[15px] leading-relaxed mb-10">
                            Our employee transportation services in Mumbai are designed to meet the needs of both employees and organizations.
                        </p>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Icon />
                                    <div>
                                        <h3 className="text-[17px] font-bold text-[#333333] mb-1">{item.title}</h3>
                                        <p className="text-[#555555] leading-relaxed text-[14px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[50%] relative h-[500px] md:h-[650px] overflow-hidden">
                        <Image
                            src="/images/employee-transportation-services-in-mumbai/unnamed-2-1.jpg"
                            alt="How We Deliver Seamless Employee Transportation"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeDeliver;
