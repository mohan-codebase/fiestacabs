import React from 'react';
import Image from 'next/image';

const GateWorks = () => {
    const listItems = [
        {
            title: "Strategic Locations",
            desc: "We map each pick up point to be close to residential areas, cars, and high-traffic zones. This reduces unnecessary detours and ensures timely boarding."
        },
        {
            title: "Direct Access",
            desc: "No wandering through congested lanes or hard-to-find entrances. Our vehicles take employees right where they need to be."
        },
        {
            title: "Consistent Timings",
            desc: "Our fixed schedule accommodates various business needs, with attention to arrival timings and consistency on a daily basis."
        },
        {
            title: "Improved Focus",
            desc: "Timely arrivals reduce wait, boost morale, and keep your teams focused from the moment they reach the office."
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
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-[50%] md:pr-8">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-8 leading-tight">
                            Why Gate-to-Gate Works:
                        </h2>

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
                            src="/images/shuttle-services-in-hyderabad/unnamed-1-6.jpg"
                            alt="Why Gate-to-Gate Works"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GateWorks;
