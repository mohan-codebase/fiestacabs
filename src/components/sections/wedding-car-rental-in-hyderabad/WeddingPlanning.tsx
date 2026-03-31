import Image from "next/image";

const WeddingPlanning = () => {
    const listItems = [
        "Luxury and vintage cars add a unique touch and elegance to wedding doli moments",
        "Premium SUVs suit family movement and venue logistics",
        "Bus rentals support guest comfort and coordinated arrivals",
        "Vehicle inspection before confirmation ensures quality, safety, and peace of mind"
    ];

    const Icon = () => (
        <div className="shrink-0 mt-0.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#EC2028" strokeWidth="2" fill="transparent" />
                <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#EC2028" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#EC2028" strokeWidth="1.5" fill="transparent" />
            </svg>
        </div>
    );

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden">
                        <Image
                            src="/images/wedding-car-rental-in-hyderabad/WhatsApp Image 2026-03-30 at 2.43.39 PM.jpeg"
                            alt="Planning a Wedding Car Experience in Hyderabad"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Planning a Wedding Car Experience in Hyderabad
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
Choosing the right wedding car enhances style, comfort, and memorable moments:                        </p>
                        
                        <div className="space-y-4">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <span className="text-[#555555] text-[15px] leading-[1.7] font-semibold">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#555555] text-[15px] leading-[1.7] pt-2">
                            Fiesta delivers luxury wedding car rental experiences in Hyderabad, providing great service to customers who value prestige and attention to detail.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingPlanning;
