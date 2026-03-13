import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";
import Image from "next/image";

const FAQ = () => {
    const faqItems: FAQItem[] = [
  {
            id: "1",
            question: "What makes employee transportation services in Mumbai essential?",
            answer: "They reduce stress, ensure safety, and allow employees to arrive refreshed and ready for work."
        },
        {
            id: "2",
            question: "Do you provide staff transportation service across multiple locations?",
            answer: "Yes, our extensive fleet supports multiple locations in Mumbai, Navi Mumbai, and other corporate complexes."
        },
        {
            id: "3",
            question: "How do you ensure employee safety during commutes?",
            answer: "We conduct thorough background checks on drivers and enable GPS tracking for every assigned journey."
        },
        {
            id: "4",
            question: "Are the vehicles well maintained for daily commutes?",
            answer: "Yes, all our vehicles undergo regular maintenance, ensuring a smooth ride and hassle free experience daily."
        },
        {
            id: "5",
            question: "Can Fiesta handle outstation travel or business trips?",
            answer: "Yes, along with daily commutes, we also support businesses with outstation travel and corporate travel services."
        }
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
                {/* Top - Title and Description */}
                <div className="text-center mb-10">
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

                {/* Full Width Accordion */}
                <FAQAccordion items={faqItems} defaultOpenIndex={0} />
            </div>
        </section>
    );
};

export default FAQ;
