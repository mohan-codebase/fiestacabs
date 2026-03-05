import Image from "next/image";

const BridalCar = () => {
    const listItems = [
        "Coordinated bridal arrival timing",
        "Chauffeur-assisted entry and exit management",
        "Premium wedding cars that turn heads during wedding functions"
    ];

    const Icon = () => (
        <div className="shrink-0 mt-0.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#EC2028" strokeWidth="2" fill="transparent" />
                <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#EC2028" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#EC2028" strokeWidth="1.5" fill="transparent" />
            </svg>
        </div>
    );

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Bridal Car Rental for Wedding Day Arrivals
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Bridal car rental plays a vital role during wedding ceremonies. Fiesta provides the best bridal car rental solutions in Chennai with vehicles selected for photography, comfort, and calm travel between wedding venues.
                        </p>
                        <p className="text-gray-900 font-semibold mt-2">Services include:</p>

                        <div className="space-y-4">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <span className="text-[#555555] text-[15px] leading-[1.7] font-semibold">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#555555] text-[15px] leading-[1.7] pt-2">
                            Wedding car decoration support is available for floral styling aligned with ceremony themes and cultural preferences.
                        </p>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden order-1 md:order-2">
                        <Image
                            src="/images/wedding-car-rental-in-chennai/unnamed-4.jpg"
                            alt="Bridal Car Rental for Wedding Day Arrivals"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BridalCar;
