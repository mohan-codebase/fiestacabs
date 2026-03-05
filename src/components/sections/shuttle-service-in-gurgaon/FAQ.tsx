"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { getLiveFaqsByPath } from "../../../data/liveFaqContent";

const faqData = getLiveFaqsByPath("/shuttle-service-in-gurgaon");

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">FAQ</h2>
                    <p className="text-lg text-gray-600">
                        We understand your travel needs and are here to make your journey smooth and hassle-free. From airport pickups to on-time drop-offs, our team ensures a reliable, safe, and convenient ride every time
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-red-200 bg-red-50/30' : 'border-gray-200'}`}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`font-semibold text-lg pr-8 ${openIndex === index ? 'text-[#EC2028]' : 'text-gray-900'}`}>
                                    {faq.question}
                                </span>
                                <span className="text-gray-500 flex-shrink-0">
                                    {openIndex === index ? <FaChevronUp className="text-[#EC2028]" /> : <FaChevronDown />}
                                </span>
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="tel:+919600437002"
                        className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md shadow transition-colors"
                    >
                        Contact Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
