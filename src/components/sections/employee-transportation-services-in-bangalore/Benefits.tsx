import React from 'react';
import { TbTrendingUp, TbCoin, TbCar, TbBus } from 'react-icons/tb';

const Benefits = () => {
    const features = [
        {
            icon: <TbTrendingUp className="text-[#E31E24] w-10 h-10" strokeWidth="1.5" />,
            text: "Hassle free commute ensures employees arrive on time, boosting morale and productivity."
        },
        {
            icon: <TbCoin className="text-[#E31E24] w-10 h-10" strokeWidth="1.5" />,
            text: "Reliable and cost effective transportation services reduce absenteeism and late arrivals."
        },
        {
            icon: <TbCar className="text-[#E31E24] w-10 h-10" strokeWidth="1.5" />,
            text: "Well maintained vehicles supported by a well maintained fleet reflect positively on corporate standards."
        },
        {
            icon: <TbCar className="text-[#E31E24] w-10 h-10" strokeWidth="1.5" />,
            text: "Corporate transportation provides businesses with a scalable way to manage the travel needs of their workforce."
        },
        {
            icon: <TbBus className="text-[#E31E24] w-10 h-10" strokeWidth="1.5" />,
            text: "Organizations streamline their logistics, improving efficiency while cutting down costs of unmanaged travel."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-[40px] font-bold text-[#2D3134] mb-4">
                        Benefits for Businesses
                    </h2>
                    <p className="text-gray-700 text-[15px] md:text-base leading-relaxed max-w-4xl mx-auto">
                        Implementing structured employee transportation services today is not just about moving people from one place to another. It has direct benefits for both companies and their employees:
                    </p>
                </div>

                {/* 3 Cards Top Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                    {features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-gray-100/50 rounded-2xl p-8 py-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col items-center">
                            <div className="flex justify-center mb-5">
                                {feature.icon}
                            </div>
                            <p className="text-gray-800 text-[14px] md:text-[15px] leading-relaxed">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 2 Cards Bottom Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-[800px] mx-auto">
                    {features.slice(3).map((feature, index) => (
                        <div key={index} className="w-full md:w-[calc(50%-12px)] bg-white border border-gray-100/50 rounded-2xl p-8 py-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col items-center">
                            <div className="flex justify-center mb-5">
                                {feature.icon}
                            </div>
                            <p className="text-gray-800 text-[14px] md:text-[15px] leading-relaxed">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-[1000px] mx-auto text-center">
                    <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                        We understand that businesses need more than just transport. They need reliability. That is why we provide fixed schedules, cover multiple pick ups, and follow strict safety protocols. This keeps every employee commute easy and dependable. Our dedicated team is always ready to give support whenever changes are required.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
