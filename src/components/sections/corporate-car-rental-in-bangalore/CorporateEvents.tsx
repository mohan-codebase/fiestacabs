import Image from "next/image";

const CorporateEvents = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-bangalore/corporate events-smooth transport.jpg"
                            alt="Corporate Events and Customizable Solutions"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Corporate Events: Smooth Transportation Planning
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>
                                    The trusted car rental services help companies align with technology trends, reducing operational costs by optimising driver and vehicle performance smartly. In the competitive corporate environment of Bangalore, luxury cars and well-maintained vehicles are not a luxury; they are a necessity for representing your business correctly and fulfilling business requirements. So whether it&apos;s driving for a high-profile CEO or transporting a team for a product launch corporate event, the quality of the ride reflects on your brand&apos;s good reputation.
                                </p>
                                <p>
                                    Fiesta Cabs, a reputable corporate car rental service, offers a diverse range of premium vehicles and skilled, experienced chauffeurs and professionally trained drivers. Beyond driving, the service provides a quiet, secure, and focused environment for executives to prepare for business meetings peacefully.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Car Rental: Customisable Solutions for Businesses
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                The transparent and customisable packages of the premium car rental services are for companies making secure long-term contracts with transparent pricing and dedicated support. Choosing Fiesta as a corporate travel partner ensures safety, reliability, and excellence. Modern Indian businesses are moving from ad-hoc transport to structured, scalable long-term rental options for cost control, compliance, and enhanced customer satisfaction.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default CorporateEvents;
