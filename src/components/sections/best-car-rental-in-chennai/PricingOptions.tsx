import Image from "next/image";

const PricingOptions = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Substantial Savings – Smarter Than Self-Driving
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Choosing our car rental in Chennai with a driver means you avoid the extra costs that come with self drive cars, fuel expenses, parking fees, and vehicle wear and tear. You also save yourself from the stress of navigating unfamiliar roads, dealing with traffic, or worrying about finding safe parking in busy areas of Chennai. Over time, these savings add up significantly.
                            </p>
                        </div>

                        <div className="pt-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Real Time Monitoring – Stay Informed, Every Trip
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                With Fiesta, you're always in the loop. We provide real time monitoring so you can check your driver's location, estimated arrival, and travel details at any point during your journey.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg order-1 md:order-2 shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-13-1-e1763612383267.jpg"
                            alt="Substantial Savings – Smarter Than Self-Driving"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingOptions;
