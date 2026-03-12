import React from 'react';
import Image from 'next/image';

const CostEffective = () => {
    const listItems = [
        {
            title: "Dependable Commutes",
            desc: " Employees travel comfortably, arrive refreshed, and focus on work without commuting stress. "
        },
        {
            title: "Hassle Free Operations",
            desc: "Shared commutes reduce the number of vehicles on the road, supporting environmental goals."
        },
        {
            title: "Support Operations Team",
            desc: "Our dedicated team handles transport planning, operations, and support so organizations can focus on core goals."
        },
        {
            title: " Real Time Updates ",
            desc: "Clients benefit from real time data, live monitoring, and accurate schedule adherence."
        },
        {
            title: " Secure and Efficient ",
            desc: "Well maintained vehicles with reliable drivers ensure smooth travel for every employee, every day."
        }
    ];

    const Icon = () => (
        <Image src="/images/icon/tyre-icon.svg" alt="bullet icon" width={24} height={24} className="shrink-0 mt-1" />
    );

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[500px] md:h-[650px] overflow-hidden">
                        <Image
                            src="/images/employee-transportation-services-in-pune/unnamed-3-2.jpg"
                            alt="Cost Effective and Efficient Transportation Services"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%] md:pl-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            Cost Effective and Efficient<br />Transportation Services
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Businesses today demand transportation services in Pune that are reliable, cost effective, and built for long-term sustainability. Fiesta provides benefits that go beyond a basic commute.
                        </p>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Icon />
                                    <div>
                                        <h3 className="text-[17px] font-bold text-[#333333] mb-1">{item.title}</h3>
                                        <p className="text-[#555555] leading-relaxed text-[15px]">
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

export default CostEffective;
