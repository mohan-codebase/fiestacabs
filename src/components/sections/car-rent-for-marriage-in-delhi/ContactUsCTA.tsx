import Image from "next/image";
import Button from "../../../components/common/Button";

const ContactUsCTA = () => {
    return (
        <section className="relative py-20 px-4 md:px-8 flex items-center justify-center min-h-[400px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/car-rent-for-marriage-in-delhi/59a6c7c4-ff18-494c-9f39-2ade4d2765e4-scaled.jpeg"
                    alt="Contact Us for Wedding Car Rental"
                    fill
                    className="object-cover object-center"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col items-center text-center md:items-start md:text-left">
                <div className="max-w-xl md:ml-[50%] lg:ml-[55%]">
                    {/* Stars and Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-white text-sm font-medium">4.8 (729 Reviews)</span>
                        <div className="flex text-[#F59E0B]">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Contact Us Today
                    </h2>

                    <ul className="space-y-3 mb-6 text-white/90 text-[15px]">
                        <li className="flex items-center gap-2">
                            <span>📞</span>
                            <span>Call us to discuss your car rent for marriage in Delhi needs.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>📅</span>
                            <span>Schedule your booking in advance to secure your perfect car.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Serving all major Delhi NCR wedding venues and beyond.</span>
                        </li>
                    </ul>

                    <p className="text-white/90 text-[15px] mb-8">
                        Fiesta – The car rental service that turns your special day into a beautiful journey.
                    </p>

                    <Button className="bg-[#EC2028] w-max">
                        Book Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ContactUsCTA;
