import React from 'react';
import Image from 'next/image';
import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "What makes employee transportation services in Mumbai essential?",
            answer: "They reduce stress, ensure safety, and allow employees to arrive refreshed and ready for work."
        },
        {
            id: "2",
            question: "Do you provide staff transportation service across multiple locations?",
            answer: "Yes, our extensive fleet supports multiple locations in Mumbai, Navi Mumbai, and other corporate complexes."
        },
        {
            id: "3",
            question: "How do you ensure employee safety during commutes?",
            answer: "We conduct thorough background checks on drivers and enable GPS tracking for every assigned journey."
        },
        {
            id: "4",
            question: "Are the vehicles well maintained for daily commutes?",
            answer: "Yes, all our vehicles undergo regular maintenance, ensuring a smooth ride and hassle free experience daily."
        },
        {
            id: "5",
            question: "Can Fiesta handle outstation travel or business trips?",
            answer: "Yes, along with daily commutes, we also support businesses with outstation travel and corporate travel services."
        }
    ];

    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/employee-transportation-services-in-mumbai/unnamed-5.jpg"
                    alt="FAQ Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-[0.25]"
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
                            To assure you of a reliable ride we are here to answer your queries right away. Here are some of our frequent queries regarding employee transportation in Mumbai.
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
