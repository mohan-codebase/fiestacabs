import Image from "next/image";

const DecorationSupport = () => {
    const decorationItems = [
        "Decoration-ready luxury cars",
        "Floral arrangements suitable for a wedding luxury car rental",
        "Vehicles prepared for premium wedding photography"
    ];

    const supportItems = [
        "Reservation coordination for wedding car rental services",
        "Customer assistance during rental usage",
        "On-call coordination for schedule changes"
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
                    <div className="relative min-h-[500px] md:min-h-[600px] w-full overflow-hidden">
                        <Image
                            src="/images/wedding-car-rental-in-chennai/unnamed-7.jpg"
                            alt="Wedding Car Decoration Support"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 leading-tight">
                                Wedding Car Decoration Support
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Wedding car decoration services enhance visual appeal during ceremonies and photography sessions.
                            </p>

                            <div className="space-y-4">
                                {decorationItems.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <Icon />
                                        <span className="text-[#555555] text-[15px] leading-[1.7] font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 leading-tight">
                                Easy Booking and Customer Support
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Fiesta simplifies booking for car rental Chennai customers through assisted reservations and service guidance.
                            </p>

                            <div className="space-y-4">
                                {supportItems.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <Icon />
                                        <span className="text-[#555555] text-[15px] leading-[1.7] font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-[#555555] text-[15px] leading-[1.7] pt-2">
                                Booking helps secure preferred luxury cars for the wedding day travel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DecorationSupport;
