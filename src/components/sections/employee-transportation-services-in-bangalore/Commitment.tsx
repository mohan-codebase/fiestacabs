import React from 'react';
import Image from 'next/image';

const Commitment = () => {
    const listItems = [
        " Thorough background checks for drivers and support staff. ",
        " Well maintained vehicles checked regularly to ensure a safe and smooth ride. ",
        " Real time GPS tracking and live tracking for constant visibility and monitoring. ",
        " Trained drivers and trained chauffeurs who prioritize employee safety and punctual arrivals. "
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
                            Every trip under our employee transportation services in Bangalore begins with safety. We follow strict measures:                        </p>

                        <ul className="space-y-4 mb-8">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Image src="/images/icon/tyre-icon.svg" alt="bullet icon" width={24} height={24} className="flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-800 font-medium text-lg leading-relaxed">
                            This structured approach ensures that employees enjoy comfortable rides every day, and companies remain confident in their chosen partner.                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commitment;
