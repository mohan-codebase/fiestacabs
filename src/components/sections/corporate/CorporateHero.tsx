"use client";

import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";
import ContactForm from "../../common/ContactForm";

const CorporateHero = () => {
    return (
        <section className="relative w-full h-[80vh] lg:h-[100vh] min-h-[650px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/unnamed-e1764761325394.jpg"
                    alt="Corporate Car Rental Service"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

                    {/* Left Text Content */}
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Best Corporate Car Rental Service
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Discover how to pick a reliable, cost-efficient, and professional car rental service that meets your company&apos;s travel needs — with confidence, safety, and convenience.
                        </p>
                        <BookNowButton className="bg-[#EC2028] btn-animated hover:bg-red-700 text-white font-semibold px-8 py-3 rounded text-lg transition-colors">
                            Get A Free Quote
                        </BookNowButton>
                    </div>

                    {/* Right Form */}
                    <div className="w-full max-w-md mx-auto lg:ml-auto">
                        <ContactForm 
                            formSource="Corporate Hero Form"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateHero;
