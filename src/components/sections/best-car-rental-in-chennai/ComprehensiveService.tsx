import Image from "next/image";
import { FaRegDotCircle } from "react-icons/fa";

const ComprehensiveService = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mxauto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-10-1.jpg"
                            alt="Our Commitment to Safety and Comfort"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Our Commitment to Safety and Comfort
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>
                                    Your safety is our top priority. Every vehicle undergoes rigorous checks to ensure mechanical reliability and cleanliness. We follow strict sanitization protocols and ensure all cars are well maintained vehicles for a safe ride every time.
                                </p>
                                <p>
                                    Our experienced drivers are trained to deliver comfortable rides while following safe driving practices, whether navigating crowded city roads or highways leading out of Chennai.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Stay Updated and Connected
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7] mb-6">
                                We believe that clear communication ensures a hassle free commute. That&apos;s why we keep you informed through:
                            </p>
                            <ul className="space-y-4 mb-6 text-[#555555] text-[15px]">
                                <li className="flex items-center gap-3">
                                    <FaRegDotCircle className="text-[#E02111] text-xl flex-shrink-0" />
                                    <span>Website notifications</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaRegDotCircle className="text-[#E02111] text-xl flex-shrink-0" />
                                    <span>Email alerts</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaRegDotCircle className="text-[#E02111] text-xl flex-shrink-0" />
                                    <span>In-app banners</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaRegDotCircle className="text-[#E02111] text-xl flex-shrink-0" />
                                    <span>Social media updates</span>
                                </li>
                            </ul>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                From schedule changes to new offers, you will always have the latest travel details at your fingertips.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComprehensiveService;
