import Image from "next/image";

const CityOutstation = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-6-6.jpg"
                            alt="Why Choose Fiesta for Car Rental in Chennai with Driver"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Why Choose Fiesta for Car Rental in Chennai with Driver
                        </h2>

                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                When you rent a car with Fiesta, you are choosing more than just a vehicle. You are selecting a travel partner that values your time, comfort, and peace of mind. Our car rental in Chennai with driver service is designed to deliver a hassle free experience from the moment you book until the moment you reach your destination.
                            </p>

                            <p>
                                We blend professionalism with flexibility so every ride meets your exact needs, whether it's a business meeting, a family trip, or a weekend getaway.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CityOutstation;
