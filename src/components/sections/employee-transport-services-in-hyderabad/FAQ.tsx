import FAQAccordion, { FAQItem } from "../../common/FAQAccordion";
import Image from "next/image";

const FAQ = () => {
    const faqItems: FAQItem[] = [
        {
            id: "1",
            question: "1. What are the common issues staff face with shared cabs in peak hours?",
            answer: "Staff may face traffic delays and crowded rides, but Fiesta’s well-maintained fleet and route planning help reduce waiting and stress."
        },
        {
            id: "2",
            question: "2. How does the cab deal with breakdowns during shift hours?",
            answer: "Fiesta keeps backup vehicles ready and maintains all cabs regularly to handle any breakdown quickly."
        },
        {
            id: "3",
            question: "3. How could the transportation service handle last-minute ride changes from staff?",
            answer: "Staff can request changes anytime, and Fiesta’s 24/7 support and shift-based scheduling ensure quick adjustments."
        },
        {
            id: "4",
            question: "4. How do staff check cab timing when shifts change?",
            answer: "Staff can track their rides in real time using live GPS links provided after booking."
        }
        ,
        {
            id: "5",
            question: "5. How are emergencies managed during transport?",
            answer: "Fiesta has a dedicated team available 24/7 to respond immediately to any emergency or safety concern."
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
