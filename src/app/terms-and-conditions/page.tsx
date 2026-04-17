import { getMetadata } from "@/src/data/metadata";
import React from "react";
import PageHero from "../../components/common/PageHero";
import {
    HiOutlineDocumentText,
    HiOutlineShieldCheck,
    HiOutlineScale,
    HiOutlineTruck,
    HiOutlineUserGroup,
    HiOutlineInformationCircle,
    HiOutlineCreditCard,
    HiOutlineGlobeAlt,
    HiOutlineLockClosed,
    HiOutlineHandThumbUp,
    HiOutlineExclamationCircle,
    HiOutlineCheckBadge,
    HiOutlineMapPin,
    HiOutlineCurrencyRupee,
    HiOutlineClock,
    HiOutlinePhone,
    HiOutlineEnvelope
} from "react-icons/hi2";

export const metadata = getMetadata("/terms-and-conditions");

const Section = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
    <div className="mb-12 last:mb-0">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                <Icon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="text-gray-700 leading-relaxed space-y-4 ml-2">
            {children}
        </div>
    </div>
);

export default function TermsAndConditions() {
    return (
        <div className="w-full bg-white">
            <PageHero
                title="Terms & Conditions"
                subtitle="Guidelines for your safe and seamless journey with Fiesta Smart Mobility."
                backgroundImage="/images/about-us/banner/about-us-banner.jpg"
                height="sm"
            />

            <section className="w-full py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Intro */}
                    <div className="mb-16 pb-8 border-b border-gray-100">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                            Effective Date: April 17, 2026
                        </div>
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
                            Terms and Conditions
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed italic">
                            (Applicable to Website Users: Employee Transportation and Chauffeur-Driven Rent-A-Car Services)
                        </p>
                        <p className="mt-6 text-gray-700 leading-relaxed">
                            By accessing or using this website, you agree to these Terms and Conditions, which comply with all applicable Indian laws and regulations, including the Motor Vehicles Act, 1988, the Motor Transport Workers Act, 1961, and the Information Technology Act, 2000. If you do not agree to these Terms, please do not use this website. In case of any conflict between these Terms and applicable law, the relevant law will take precedence.
                        </p>
                        <p className="mt-4 font-bold text-gray-900 flex items-center gap-2">
                            <HiOutlineCheckBadge className="text-primary w-5 h-5" />
                            Company: Fiesta Smart Mobility Private Limited
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* 1. DEFINITIONS */}
                        <Section icon={HiOutlineInformationCircle} title="1. DEFINITIONS">
                            <ul className="space-y-3">
                                <li><span className="font-bold">Company:</span> Fiesta Smart Mobility Private Limited.</li>
                                <li><span className="font-bold">Client:</span> Any corporate entity or individual using the services.</li>
                                <li><span className="font-bold">Passenger:</span> Any individual availing of the transport service.</li>
                                <li><span className="font-bold">Services:</span> Include Employee Transportation and Chauffeur-Driven Rent-A-Car.</li>
                                <li><span className="font-bold">Vehicle:</span> Any car provided under the Company&apos;s fleet or partner fleet.</li>
                                <li><span className="font-bold">Driver:</span> A licensed individual assigned by the Company.</li>
                            </ul>
                        </Section>

                        {/* 2. SERVICE SCOPE */}
                        <Section icon={HiOutlineTruck} title="2. SERVICE SCOPE">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">2.1 Employee Transportation (B2B)</h3>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Scheduled pick-up and drop-off services for corporate employees.</li>
                                        <li>Transportation is provided on a route or roster basis.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">2.2 Rent-A-Car (Chauffeur Driven)</h3>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Vehicles with drivers are available for on-demand or scheduled hire.</li>
                                        <li>Services are available for local, outstation, and airport transfers.</li>
                                    </ul>
                                </div>
                            </div>
                        </Section>

                        {/* 3. LEGAL AND REGULATORY COMPLIANCE */}
                        <Section icon={HiOutlineScale} title="3. LEGAL AND REGULATORY COMPLIANCE">
                            <p>The Company complies with the following regulations:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Motor Vehicles Act, 1988</li>
                                <li>Motor Transport Workers Act, 1961</li>
                            </ul>
                            <p className="font-semibold pt-4">The Company ensures the following:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>All vehicles have valid permits, insurance, and fitness certificates.</li>
                                <li>Drivers hold valid commercial driving licenses.</li>
                                <li>Drivers comply with working hours, rest periods, and welfare provisions.</li>
                                <li>Police verification and background checks are conducted for drivers.</li>
                            </ul>
                        </Section>

                        {/* 4. SAFETY AND SECURITY */}
                        <Section icon={HiOutlineShieldCheck} title="4. SAFETY AND SECURITY">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>GPS tracking is enabled in applicable vehicles.</li>
                                <li>Emergency escalation mechanisms are available.</li>
                                <li>For female passengers, safety protocols, including last-drop compliance, will be followed as required by applicable state guidelines.</li>
                            </ul>
                            <p className="font-semibold pt-4">Passengers are required to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Follow lawful and respectful conduct.</li>
                                <li>Do not bring illegal or hazardous materials.</li>
                                <li>Use seat belts at all times.</li>
                            </ul>
                        </Section>

                        {/* 5. BOOKING AND SERVICE USAGE */}
                        <Section icon={HiOutlineMapPin} title="5. BOOKING AND SERVICE USAGE">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>All bookings must be made through approved channels.</li>
                                <li>Service availability is subject to confirmation.</li>
                                <li>Clearly communicate pickup and drop-off points.</li>
                            </ul>
                            <p className="font-semibold pt-4">For corporate clients, the following applies:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Rosters must be shared within agreed timelines.</li>
                                <li>Changes made after the cutoff time may incur additional charges.</li>
                            </ul>
                        </Section>

                        {/* 6. PRICING AND PAYMENT TERMS */}
                        <Section icon={HiOutlineCurrencyRupee} title="6. PRICING AND PAYMENT TERMS">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">6.1 Corporate Clients</h3>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Billing will occur on a monthly or otherwise agreed cycle.</li>
                                        <li>Payment must be made within the agreed credit period.</li>
                                        <li>Delayed payments may result in interest charges or service suspension.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">6.2 Individual Customers</h3>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>An advance payment may be required.</li>
                                        <li>Charges include base fare, distance, time, tolls, and applicable taxes.</li>
                                    </ul>
                                </div>
                            </div>
                        </Section>

                        {/* 7. CANCELLATION AND NO-SHOW */}
                        <Section icon={HiOutlineClock} title="7. CANCELLATION AND NO-SHOW">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Cancellation charges apply based on the notice period provided.</li>
                                <li>A passenger no-show may result in a full charge.</li>
                                <li>Cancellations may lead to service restrictions.</li>
                            </ul>
                        </Section>

                        {/* 8. DRIVER AND VEHICLE USAGE RULES */}
                        <Section icon={HiOutlineUserGroup} title="8. DRIVER AND VEHICLE USAGE RULES">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Drivers will adhere to all traffic laws and safety standards.</li>
                                <li>Passengers must not instruct drivers to violate traffic rules.</li>
                                <li>Misuse of vehicles, including illegal activity, overloading, or unsafe behavior, is strictly prohibited.</li>
                            </ul>
                        </Section>

                        {/* 9. LIABILITY AND INSURANCE */}
                        <Section icon={HiOutlineLockClosed} title="9. LIABILITY AND INSURANCE">
                            <p>Vehicles are insured as required under the Motor Vehicles Act, 1988.</p>
                            <p className="font-semibold pt-4">The Company is not liable for the following:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Delays due to traffic, weather, or force majeure</li>
                                <li>Loss of personal belongings</li>
                            </ul>
                            <p className="font-semibold pt-4">In the event of an accident:</p>
                            <p>Liability will be determined by applicable law and insurance coverage.</p>
                        </Section>

                        {/* 10. LIMITATION OF LIABILITY */}
                        <Section icon={HiOutlineExclamationCircle} title="10. LIMITATION OF LIABILITY">
                            <p>To the maximum extent permitted by law:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>The Company&apos;s liability is limited to the value of the service provided.</li>
                                <li>The Company is not liable for indirect or consequential damages.</li>
                            </ul>
                        </Section>

                        {/* 11. CUSTOMER RESPONSIBILITIES */}
                        <Section icon={HiOutlineHandThumbUp} title="11. CUSTOMER RESPONSIBILITIES">
                            <p className="font-semibold">Passengers and clients agree to the following:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Provide accurate booking information.</li>
                                <li>Maintain discipline and comply with all laws.</li>
                                <li>Compensate for any damage caused to vehicles.</li>
                            </ul>
                            <p className="font-semibold pt-4">Corporate clients must ensure the following:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Employees comply with transport policies.</li>
                                <li>Timely communication of schedules.</li>
                            </ul>
                        </Section>

                        {/* 12. DATA PRIVACY, WEBSITE USAGE, AND TRACKING */}
                        <Section icon={HiOutlineGlobeAlt} title="12. DATA PRIVACY, WEBSITE USAGE, AND TRACKING">
                            <p>In accordance with the Information Technology Act, 2000 and other applicable privacy laws:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>When you use our website or services, we may collect information including but not limited to your name, contact details, IP address, browser type, and usage data, as well as location and trip data for operational and safety purposes.</li>
                                <li>Data may be shared with corporate clients for service delivery.</li>
                                <li>The Company will take reasonable steps to protect your personal data and comply with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other applicable data privacy regulations.</li>
                                <li>Please refer to our Privacy Policy for further details.</li>
                            </ul>
                        </Section>

                        {/* 13. FORCE MAJEURE */}
                        <Section icon={HiOutlineExclamationCircle} title="13. FORCE MAJEURE">
                            <p>The Company shall not be liable for failure or delay due to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Natural disasters</li>
                                <li>Strikes, riots, or government restrictions</li>
                                <li>Traffic disruptions or unforeseen events</li>
                            </ul>
                        </Section>

                        {/* 14. TERMINATION */}
                        <Section icon={HiOutlineExclamationCircle} title="14. TERMINATION">
                            <p>The Company may suspend or terminate services:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>For non-payment</li>
                                <li>For misuse or violation of terms</li>
                                <li>For safety or legal concerns</li>
                            </ul>
                            <p className="pt-2">Corporate contracts may be terminated with prior notice as per the agreement.</p>
                        </Section>

                        {/* 15. INDEMNITY */}
                        <Section icon={HiOutlineShieldCheck} title="15. INDEMNITY">
                            <p>The Client agrees to indemnify the Company against:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Misuse of services</li>
                                <li>Legal violations by passengers</li>
                                <li>Damage to vehicles or property</li>
                            </ul>
                        </Section>

                        {/* 16. THIRD-PARTY SERVICES */}
                        <Section icon={HiOutlineTruck} title="16. THIRD-PARTY SERVICES">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>The Company may use partner vehicles or vendors.</li>
                                <li>Such partners must comply with applicable laws.</li>
                                <li>The Company remains the primary service interface.</li>
                            </ul>
                        </Section>

                        {/* 17. DISPUTE RESOLUTION AND JURISDICTION */}
                        <Section icon={HiOutlineScale} title="17. DISPUTE RESOLUTION AND JURISDICTION">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>All disputes shall be governed by Indian law.</li>
                                <li>Courts of Chennai, Tamil Nadu shall have exclusive jurisdiction.</li>
                            </ul>
                        </Section>

                        {/* 18. AMENDMENTS */}
                        <Section icon={HiOutlineDocumentText} title="18. AMENDMENTS">
                            <p>
                                The Company may update these Terms at any time. Continued use of services implies acceptance. All amendments will comply with applicable laws, and material changes will be communicated to clients as required.
                            </p>
                        </Section>

                        {/* 19. CONTACT */}
                        <div className="pt-16 border-t border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                                    <HiOutlinePhone className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">19. CONTACT</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For queries, complaints, or notices regarding these Terms and Conditions or website usage, please contact:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 ring-1 ring-black/5">
                                    <p className="font-bold text-gray-900 text-lg mb-4">Legal Department</p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 group">
                                            <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                                <HiOutlineEnvelope className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                            </div>
                                            <a href="mailto:info@fiestacabs.com" className="text-gray-600 hover:text-primary transition-colors">info@fiestacabs.com</a>
                                        </div>
                                        <div className="flex items-center gap-3 group">
                                            <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                                <HiOutlinePhone className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                            </div>
                                            <a href="tel:+919600437002" className="text-gray-600 hover:text-primary transition-colors">+91 96004 37002</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 flex flex-col justify-center">
                                    <p className="font-bold text-primary text-xl mb-2 italic">Fiesta Smart Mobility</p>
                                    <p className="text-primary/70">Safe • Punctual • Reliable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

