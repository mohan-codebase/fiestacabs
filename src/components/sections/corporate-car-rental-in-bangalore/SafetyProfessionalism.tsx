import Image from "next/image";

const SafetyProfessionalism = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-bangalore/safety and proffessionalism.jpg"
                            alt="Safety and Professionalism"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Car Rental in Bangalore: Safety and Professionalism
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                In the modern corporate world, ensuring the safety and security of employees and clients is a key responsibility. Focusing on security and quality ensures a hassle-free experience and protects the company’s reputation, building long-term trust. The relationship between a corporate entity and its transport provider should evolve from a vendor to a trusted partner. For companies with complex, long-term travel needs in Bangalore, this partnership is essential for smooth operations and fulfilling the organisation’s requirements.
                            </p>
                            <p>
                                Fiesta, an effective corporate car rental service, provides strategic support, including a dedicated 24/7 team to manage unexpected changes, building strong confidence. Integration of advanced technology like digital booking platforms and real-time tracking ensures smooth travel, removes confusion, and helps executives manage their journeys efficiently. Choosing a quality-focused corporate car rental partner, like Fiesta, that manages high-stakes logistics with daily precision, provides massive relief for the companies. It ensures seamless operations, steady workflow, superior travel experiences, and long-term peace of mind in Bangalore’s dynamic environment                            </p>
                            <p>
                                Fiesta Cabs offers truly customised solutions beyond standard rate cards, providing flexibility to meet unique organisational needs, including spacious SUVs or multiple luxury cars. With a massive, modern fleet of over 2,000 vehicles, they ensure high availability even during peak demand. Transparent pricing reduces administrative burden, simplifies travel decisions, and delivers a consistently excellent, hassle-free corporate travel experience, building long-term trust.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyProfessionalism;
