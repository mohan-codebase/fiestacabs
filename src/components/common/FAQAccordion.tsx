"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    defaultOpenIndex?: number;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
    items,
    defaultOpenIndex = 0,
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className="bg-[#D32F2F] rounded-lg overflow-hidden transition-all duration-300"
                >
                    {/* Question Button */}
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left text-white hover:bg-[#B71C1C] transition-colors duration-300"
                    >
                        <span className="font-semibold text-base md:text-lg pr-4">
                            {index + 1}. {item.question}
                        </span>
                        <FaChevronDown
                            className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                            size={18}
                        />
                    </button>

                    {/* Answer Content */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="p-4 md:p-5 bg-white text-gray-700 leading-relaxed">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
