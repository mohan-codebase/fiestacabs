import React from 'react';
import Image from 'next/image';
import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "Please note, Fiesta's employee transportation services in Bangalore are B2B only.",
            answer: "Fiesta primarily provides corporate accounts for employee transportation services locally. We partner directly with businesses to ensure smooth commuting for their workforce rather than offering individual B2C rides."
        },
        {
            id: "2",
            question: "How to arrange an employee transportation cab for an early morning shift?",
            answer: "Through our 24/7 dedicated support desk and application, HR or admin supervisors can easily schedule early morning or late-night shift cabs well in advance. Our automated system ensures timely driver allocation."
        },
        {
            id: "3",
            question: "How are outstation trips billed if required?",
            answer: "While primarily focused on intra-city commute, if corporate outstation trips are required, they are billed transparently based on per-kilometer rates and driver allowances as per the pre-agreed corporate contract."
        },
        {
            id: "4",
            question: "Can we customize a monthly contract based on employee count variations?",
            answer: "Yes, our billing models are highly flexible. Corporate contracts can be customized and periodically revised to accommodate changes in your employee headcount and shifting transportation needs."
        }
    ];

    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/employee-transportation-services-in-bangalore/unnamed-2-3.jpg"
                    alt="FAQ Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-[0.3]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
                    {/* Left Side - Title and Description */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            FAQ
                        </h2>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                            To assure you of a reliable ride we are here to answer your queries right away. Here are some of our frequent queries from our customers.
                        </p>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div>
                        <FAQAccordion items={faqItems} defaultOpenIndex={0} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
