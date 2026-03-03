import React from 'react';
import Image from 'next/image';

const WhyReliable = () => {
    const reasonsList = [
        "Punctuality ensures better productivity",
        "Reduced employee stress and fatigue",
        "Enhanced safety and security for all",
        "Cost-effective for both employees and employers",
        "Boosts overall employee satisfaction"
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transport-services-in-hyderabad/unnamed-3-4.jpg"
                            alt="Reliable Employee Transport Services"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Reliable Employee Transport Services Matter
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Reliable employee transport services in Hyderabad play a pivotal role in ensuring that your employees commence their workday with efficiency and punctuality setting a positive tone for the day.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Providing your workforce with dependable transportation can significantly boost their morale and productivity. It eliminates the stress of daily commuting, allowing them to focus better on their core responsibilities.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Furthermore, it showcases your company&apos;s commitment to employee well-being, which can be a strong factor in talent retention and attraction.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Let us look at some of the key reasons why selecting out employee transport services in Hyderabad is a smart choice for your corporate needs:
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {reasonsList.map((reason, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#E31E24] rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-700 text-lg font-medium">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyReliable;
