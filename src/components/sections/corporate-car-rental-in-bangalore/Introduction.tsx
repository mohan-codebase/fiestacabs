import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-bangalore/unnamed-2-2.jpg"
                            alt="Best Corporate Car Rental Services"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Best Corporate Car Rental Services For Your Business Travel Needs
                        </h2>

                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                In busy Bangalore, employee transportation services are essential for smooth operations. Traffic delays make client meetings, airport transfers, and corporate events stressful. A reliable, professional solution like Fiesta Cabs&apos; corporate car rental services ensures hassle-free daily commutes, helping employees and executives arrive on time.
                            </p>
                            <p>
                                According to the Economic Times, The employees in Indian metros, mainly Bangalore, lose about 754 hours yearly due to daily travel.
                            </p>
                            <p>
                                Public transport often lacks comfort, safety, and reliability, making corporate car rentals a practical choice for last-mile connectivity.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/reach-us"
                                className="inline-block bg-[#E31E24] hover:bg-black text-white px-8 py-3 rounded text-lg font-medium transition-colors duration-300"
                            >
                                Get A Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
