import React from "react";
import Image from "next/image";

const missPoints = [
    {
        title: "Vehicle Age",
        desc: "Newer cars reduce breakdown chances. Fiesta keeps vehicles updated and performs timely servicing.",
    },
    {
        title: "Driver Behaviour Training",
        desc: "Not all car rentals train drivers for corporate manners. Fiesta trains chauffeurs in etiquette, safety, routing and city navigation.",
    },
    {
        title: "Car Availability in Peak Hours",
        desc: "During peak travel times, many providers struggle. Fiesta uses intelligent internal planning to maintain high availability.",
    },
    {
        title: "Flexibility for Last Minute Trips",
        desc: "Corporate travel changes fast. Fiesta adjusts schedules even when bookings come late.",
    },
    {
        title: "Support During Corporate Events",
        desc: "Large events need many vehicles. Fiesta handles corporate events with backup cars and a dedicated team.",
    },
];

const CorporateOftenMiss = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Image - Left */}
                    <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-[600px]">
                        <div className="absolute inset-0 overflow-hidden h-full rounded-sm">
                            <Image
                                src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/what-com-often-miss.jpg"
                                alt="Choosing Corporate Car Rentals: What Companies Often Miss"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Text Content - Right */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Choosing Corporate Car Rentals: What Companies Often Miss
                        </h2>

                        <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
                            Even when businesses think they know what they want, they often miss crucial points.
                        </p>

                        <div className="space-y-6 mb-8">
                            {missPoints.map((point, idx) => (
                                <div key={idx} className="flex gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px] text-[#EC2028]" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <circle cx="12" cy="12" r="4" fill="currentColor" />
                                            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" strokeWidth="1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[17px] font-bold text-gray-900 mb-1 leading-tight">{point.title}</h4>
                                        <p className="text-gray-700 text-[15px] leading-relaxed">
                                            {point.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-800 text-[15px] leading-relaxed">
                            When companies consider these points, the final experience improves for everyone.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateOftenMiss;
