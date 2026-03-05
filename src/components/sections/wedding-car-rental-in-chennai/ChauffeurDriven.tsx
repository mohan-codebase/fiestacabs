import Image from "next/image";

const ChauffeurDriven = () => {
    const listItems = [
        "Wedding car rental for the bride and groom",
        "Transportation service for family members and wedding guests",
        "Corporate events, celebrity events, and surprise rides related to wedding celebrations"
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
                            src="/images/wedding-car-rental-in-chennai/unnamed-5.jpg"
                            alt="Chauffeur-Driven Wedding Transportation Services"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Chauffeur-Driven Wedding Transportation Services
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Fiesta offers only chauffeur-driven car rental services in Chennai, ensuring structured movement across wedding schedules, airport pickup arrangements, and guest transportation.
                        </p>
                        <p className="text-gray-900 font-semibold mt-2">Professional drivers support:</p>

                        <div className="space-y-4">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <p className="text-[#555555] text-[15px] leading-[1.7] font-semibold">{item}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#555555] text-[15px] leading-[1.7] pt-2">
                            This approach supports stress-free coordination without operational responsibility placed on customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChauffeurDriven;
