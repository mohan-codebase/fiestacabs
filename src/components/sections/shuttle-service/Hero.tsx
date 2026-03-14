"use client";

import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";
import ContactForm from "../../common/ContactForm";

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden h-[80vh] lg:h-[100vh] min-h-[650px] flex items-center">
            <div className="absolute inset-0">
                <Image
                    src="/images/shuttle-service/hero.jpg"
                    alt="Corporate shuttle and employee transport service"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                    <div className="text-white pr-0 lg:pr-10">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Corporate Shuttle &amp; Employee Transport Service
                        </h1>
                        <p className="text-lg text-white/90 mb-8">
                            Reliable, comfortable, gate-to-gate commuting solution for your workforce.
                        </p>
                        <BookNowButton
                            className="inline-flex items-center justify-center bg-[#EC2028] btn-animated hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow mt-4"
                        >
                            Book a Shuttle for Your Team
                        </BookNowButton>
                    </div>

                    <ContactForm 
                        formSource="Shuttle Service Hero Form"
                        containerClassName="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-[420px] mx-auto lg:ml-auto lg:mr-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
