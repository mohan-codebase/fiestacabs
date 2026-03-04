import Image from "next/image";

const PremiumOptions = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Corporate Car: Premium Options for Every Requirement
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Corporate offers bespoke transport planning for daily employee routes and large-scale corporate events. Fiesta Cabs focuses on flexibility and assurance, offering customised solutions to serve large companies like NTT Data and global entities in Bangalore. Using advanced technology and live tracking, they manage their fleet with precision, ensuring efficient operations and complete transparency in vehicle movements and billing. Fiesta, a trusted partner, takes the logistics load off organisations and provides a hassle-free service from start to finish. Their approach focuses on business travel needs, backed by trained drivers, and a modern, diverse range of cars ensures all requirements are met professionally.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Corporate Clients: Trusted Partnerships Matter
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                The best corporate car rental in Bangalore acts as a significant support system, keeping business operations moving efficiently. In corporate car rental services, safety is the non-negotiable cornerstone, ensuring the security and well-being of employees and customers, especially in high-demand zones like Electronic City. The premium cab service from Fiesta ensures vehicles are regularly checked, well-maintained, and equipped with GPS-enabled technology. Security extends to personnel, with all Fiesta drivers background-verified and well-trained in driving skills, etiquette, and defensive driving, elevating the travel experience and providing peace of mind to organisations and passengers.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/corporate-car-rental-in-bangalore/unnamed-6-2.jpg"
                            alt="Premium Options for Every Requirement"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumOptions;
