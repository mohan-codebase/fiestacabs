import React from 'react';
import Image from 'next/image';
import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "What measures do you take to ensure employee safety during the commute?",
            answer: "We prioritize safety through regular vehicle maintenance, GPS tracking, verified drivers with background checks, and 24/7 monitoring to ensure secure transportation for all employees."
        },
        {
            id: "2",
            question: "How do you handle last-minute transport requests or schedule changes?",
            answer: "We have a dedicated 24/7 support team managing a flexible routing system. This allows us to efficiently accommodate last-minute changes and urgent requests without disrupting the overall transport schedule."
        },
        {
            id: "3",
            question: "Are the vehicles equipped with real-time tracking systems?",
            answer: "Yes, our entire fleet is equipped with advanced GPS and real-time tracking systems. This allows both the company administration and the employees to track the vehicle's location through our application."
        },
        {
            id: "4",
            question: "How do you ensure vehicles are clean and well-maintained?",
            answer: "We follow strict hygiene protocols. All vehicles undergo regular mechanical maintenance, and are thoroughly cleaned and sanitized before every shift to ensure a comfortable and safe ride."
        }
    ];

    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/employee-transport-services-in-hyderabad/unnamed-2-3.jpg"
                    alt="FAQ Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-[0.3]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
                    {/* Left Side - Title and Description */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            FAQ
                        </h2>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                            To assure you of a reliable ride we are here to answer your queries right away. Here are some of our frequent queries from our customers.
                        </p>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div>
                        <FAQAccordion items={faqItems} defaultOpenIndex={0} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
