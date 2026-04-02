import React from 'react';
import Image from 'next/image';

const RouteCoverage = () => {
    const listItems = [
        {
            title: "IT Hubs & Industrial Zones",
            desc: "Serving TIDEL Park, OMR, Guindy, Ambattur, and Porur with precision."
        },
        {
            title: "Commercial Corridors",
            desc: "Strategic route planning across Chennai's busiest business districts."
        },
        {
            title: "Pickup Connectivity",
            desc: "Well-distributed pickup points across residential areas for easy access."
        },
        {
            title: "Customized Route Flexibility",
            desc: "Scalable routes that adapt to your workforce's changing travel patterns."
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
                            src="/images/shuttle-services-in-chennai/WhatsApp Image 2026-04-01 at 18.43.02.jpeg"
                            alt="Route Coverage in Chennai"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="w-full md:w-[55%] md:pl-8 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Route Coverage Across Chennai
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            Our services cover Chennai's expansive IT corridors and suburban clusters, ensuring dependable workforce mobility for all business sizes.
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
