import Image from "next/image";
import { FaLifeRing } from "react-icons/fa";

const WideRangeVehicles = () => {
    const options = [
        {
            title: "Daily and Weekly Rentals",
            description: "Ideal for short-term projects or business events."
        },
        {
            title: "Monthly Car Rental",
            description: "Perfect for long-term corporate car rentals or extended stays."
        },
        {
            title: "Outstation Services",
            description: "Travel beyond Chennai to explore Tamil Nadu and beyond."
        },
        {
            title: "Airport Transfers",
            description: "Reliable pick-ups and drop-offs for both business and leisure travelers."
        },
        {
            title: "Special Occasion Rentals",
            description: "Weddings, family functions, and celebrations made special with reliable transport."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Flexible Car Rental Options in Chennai
                        </h2>

                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Our services are built for flexibility. We understand that every client has different transportation needs, so we offer:
                        </p>

                        <div className="space-y-6 mt-4">
                            {options.map((option, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-3">
                                        <FaLifeRing className="w-6 h-6 text-[#E31E24]" />
                                    </div>
                                    <div>
                                        <h3 className="text-[17px] font-bold text-gray-900 mb-1">
                                            {option.title}
                                        </h3>
                                        <p className="text-[#555555] text-[15px] leading-relaxed">
                                            {option.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg order-1 md:order-2 shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-5-7.jpg"
                            alt="Flexible Car Rental Options in Chennai"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WideRangeVehicles;
