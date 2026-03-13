import React from "react";
import Image from "next/image";
import Button from "../../../components/common/Button";

const savings = [
    "No spending on car maintenance",
    "No heavy cost for vehicle ownership",
    "No driver hiring cost",
    "No sudden repair bills",
    "No insurance claim stress",
];

const CorporateHowCreates = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

                    {/* Text Content - Left */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <p className="text-[#EC2028] tracking-[0.2em] font-medium text-sm md:text-base mb-4 uppercase">
                            Hassle-Free Travel
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            How Fiesta Creates Hassle Free Corporate Travel
                        </h2>

                        <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed mb-6">
                            <p>
                                Fiesta understands corporate clients expect speed, clarity and stability. The entire process runs through simple booking steps. Clients use call, mail or the enquiry form to book a car today. The team reviews the request, assigns cars, shares details and keeps everything transparent.
                            </p>
                            <p>
                                With strong systems, trained chauffeurs and modern technology, employees arrive on time. Managers track vehicles through real time tracking tools. Everything stays structured so companies get the best experience from start to finish.
                            </p>
                            <p className="font-semibold text-gray-900">
                                Companies save money when they choose Fiesta for corporate car rentals:
                            </p>
                        </div>

                        <div className="space-y-3 mb-8">
                            {savings.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#EC2028] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 text-[15px]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Button className="bg-[#EC2028] rounded ">
                                Book Your Corporate Car Rental Now
                            </Button>
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[580px]">
                        <div className="absolute inset-0 overflow-hidden shadow-lg h-full">
                            <Image
                                src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/how-fiesta-creates.jpg"
                                alt="How Fiesta Creates Hassle Free Corporate Travel"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateHowCreates;
