import Image from "next/image";

const HowItWorks = () => {
    const steps = [
        {
            step: "01",
            title: "Get in Touch",
            desc: "Reach out to our company well before your wedding date to discuss your requirements, budget, and preferences."
        },
        {
            step: "02",
            title: "Choose Your Car",
            desc: "Our team will guide you through our diverse fleet so you can pick the perfect car for your wedding theme and celebration."
        },
        {
            step: "03",
            title: "Confirm Your Booking",
            desc: "Once you're satisfied, confirm your booking with a small advance payment. We'll lock in your ride and assign a professional chauffeur."
        },
        {
            step: "04",
            title: "Pre-Wedding Coordination",
            desc: "Before your wedding day, we reconfirm details like pickup time, location, and route. On the day, our chauffeur will arrive early to ensure everything is on schedule."
        },
        {
            step: "05",
            title: "Enjoy the Ride",
            desc: "Let us handle the driving, traffic, and parking while you focus on your special day moments."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            How Our Wedding Car Rental Service Works
                        </h2>

                        <div className="space-y-6">
                            {steps.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#EC2028] flex items-center justify-center text-white font-bold text-sm">
                                        {item.step}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-[15px] mb-1">{item.title}</p>
                                        <p className="text-[#555555] text-[15px] leading-[1.7]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative min-h-[450px] md:min-h-[550px] w-full overflow-hidden order-1 md:order-2">
                        <Image
                            src="/images/car-rent-for-marriage-in-delhi/unnamed-3-5.jpg"
                            alt="How Our Wedding Car Rental Service Works"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
