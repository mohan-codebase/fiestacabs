"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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

    const faqs = [
        {
            question: "1. Is corporate car rental cheaper than individual booking?",
            answer:
                "Yes, renting corporate cars in bulk or signing a long term contract is usually more cost effective than paying for individual trips.",
        },
        {
            question: "2. How do you ensure employee safety during transit?",
            answer:
                "Our drivers are rigorously vetted, highly trained, and well-versed with Bangalore's routes. Additionally, we ensure all our vehicles undergo strict maintenance and sanitization protocols prior to each trip."
        },
        {
            question: "3. What kind of vehicles are included in corporate cab services?",
            answer:
                "We offer a highly customizable fleet that ranges from economical sedans for daily commutes to luxury SUVs and premium cars like Mercedes, BMW, and Audi for executive travels."
        },
        {
            question: "4. Can we customize the car rental package according to our event schedule?",
            answer:
                "Absolutely. We work closely with your logistics team to design flexible rental packages that perfectly align with your event timelines, VIP pickups, and group transport needs."
        },
        {
            question: "5. How can you handle sudden changes in our fleet requirements?",
            answer:
                "Our extensive fleet and dedicated support team allow us to accommodate last-minute scheduling changes or additional vehicle requests swiftly and efficiently."
        },
        {
            question: "6. Whom do we contact in case of any issues with the rental cars?",
            answer:
                "You will be assigned a highly responsive dedicated account manager. We also provide a 24/7 support hotline to instantly resolve any transit or booking issues that may arise."
        }
    ];

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
