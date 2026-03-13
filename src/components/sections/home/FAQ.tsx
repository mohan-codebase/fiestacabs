import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";
import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";

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
        <section className="relative w-full py-20 px-4 md:py-12 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#EC2028] uppercase border border-red-100 rounded-full bg-red-50/50">
                        Assistance
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                        Frequently Asked <span className="text-[#EC2028]">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                        We understand your travel needs and are here to make your journey smooth and hassle-free. 
                        Find answers to common questions about our corporate mobility solutions.
                    </p>
                </div>

                {/* FAQ Component */}
                <div className="mb-10">
                    <FAQAccordion items={faqItems} />
                </div>

            </div>
        </section>
    );
};

export default FAQ;
