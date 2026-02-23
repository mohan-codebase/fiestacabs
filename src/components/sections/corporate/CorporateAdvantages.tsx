import React from "react";
import Image from "next/image";

const advantages = [
    {
        title: "Customized Solutions for Every Corporate Need",
        desc: "Corporate clients often need personalized plans. Fiesta builds customized solutions for office trips, client meetings, airport transfers, day-long travel and outstation travel. The team adjusts according to the company's travel pattern, budget and timings.",
    },
    {
        title: "Strong Fleet Present Across India",
        desc: "Fiesta has fleet present in multiple cities. Because of this country servicing, teams can book cars for other cities as well. This matters for businesses with branches or frequent travel across India.",
    },
    {
        title: "Business-Friendly Features",
        desc: "Corporate car hire must support operations. Fiesta adds the right features:",
        list: [
            "Competitive rates",
            "Trained chauffeurs",
            "Car rental service for daily and long-term use",
            "Professional conduct",
            "Support for corporate mobility programs"
        ],
        postDesc: "These details make corporate car rentals stress-free, especially when firms want speed and comfort in one place."
    },
];

const CorporateAdvantages = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Text Content - Left */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Fiesta Smart Mobility: Key Advantages for Corporate Rentals
                        </h2>

                        <p className="text-gray-700 text-[15px] leading-relaxed mb-10">
                            Businesses today demand transportation services in Pune that are reliable, cost effective, and built for long-term sustainability. Fiesta provides benefits that go beyond a basic commute.
                        </p>

                        <div className="space-y-8">
                            {advantages.map((adv, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#EC2028]">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
                                            <circle cx="12" cy="12" r="6" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[17px] font-bold text-gray-900 mb-2">{adv.title}</h4>
                                        <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                                            {adv.desc}
                                        </p>

                                        {adv.list && (
                                            <ul className="list-disc pl-5 space-y-2 mb-3 text-gray-700 text-[15px]">
                                                {adv.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {adv.postDesc && (
                                            <p className="text-gray-700 text-[15px] leading-relaxed">
                                                {adv.postDesc}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-[800px]">
                        <div className="absolute inset-0 overflow-hidden h-full">
                            <Image
                                src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/corporate-advantages.jpg"
                                alt="Key Advantages for Corporate Rentals"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateAdvantages;
