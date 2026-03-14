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
    defaultOpenIndices?: number[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
    items,
    defaultOpenIndex,
    defaultOpenIndices,
}) => {
    const pathname = usePathname();
    const [openIndices, setOpenIndices] = useState<number[]>([]);

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

    // Initialize open indices
    React.useEffect(() => {
        if (defaultOpenIndices) {
            setOpenIndices(defaultOpenIndices);
        } else if (typeof defaultOpenIndex === 'number') {
            setOpenIndices([defaultOpenIndex]);
        } else if (resolvedItems.length > 0) {
            // Default: first and last open
            setOpenIndices([0, resolvedItems.length - 1]);
        }
    }, [defaultOpenIndices, defaultOpenIndex, resolvedItems.length]);

    const toggleAccordion = (index: number) => {
        setOpenIndices(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index) 
                : [...prev, index]
        );
    };

    const half = Math.ceil(resolvedItems.length / 2);
    const leftItems = resolvedItems.slice(0, half);
    const rightItems = resolvedItems.slice(half);

    const renderItem = (item: { id: string; question: string; answer: string }, index: number) => {
        const isOpen = openIndices.includes(index);
        return (
            <div
                key={item.id}
                className={`group rounded-2xl transition-all duration-300 ${
                    isOpen
                        ? "bg-white shadow-xl shadow-red-500/5 ring-1 ring-red-500/20"
                        : "bg-white/40 hover:bg-white/60 shadow-sm border border-gray-100"
                }`}
            >
                {/* Question Button */}
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                    <span className={`font-semibold text-base md:text-lg pr-8 transition-colors duration-300 ${
                        isOpen ? "text-[#EC2028]" : "text-gray-900"
                    }`}>
                        {item.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-[#EC2028] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                    }`}>
                        <FaChevronDown className={`text-sm transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                        }`} />
                    </div>
                </button>

                {/* Answer Content */}
                <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 text-gray-600 text-[15px] leading-relaxed">
                            <p className="border-t border-gray-100 pt-4">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
                {leftItems.map((item, index) => renderItem(item, index))}
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-4">
                {rightItems.map((item, index) => renderItem(item, index + half))}
            </div>
        </div>
    );
};

export default FAQAccordion;

