import React from 'react';
import { BsGraphUpArrow, BsPeopleFill, BsShieldCheck, BsCalendarCheck } from 'react-icons/bs';

const Benefits = () => {
    const features = [
        {
            icon: <BsGraphUpArrow className="text-[#E31E24] w-8 h-8" />,
            text: "Hassle free commute ensures employees arrive on time, boosting morale and productivity."
        },
        {
            icon: <BsPeopleFill className="text-[#E31E24] w-8 h-8" />,
            text: "Reliable and cost effective transportation services reduce absenteeism and late arrivals."
        },
        {
            icon: <BsShieldCheck className="text-[#E31E24] w-8 h-8" />,
            text: "Well maintained vehicles supported by a well maintained fleet reflect positively on corporate standards."
        },
        {
            icon: <BsCalendarCheck className="text-[#E31E24] w-8 h-8" />,
            text: "Corporate transportation provides businesses with a scalable way to manage the travel needs of their workforce."
        },
        {
            icon: <BsCalendarCheck className="text-[#E31E24] w-8 h-8" />,
            text: "Organizations streamline their logistics, improving efficiency while cutting down costs of unmanaged travel."
        }];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Benefits for Businesses
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Implementing structured employee transportation services today is not just about moving people from one place to another. It has direct benefits for both companies and their employees:

                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
                    {features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-6">
                                {feature.icon}
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
                    {features.slice(3).map((feature, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-6">
                                {feature.icon}
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-700 text-lg leading-relaxed">
We understand that businesses need more than just transport. They need reliability. That is why we provide fixed schedules, cover multiple pick ups, and follow strict safety protocols. This keeps every employee commute easy and dependable. Our dedicated team is always ready to give support whenever changes are required.                     </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
