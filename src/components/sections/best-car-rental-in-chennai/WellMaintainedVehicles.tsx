import Image from "next/image";

const WellMaintainedVehicles = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Well Maintained Vehicles – Regularly Serviced, Always Clean
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Every car in our fleet is carefully inspected before and after each trip. We provide well maintained cars that are not only mechanically sound but also spotless inside and out. Our well maintained vehicles undergo regular servicing so you can travel with complete confidence, knowing that your journey will be smooth and uninterrupted.
                            </p>
                        </div>

                        <div className="pt-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                Dedicated Team – Always Here to Assist
                            </h2>
                            <p className="text-[#555555] text-[15px] leading-[1.7]">
                                Behind every trip is a committed support crew. Our booking and operations teams work together to ensure that your car hire experience is seamless. Need to adjust your pick-up time, change your destination, or add an extra stop? Our dedicated team is just a call or message away, ready to help without delays or complications.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg order-1 md:order-2 shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-12-1.jpg"
                            alt="Well Maintained Vehicles"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WellMaintainedVehicles;
