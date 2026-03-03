import React from 'react';
import { BsGraphUpArrow, BsPeopleFill, BsShieldCheck, BsCalendarCheck } from 'react-icons/bs';

const Benefits = () => {
    const features = [
        {
            icon: <BsGraphUpArrow className="text-[#E31E24] w-8 h-8" />,
            text: "Improve productivity and reduce lateness across the entire business hierarchy."
        },
        {
            icon: <BsPeopleFill className="text-[#E31E24] w-8 h-8" />,
            text: "Retain and attract talent by offering a stress-free commute solution in a busy city."
        },
        {
            icon: <BsShieldCheck className="text-[#E31E24] w-8 h-8" />,
            text: "Ensure safety, with rigorous checks for vehicles & professional chauffeurs behind the wheel."
        },
        {
            icon: <BsCalendarCheck className="text-[#E31E24] w-8 h-8" />,
            text: "Minimize administrative workload, leaving transport logistics to our experienced professionals."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Benefits for Businesses
                    </h2>
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
                        For decades now, corporate clients have relied on our transport solutions, empowering them to drive business success. Focus on expanding your footprint, while we seamlessly provide safe, quick trips. Take business efficiency to an all-new high by partnering with us.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
