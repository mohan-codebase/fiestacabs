"use client";

import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";
import ContactForm from "../../common/ContactForm";

const WeddingHero = () => {
    return (
        <section className="relative w-full h-[80vh] lg:h-[100vh] min-h-[650px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/wedding/wedding-live-bg.jpeg"
                    alt="Luxury Wedding Cars Rentals"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Dark Overlay to make text pop like the live site */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

                    {/* Left Text Content */}
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Luxury & Wedding Cars Rentals
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Make your special day unforgettable with Fiesta’s luxury wedding car rentals.
                        </p>
                        <BookNowButton className="bg-[#EC2028] btn-animated hover:bg-red-700 text-white font-semibold px-8 py-3 rounded text-lg transition-colors">
                            Book Now
                        </BookNowButton>
                    </div>

                    {/* Right Form Content */}
                    <div id="booking-form" className="w-full max-w-[420px] mx-auto lg:ml-auto">
                        <ContactForm 
                            formSource="Wedding Hero Form"
                            buttonText="Contact Now"
                            containerClassName="bg-[#F8F9FA] rounded-[20px] shadow-2xl p-6 md:p-8 w-full"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WeddingHero;
