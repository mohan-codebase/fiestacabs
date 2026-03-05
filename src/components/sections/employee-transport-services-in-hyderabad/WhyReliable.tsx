import React from 'react';
import Image from 'next/image';

const WhyReliable = () => {
    const reasonsList = [
        "Avoids late arrivals during critical time",
        "Reduces employee fatigue from long commutes",
        "Supports employee safety for late-night shifts",
        "Minimises absenteeism and scheduling issues",
        "Ensures fixed routes for smooth daily travel"
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
                                In a growing city like Hyderabad, where traffic congestion and long commute times affect daily routines, reliable employee transportation services help reduce stress and boost punctuality.                             </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Fiesta Smart Mobility’s Telangana operations include 40+ employees and 300 vehicles. Services currently reach 8 clients in the state. With 9 years of experience in the region, the company has established a steady presence. Telangana continues to offer opportunities for further growth and expansion.                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Companies across sectors depend on corporate employee transportation services to manage staff mobility, especially when shift timings are odd, or locations are far from public transit.                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                An excellent service provides a dependable transportation service that shows a commitment to ensuring security, safety, saving time, and improving work focus.                            </p>
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
