import Image from "next/image";

const MakeYourDaySpecial = () => {
    return (
        <section className="py-16 md:py-24 bg-[#f8f9fa]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Make Your Wedding Day Special with Fiesta
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                From the first pre wedding photoshoot to the final ride as a married couple, Fiesta&apos;s wedding car rental service is designed to create magical moments. Whether your theme calls for traditional elegance or contemporary charm, our cars and chauffeurs will deliver the class and elegance you desire.
                            </p>
                            <p>
                                Your wedding is a once-in-a-lifetime event. Trust a car rental company that understands the significance of your special day. With our professional service, affordable prices, and luxury wedding fleet, we ensure your journey is just as memorable as the destination.
                            </p>
                            <p>
                                We coordinate with your planners, photographers, and event teams to ensure your car arrives at the right location, on time, every time. We understand the demand for punctuality, comfort, and style, especially during peak Delhi NCR wedding seasons. That&apos;s why our car rental service is tailored to keep your journey stress-free and memorable for you, your family, and your friends.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden order-1 md:order-2">
                        <Image
                            src="/images/car-rent-for-marriage-in-delhi/unnamed-7-1.jpg"
                            alt="Make Your Wedding Day Special with Fiesta"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeYourDaySpecial;
