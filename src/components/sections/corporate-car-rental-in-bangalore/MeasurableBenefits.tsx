import Image from "next/image";

const MeasurableBenefits = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Business Travel: Measurable Benefits for Companies
                        </h2>
                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                For financial decision-makers and procurement managers, choosing a corporate car rental provider comes down to measurable benefits and efficiency. Leveraging advanced technology and streamlined operations reduces corporate travel costs, improves executive productivity, and supports the entire team. In Bangalore, transport solutions show measurable impact; companies switching from owning a fleet to managed long-term rentals could show 28% lower maintenance and insurance costs. GPS-enabled vehicles with efficient route planning reduce fuel consumption and wear-and-tear by 15%. For businesses managing high-volume trips and frequent site visits, these solutions are essential and practical.                            </p>
                            <p>
                                Fiesta Cabs provides transparent billing and customisable packages for cab rental services in Bangalore, helping corporate clients forecast transport costs and avoid fluctuating rates. Reliable service ensures on-time arrivals exceeding 98.5%, reducing financial losses from delays or missed flights. This quantitative reliability supports a strong corporate rentals strategy and long-term dependable decision-making.                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                        <Image
                            src="/images/corporate-car-rental-in-bangalore/buisness-travel.jpg"
                            alt="Measurable Benefits for Companies"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeasurableBenefits;
