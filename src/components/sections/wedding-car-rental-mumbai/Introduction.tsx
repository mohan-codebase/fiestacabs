import Image from "next/image";

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-lg">
                        <Image
                            src="/images/wedding-car-rental-mumbai/unnamed-1-1.jpg"
                            alt="Luxury Wedding Car in Mumbai"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Luxury Car Options for Your Wedding
                        </h2>

                        <div className="space-y-6 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                Fiesta provides a premium selection of wedding cars in Mumbai to suit different tastes and requirements. Luxury sedans and dream cars enhance wedding day arrivals, combining comfort, style, and spacious interiors for family or bridal parties. Popular options include Mercedes, BMW, Audi, and Rolls-Royce, maintained to the highest standards for safety, ride quality, and elegance.
                            </p>
                            <p>
                                For special occasions like weddings, Fiesta ensures vehicles deliver a polished presentation, ample space, and luxury features suitable for memorable journeys across venues. Professional chauffeurs manage timing, routes, and transportation needs, allowing customers to relax and enjoy their big day without logistical concerns.
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="bg-[#EC2028] hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors w-max">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
