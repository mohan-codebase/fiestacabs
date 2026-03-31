import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const HyderabadCTA = () => {
    const listItems = [
        "Luxury wedding car rental in Hyderabad",
        "Packages customised to customers' desires",
        "Timely service and great luxury cars",
        "Professional drivers with a polite attitude",
        "Vast collection of luxurious and modern ultra-luxury cars"
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
            <svg width="24" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#EC2028" strokeWidth="2" fill="transparent" />
                <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#EC2028" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#EC2028" strokeWidth="1.5" fill="transparent" />
            </svg>
        </div>
    );

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/wedding-car-rental-in-hyderabad/WhatsApp Image 2026-03-30 at 2.43.38 PM.jpeg"
                    alt="Choose Fiesta for Wedding Car Rental Services in Hyderabad"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 text-white">
                <div className="max-w-3xl space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Choose Fiesta for Wedding Car Rental Services in Hyderabad
                    </h2>

                    <p className="text-white/90 text-lg leading-relaxed">
                        Fiesta delivers luxury wedding car rental experiences in Hyderabad, across other metro cities, providing great service to customers who value prestige and attention to detail.
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed">
                        Trained chauffeurs, structured service planning, and a focus on ultimate luxury without operational complexity support every wedding car quest.
                    </p>

                    <div className="space-y-4">
                        {listItems.map((item, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <Icon />
                                <span className="text-white/90 text-[17px] font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-6">
                        <BookNowButton className="inline-block bg-[#EC2028] btn-animated hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 text-lg">
                            Get Your Free Quote
                        </BookNowButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HyderabadCTA;
