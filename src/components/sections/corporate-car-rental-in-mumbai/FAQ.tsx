import React from "react";
import FAQAccordion from "../../common/FAQAccordion";

const FAQ = () => {
    const faqs = [
        {
            id: "faq-1",
            question: "Why use Corporate Car Rental in Mumbai instead of normal cabs?",
            answer:
                "Regular cabs can be unreliable and surge-priced. Corporate car rentals provide assured availability, predictable pricing, verified drivers, and a more comfortable, professional experience tailored exactly for business needs.",
        },
        {
            id: "faq-2",
            question: "Do you offer cars in Mumbai for short and long-term?",
            answer:
                "Yes, we offer highly flexible rental plans. Whether you need a short-term rental for an event or a long-term corporate lease for daily employee transit, we customize the package to fit your exact requirements."
        },
        {
            id: "faq-3",
            question: "Can I request a specific kind of car, like a luxury sedan?",
            answer:
                "Absolutely. Our diverse fleet ranges from standard hatchbacks to premium vehicles like Mercedes, BMW, and Audi to cater to VIP guests and senior executives."
        },
        {
            id: "faq-4",
            question: "Are there any limits to outstation travel in Mumbai rentals?",
            answer:
                "No, we provide seamless corporate car rental services for outstation business trips as well. You can comfortably travel to Pune, Nashik, or any other destination with our experienced drivers."
        },
        {
            id: "faq-5",
            question: "How to book corporate cab service in Mumbai with Fiesta Cabs?",
            answer:
                "You can easily book our corporate cab services by contacting us via our website, email, or our dedicated support hotlines. Our team will guide you through setting up a corporate account."
        }
    ];

    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.3]"
                    style={{ backgroundImage: "url('https://fiestacabs.com/wp-content/uploads/2024/11/Photo-6.jpg')" }}
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
                    {/* Left Side - Title and Description */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            FAQ
                        </h2>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                            Find answers to the most common questions about our corporate car rentals in Mumbai. To assure you of a reliable ride we are here to answer your queries right away.
                        </p>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div>
                        <FAQAccordion items={faqs} defaultOpenIndex={0} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
