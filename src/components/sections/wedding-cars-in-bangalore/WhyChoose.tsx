import Image from "next/image";

const WhyChoose = () => {
    const listItems = [
        {
            title: "Wide Choice of Vehicles:",
            desc: "The fleet includes luxury cars, SUVs, and vintage cars, suitable for all wedding venues, towns, and special days."
        },
        {
            title: "Flexible Options:",
            desc: "Chauffeur-driven vehicles are available for hourly, daily, weekly, or monthly bookings."
        },
        {
            title: "Additional Services:",
            desc: "Packages include fuel, driver allowances, and airport transfers for convenience. Travel desks are available to assist with planning."
        },
        {
            title: "Customer-Focused Support:",
            desc: "Fiesta operates as a trusted partner, assisting with booking inquiries and contact, ensuring customers enjoy a world-class experience."
        },
        {
            title: "Reputation and Reliability:",
            desc: "Couples across metro cities and towns in India rely on Fiesta for luxury car rentals, stress-free rides, and luxurious celebrations."
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
                            Why Choose Fiesta for Wedding Car Rental in Bangalore?
                        </h2>

                        <div className="space-y-6">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-[15px] mb-1">{item.title}</p>
                                        <p className="text-[#555555] text-[15px] leading-[1.7]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden order-1 md:order-2">
                        <Image
                            src="/images/wedding-cars-in-bangalore/unnamed-11.jpg"
                            alt="Why Choose Fiesta for Wedding Car Rental in Bangalore"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
