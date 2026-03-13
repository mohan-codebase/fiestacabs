import React from 'react';
import Image from 'next/image';

const RunningRoutes = () => {
    const listItems = [
        {
            title: " HITEC City ",
            desc: " Our shuttle network connects popular pick up points in nearby residential clusters to this thriving IT zone. Fewer delays, more productivity. "
        },
        {
            title: "Gachibowli",
            desc: "Our shuttle network connects popular pick up points in nearby residential clusters to this thriving IT zone. Fewer delays, more productivity."
        },
        {
            title: " Financial District & Beyond ",
            desc: "As more teams move into Hyderabad's expanding business parks, Fiesta continues to scale its routes, ensuring maximum coverage and consistent service."
        },
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
                <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
                    {/* Left: Content */}
                    <div className="w-full md:w-[50%] md:pr-8">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-8 leading-tight">
                            Fiesta Now Running Routes Across Hyderabad
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">We’ve mapped key routes to serve every major business hub in the city.</p>
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

                    {/* Right: Image */}
                    <div className="w-full md:w-[50%] relative h-[450px] md:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-hyderabad/unnamed-5-3.jpg"
                            alt="Fiesta Now Running Routes Across Hyderabad"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RunningRoutes;
