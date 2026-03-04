"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
    {
        question: "What models are available for rent finding rent cars?",
        answer: "Our fleet comprises a diverse range of vehicles including economy hatchbacks to premium SUVs and luxury sedans."
    },
    {
        question: "How exactly can I modify or cancel my booking?",
        answer: "You can easily modify or cancel your booking through our website portal or a simple phone call to our support line."
    },
    {
        question: "Are outstation travel fees included in the final price?",
        answer: "The quote provided covers all basics; however, toll taxes and specific permits might incur additional costs."
    },
    {
        question: "How thoroughly are your cars maintained and sanitized?",
        answer: "We perform a thorough top-to-bottom clean out and routine maintenance after every single trip."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                            >
                                <span className="font-semibold text-gray-900 text-lg pr-4">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'text-[#E31E24]' : 'text-gray-400'}`}>
                                    {openIndex === index ? (
                                        <FaChevronUp className="w-5 h-5" />
                                    ) : (
                                        <FaChevronDown className="w-5 h-5" />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-5 pt-0 text-[#555555] leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
