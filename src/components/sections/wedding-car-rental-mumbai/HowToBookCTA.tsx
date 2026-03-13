import Image from "next/image";
import Button from "../../../components/common/Button";

const HowToBookCTA = () => {
    const steps = [
        "Plan Ahead: Book at least 2–3 months before the wedding, especially during peak season.",
        "Select Your Vehicle: Choose from vintage cars, luxury cars, or family vehicles.",
        "Customise Your Service: Add floral decorations and chauffeur support for a perfect experience.",
        "Confirm and Relax: Ensure all details are arranged and enjoy a stress-free special day.",
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
                                <p className="text-white/85 text-[15px] leading-[1.6]">{step}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-white/90 text-[15px] font-medium mb-8 max-w-lg">
                        Fiesta offers a professional car rental service in Mumbai, delivering vehicles, drivers, and experiences customised for weddings, special occasions, and memorable celebrations.
                    </p>

                    <Button className="bg-[#EC2028] w-max">
                        Book Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HowToBookCTA;
