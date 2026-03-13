"use client";

import FAQAccordion from "../../common/FAQAccordion";
import { getLiveFaqsByPath } from "../../../data/liveFaqContent";

const FAQ = () => {
    const liveFaqs = getLiveFaqsByPath("/wedding-car-rental-in-chennai");
    const faqItems = liveFaqs.map((item, index) => ({
        id: String(index + 1),
        question: item.question,
        answer: item.answer,
    }));

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top - Title and Description */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#EC2028] mb-4">FAQ</h2>
                </div>
                {/* Full Width Accordion */}
                <FAQAccordion items={faqItems} defaultOpenIndex={0} />
            </div>
        </section>
    );
};

export default FAQ;
