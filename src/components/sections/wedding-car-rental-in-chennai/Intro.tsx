import Image from "next/image";
import Link from "next/link";

const Intro = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden">
                        <Image
                            src="/images/wedding-car-rental-in-chennai/unnamed-1.jpg"
                            alt="Wedding Car Rental in Chennai for Style, Class and Comfort"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Your wedding day should be nothing short of a fairytale, and arriving in style sets the tone for your grand celebration. At <span className="font-semibold text-gray-900">Fiesta</span>, we provide an exquisite fleet of premium cars to make your wedding day memorable. Whether you're looking for classic vintage charm, sleek modern luxury, or a spacious ride for your family, our <span className="font-semibold text-gray-900">wedding car rental in Chennai</span> ensures you arrive with grace and elegance.
                        </p>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            From the bridal entry to the grand farewell, every detail matters. Trust us to handle your transportation seamlessly while you focus on making beautiful memories.
                        </p>
                        <div>
                            <Link href="#" className="inline-block bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors mt-4">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
