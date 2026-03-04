import Image from "next/image";

const EfficientSolutions = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Corporate Car Rental: Efficient Solutions for Companies
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                A specialised service offers efficient route planning and a smooth ride, reducing vehicle mismanagement by 35% and increasing cab utilisation by up to 20%, lowering costs for your organisation. Fiesta Cabs provides complete transport management, not just rental cars, designed for Bangalore&apos;s traffic and business dynamics, allowing employees to focus on work with customised solutions and ensuring smooth, efficient business operations.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Airport Transfer: Making Business Travel Stress-Free
                            </h2>
                            <div className="text-[#555555] text-[15px] leading-[1.7] space-y-4">
                                <p>In international or inter-city business meetings, the journey to and from airports like Kempegowda International Airport sets the tone for the entire visit. Long cab queues, unclear pricing, and non-professional drivers cause delays and affect the client&apos;s experience, while a premium corporate car rental provider addresses these challenges professionally.</p>
                                <p>Fiesta cab services provide air-conditioned, well-maintained vehicles, including spacious SUVs and premium sedans, available precisely when and where needed. With live tracking of vehicles, they ensure transparency and reliability. Professional, trained, and background-verified drivers greet clients politely, turning stressful airport transfers into an extension of your company&apos;s hospitality.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/corporate-car-rental-in-bangalore/corporate car rental-efficient solutions.jpeg"
                            alt="Airport Transfers and Efficient Solutions"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EfficientSolutions;
