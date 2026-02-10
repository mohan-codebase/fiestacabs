import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="w-full py-2 md:py-5 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative w-full h-[400px] md:h-[800px]">
                            <Image
                                src="/images/home/about/about-us.png"
                                alt="Fiesta Smart Mobility Team"
                                fill
                                style={{ objectFit: "contain" }}
                                className="rounded-lg"
                            />

                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <p className="text-[#D32F2F] uppercase tracking-wider text-sm font-semibold mb-3">
                            ABOUT
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Your trusted Partner in Employee Transport Services and Premium Car rentals
                        </h2>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Fiesta Smart Mobility Private Limited
                        </h3>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                With <strong>27 years of excellence</strong>, Fiesta Smart Mobility Private Limited is a leading provider of integrated transportation solutions for the corporate sector.
                            </p>

                            <p>
                                Established in <strong>1998</strong> in Chennai, we have expanded to achieve a pan-India presence with a dedicated team of <strong>300+ employees nationwide</strong>.
                            </p>

                            <p>
                                Our core services include <strong>Employee Transport Solutions and Premium Car Rentals</strong>, tailored to meet the unique needs of modern businesses. As one of the best employee transport services in India, Fiesta is trusted for its reliability, efficiency, and customer-first approach.
                            </p>

                            <p>
                                We've achieved a <strong>₹1.2 billion turnover</strong>—reflecting our commitment to service quality and customer satisfaction.
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
