import React from 'react';
import Image from 'next/image';
import { MdOutlineCancel } from 'react-icons/md';

const WhyChooseUs = () => {
    const listItems = [
        "Eliminating transportation hassles for your team, letting them focus on productivity.",
        "Modern fleet of vehicles, maintained rigorously to meet the highest safety and comfort standards.",
        "Experienced drivers, equipped to navigate smoothly through Bangalore's evolving infrastructure.",
        "Real-time tracking capabilities, giving your management and employees peace of mind on the move."
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Image */}
                    <div className="w-full md:w-[45%] relative h-[400px] md:h-[650px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transportation-services-in-bangalore/unnamed-1-3.jpg"
                            alt="Employee Transportation Services in Bangalore"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-[55%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Choose Our Employee Transportation Services in Bangalore
                        </h2>
                        <div className="space-y-4 mb-6">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Fiesta Smart Mobility is rated as the topmost employee transportation services provider in Bangalore. For the last 20 years, we have built a reputation driven by safety, reliability, and unparalleled customer service.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                The expanding city faces unique challenges, especially when it comes to traffic management. Ensure your employees arrive on time, fresh, and ready to contribute to business success. Our commitment to punctuality ensures your workforce focuses on their jobs without worrying about the commute.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">We emphasize:</h3>
                        <ul className="space-y-4 mb-6">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <MdOutlineCancel className="text-[#E31E24] w-6 h-6 flex-shrink-0 mt-0.5" style={{ transform: 'rotate(45deg)' }} />
                                    <span className="text-gray-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-800 font-medium text-lg leading-relaxed">
                            Partner with an experienced fleet business tailored to your unique needs, ensuring continuous and smooth operations round the clock.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
