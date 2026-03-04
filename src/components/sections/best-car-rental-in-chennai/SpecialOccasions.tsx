import Image from "next/image";

const SpecialOccasions = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-4-10.jpg"
                            alt="More Than Just Transport – A Travel Experience"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            More Than Just Transport – A Travel Experience
                        </h2>

                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                Our goal is to make every ride enjoyable. From the moment our expert drivers greet you to the moment you step out at your destination, your comfort and safety are at the forefront. We pay attention to the small details, timely arrivals, smooth driving, clean interiors, because we know they make a big difference in your day.
                            </p>
                            <p>
                                Whether you&apos;re exploring Tamil Nadu&apos;s historic landmarks like the Shore Temple and Kapaleeshwarar Temple, attending business events in the city, or simply heading for a serene embrace along the coastline, our car rental services adapt to your needs.
                            </p>
                            <p>
                                At Fiesta, we&apos;re not just providing different car rental services, we&apos;re redefining what reliable, affordable price travel looks like in Chennai. When you choose us, you&apos;re choosing punctuality, professionalism, and a commitment to making every journey as smooth as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOccasions;
