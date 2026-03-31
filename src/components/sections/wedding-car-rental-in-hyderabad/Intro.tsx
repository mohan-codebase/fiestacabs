import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

const Intro = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="relative min-h-[300px] md:min-h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src="/images/wedding-car-rental-in-hyderabad/WhatsApp Image 2026-03-30 at 2.43.40 PM.jpeg"
                            alt="Hyderabad Wedding Cars - Luxury Rentals by Fiesta"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Hyderabad Wedding Cars - <span className="text-[#EC2028]">Luxury Rentals by Fiesta</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                            <p>
                                A Hyderabad wedding calls for elegance, reliability, and refined presentation. Fiesta, a trusted partner in wedding car rental services, offers the best car rental service for Hyderabad wedding cars, providing luxury wedding cars, classic and vintage cars, premium SUVs, and the large bus category. 
                            </p>
                            <p>
                                Each experience ensures a grand entrance, smooth guest transportation, and a memorable journey across this vibrant tourist city, including visits to pilgrimage places. Whether it's for a traditional doli or a modern ultra-luxury entrance, we ensure every detail receives premium attention.
                            </p>
                            <p>
                                Our fleet in Hyderabad is curated to suit every special occasion and wedding day requirement, ensuring your journey is as beautiful as the destination.
                            </p>
                        </div>
                        <div>
                            <BookNowButton className="inline-block bg-[#EC2028] btn-animated hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors mt-4 shadow-lg shadow-red-200">
                                Get a Quote
                            </BookNowButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
