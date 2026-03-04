import Image from "next/image";

const RentalService = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Content - Left */}
                    <div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Rental Service in Mumbai: Choosing the Right Partner
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Finding the right rental service in Mumbai requires looking beyond just the price. You need a partner who understands the local traffic and business culture. A reliable service in major cities and other major cities ensures the same high standard everywhere. For example, a company like Fiesta focuses on customer satisfaction across all areas. They make sure their offerings meet various business requirements. Look for a provider with a strong presence around areas like Juhu Beach and key business hubs. Professional experience in the city matters a lot!
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Professional Drivers: Skilled and Polite
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                The driver is the face of the service. Only professional drivers should handle your business clients and vip guests. All drivers in a top service are background verified. They are also well-trained in corporate etiquette. A professionally trained chauffeur team ensures your executives and staff experience smooth travel to every business meeting or site visit. They are skilled in time management and are polite to guarantee a superior level of service for corporate travel. They are familiar with local and regional routes for outstation travel. Providers often invest in training programs, with chauffeurs completing over 100 hours of service and safety training annually. This training covers defensive driving and customer interaction. Their expertise ensures your employee travel is secure, and you can enjoy stress-free travel.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/corporate-car-rental-in-mumbai/unnamed-4-2.jpg"
                            alt="Rental Service in Mumbai"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RentalService;
