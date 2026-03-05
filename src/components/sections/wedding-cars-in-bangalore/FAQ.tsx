"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { getLiveFaqsByPath } from "../../../data/liveFaqContent";

const faqData = getLiveFaqsByPath("/wedding-cars-in-bangalore");

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-[#e9ecef]/50">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-3xl md:text-[32px] font-bold text-[#EC2028] mb-6 tracking-tight">
                            FAQ&apos;s - Wedding Cars in Bangalore
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-relaxed pl-4 border-l-4 border-[#EC2028]">
                            We understand your travel needs and are here to make your journey smooth and hassle-free. From airport pickups to on-time drop-offs, our team ensures a reliable, safe, and convenient ride every time.
                        </p>
                    </div>

                    <div className="w-full md:w-2/3 space-y-3">
                        {faqData.map((faq, index) => (
                            <div key={index} className="rounded-md overflow-hidden">
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#EC2028] transition-colors shadow-sm"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="font-semibold text-[16px] pr-8 text-white">
                                        {faq.question}
                                    </span>
                                    <span className="text-white flex-shrink-0">
                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </button>

                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-white ${openIndex === index ? "max-h-60 pt-6 pb-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}
                                >
                                    <p className="text-[#555555] text-[15px] leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
