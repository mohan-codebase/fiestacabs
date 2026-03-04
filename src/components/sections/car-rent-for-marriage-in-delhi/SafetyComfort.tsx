import Image from "next/image";

const SafetyComfort = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden">
                        <Image
                            src="/images/car-rent-for-marriage-in-delhi/unnamed-6-1.jpg"
                            alt="Our Commitment to Safety and Comfort"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Our Commitment to Safety and Comfort
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                Your safety is our highest priority. Every vehicle in our diverse fleet undergoes regular maintenance checks to ensure smooth performance, whether for city routes or outstation trips. We strictly follow safety protocols, keeping our cars sanitized and ready for your special day. From careful city driving to avoiding traffic-heavy routes, we make sure your ride is stress-free and punctual.
                            </p>
                            <p>
                                Our chauffeurs are not just drivers, but trained professionals who understand the importance of your wedding day. They are courteous, punctual, and experienced in handling wedding cars for events of all scales. With Fiesta, you and your guests can enjoy a smooth journey while we manage the details of timing, pickup, and drop-off with precision.
                            </p>
                            <p>
                                Your wedding day is a once-in-a-lifetime celebration, and your transportation should reflect its significance. At Fiesta, we go beyond just providing a car rental in Delhi — we help create unforgettable moments. Our wedding car rental packages are designed to meet the needs of couples seeking both elegance and reliability. Whether it is the pre wedding shoot, the grand entry, or the final send-off, every ride is planned to perfection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyComfort;
