import React from 'react';
import { MdOutlineAccessTime, MdOutlineVerifiedUser, MdSupportAgent } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { FaRoute } from "react-icons/fa";
import { BiCalendarCheck } from "react-icons/bi";

const WhyChooseFiesta = () => {
    const features = [
        {
            title: "Real-Time Tracking",
            description: " Live GPS tracking keeps your teams informed and ensures safer travel, especially during late-night shifts.",
            icon: <MdOutlineAccessTime className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Well-Maintained Fleet",
            description: "Clean, regularly serviced vehicles minimize delays and ensure a comfortable journey.",
            icon: <AiOutlineCar className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Verified Drivers",
            description: "All chauffeurs are background-checked, trained, and experienced for corporate travel.",
            icon: <MdOutlineVerifiedUser className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Customized Routes",
            description: "For organizations, investing in structured employee transportation services translates to measurable savings.",
            icon: <FaRoute className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "Shift-Based Scheduling",
            description: "From booking to pick up and drop, every step is designed to provide a seamless experience.",
            icon: <BiCalendarCheck className="text-[#E31E24] w-8 h-8" />
        },
        {
            title: "24/7 Support",
            description: "A dedicated emergency team ensures immediate assistance whenever needed.",
            icon: <MdSupportAgent className="text-[#E31E24] w-8 h-8" />
        }
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Fiesta for Employee Transportation in Hyderabad
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Our services go beyond just getting employees from one place to another. We focus on convenience, reliability, and safety to create a better commute experience.                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-red-500 rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-red-50 rounded-full">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFiesta;
