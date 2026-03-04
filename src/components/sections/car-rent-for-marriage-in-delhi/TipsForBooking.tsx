import Image from "next/image";

const TipsForBooking = () => {
    const listItems = [
        {
            title: "Book in Advance",
            desc: "Popular wedding dates in Delhi get booked quickly. Secure your car rental in Delhi early to avoid disappointment."
        },
        {
            title: "Know Your Requirements",
            desc: "Decide whether you need one car or multiple wedding cars for family and friends."
        },
        {
            title: "Check the Prices and Packages",
            desc: "Our prices vary depending on demand, vehicles, and duration. We'll help you find something within your budget."
        },
        {
            title: "Coordinate with Your Planner",
            desc: "Share your booking and transportation plans with your wedding planner so they can align the celebration schedule."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#EC2028" strokeWidth="2" fill="transparent" />
                <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#EC2028" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#EC2028" strokeWidth="1.5" fill="#EC2028" />
            </svg>
        </div>
    );

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Tips for Booking the Perfect Wedding Car
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

                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden">
                        <Image
                            src="/images/car-rent-for-marriage-in-delhi/unnamed-5-2.jpg"
                            alt="Tips for Booking the Perfect Wedding Car"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TipsForBooking;
