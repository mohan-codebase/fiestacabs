import React from "react";
import Image from "next/image";

const CorporateWhyMatters = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

                    {/* Text Content - Left */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            Why Choosing the Right Corporate Car Rental Service Matters
                        </h2>

                        <div className="space-y-6 text-gray-800 text-[15px] leading-relaxed">
                            <p>
                                Corporate travel is different from casual rides. It demands professional chauffeurs, well maintained cars, reliable service and structured transport operations. Companies look for corporate car rentals that support airport transfers, outstation trips, client visits, VIP guests, and corporate events. Fiesta Smart Mobility built a strong reputation across India because it focuses on customer satisfaction, trained chauffeurs, fleet presence across cities and service discipline.
                            </p>
                            <p>
                                Fiesta knows corporate mobility needs to change often. That is why it designs tailored solutions for corporate car hire and corporate cab services. When employees arrive on time, businesses run better. When rental cars show up without delays, meeting schedules stay intact. When vehicles stay clean, safe and serviced, corporate clients trust the system.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[520px] order-1 lg:order-2">
                        <div className="absolute inset-0 overflow-hidden h-full">
                            <Image
                                src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/why-right-car-choosing-matters.jpg"
                                alt="Why Choosing the Right Corporate Car Rental Matters"
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

export default CorporateWhyMatters;
