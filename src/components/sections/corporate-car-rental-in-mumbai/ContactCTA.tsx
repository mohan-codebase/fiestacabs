import React from "react";
import Link from "next/link";
import Button from "../../../components/common/Button";
import BookNowButton from "../../common/BookNowButton";

const ContactCTA = () => {
    return (
        <section className="relative py-20 mb-10 md:py-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/corporate-car-rental-in-mumbai/unnamed-7-1.jpg')",
                }}
            >
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 md:bg-black/50 md:bg-gradient-to-l md:from-black/80 md:via-black/70 md:to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex justify-end">
                    <div className="max-w-2xl text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Contact Fiesta Cabs for Corporate Rentals Today!
                        </h2>

                        <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                            For customised mobility solutions in Mumbai, get started with a smoother transport system today.
                        </p>

                        <div className="space-y-4 mb-8 text-[15px]">
                            <p className="font-bold text-lg mb-2 text-white">Reach Us:</p>
                            <p className="flex items-start text-gray-200">
                                # 109, 1st Floor, ACME Industrial Park, Goregaon East, Mumbai – 400 063.
                            </p>
                            <p className="flex items-center text-gray-200">
                                Call: <a href="tel:+917418885417" className="ml-1 hover:text-white transition-colors">+91 74188 85417</a>
                            </p>
                            <p className="flex items-center text-gray-200">
                                Mail: <a href="mailto:sales_mumbai@fiestaindia.net" className="ml-1 hover:text-white transition-colors">sales_mumbai@fiestaindia.net</a>
                            </p>
                        </div>

                        <BookNowButton className=" bg-[#E31E24] rounded ">
                            Book Now
                        </BookNowButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
