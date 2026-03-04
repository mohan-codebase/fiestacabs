import Image from "next/image";

const WhatWeOffer = () => {
    const offerings = [
        {
            title: "Car Rent for Marriage in Delhi NCR",
            desc: "We specialize in car rental in Delhi for weddings across the city and surrounding areas. Whether it is South Delhi, Central Delhi, West Delhi, or even nearby regions like Noida, Gurugram, and Faridabad, we ensure your wedding cars arrive on time and in pristine condition."
        },
        {
            title: "Luxury Wedding Car Options",
            desc: "While we do not promote specific models, our luxury car rental options offer unmatched comfort and class. These luxury wedding vehicles bring an extra touch of sophistication to your celebration, perfect for couples who want to make a statement."
        },
        {
            title: "Pre Wedding and Wedding Day Services",
            desc: "From pre wedding shoots to the special day, we cover it all. Many couples choose to hire our cars for multiple events, including engagement, mehendi, sangeet, and reception."
        },
        {
            title: "Outstation Trips",
            desc: "Need to travel for destination weddings or events outside Delhi NCR? We offer outstation trips with the same standard of service. Whether your venue is in Jaipur, Agra, or another city, our car rental service will take you there in comfort."
        },
        {
            title: "Guest Transportation",
            desc: "We understand that weddings involve more than just the bride and groom. Our vehicles can be booked for guest transportation, ensuring your family and friends arrive together and on time."
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
                    <div className="relative min-h-[450px] md:min-h-[550px] w-full overflow-hidden">
                        <Image
                            src="/images/car-rent-for-marriage-in-delhi/unnamed-2-5.jpg"
                            alt="What We Offer in Our Wedding Car Rental Service"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            What We Offer in Our Wedding Car Rental Service
                        </h2>

                        <div className="space-y-6">
                            {offerings.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <Icon />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-[15px] mb-1">{item.title}</p>
                                        <p className="text-[#555555] text-[15px] leading-[1.7]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
