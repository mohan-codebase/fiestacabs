import Image from "next/image";

const ServiceStandards = () => {
    const listItems = [
        "Vehicles meticulously maintained for safety and style",
        "Professional drivers with a polite attitude, trained drivers, and professionals who understand each couple’s requirements",
        "Moderate package options and a competitive quote ensure the best luxury cars at an affordable price.",
        "Time service guarantees alignment with wedding schedules and venue logistics.",
        "Helpful drivers ensure every customer enjoys a stress-free journey"
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
                <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Service Standards and Fleet Quality
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
Fiesta maintains exceptional service, providing luxurious cars with disciplined operations:                        </p>
                        
                        <div className="space-y-4">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <span className="text-[#555555] text-[15px] leading-[1.7] font-semibold">{item}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="relative min-h-[400px] md:min-h-[250px] md:min-h-[500px] w-full overflow-hidden order-1 md:order-2">
                        <Image
                            src="/images/wedding-car-rental-in-hyderabad/WhatsApp Image 2026-03-30 at 2.43.39 PM (1).jpeg"
                            alt="Service Standards and Fleet Quality in Hyderabad"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceStandards;
