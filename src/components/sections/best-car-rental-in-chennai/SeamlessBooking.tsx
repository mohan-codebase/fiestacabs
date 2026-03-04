import Image from "next/image";

const SeamlessBooking = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-7-5.jpg"
                            alt="Round the Clock Service – 24/7 Availability"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Round the Clock Service – 24/7 Availability
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Travel needs don't follow a strict timetable, and neither do we. Whether it's an early morning airport run, a late-night return from Marina Beach, or an unplanned trip out of the city, our car rental services are available 24 hours a day, seven days a week. No matter the hour, you can count on us to be there.
                            </p>
                        </div>

                        <div className="pt-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Cost Effective Pricing – Quality Without Overpaying
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                We believe great service doesn't have to come at a high cost. That's why our car rental Chennai rates are designed to be competitive and transparent. There are no hidden fees, and we ensure you get excellent value for money, whether it's for short-term local travel or long-term monthly car rental.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeamlessBooking;
