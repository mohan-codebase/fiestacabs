import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ContactCTA = () => {
    return (
        <section className="relative py-24 md:py-32">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/corporate-car-rental-in-bangalore/contact-cta.jpg"
                    alt="Contact Fiesta Cabs for Corporate Rentals Today"
                    fill
                    className="object-cover object-left"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60 md:bg-black/50 bg-gradient-to-r from-transparent via-black/40 to-black/90"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="md:w-1/2 md:ml-auto text-white">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="font-semibold text-[15px] text-white">4.8 (729 Reviews)</span>
                        <div className="flex gap-1 text-[#FFA800]">
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white max-w-xl">
                        Contact Fiesta Cabs for Corporate Rentals Today!
                    </h2>

                    <p className="text-[15px] text-gray-200 mb-8 leading-[1.7] max-w-xl">
                        Looking for a reliable corporate car rental in Bangalore? Reach out to us now.
                    </p>

                    <ul className="space-y-4 mb-8 text-[15px] text-gray-200">
                        <li className="flex items-start gap-3">
                            <span className="text-lg leading-none">📍</span>
                            <span>Fiesta Cabs, #55/5, 4th Floor, 2nd Main Road, Vyalikaval, Bangalore - 560003.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-lg leading-none">📞</span>
                            <span>+91 78458 67612</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-lg leading-none">✉️</span>
                            <span>bookings@fiestacabs.com</span>
                        </li>
                    </ul>

                    <Link
                        href="/reach-us"
                        className="inline-block bg-[#E31E24] hover:bg-black text-white px-8 py-3 rounded text-lg font-medium transition-colors duration-300"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
