import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const Intro = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden">
                        <Image
                            src="/images/wedding-car-rental-in-chennai/unnamed-1.jpg"
                            alt="Wedding Car Rental in Chennai for Style, Class and Comfort"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            A wedding day calls for refined arrivals, dependable transportation service, and premium presentation. Fiesta wedding car rental services in Chennai deliver elegant, chauffeur-driven solutions designed for wedding functions, bridal car rental needs, and special occasions. Each wedding car is selected to match ceremony standards while ensuring unmatched comfort and a memorable day.
                        </p>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Fiesta operates as a trusted provider focused on wedding car rental in Chennai, offering luxury cars with professional drivers for seamless coordination across venues, guests, and schedules.
                        </p>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Fiesta is recognised for reliable luxury car rental services in Chennai, supporting weddings, corporate events, airport pickup, celebrity events, and film shootings through a structured rental system.
                        </p>
                        <div>
                            <BookNowButton className="inline-block bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors mt-4">
                                Book Now
                            </BookNowButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
