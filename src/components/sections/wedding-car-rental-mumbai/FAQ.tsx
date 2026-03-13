"use client";

import FAQAccordion from "../../common/FAQAccordion";
import { getLiveFaqsByPath } from "../../../data/liveFaqContent";
import Image from "next/image";

const FAQ = () => {
    const liveFaqs = getLiveFaqsByPath("/wedding-car-rental-mumbai");
    const faqItems = liveFaqs.map((item, index) => ({
        id: String(index + 1),
        question: item.question,
        answer: item.answer,
    }));

    return (
        <section className="py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
            {/* Background watermark */}
            <div className="absolute inset-0 z-0 opacity-10">
                <Image
                    src="/images/wedding-car-rental-mumbai/unnamed-1-1.jpg"
                    alt="Background styling"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                {/* Top - Title and Description */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#EC2028] mb-4">
                        FAQ
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                        We put together a list of the most frequent questions we face from our customers. We hope this will help you plan your travel gracefully covering your essential needs!
                    </p>
                </div>
                {/* Full Width Accordion */}
                <FAQAccordion items={faqItems} defaultOpenIndex={0} />
            </div>
        </section>
    );
};

export default FAQ;
