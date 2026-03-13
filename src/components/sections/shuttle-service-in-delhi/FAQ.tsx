import React from 'react';
import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "What safety features are available on Delhi shuttles?",
            answer: "Each fiesta shuttle has SOS alerts and live tracking so employees feel secure during the ride."
        },
        {
            id: "2",
            question: "How does Fiesta handle shuttle pick-ups in busy areas?",
            answer: "Fiesta uses gate-to-gate pick-up points near major offices, residential clusters, and landmarks like Saket, Rohini, and Nehru Place to avoid long waits and traffic hassles."
        },
        {
            id: "3",
            question: "Can shuttles be booked for short routes within Delhi NCR, like office to metro stations?",
            answer: "Fiesta Shuttles can be booked for short connections, like the office to the nearest metro station or nearby hubs."
        },
        {
            id: "4",
            question: "Can employees track shuttle location in real time via an app or SMS?",
            answer: "Once booking is confirmed, you'll get an SMS or email with a live‑tracking app facility, so employees can see where their shuttle is in real time."
        },
        {
            id: "5",
            question: "How does Fiesta manage shuttle schedules during heavy rain or Delhi NCR fog?",
            answer: "Shuttle schedules are managed proactively, with route adjustments and fleet support to ensure timely and safe transport in Delhi NCR, rain or fog."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top - Title and Description */}
                <div className="text-center mb-10">
                    <h2 className="text-[#E31E24] text-4xl font-bold mb-4">
                        FAQ
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                        We understand your travel needs and are here to make your journey smooth and hassle-free. From airport pickups to on-time drop-offs, our team ensures a reliable, safe, and convenient ride every time
                    </p>
                </div>
                {/* Full Width Accordion */}
                <FAQAccordion items={faqItems} defaultOpenIndex={0} />
            </div>
        </section>
    );
};

export default FAQ;
