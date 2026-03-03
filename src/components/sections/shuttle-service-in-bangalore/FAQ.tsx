import React from 'react';
import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "How do companies pay for the shuttle - monthly or per trip?",
            answer: "Companies pay monthly for the fiesta shuttle services, based on the number of employees and trips."
        },
        {
            id: "2",
            question: "How do they adjust routes to avoid Bangalore's peak traffic?",
            answer: "Fiesta's system dynamically re-routes shuttles in real time. They use live traffic data and known congestion spots to pick the fastest path."
        },
        {
            id: "3",
            question: "Can time slots be set for early morning or late evening office shifts?",
            answer: "Fiesta allows shuttles to be scheduled according to exact office shift timings, such as 7:30 AM - 9:30 AM for morning shifts and 6:00 PM - 9:00 PM for evening shifts. The schedule ensures staff are picked up and dropped off on time."
        },
        {
            id: "4",
            question: "How are pick-up points decided near malls, petrol pumps, and metro stations in Bangalore?",
            answer: "Fiesta's pick-up points are gate-to-gate, near office entrances, tech parks, metro stations, malls, petrol pumps, and residential clusters, making access easy and safe for employees."
        },
        {
            id: "5",
            question: "Can companies link shuttle billing with their HR or attendance system?",
            answer: "Companies can link Fiesta's shuttle billing with their HR attendance systems to get monthly invoices and sync transport cost data with employee attendance."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-center">
                    {/* Left Title Area */}
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-[#E31E24] text-4xl md:text-5xl font-bold mb-4">
                            FAQ
                        </h2>
                        <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm">
                            We understand your travel needs and are here to make your journey smooth and hassle-free. From airport pickups to on-time drop-offs, our team ensures a reliable, safe, and convenient ride every time
                        </p>
                    </div>

                    {/* Right Accordion Area */}
                    <div className="w-full lg:w-2/3 max-w-3xl">
                        <FAQAccordion items={faqItems} defaultOpenIndex={0} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
