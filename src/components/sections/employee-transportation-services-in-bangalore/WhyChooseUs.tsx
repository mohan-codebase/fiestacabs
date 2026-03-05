import React from 'react';
import Image from 'next/image';
import { MdOutlineCancel } from 'react-icons/md';

const WhyChooseUs = () => {
    const listItems = [
        " Employee safety as a top priority, ensuring that every trip is managed with care and attention. ",
        " Efficient routes and maximum optimization so that employees experience minimal delays during peak hours. ",
        " Advanced technology including real time GPS tracking, live tracking, and real time monitoring for better visibility of every ride. ",
        " Hassle free commute that allows the workforce to reach the office refreshed and on time. "
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
                                Choosing the right transportation services in Bangalore can directly influence employee satisfaction, attendance, and long-term retention. With our dedicated team, trained drivers, and well maintained vehicles, we make the daily commute a reliable part of the workday rather than a challenge.                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our focus is simple: provide reliable employee transportation services that balance safety, punctuality, and cost effectiveness while addressing the specific requirements of every company. By delivering employee transport services built on quality, professional operations, and well planned routes, we help businesses and organizations streamline their corporate commutes across the city.                            </p>
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
                            By offering consistent, structured employee transportation services, we build long-term partnerships with companies looking for dependable solutions for their corporate offices.                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
