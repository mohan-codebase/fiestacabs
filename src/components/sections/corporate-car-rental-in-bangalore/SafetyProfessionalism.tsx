import Image from "next/image";

const SafetyProfessionalism = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/corporate-car-rental-in-bangalore/unnamed-10-e1765264851729.jpg"
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
                                When you type &quot;corporate car rentals near me&quot; on your device, your primary concern is likely safety and reliability. For working professionals leaving the office late at night, or executives travelling from unknown locations, safety cannot be compromised. At Fiesta Car Rentals, it is our utmost priority.
                            </p>
                            <p>
                                Our chauffeurs are rigorously vetted, highly trained, and deeply familiar with Bangalore&apos;s streets. They understand the nuances of corporate etiquette, maintaining a respectful and discreet presence. Our vehicles used for corporate car rental with driver are subjected to stringent safety checks and regular maintenance, ensuring that they perform flawlessly on the road.
                            </p>
                            <p>
                                In an era where hygiene is paramount, we have elevated our sanitization protocols. Every car is thoroughly cleaned before and after each trip, ensuring a safe and hygienic environment. This meticulous attention to safety and professionalism ensures complete peace of mind, allowing you and your team to focus solely on business objectives while on the move.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyProfessionalism;
