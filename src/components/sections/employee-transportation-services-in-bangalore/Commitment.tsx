import React from 'react';
import Image from 'next/image';
import { MdOutlineCheckCircle } from 'react-icons/md';

const Commitment = () => {
    const listItems = [
        "Zero-tolerance policy towards safety lapses.",
        "Continuous driver training for defensive driving and passenger etiquette.",
        "24/7 control room support, resolving issues in real-time without causing delays.",
        "Immediate alternate arrangements in the rare event of vehicle breakdown."
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transportation-services-in-bangalore/unnamed-2-3.jpg"
                            alt="Our Commitment to Safety and Reliability"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Our Commitment to Safety and Reliability
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            The safety and security of your employees is our priority. Every route is planned perfectly to minimize commute time.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <MdOutlineCheckCircle className="text-[#E31E24] w-6 h-6 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-800 font-medium text-lg leading-relaxed">
                            Focus completely on your core business operations, safe in the knowledge that your most valuable assets are in expert hands.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commitment;
