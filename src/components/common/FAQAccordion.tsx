"use client";

import React, { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getLiveFaqsByPath } from "../../data/liveFaqContent";

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
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const resolvedItems = useMemo(() => {
        const liveItems = getLiveFaqsByPath(pathname || "/");
        if (!liveItems.length) {
            return items;
        }

        return liveItems.map((item, index) => ({
            id: `live-faq-${index + 1}`,
            question: item.question,
            answer: item.answer,
        }));
    }, [items, pathname]);

    const fallbackOpenIndex =
        resolvedItems.length > 0
            ? Math.min(defaultOpenIndex, resolvedItems.length - 1)
            : null;

    const activeOpenIndex =
        openIndex !== null && openIndex < resolvedItems.length
            ? openIndex
            : fallbackOpenIndex;

    const toggleAccordion = (index: number) => {
        setOpenIndex(activeOpenIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 ">
            {resolvedItems.map((item, index) => (
                <div
                    key={item.id}
                    className="bg-red-500 rounded-lg overflow-hidden transition-all duration-300"
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
                            className={`flex-shrink-0 transition-transform duration-300 ${activeOpenIndex === index ? "rotate-180" : ""
                                }`}
                            size={18}
                        />
                    </button>

                    {/* Answer Content */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeOpenIndex === index
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
