import React from 'react';
import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "What areas in Hyderabad are covered by shuttle services?",
            answer: "Fiesta shuttles run in main business hubs, metros and residential areas, including HITEC City (Madhapur), Gachibowli, and the Financial District, connecting offices and key locations."
        },
        {
            id: "2",
            question: "How many passengers can each shuttle carry at a time?",
            answer: "Each shuttle can carry around 10- 20 employees, depending on vehicle size."
        },
        {
            id: "3",
            question: "Can shuttles pick up employees from multiple locations?",
            answer: "Fiesta's shuttles use fixed, gate-to-gate pick-up points near metro stations, residential clusters, and busy areas. The well-planned pick-up points let staff from different locations board easily without long walks or extra waiting."
        },
        {
            id: "4",
            question: "How is the fare or cost of shuttle service calculated?",
            answer: "Fiesta offers monthly billing, and the cost depends on the number of employees, trips, and route length."
        },
        {
            id: "5",
            question: "Can companies get a shuttle for just a few employees instead of full capacity?",
            answer: "Companies can book a shuttle even for a small group; Fiesta adjusts capacity as needed."
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
