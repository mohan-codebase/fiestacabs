import Image from "next/image";

const LongTermSolutions = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-bangalore/long-term-transport.jpg"
                            alt="Long Term Transport Solutions"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Corporate Rentals: Long Term Transport Solutions
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                In a country where road safety is critical, having high-standard drivers reduces accident risks. Fiesta Cabs invests in trained drivers and support teams to provide a consistently superior, secure, and hassle-free experience for client transport, long-term needs, or quick city trips. With their service, you are outsourcing transportation risk and logistics to a specialist who ensures customer satisfaction through transparency and professionalism.                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Corporate Travel: Managing Bangalore&apos;s Traffic Congestions
                            </h2>
                            <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                                <p>
                                    Executives recognise that reliable employee travel and corporate travel are essential for successful operations in Bangalore. With massive corporate travel and complex traffic, companies need a partner who is locally savvy and technologically advanced. The corporate sector in India needs more than a taxi service- a sophisticated system for all transportation needs.
                                </p>
                                <p>
                                    Fiesta Cabs provides a holistic corporate car rental services solution in Bangalore, offering luxury cars, spacious SUVs, and customised long-term rental options. Corporate events receive dedicated support, while transparent pricing and customisable packages simplify financial planning. Fiesta Cabs, with its leveraging of advanced technology, improves every ride with its team of well-trained, experienced drivers, ensuring a hassle-free, premium travel experience. Choosing Fiesta aligns your business with a trusted partner, helping executives and employees reach destinations refreshed and ready for success, providing seamless, high-standard corporate rentals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LongTermSolutions;
