import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const DiscountCTA = () => {
    const listItems = [
        "Hourly, daily, and monthly basis rentals",
        "Wedding-focused rental period planning",
        "Affordable price structures without compromising service quality"
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
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/wedding-car-rental-in-chennai/unnamed-8.jpg"
                    alt="Choose Fiesta for Wedding Car Rental Services in Chennai"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 text-white">
                <div className="max-w-3xl space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Choose Fiesta for Wedding Car Rental Services in Chennai
                    </h2>

                    <p className="text-white/90 text-lg leading-relaxed">
                        Fiesta delivers professional luxury car rental Chennai solutions built for weddings, bridal car rental, and premium transportation needs.
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed">
                        Trained chauffeurs, structured service planning, and a focus on ultimate luxury without operational complexity support every wedding car.
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
                        <BookNowButton className="inline-block bg-[#EC2028] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-md transition-colors duration-300 text-lg">
                            Book Now
                        </BookNowButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountCTA;
