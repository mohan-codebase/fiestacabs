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
                                Corporate Car Rentals Mumbai: Fleet For Every Business Need
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Due to Mumbai&apos;s notorious traffic, businesses looking to ensure employee punctuality and minimize travel stress often turn to corporate car rentals. Selecting the perfect fleet entails picking vehicles that seamlessly match your company&apos;s unique needs, while also aligning with your budget and values.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Employee Transportation: Solving Commuting Challenges
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>
                                    Local commutes in Mumbai are tough— endless local train rides, and changing buses. Our employee car rental service is a game-changer. We map routes, manage schedules, and provide a dedicated, comfortable vehicle.
                                </p>
                                <p>
                                    Fiesta Cabs helps businesses ensure their staff arrive fresh and ready to tackle the day, rather than fatigued from transit.
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
