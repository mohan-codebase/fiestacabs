import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";
import Image from "next/image";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "Do you offer electric vehicle (EV) transportation?",
            answer: "Yes, our EV fleet ensures eco-friendly, comfortable, and quiet rides, contributing to a sustainable future while delivering top-notch service.",
        },
        {
            id: "2",
            question: "How do you ensure employee safety during transit?",
            answer: "We prioritize safety through regular vehicle maintenance, GPS tracking, verified drivers with background checks, and 24/7 monitoring to ensure secure transportation for all employees.",
        },
        {
            id: "3",
            question: "What makes your service stand out from competitors?",
            answer: "Our commitment to punctuality, well-maintained fleet, professional drivers, 24/7 customer support, and competitive pricing sets us apart. We focus on reliability and customer satisfaction in every journey.",
        },
        {
            id: "4",
            question: "How do you handle last-minute transport requests or schedule changes?",
            answer: "We have a dedicated team available 24/7 to handle urgent requests and schedule modifications. Our flexible system allows us to accommodate last-minute changes efficiently while maintaining service quality.",
        },
        {
            id: "5",
            question: "How do you ensure vehicle maintenance and cleanliness?",
            answer: "All our vehicles undergo regular maintenance checks, daily cleaning, and sanitization. We follow strict quality standards to ensure every ride is comfortable, safe, and hygienic for our customers.",
        },
        {
            id: "6",
            question: "What types of businesses can use your transport services?",
            answer: "We serve a wide range of businesses including IT companies, manufacturing units, healthcare facilities, educational institutions, and corporate offices. Our services are customizable to meet specific organizational needs.",
        },
    ];

    return (
        <section className="relative w-full py-10 md:py-20 mb-30 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/faq/faq-bg.jpg"
                    alt="FAQ Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-50"
                />
                <div className="absolute inset-0 bg-black/0" />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Title and Description */}
                    <div>
                        <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
                            FAQ
                        </h2>
                        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
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
