import Image from "next/image";

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Image - Left */}
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-mumbai/unnamed-1-2.jpg"
                            alt="Corporate Car Rentals Mumbai"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content - Right */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Corporate Car Rental In Mumbai- Fleet For Every Business Need
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Mumbai never stops, so companies need quick and reliable transport. The demand for high-quality corporate car rental services is growing fast, as choosing a good car rental in Mumbai means picking a partner like Fiestacabs, which offers complete transparency and professional service. Your company needs vehicles that are well-maintained and ready for any business task.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Employee Transportation: Solving Commuting Challenges
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>
                                    Employee transportation is a significant area for corporate rentals. Commuting in Mumbai can be a considerable challenge.
                                </p>
                                <p>
                                    On average, mumbai employees can spend over 2.5 hours daily stuck in traffic, which affects their energy and output.
                                </p>
                                <p>
                                    Corporate cab services like Fiesta manage this traffic congestion with planned routes and timely pick-ups. Companies focusing on customer satisfaction note up to 30% reduction in employee commute time using innovative mobility solutions. They use GPS tracking and live updates to ensure workers enjoy stress-free travel and make it easy for the team to be on time for client meetings or team outings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
