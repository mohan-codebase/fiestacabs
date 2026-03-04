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
                                Unlike standard cabs where availability can be unpredictable, corporate car rentals offer assured service. There&apos;s no stress of sudden cancellations or haggling over fares. Booking a corporate cab means guaranteed availability, transparent pricing, and professional service. Fiesta Cabs elevates this with a well-maintained fleet and thoroughly vetted drivers.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Airport Transfers: Hassle-Free for VIP Guests
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                First impressions matter, especially when receiving VIP clients or senior executives at the Chhatrapati Shivaji Maharaj International Airport. A premium corporate cab waiting at the terminal not only ensures a smooth journey to the hotel or office but also reflects well on your company&apos;s brand image. It conveys professionalism and care right from the start.
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
