import React from 'react';
import Image from 'next/image';

const StayConnected = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[50%] relative h-[450px] md:h-[550px] overflow-hidden rounded-md">
                        <Image
                            src="/images/shuttle-services-in-hyderabad/unnamed-6-2.jpg"
                            alt="Stay Connected and Informed"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[50%] md:pl-8">
                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Stay Connected and Informed
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Today&apos;s commuters stay informed using a range of digital platforms. Whether it&apos;s a route update or a change in schedule, professionals often rely on the website, email notifications, or customer channels to stay in the loop.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-10">
                            From ride updates to alerts about pickup changes, employees know when and where to board without delays.
                        </p>

                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Onboarding Made Easy
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-10">
                            Starting a new job is stressful enough. Fiesta helps reduce friction by making it simple for new employees to understand how to board their first ride, use a QR code, and find their assigned pick up without repeated instructions.
                        </p>

                        <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-6 leading-tight">
                            Booking That Works for Your Team
                        </h2>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Pre-booking a seat is quick and convenient with multiple payment options, including digital methods like wallets or card payments. Teams can reserve in advance, use internal codes, and check ride schedules with ease.
                        </p>
                        <p className="text-[#555555] text-[16px] leading-relaxed mb-6">
                            Riders can also view important ride details, including vehicle number, driver info, and arrival estimates, making it easy to track their commute.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StayConnected;
