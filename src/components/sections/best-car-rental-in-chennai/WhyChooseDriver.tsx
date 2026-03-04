import Image from "next/image";

const WhyChooseDriver = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-4-10.jpg"
                            alt="Why Our Shuttle Service Works So Well"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Why Our Shuttle Service Works So Well:
                        </h2>

                        <div className="space-y-6 text-[#555555] text-[15px] leading-[1.7]">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Precise Pick-Up and Drop-Off Points</h3>
                                <p>We select locations that are easy to reach and always on time. Whether near corporate offices, hotels, or metro stations, your pick-up point is designed for convenience.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Direct Access to Your Destination</h3>
                                <p>Our rental car services are mapped to avoid heavy traffic congestion and lengthy service lanes, taking you straight to your destination efficiently.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Time-Saving & Flexible Schedules</h3>
                                <p>Whether it's a business meeting at peak hours or a weekend getaway early in the morning, we plan every trip to save time and ensure timely arrivals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseDriver;
