import Image from "next/image";

const WhyWeStandOut = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg">
                        <Image
                            src="/images/car-rent-for-marriage-in-delhi/unnamed-4-5.jpg"
                            alt="Why We Stand Out in the Wedding Car Rental Industry"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Why We Stand Out in the Wedding Car Rental Industry
                        </h2>

                        <ul className="space-y-3 list-disc pl-5 text-[#555555] text-[15px] leading-[1.7]">
                            <li>We are a car rental company in Delhi that focuses exclusively on chauffeur-driven services for weddings.</li>
                            <li>We understand the environment of Indian weddings, including cultural expectations and details that make a big difference.</li>
                            <li>Our services are trusted for weddings across Delhi NCR, with hundreds of happy customers.</li>
                            <li>We combine elegance, style, and professional service to enhance your overall experience.</li>
                        </ul>

                        <div className="pt-4">
                            <h3 className="text-xl md:text-[22px] font-bold text-gray-900 leading-tight mb-4">
                                Car Rental in Delhi – Beyond Weddings
                            </h3>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                While we specialize in wedding car rental, our car rental service is also available for special occasions, corporate events, and outstation trips. However, our expertise in luxury wedding transport makes us the best car provider for couples seeking to make their special day unforgettable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeStandOut;
