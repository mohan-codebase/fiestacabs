import React from 'react';
import Image from 'next/image';

const fleetData = [
    {
        title: "Luxury Sedans",
        description: "Mercedes-Benz, Mercedes-Benz C, and other latest vehicles within the premium mid-size and premium full-size luxury categories.",
        image: "/images/wedding-car-rental-in-chennai/unnamed-2.jpg"
    },
    {
        title: "Premium SUVs",
        description: "Toyota Fortuner and Innova Hycross for family and wedding guests, ensuring unmatched comfort and spacious interiors.",
        image: "/images/wedding-car-rental-in-chennai/unnamed-3.jpg"
    },
    {
        title: "Classic and Vintage",
        description: "Rolls-Royce and royal cars create a refined wedding doli experience, ideal for photographs that fascinate individuals.",
        image: "/images/wedding-car-rental-in-chennai/unnamed-4.jpg"
    },
    {
        title: "Convertible Cars",
        description: "Choose select models that offer a dream car feel for a unique wedding entrance you'll never forget.",
        image: "/images/wedding-car-rental-in-chennai/unnamed-5.jpg"
    }
];

const FleetCategories = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Luxury, Classic, and <span className="text-[#EC2028]">Vintage Wedding Cars</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                        Fiesta provides a curated fleet of luxury cars designed to suit every special occasion and wedding day requirement in Hyderabad.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {fleetData.map((item, index) => (
                        <div key={index} className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#EC2028] transition-colors">
                                    {item.title}
                                </h3>
                                <div className="w-10 h-0.5 bg-[#EC2028] mb-4 group-hover:w-20 transition-all duration-300"></div>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center text-gray-500 italic max-w-4xl mx-auto">
                    Every decorated car arrives perfectly, supporting timely service and leaving a lasting impression on customers and guests. The fleet includes modern ultra-luxury cars for couples desiring elegance and prestige.
                </div>
            </div>
        </section>
    );
};

export default FleetCategories;
