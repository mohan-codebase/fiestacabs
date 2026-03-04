import Image from "next/image";

const ProfessionalExperience = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Image - Left */}
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-mumbai/unnamed-5-2.jpg"
                            alt="Professional Experience"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content - Right */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Professional Experience: Easy Booking and Reliable Travel
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                The overall professional experience provided by the service includes easy booking, timely pick-ups, and a comfortable ride in well-maintained vehicles. A truly hassle-free experience means your team can focus on their work. The best service ensures executive travel is always of a high standard. They use technology, offering a diverse range of vehicles that are always ready. This focus on high service quality ensures that over 90% of corporate clients give repeat business to such reliable providers as Fiestacabs.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Well-Maintained Vehicles: Reliable for Every Trip
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                The quality of the vehicles should be non-negotiable. Every car should be well-maintained with regular checks, cleaning, and servicing. A well-maintained fleet prevents breakdowns and delays. All cars should have the right amenities for comfortable business trips. Checking a provider's fleet records shows SUVs and premium sedans are serviced every 3–4 months, which ensures reliable corporate and luxury car rentals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalExperience;
