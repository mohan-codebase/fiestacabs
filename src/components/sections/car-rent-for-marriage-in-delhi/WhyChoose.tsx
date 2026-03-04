import Image from "next/image";

const WhyChoose = () => {
    const listItems = [
        {
            title: "Professional Chauffeur-Driven Cars Only",
            desc: "We do not offer self-drive rentals because we believe your special day should be about you and your celebrations, not about managing city driving, navigation, or traffic. Our professional drivers handle it all while you focus on enjoying your journey."
        },
        {
            title: "Diverse Fleet for Every Style",
            desc: "Whether you are seeking classic elegance, understated charm, or modern luxury, our diverse fleet of vehicles is carefully maintained to match your preference. We ensure the perfect car for your wedding day is ready, clean, and beautifully presented."
        },
        {
            title: "Tailored for Weddings",
            desc: "We understand that weddings have different needs than any other transportation service. From pre wedding shoots to the special day itself, our team coordinates timing, location, and all necessary details in advance to ensure your ride is seamless."
        },
        {
            title: "Local Delhi Expertise",
            desc: "Navigating Delhi NCR traffic, especially during peak hours or busy wedding seasons, requires expertise. Our drivers are familiar with every major wedding venue, local routes, and alternate roads, ensuring timely arrival for every ride."
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
                            Why Choose Fiesta for Wedding Car Rental in Delhi?
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            When it comes to a special occasion like your wedding, nothing should be left to chance. Our car rental company in Delhi is trusted by countless couples for their most important day. Here&apos;s why:
                        </p>

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
                            src="/images/car-rent-for-marriage-in-delhi/unnamed-1-5.jpg"
                            alt="Why Choose Fiesta for Wedding Car Rental in Delhi"
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
