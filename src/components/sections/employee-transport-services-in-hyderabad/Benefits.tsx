import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const Benefits = () => {
    const benefitsList = [
        " Reduces stress and fatigue from daily traffic. ",
        " Improves punctuality and employee satisfaction. ",
        " Enhances safety during late-night and early-morning shifts. ",
        " Minimizes absenteeism and scheduling issues. ",
        " Builds a reliable and productive workforce. "
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            Benefits of Choosing Our Employee Transport Services in Hyderabad
                        </h2>
                        <ul className="space-y-6">
                            {benefitsList.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <Image src='/images/icon/tyre-icon.svg' width={40} height={40} alt='icon' />
                                    <span className="text-gray-700 text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transport-services-in-hyderabad/unnamed-12.jpg"
                            alt="Benefits of Employee Transport"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
