import React from "react";
import Image from "next/image";

const CorporateDelivers = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

                    {/* Image - Left */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[520px] order-1">
                        <div className="absolute inset-0 overflow-hidden h-full">
                            <Image
                                src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/how-fiesta-car-mobility-delivers.jpg"
                                alt="How Fiesta Smart Mobility Delivers Reliable Corporate Car Rental Services"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Text Content - Right */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            How Fiesta Smart Mobility Delivers Reliable Corporate Car Rental Services
                        </h2>

                        <div className="space-y-6 text-gray-800 text-[15px] leading-relaxed">
                            <p>
                                Fiesta works with hundreds of corporate clients who need dependable car rental solutions. Their corporate car rental services include premium sedans, luxury sedans, chauffeur driven cabs, outstation vehicles and city cars. Since special situations demand flexible rental plans, Fiesta offers daily, weekly, monthly and project-based options.
                            </p>
                            <p>
                                Their cars stay clean, road-ready and safe because Fiesta performs strict car maintenance checks. All our vehicles go through regular inspections so companies get well maintained vehicles without excuses. Professional drivers trained for corporate behaviour handle every ride. This helps employees travel comfortably even in other cities where they need clear guidance.
                            </p>
                            <p>
                                The benefit is simple. Corporate travel gets hassle free. Businesses get competitive rates. The support team gives immediate help when something changes. Real time tracking helps managers watch employee travel in a smooth way. Every detail comes together through one dedicated team.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateDelivers;
