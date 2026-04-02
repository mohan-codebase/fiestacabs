import React from 'react';
import Image from 'next/image';

const planningTips = [
    {
        title: "Elegance for the Groom's Doli",
        description: "Luxury and vintage cars add a unique touch and matchless elegance to the traditional wedding doli moments.",
        image: "/images/wedding-car-rental-in-chennai/unnamed-8.jpg"
    },
    {
        title: "Family Movement Solutions",
        description: "Premium SUVs like Fortuner and Innova Hycross best suit family movement and venue logistics.",
        image: "/images/wedding-car-rental-in-chennai/unnamed-3.jpg"
    },
    {
        title: "Coordinated Guest Arrivals",
        description: "Bus rentals support overall guest comfort and ensure everyone arrives at the venue simultaneously and safely.",
        image: "/images/wedding-car-rental-in-chennai/unnamed-6.jpg"
    }
];

const PlanningSection = () => {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <span className="text-[#EC2028] font-bold tracking-widest uppercase mb-4 block underline decoration-red-200 underline-offset-8">Expert Advice</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Planning a Wedding Car <span className="text-[#EC2028]">Experience in Hyderabad</span>
                        </h2>
                    </div>
                    <div className="text-gray-500 text-lg max-w-sm leading-relaxed font-medium pb-1 border-l-2 border-[#EC2028] pl-6 italic">
                        Choosing the right wedding car enhances style, comfort, and memorable moments.
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {planningTips.map((tip, idx) => (
                        <div key={idx} className="relative group rounded-3xl overflow-hidden min-h-[250px] md:min-h-[440px] shadow-lg flex flex-col justify-end">
                            <Image
                                src={tip.image}
                                alt={tip.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                            <div className="relative p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#EC2028] transition-colors">{tip.title}</h3>
                                <p className="text-gray-100/90 text-[15px] leading-[1.8] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {tip.description}
                                </p>
                                <div className="mt-6 w-12 h-1 bg-[#EC2028] transition-all duration-300 group-hover:w-full"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-gray-50 rounded-[40px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 shadow-inner">
                   <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#EC2028] mb-4">Quality, Safety, and Peace of Mind</h3>
                        <p className="text-gray-600 text-[16px] leading-[1.8] font-medium">
                            Every vehicle undergoes a thorough inspection before confirmation. Fiesta delivers luxury wedding car rental experiences in Hyderabad and across other metro cities, providing great service to customers who value prestige and attention to detail.
                        </p>
                   </div>
                   <div className="relative w-24 h-24 flex-shrink-0 animate-pulse">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#EC2028]/20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <div className="absolute inset-0 flex items-center justify-center font-black text-gray-900 text-3xl">P1</div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default PlanningSection;
