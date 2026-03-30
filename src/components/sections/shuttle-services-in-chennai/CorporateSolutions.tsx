import React from 'react';
import Image from 'next/image';

const CorporateSolutions = () => {
    const listItems = [
        {
            title: "Expert Route Management",
            desc: "Expertly handling complex routes specifically designed for Chennai's expanding IT corridors and industrial hubs."
        },
        {
            title: "Variable Shift Support",
            desc: "Flexible shuttle solutions that adapt to diverse corporate shift schedules and high employee volumes."
        },
        {
            title: "Strategic Hub Coverage",
            desc: "Seamless connectivity across major business hubs including TIDEL Park, OMR, Guindy, Ambattur, and Porur."
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
                            Corporate Employee Transportation
                        </h2>

                        <p className="text-[#555555] text-[16px] leading-relaxed mb-8">
                            We provide end-to-end corporate shuttle solutions, expertly handling complex routes, variable shift schedules, and high employee volumes across Chennai.
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
                        
                        <p className="text-[#555555] text-[16px] leading-relaxed mt-8 font-medium">
                            Each commute is planned to ensure punctuality, safety, and optimal travel time, supporting corporate operations seamlessly.
                        </p>
                    </div>

                    <div className="w-full md:w-[50%] relative min-h-[500px] md:min-h-full overflow-hidden rounded-md">
                        <Image
                            src="/images/services-offered/employee-transport-service/employee-transport-in-chennai/why-employee-transport-matters.jpg"
                            alt="Corporate Employee Transportation in Chennai"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateSolutions;
