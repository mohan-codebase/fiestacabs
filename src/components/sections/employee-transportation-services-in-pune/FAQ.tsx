import React from 'react';
import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "What are employee transportation services in Pune?",
            answer: "They are structured transport solutions ensuring daily commutes remain safe, reliable, cost effective, and well coordinated."
        },
        {
            id: "2",
            question: "How do you ensure employee safety during travel?",
            answer: "We enforce strict safety protocols, GPS tracking, and thorough driver verification for secure and dependable commutes."
        },
        {
            id: "3",
            question: "Are the vehicles well maintained for regular use?",
            answer: "Yes, we operate a well maintained fleet of vehicles to ensure safe and smooth rides daily."
        },
        {
            id: "4",
            question: "Do you provide real time monitoring for routes?",
            answer: "Yes, real time monitoring and tracking systems ensure accurate schedules and safe travel for all employees."
        },
        {
            id: "5",
            question: "Why should companies choose Fiesta in Pune?",
            answer: "We combine cost effective solutions, reliable drivers, and efficient operations, supporting productivity and hassle free commutes."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top - Title and Description */}
                <div className="text-center mb-10">
                    <h2 className="text-[#E31E24] text-4xl md:text-5xl font-bold">
                        FAQ
                    </h2>
                </div>
                {/* Full Width Accordion */}
                <FAQAccordion items={faqItems} defaultOpenIndex={0} />
            </div>
        </section>
    );
};

export default FAQ;
