"use client";

import FAQAccordion from "../../common/FAQAccordion";
import { getLiveFaqsByPath } from "../../../data/liveFaqContent";

const FAQ = () => {
    const liveFaqs = getLiveFaqsByPath("/shuttle-services-in-mumbai");
    const faqItems = liveFaqs.map((item, index) => ({
        id: String(index + 1),
        question: item.question,
        answer: item.answer,
    }));

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#fd6454] mb-4">FAQs on Shuttle Service in Mumbai</h2>
                </div>
                <FAQAccordion items={faqItems} defaultOpenIndex={0} />
            </div>
        </section>
    );
};

export default FAQ;
