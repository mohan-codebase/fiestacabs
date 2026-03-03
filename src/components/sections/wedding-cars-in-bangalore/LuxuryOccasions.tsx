import Image from "next/image";

const LuxuryOccasions = () => {
    const occasions = [
        {
            title: "Luxury Sedans:",
            desc: "Elegant cars like Mercedes-Benz S-Class, Audi A6, and BMW i7/M5 provide class, comfort, and a sophisticated arrival."
        },
        {
            title: "SUVs:",
            desc: "Spacious Toyota Fortuner and Innova Hycross accommodate families, bridal parties, and luggage, making every ride a perfect choice."
        },
        {
            title: "Vintage Cars:",
            desc: "Rolls-Royces add a stunning, classic, and photogenic element to wedding celebrations, enhancing photographs and leaving a prestige impression."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
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
                            Luxury Car Rentals for Every Occasion - Choose Your Dream Car
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            From Mercedes-Benz, BMW, and Audi sedans to Rolls-Royces, our collection satisfies all preferences:
                        </p>

                        <div className="space-y-6">
                            {occasions.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-[15px] mb-0.5">{item.title}</p>
                                        <p className="text-[#555555] text-[15px] leading-[1.7]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Every ride provides safety, style, and a stress-free experience. Fiesta ensures luxurious journeys in Bangalore and across other metro cities, offering convenience, comfort, and peace of mind.
                        </p>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden order-1 md:order-2">
                        <Image
                            src="/images/wedding-cars-in-bangalore/unnamed-3-3.jpg"
                            alt="Luxury Car Rentals for Every Occasion"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LuxuryOccasions;
