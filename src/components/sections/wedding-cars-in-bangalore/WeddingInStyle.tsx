import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const WeddingInStyle = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden">
                        <Image
                            src="/images/wedding-cars-in-bangalore/unnamed-1-3.jpg"
                            alt="Wedding Cars in Bangalore – Arrive in Style on Your Special Day"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Wedding Cars in Bangalore - Arrive in Style on Your Special Day
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Your wedding day deserves luxury, elegance, and lasting memories. Fiesta offers the finest wedding car rental services in Bangalore, providing a curated fleet of luxury cars, vintage cars, and SUVs to ensure every couple enjoys a stress-free and memorable journey.
                        </p>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            Whether it's a grand entrance, a comfortable ride for your guests, or a private drive for the couple, our vehicles promise style, safety, and reliability.
                        </p>
                        <div>
                            <BookNowButton className="inline-block bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors mt-2">
                                Book Now
                            </BookNowButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingInStyle;
