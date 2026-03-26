import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="w-full pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left - Image with service pill tags */}
                    <div className="relative flex justify-center">
                        {/* Decorative red circle background */}
                        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#EC2028] rounded-full opacity-10 -z-0" />

                        <div className="relative w-full max-w-[480px]">
                            {/* Main image */}
                            <div className="relative rounded-2xl overflow-hidden h-[380px] md:h-[460px]">
                                <Image
                                    src="/images/home/about/about-us.png"
                                    alt="Fiesta Smart Mobility - Employee Transport Services"
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "top" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="lg:pl-6 pt-10 lg:pt-0">
                        <p className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                            About
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                            Your trusted Partner in Employee Transport Services and Premium Car rentals
                        </h2>
                        <p className="text-gray-800 font-semibold mb-4">
                            Fiesta Smart Mobility Private Limited
                        </p>

                        <div className="space-y-4 leading-relaxed text-[15px]">
                            <p>
                                With <strong>28 years of excellence</strong>, Fiesta Smart Mobility Private Limited is a leading provider of integrated transportation solutions for the corporate sector.
                            </p>
                            <p>
                                Established in 1998 in Chennai, we have expanded to achieve a pan-India presence with a dedicated team of <strong>300+ employees nationwide.</strong>
                            </p>
                            <p>
                                Our core services include <strong>Employee Transport Solutions and Premium Car Rentals,</strong> tailored to meet the unique needs of modern businesses. As one of the best employee transport services in India, Fiesta is trusted for its reliability, efficiency, and customer-first approach.
                            </p>
                            <p>
                                We&apos;ve achieved a <strong>₹1.2 billion turnover</strong>—reflecting our commitment to service quality and customer satisfaction.
                            </p>
                            <p>
                                To support sustainability, we are actively investing in <strong>Electric Vehicles (EVs)</strong> to meet the evolving, eco-conscious transportation needs of organizations.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
