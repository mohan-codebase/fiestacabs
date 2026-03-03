"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
    {
        question: "How early should I book the wedding car?",
        answer: "To guarantee your preferred luxury wedding car in Chennai, we recommend booking at least 1-2 months in advance, especially during peak wedding season."
    },
    {
        question: "Are decorations included in the car rental package?",
        answer: "Our packages primarily cover the vehicle and chauffeur. However, we are happy to coordinate with your chosen decorators to ensure the car is ready and beautifully adorned for your event."
    },
    {
        question: "Is there a minimum rental period?",
        answer: "Yes, we typically have minimum rental blocks, such as 4 or 8 hours. Contact our team to discuss your specific schedule, and we can tailor a package to fit your needs."
    },
    {
        question: "Can I view the vehicle before confirming my booking?",
        answer: "Absolutely. We understand the importance of perfection on your wedding day. You can schedule a visit to inspect the luxury wedding car of your choice before finalizing the booking."
    },
    {
        question: "What areas do you cover?",
        answer: "Our wedding car rental services are available across Chennai and its surrounding regions. For outstation destination weddings, please contact us for custom intercity travel packages."
    }
];

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
                        <h2 className="text-3xl md:text-[36px] font-bold text-[#EC2028] mb-6 tracking-tight">FAQ</h2>
                        <p className="text-[#555555] text-[15px] leading-relaxed relative before:content-[''] before:absolute before:-left-4 before:top-2 before:w-1 before:h-[90%] before:bg-[#EC2028]">
                            Got questions about our wedding car rental services? We've answered the most common ones below. Feel free to contact us if you need more details.
                        </p>
                    </div>

                    <div className="w-full md:w-2/3 space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-md overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#EC2028]' : 'bg-[#EC2028]'}`}
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors shadow-sm"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className={`font-semibold text-[17px] pr-8 text-white`}>
                                        {faq.question}
                                    </span>
                                    <span className="text-white flex-shrink-0">
                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </button>

                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-white ${openIndex === index ? "max-h-60 pt-6 pb-6 opacity-100" : "max-h-0 py-0 opacity-0"
                                        }`}
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
