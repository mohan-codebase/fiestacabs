import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";
import Image from "next/image";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "What are employee transportation services in Chennai?",
            answer: "Structured commute solutions ensuring safety, reliability, and convenience for employees traveling daily to office.",
        },
        {
            id: "2",
            question: "How do companies benefit from employee transportation services?",
            answer: "Companies save costs, improve employee satisfaction, and ensure punctual workforce with dependable transport solutions.",
        },
        {
            id: "3",
            question: "Are professional drivers provided with these services?",
            answer: "Yes, all vehicles are driven by professional drivers ensuring safety, punctuality, and smooth daily commutes.",
        },
        {
            id: "4",
            question: "Why choose Fiesta for employee transportation services in Chennai?",
            answer: "Fiesta offers reliable, cost effective, and well maintained fleet with real time tracking for employees.",
        },
    ];

    return (
        <section className="relative w-full py-10 md:py-20 mb-30 overflow-hidden ">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/faq/faq-bg.jpg"
                    alt="FAQ Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-100 opacity-10"
                />
                <div className="absolute inset-0 bg-black/0" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Title and Description */}
                    <div>
                        <h2 className="text-4xl md:text-4xl font-bold text-red-500 mb-6">
                            FAQ
                        </h2>
                        <p className="text-black text-base md:text-lg leading-relaxed">
                            We understand your travel needs and are here to make your
                            journey smooth and hassle-free. From airport pickups to
                            on-time drop-offs, our team ensures a reliable, safe, and
                            convenient ride every time.
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
