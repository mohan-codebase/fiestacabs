import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const HassleFreeCTA = () => {
    const listItems = [
        "Select your preferred car from our collection.",
        "Confirm your booking online or via phone, fast, secure, and convenient.",
        "Pay easily with transparent billing, competitive fares, and no hidden charges.",
        "Enjoy a stress-free, luxurious ride, impress your guests, and make your big day unforgettable."
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
                    src="/images/wedding-cars-in-bangalore/unnamed-5-2.jpg"
                    alt="Hassle-Free Booking for the Big Day"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 text-white">
                <div className="max-w-3xl space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Hassle-Free Booking for the Big Day
                    </h2>

                    <p className="text-white/90 text-lg leading-relaxed">
                        Booking a wedding car rental in Bangalore with Fiesta is simple:
                    </p>

                    <div className="space-y-4">
                        {listItems.map((item, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <Icon />
                                <span className="text-white/90 text-[17px]">{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-white/90 text-lg leading-relaxed">
                        Every ride in Bangalore and other metro cities provides luxury, safety, and convenience, letting couples focus on celebration and enjoy a premium experience at their own pace.
                    </p>

                    <div className="pt-4">
                        <BookNowButton className="inline-block bg-[#EC2028] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 text-lg">
                            Book Now
                        </BookNowButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HassleFreeCTA;
