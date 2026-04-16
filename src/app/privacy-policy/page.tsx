import { getMetadata } from "../data/metadata";
import React from "react";
import PageHero from "../../components/common/PageHero";

export const metadata = getMetadata("/privacy-policy");

export default function PrivacyPolicy() {
    return (
        <div className="w-full bg-white">
            <PageHero
                title="Privacy Policy"
                subtitle="Your privacy is important to us. Learn how we protect your data."
                backgroundImage="/images/about-us/banner/WhatsApp-Image-2025-02-17-at-11.22.49-PM.jpeg"
                height="sm"
            />

            <section className="w-full py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-gray-700 space-y-12">

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p>
                                Fiesta Smart Mobility Private Limited ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our transport services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information Collection</h2>
                            <p>
                                We collect information that you provide directly to us, such as when you create an account, make a booking, or contact our support team. This may include:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Name and contact information (email, phone number, address)</li>
                                <li>Booking details and travel preferences</li>
                                <li>Payment information (processed securely through our payment partners)</li>
                                <li>Communication history with our team</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Information</h2>
                            <p>
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Process and manage your bookings</li>
                                <li>Communicate with you regarding your service</li>
                                <li>Improve our website and service offerings</li>
                                <li>Comply with legal and regulatory requirements</li>
                                <li>Ensure the safety and security of our passengers and drivers</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing of Information</h2>
                            <p>
                                We do not sell your personal information. We may share your data with:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Authorized transport partners and drivers to fulfill your bookings</li>
                                <li>Service providers who assist our business operations (e.g., payment processors)</li>
                                <li>Legal authorities when required by law</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
                            <p>
                                Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of certain website features.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                            <p>
                                You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at the details provided below.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="mt-4 p-6 bg-gray-50 rounded-2xl">
                                <p className="font-bold">Fiesta Smart Mobility Private Limited</p>
                                <p>Email: info@fiestacabs.com</p>
                                <p>Phone: +91 44 4212 4212</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
