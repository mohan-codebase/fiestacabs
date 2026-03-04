import Image from "next/image";

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg order-2 md:order-1">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-3-10.jpg"
                            alt="Best Car Rental in Chennai with Driver Affordable & Reliable Service"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6 order-1 md:order-2">
                        <span className="text-[#FF6B6B] font-semibold text-sm tracking-wider uppercase">
                            WHY CHOOSE US
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Best Car Rental in Chennai with Driver Affordable & Reliable Service
                        </h2>

                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                In a city like Chennai, where every street is alive with culture, business, and history, getting from one destination to another efficiently can make all the difference.
                            </p>
                            <p>
                                If you are traveling for work, leisure, or a special event, the way you move around the city shapes your entire experience.
                            </p>
                            <p>
                                For visitors and locals alike, relying on public transport often means long waits, unpredictable schedules, and the challenge of navigating unfamiliar routes.
                            </p>
                            <p>
                                At Fiesta, we believe that a hassle free travel experience should be a standard, not a luxury.
                            </p>
                            <p>
                                That&apos;s why we have designed our car rental in Chennai with driver services to ensure you can travel anywhere in the city or across Tamil Nadu without stress, confusion, or delays.
                            </p>
                            <p>
                                From daily local travel to outstation services, our mission is simple, to give you a reliable, punctual, and comfortable ride every single time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
