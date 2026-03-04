import Image from "next/image";

const HowToBookCTA = () => {
    const steps = [
        {
            title: "Provide your Requirements",
            desc: "Contact us using our form or call and specify the events you need a car for."
        },
        {
            title: "Select your Car",
            desc: "Choose from our premium selection of vehicles, tailored for your special entrance."
        },
        {
            title: "Identify Locations",
            desc: "Provide the venues along with your timeline. We will help establish perfect logistics."
        },
        {
            title: "Confirm Your Booking",
            desc: "Reserve your chosen vehicle securely to guarantee its availability on your big day."
        }
    ];

    return (
        <section className="relative py-20 px-4 md:px-8 min-h-[500px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/wedding-car-rental-mumbai/unnamed-5-1.jpg"
                    alt="How to Book Your Wedding Car in Mumbai"
                    fill
                    className="object-cover object-center"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-end md:items-center">
                <div className="md:col-start-2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        How to Book Your Wedding Car in Mumbai
                    </h2>

                    <div className="space-y-6 mb-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-4 items-start text-left max-w-lg">
                                <div className="shrink-0 mt-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#EC2028" strokeWidth="2" fill="transparent" />
                                        <path d="M8 12.5L10.5 15L16 9" stroke="#EC2028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                                    <p className="text-white/80 text-[15px] leading-[1.6]">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-white/90 text-[15px] font-medium mb-8 max-w-lg">
                        Ready to book right away? Connect with our dedicated support team to plan your wedding day logistics exactly the way you imagined!
                    </p>

                    <button className="bg-[#EC2028] hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors w-max">
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowToBookCTA;
