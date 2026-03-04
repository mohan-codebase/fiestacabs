import Image from "next/image";

const TravelMadeEasy = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Chennai Travel Made Easy with Fiesta
                        </h2>

                        <div className="space-y-4 text-[#555555] text-[15px] leading-[1.7]">
                            <p>
                                Our car rental services in Chennai connect you seamlessly to corporate offices, tourist landmarks, event venues, and serene beaches like Marina Beach. With strategically located pick-up and drop-off points, combined with the flexibility of door-to-door service, our car hire options are perfect for both short trips and weekend getaways.
                            </p>

                            <p>
                                Whether you are visiting Kapaleeshwarar Temple, heading to a business meeting, attending business events, or exploring attractions like the Shore Temple or Kailasanathar Temple, our well maintained vehicles and expert drivers ensure your ride is smooth and enjoyable. You can leave route planning, parking fees, and traffic management to us while you focus on your work or leisure.
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4 block">
                                Car Rental Services in Chennai
                            </h2>

                            <p>
                                Our Car Rental Services in Chennai ensures you get direct, end-to-end transport from your chosen pick-up point to your destination, no unnecessary detours, no wasted time.
                            </p>

                            <p>
                                Designed for both busy professionals and leisure travellers, this service guarantees minimal walking, maximum punctuality, and zero confusion over where your ride is waiting.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[400px] md:min-h-[600px] w-full overflow-hidden rounded-lg order-1 md:order-2 shadow-lg">
                        <Image
                            src="/images/best-car-rental-in-chennai/unnamed-1-10.jpg"
                            alt="Chennai Travel Made Easy with Fiesta"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelMadeEasy;
