import Image from "next/image";

const LuxuryCars = () => {
    const listItems = [
        {
            title: "Mercedes-Benz S-Class or E-Class:",
            desc: " For couples looking for pure luxury and status."
        },
        {
            title: "Audi A6 or BMW 5 Series:",
            desc: " Sleek, high-performance, and a fantastic backdrop for pictures."
        },
        {
            title: "Rolls Royce or Jaguar:",
            desc: " For those who want the ultimate premium experience."
        },
        {
            title: "Toyota Innova Crysta / Kia Carnival:",
            desc: " Perfect for family transportation with excellent comfort."
        }
    ];

    const Icon = () => (
        <div className="shrink-0 mt-1">
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
                            src="/images/wedding-car-rental-in-chennai/unnamed-3.jpg"
                            alt="Luxury Wedding Cars Available with Fiesta"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Luxury Wedding Cars Available with Fiesta
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Every couple has their unique preference and style. What's your statement look? Choose the luxury wedding car in Chennai from our impressive fleet:
                        </p>

                        <div className="space-y-4">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <p className="text-[#555555] text-[15px] leading-[1.7]">
                                        <span className="font-semibold text-gray-900">{item.title}</span>{item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#555555] text-[15px] leading-[1.7] pt-2">
                            No matter what your theme or style is, our luxury car hire in Chennai makes sure you step out looking nothing less than royalty.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LuxuryCars;
