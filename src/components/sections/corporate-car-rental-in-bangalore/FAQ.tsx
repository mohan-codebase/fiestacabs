"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getLiveFaqsByPath } from "../../../data/liveFaqContent";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className="border-b border-gray-200 last:border-0 rounded-md overflow-hidden bg-white mt-4">
            <button
                className={`w-full flex justify-between items-center px-6 py-4 text-left transition-colors font-medium text-[15px]
                    ${isOpen ? "bg-[#E31E24] text-white" : "bg-[#E31E24] text-white hover:bg-black"}`}
                onClick={onClick}
            >
                <span className="flex-1 pr-8">{question}</span>
                <FaChevronDown
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`transition-all duration-300 ease-in-out bg-white ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="p-6 text-[#555555] text-[15px] leading-[1.7] border border-gray-100 border-t-0 shadow-sm">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = getLiveFaqsByPath("/corporate-car-rental-in-bangalore");

    return (
        <section className="py-16 md:py-24 relative bg-gray-50">
            <div className="absolute inset-0 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#E31E24] mb-4">
                        FAQ
                    </h2>
                    <p className="text-[#555555] text-[15px]">
                        Find answers to the most common questions about our corporate car rentals in Bangalore.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
