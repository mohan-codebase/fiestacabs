import Image from "next/image";

const OutstationTravel = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Content - Left */}
                    <div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Outstation Travel: Safe and Comfortable
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>
                                    Outstation travel is a frequent requirement for Mumbai businesses, with about 110 average monthly trips per company for this need, which includes trips to other major cities like Pune or Nashik for important business meetings. Long journeys need well-maintained, comfortable cars and experienced chauffeurs. Easy booking ensures safe, hassle-free corporate travel in metro cities.
                                </p>
                                <p>
                                    The right corporate car rental in Mumbai ensures safe, reliable, and stress-free travel for your company. Fiestacabs offers well-maintained vehicles, professional drivers, and flexible rental plans to meet all business needs. From daily employee transportation to airport transfers and outstation travel, you can rely on a service that values punctuality and comfort.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/corporate-car-rental-in-mumbai/unnamed-6-2.jpg"
                            alt="Outstation Travel"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutstationTravel;
