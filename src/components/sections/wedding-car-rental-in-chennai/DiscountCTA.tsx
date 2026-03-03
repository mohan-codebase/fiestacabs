import Link from "next/link";
import Image from "next/image";

const DiscountCTA = () => {
    const listItems = [
        "Special rates for multi-car bookings",
        "Customisable packages",
        "24/7 priority customer support for weddings"
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
                    alt="Discounted Rates for Wedding Car Rental Bookings in Chennai"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 text-white">
                <div className="max-w-3xl space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Discounted Rates for Wedding Car Rental Bookings in Chennai
                    </h2>

                    <p className="text-white/90 text-lg leading-relaxed">
                        Ready to book? Get in touch with us early to take advantage of our exclusive wedding packages and discounts. Whether you need a single luxury car or an entire fleet for your guests, we guarantee the best prices in Chennai.
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
                        <Link
                            href="#"
                            className="inline-block bg-[#EC2028] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-md transition-colors duration-300 text-lg"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountCTA;
