import React from "react";
import PageHero from "../../components/common/PageHero";

export const metadata = {
    title: "Terms & Conditions - Fiesta Smart Mobility",
    description: "Read the terms and conditions for using Fiesta Smart Mobility services. Understand our booking policies, user responsibilities, and service agreements.",
};

export default function TermsAndConditions() {
    return (
        <div className="w-full bg-white">
            <PageHero
                title="Terms & Conditions"
                subtitle="Please read these terms carefully before using our services."
                backgroundImage="/images/about-us/banner/WhatsApp-Image-2025-02-17-at-11.22.49-PM.jpeg"
                height="sm"
            />

            <section className="w-full py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-gray-700 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the services provided by Fiesta Smart Mobility Private Limited, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                            <p>
                                Fiesta Smart Mobility provides integrated employee transport solutions, premium car rentals, and outstation cab services. Our services are subject to vehicle availability and our operational capacity in specific regions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking and Payments</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>All bookings must be made through our official channels (website, app, or authorized sales representatives).</li>
                                <li>Payment terms are as specified at the time of booking. Corporate clients are subject to separate master service agreements.</li>
                                <li>Invoices will be generated based on the actual usage or agreed-upon flat rates.</li>
                                <li>We reserve the right to cancel or modify bookings in case of unforeseen circumstances, with prior notification to the user.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation and Refunds</h2>
                            <p>
                                Cancellation policies vary depending on the service type (e.g., daily commute vs. premium outstation). Please refer to your specific booking confirmation for relevant cancellation windows and potential charges. Refunds, if applicable, will be processed within our standard billing cycle.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
                            <p>
                                Users are expected to maintain decorum during transit. Damage to vehicles caused by passenger negligence may result in penalty charges. Passengers must adhere to safety protocols, including wearing seatbelts and following driver instructions during the journey.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                            <p>
                                While we strive for 100% punctuality and safety, Fiesta Smart Mobility shall not be liable for delays caused by traffic, weather, or other events beyond our reasonable control. Our liability for any claim arising out of our service is limited to the amount paid for the specific journey in question.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                            <p>
                                All content on this website, including logos, text, and graphics, is the property of Fiesta Smart Mobility Private Limited and is protected by copyright laws. unauthorized use of these materials is strictly prohibited.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                            <p>
                                These terms are governed by the laws of India. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Legal Inquiries</h2>
                            <p>
                                For any questions regarding these terms, please contact our legal department:
                            </p>
                            <div className="mt-4 p-6 bg-gray-50 rounded-2xl">
                                <p className="font-bold">Legal Department - Fiesta Smart Mobility</p>
                                <p>Email: legal@fiestacabs.com</p>
                                <p>Phone: +91 44 4212 4212</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
