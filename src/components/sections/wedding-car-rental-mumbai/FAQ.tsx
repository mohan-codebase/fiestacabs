"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getLiveFaqsByPath } from "../../../data/liveFaqContent";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = getLiveFaqsByPath("/wedding-car-rental-mumbai");

    return (
        <section className="py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
            {/* Background watermark/image representation */}
            <div className="absolute inset-0 z-0 opacity-10">
                <Image
                    src="/images/wedding-car-rental-mumbai/unnamed-1-1.jpg"
                    alt="Background styling"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#EC2028] mb-4">
                            FAQ
                        </h2>
                        <p className="text-[#555555] text-[15px] leading-[1.7]">
                            We put together a list of the most frequent questions we face from our customers. We hope this will help you plan your travel gracefully covering your essential needs!
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-[#EC2028] rounded-md overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex justify-between items-center p-5 text-left transition-colors"
                                >
                                    <span className="font-semibold text-white text-[15px]">
                                        {index + 1}. {faq.question}
                                    </span>
                                    <span className="text-white ml-4 flex-shrink-0">
                                        {openIndex === index ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out bg-white ${openIndex === index ? 'max-h-48 border border-[#EC2028] border-t-0 rounded-b-md' : 'max-h-0'
                                        } overflow-hidden`}
                                >
                                    <p className="p-5 text-[#555555] text-[15px] leading-[1.7]">
                                        {faq.answer}
                                    </p>
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
