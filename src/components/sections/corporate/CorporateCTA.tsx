import React from "react";
import Image from "next/image";
import Button from "../../../components/common/Button";

const CorporateCTA = () => {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/unnamed-7.jpg"
                    alt="Upgrade Your Corporate Travel"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-10 max-w-[900px] mx-auto px-4 md:px-8 text-center text-white">
                <p className="text-[#EC2028] tracking-[0.2em] font-medium text-sm md:text-base mb-4 uppercase">
                    Partner With Us
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Upgrade Your Corporate Travel Today
                </h2>
                <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    Choosing the right corporate car rental service is easier when you focus on fleet quality, transparent pricing, reliability, and disciplined chauffeurs. Fiesta Smart Mobility brings all of this together with a well-maintained fleet, professional drivers, flexible rental plans, and real-time tracking for complete peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-[#EC2028] rounded ">
                        Book Your Corporate Car Rental Now
                    </Button>
                    
                </div>
            </div>
        </section>
    );
};

export default CorporateCTA;
