import Image from "next/image";

const LuxuryFleet = () => {
    const listItems = [
        {
            title: "Luxury Sedans : ",
            desc: " Mercedes-Benz, Mercedes-Benz C, and other latest vehicles within the premium mid-size and premium full-size luxury categories."
        },
        {
            title: "Premium SUVs : ",
            desc: "Toyota Fortuner and Innova Hycross for family and wedding guests, ensuring unmatched comfort and spacious interiors."
        },
        {
            title: "Classic and Vintage Cars :",
            desc: "Rolls-Royce and royal cars create a refined wedding doli experience, ideal for photographs that fascinate individuals."
        },
        {
            title: "Convertible Cars : ",
            desc: "Convertible Cars and select models offer a dream car feel for a unique wedding entrance."
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
                <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-stretch">
                   
                    <div className="flex flex-col justify-center space-y-6 w-full md:w-1/2">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Luxury, Classic, and Vintage Wedding Cars
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Fiesta provides a curated fleet of luxury cars designed to suit every special occasion and wedding day requirement:
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
                             Every decorated car arrives perfectly, supporting timely service and leaving a lasting impression on customers and guests. The fleet includes modern ultra-luxury cars for couples desiring elegance and prestige.
                        </p>
                    </div>
                    <div className="relative min-h-[300px] md:min-h-[500px] w-full md:w-1/2 overflow-hidden rounded-md">
                        <Image
                            src="/images/wedding-car-rental-in-hyderabad/WhatsApp Image 2026-03-30 at 2.43.39 PM (3).jpeg"
                            alt="Luxury Wedding Cars Available with Fiesta in Hyderabad"
                            fill
                            className="object-cover"
                        />
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default LuxuryFleet;
