import Image from "next/image";

const PopularCars = () => {
    const cars = [
        {
            title: "Luxury Sedans:",
            desc: "Mercedes-Benz, Audi, BMW"
        },
        {
            title: "SUVs:",
            desc: "Toyota Fortuner, Innova"
        },
        {
            title: "Vintage Cars:",
            desc: "Rolls-Royces"
        },
        {
            title: "Extended Seating Vehicles:",
            desc: "Ideal for large wedding parties and airport transfers"
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
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden">
                        <Image
                            src="/images/wedding-cars-in-bangalore/unnamed-2-3.jpg"
                            alt="Popular Wedding Cars in Bangalore"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Popular Wedding Cars in Bangalore
                        </h2>

                        <div className="space-y-5">
                            {cars.map((item, index) => (
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
                            Every dream car ensures comfort, prestige, and a unique touch, making each ride suitable for family, guests, and couples. Every vehicle is maintained for quality, safety, and unmatched comfort, letting couples enjoy their own pace after the ceremony.
                        </p>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Chauffeurs are trained professionals who operate with courteous service, ensuring every journey is enjoyable and leaving couples with pride on their special day.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularCars;
