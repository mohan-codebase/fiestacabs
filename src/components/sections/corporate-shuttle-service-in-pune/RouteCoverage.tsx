import React from 'react';
import Image from 'next/image';

const RouteCoverage = () => {
    const listItems = [
        {
            title: "IT Parks & Corporate Hubs",
            desc: "Serving Hinjewadi, Magarpatta, and other key business centers."
        },
        {
            title: "High-density Residential Areas",
            desc: "Pickups and drops across Pune and surrounding suburbs."
        },
        {
            title: "Key Transport Points",
            desc: "Convenient connections to airports and major bus stations."
        },
        {
            title: "Customized Route Flexibility",
            desc: "Tailored routes to meet unique corporate requirements."
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
                            src="/images/shuttle-service-in-bangalore/unnamed-2-7.jpg"
                            alt="Route Coverage and Flexibility in Pune"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Coverage and Route Flexibility Across Pune
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Fiesta Smart Mobility Services covers Pune city and the surrounding suburbs, for maximum convenience and efficiency.
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

export default RouteCoverage;
