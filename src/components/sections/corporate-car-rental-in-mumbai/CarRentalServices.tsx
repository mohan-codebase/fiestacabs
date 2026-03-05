import Image from "next/image";

const CarRentalServices = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Content - Left */}
                    <div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Car Rental Services: More Than Regular Taxis
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                A reliable car rental service like Fiestacabs offers a lot more than regular taxis, with access to a diverse fleet of well-maintained vehicles, including everything from the compact Toyota Etios to the comfortable Toyota Camry and spacious SUVs. Your business needs a service that offers competitive rates and cost efficiency without any hidden costs.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Airport Transfers: Hassle-Free for VIP Guests
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                For VIP guests and business clients, first impressions matter. Airport transfers must be hassle-free. A good corporate cab services provider ensures a smooth and professional experience from the moment someone lands. Around 70% of corporate trips in Mumbai begin or end with an airport transfer. Reliable providers like Fiesta offer professional chauffeurs for this task. They use GPS-enabled systems to plan the best routes to and from the airport, such as Chhatrapati Shivaji International Airport, which guarantees punctuality and reduces travel worry.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/corporate-car-rental-in-mumbai/unnamed-2-2.jpg"
                            alt="Car Rental Services"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarRentalServices;
