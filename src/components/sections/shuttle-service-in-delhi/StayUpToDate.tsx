import React from 'react';
import Image from 'next/image';

const StayUpToDate = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left: Content */}
                    <div className="w-full md:w-[55%] md:pr-4 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            Stay Up to Date With Every Ride
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-relaxed mb-12">
                            No more wondering when or where, professionals today rely on website updates, email alerts, in-app banners, and social media pages to stay informed. If it&apos;s exciting offers, ride details, route changes, or schedule updates, staying in the loop has never been easier.
                        </p>

                        <h2 className="text-3xl lg:text-[38px] font-bold text-[#2A2A2A] mb-6 leading-[1.2] tracking-tight">
                            New Hires? We&apos;ve Got You<br className="hidden lg:block" />Covered
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-relaxed">
                            Starting a new job comes with enough to learn, figuring out how to catch your first ride, scan a QR code, or locate the nearest pick shouldn&apos;t be one of them. Fiesta makes it easy for employees to get moving from day one, without the need for repeated instructions.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[45%] relative min-h-[400px] md:min-h-[500px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-service-in-delhi/unnamed.jpg"
                            alt="Woman driving car"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StayUpToDate;
