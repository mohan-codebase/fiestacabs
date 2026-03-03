import Image from "next/image";

const PlanningExperience = () => {
    const listItems = [
        {
            title: "Theme and Style:",
            desc: "Luxury and vintage cars add prestige, class, and a unique touch to your wedding celebrations."
        },
        {
            title: "Comfort and Space:",
            desc: "SUVs provide ample room for family members, bridal parties, and luggage, ensuring relaxed travel."
        },
        {
            title: "Photographs and Memories:",
            desc: "Vintage vehicles are perfect for capturing beautiful moments both inside and outside the car."
        },
        {
            title: "Booking Timeline:",
            desc: "Reserve your dream wedding car 3–6 months in advance, especially during peak wedding seasons."
        },
        {
            title: "Life Moments:",
            desc: "Every ride creates lasting memories for couples, friends, and family, offering comfort, joy, and a sense of pride."
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
                    <div className="relative min-h-[450px] md:min-h-[550px] w-full overflow-hidden">
                        <Image
                            src="/images/wedding-cars-in-bangalore/unnamed-4-2.jpg"
                            alt="Planning Your Wedding Car Experience"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Planning Your Wedding Car Experience
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Selecting the right car enhances your wedding theme, comfort, and guest experience:
                        </p>

                        <div className="space-y-5">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <p className="text-[#555555] text-[15px] leading-[1.7]">
                                        <span className="font-bold text-gray-900">{item.title}</span>{" "}{item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanningExperience;
