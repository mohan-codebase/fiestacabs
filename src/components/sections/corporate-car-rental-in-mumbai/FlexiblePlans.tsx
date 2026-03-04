import Image from "next/image";

const FlexiblePlans = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Image - Left */}
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-mumbai/unnamed-8.jpg"
                            alt="Flexible Rental Plans"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content - Right */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Flexible Rental Plans: Short-Term or Long-Term Options
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                A growing business needs solutions that can adapt quickly. Flexible rental plans are a significant benefit of corporate car services- companies can choose either short-term trips or long-term travel solutions. Many providers offer both options, and this helps businesses manage budgets efficiently. Custom packages of car rental services can save up to 20% compared to daily bookings.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Customized Solutions: Meeting Unique Business Needs
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Every business has unique needs. For example, a car rental service provider like Fiestacabs might supply premium sedans for executives and tempo travellers for team outings. In Mumbai, about 68% of companies actively use customised cab services for varied needs. These services offer the option of booking an electric vehicle fleet, which is perfect for the company looking for a greener corporate solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlexiblePlans;
