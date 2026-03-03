import React from 'react';
import Image from 'next/image';

const WhyStruggle = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-[60%] md:pr-12">
                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-6 leading-tight">
                            Why Struggle With Cabs and Taxis?
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-10">
                            In a city as fast-paced as Hyderabad, relying on cabs, taxis, or personal cars for everyday travel can be unreliable and expensive. With Fiesta, there&apos;s no need to constantly book, rebook, or request on the fly. Our affordable model is designed to offer consistent, reliable transport every day.
                        </p>

                        <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-6 leading-tight">
                            Fiesta Rewards You for Riding Smart
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Riding with Fiesta often comes with added benefits. Regular contests, company-wide initiatives, and seasonal campaigns give employees the chance to win free rewards and offers. And yes, sometimes that includes popular giveaways like smartphones, gadgets, and more, all just for riding smarter.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[40%] relative h-[350px] md:h-[400px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-hyderabad/unnamed-7-2.jpg"
                            alt="Traffic in Hyderabad"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyStruggle;
