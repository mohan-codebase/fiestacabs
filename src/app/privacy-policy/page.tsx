import { getMetadata } from "@/src/data/metadata";
import React from "react";
import PageHero from "../../components/common/PageHero";
import {
    HiOutlineDocumentText,
    HiOutlineShieldCheck,
    HiOutlineScale,
    HiOutlineClock,
    HiOutlineLockClosed,
    HiOutlineGlobeAlt,
    HiOutlineHandThumbUp,
    HiOutlineEye,
    HiOutlineFingerPrint,
    HiOutlineCheckBadge,
    HiOutlineShare,
    HiOutlineArrowsPointingOut,
    HiOutlineGlobeAsiaAustralia,
    HiOutlineUserGroup,
    HiOutlineChatBubbleLeftEllipsis,
    HiOutlinePhone,
    HiOutlineEnvelope,
    HiOutlineMapPin
} from "react-icons/hi2";

export const metadata = getMetadata("/privacy-policy");

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

export default function PrivacyPolicy() {
    return (
        <div className="w-full bg-white">
            <PageHero
                title="Privacy Policy"
                subtitle="Your privacy is our priority. Learn how we handle and protect your personal data."
                backgroundImage="/images/about-us/banner/about-us-banner.jpg"
                height="sm"
            />

            <section className="w-full py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Intro */}
                    <div className="mb-16 pb-8 border-b border-gray-100">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                            Last Updated: April 17, 2026
                        </div>
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
                            Privacy Policy
                        </h1>
                        <p className="mt-4 font-bold text-gray-900 flex items-center gap-2">
                            <HiOutlineShieldCheck className="text-primary w-5 h-5" />
                            Fiesta Smart Mobility Private Limited
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* 1. INTRODUCTION */}
                        <Section icon={HiOutlineEye} title="1. INTRODUCTION">
                            <p>
                                Fiesta Smart Mobility Private Limited (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and personal data of users, clients, drivers, employees, and partners.
                            </p>
                            <p>This Privacy Policy explains how we collect, use, disclose, store, and protect personal data when providing our services, including:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Employee Transportation Services (B2B)</li>
                                <li>Rent-a-Car Services (B2C and B2B)</li>
                                <li>Website and digital platform usage</li>
                            </ul>
                            <p className="font-semibold pt-4">This policy is governed by applicable laws of India, including:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>The Digital Personal Data Protection Act, 2023</li>
                                <li>The Information Technology Act, 2000 and applicable rules</li>
                            </ul>
                            <p className="italic pt-4">By using our website or services, you agree to this Privacy Policy.</p>
                        </Section>

                        {/* 2. SCOPE OF THIS POLICY */}
                        <Section icon={HiOutlineArrowsPointingOut} title="2. SCOPE OF THIS POLICY">
                            <p>This Privacy Policy applies to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Corporate clients and their employees are using transport services.</li>
                                <li>Individual customers using the rent-a-car services</li>
                                <li>Drivers, fleet partners, and vendors</li>
                                <li>Website visitors and platform users</li>
                            </ul>
                        </Section>

                        {/* 3. TYPES OF DATA WE COLLECT */}
                        <Section icon={HiOutlineFingerPrint} title="3. TYPES OF DATA WE COLLECT">
                            <p>We collect personal data needed to provide safe, efficient, and compliant transport services.</p>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">3.1 Personal Information</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Name, phone number, email ID</li>
                                        <li>Address and identification details</li>
                                        <li>Emergency contact information</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">3.2 Trip and Location Data</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Pickup and drop locations</li>
                                        <li>GPS tracking and route history</li>
                                        <li>Travel schedules and trip logs</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">3.3 Corporate Employee Data</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Employee ID and organization details</li>
                                        <li>Shift timings and transport allocation</li>
                                        <li>Attendance and trip usage data</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">3.4 Driver and Fleet Partner Data</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Driving license, Aadhaar, PAN</li>
                                        <li>Police verification and background checks</li>
                                        <li>Medical fitness and compliance records</li>
                                        <li>Duty hours, trip logs, and performance data</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">3.5 Payment Information</h3>
                                    <p>Billing details and transaction data. We do not store sensitive financial data, such as card details. Payments are processed through secure third-party providers.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">3.6 Technical Data</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>IP address, browser type</li>
                                        <li>Device information</li>
                                        <li>Website usage data and cookies</li>
                                    </ul>
                                </div>
                            </div>
                        </Section>

                        {/* 4. PURPOSE OF DATA COLLECTION */}
                        <Section icon={HiOutlineCheckBadge} title="4. PURPOSE OF DATA COLLECTION">
                            <p>We process personal data for the following purposes:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>To provide and manage transportation services</li>
                                <li>To ensure passenger and driver safety.</li>
                                <li>To enable GPS tracking and route optimisation</li>
                                <li>To comply with corporate transport policies and SLAs</li>
                                <li>To verify driver credentials and regulatory compliance</li>
                                <li>To process payments and generate invoices.</li>
                                <li>To improve service quality and customer experience</li>
                                <li>To comply with legal and regulatory obligations</li>
                            </ul>
                        </Section>

                        {/* 5. LEGAL BASIS FOR PROCESSING */}
                        <Section icon={HiOutlineScale} title="5. LEGAL BASIS FOR PROCESSING">
                            <p>We process personal data under the Digital Personal Data Protection Act, 2023, based on:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Consent provided by the data principal</li>
                                <li>Legitimate use for service delivery and safety</li>
                                <li>Compliance with legal obligations</li>
                                <li>Performance of contracts with clients and users</li>
                            </ul>
                        </Section>

                        {/* 6. DATA SHARING AND DISCLOSURE */}
                        <Section icon={HiOutlineShare} title="6. DATA SHARING AND DISCLOSURE">
                            <p>We may share personal data with:</p>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">6.1 Corporate Clients</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>For employee transport management</li>
                                        <li>Reporting, billing, and compliance purposes</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">6.2 Service Partners</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Drivers and fleet operators</li>
                                        <li>GPS and technology service providers</li>
                                        <li>Payment gateway providers</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">6.3 Legal Authorities</h3>
                                    <p>Government or regulatory bodies, when required by law.</p>
                                </div>
                            </div>
                            <p className="italic pt-2">We require all third parties to follow appropriate data protection standards.</p>
                        </Section>

                        {/* 7. DATA RETENTION */}
                        <Section icon={HiOutlineClock} title="7. DATA RETENTION">
                            <p>We retain personal data only as long as necessary:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><span className="font-semibold">Trip and location data:</span> As required for operational and compliance purposes</li>
                                <li><span className="font-semibold">Driver and compliance records:</span> As per applicable transport and labour laws</li>
                                <li><span className="font-semibold">Financial data:</span> As per statutory requirements</li>
                            </ul>
                            <p className="pt-2">After the retention period, we securely delete or anonymise data.</p>
                        </Section>

                        {/* 8. DATA SECURITY */}
                        <Section icon={HiOutlineLockClosed} title="8. DATA SECURITY">
                            <p>We implement reasonable security practices, including:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Encryption and secure storage</li>
                                <li>Access control and authentication</li>
                                <li>Monitoring and audit mechanisms</li>
                            </ul>
                            <p className="pt-4 text-sm text-gray-600 italic">
                                While we implement reasonable security practices, no system can be guaranteed completely secure. Users should be aware that sharing data online carries some risk, and we cannot provide absolute assurance against unauthorised access or data breaches.
                            </p>
                        </Section>

                        {/* 9. COOKIES AND TRACKING */}
                        <Section icon={HiOutlineGlobeAlt} title="9. COOKIES AND TRACKING">
                            <p>Our website may use cookies and analytics tools to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Improve user experience</li>
                                <li>Analyse website traffic</li>
                                <li>Enhance platform performance</li>
                            </ul>
                            <p className="pt-2">You can manage cookie settings in your browser.</p>
                        </Section>

                        {/* 10. RIGHTS OF DATA PRINCIPALS */}
                        <Section icon={HiOutlineHandThumbUp} title="10. RIGHTS OF DATA PRINCIPALS">
                            <p>Under applicable Indian laws, users have the right to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Access their personal data.</li>
                                <li>Request correction or updates.</li>
                                <li>Withdraw consent</li>
                                <li>Request deletion of personal data</li>
                            </ul>
                            <p className="pt-2">To make a request, please contact us using the details below.</p>
                        </Section>

                        {/* 11. CROSS-BORDER DATA TRANSFER */}
                        <Section icon={HiOutlineGlobeAsiaAustralia} title="11. CROSS-BORDER DATA TRANSFER">
                            <p>Personal data may be stored or processed outside India with secure cloud providers.</p>
                            <p>We ensure such transfers comply with applicable Indian data protection laws.</p>
                        </Section>

                        {/* 12. CHILDREN’S DATA */}
                        <Section icon={HiOutlineUserGroup} title="12. CHILDREN’S DATA">
                            <p>Our services are not intended for individuals below 18 years of age.</p>
                            <p>We do not knowingly collect data from minors.</p>
                        </Section>

                        {/* 13. GRIEVANCE REDRESSAL */}
                        <Section icon={HiOutlineChatBubbleLeftEllipsis} title="13. GRIEVANCE REDRESSAL">
                            <p>In accordance with Indian law, the Company has appointed a Grievance Officer:</p>
                            <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 italic">
                                <p><span className="font-bold not-italic">Grievance Officer:</span> Legal Head - Fiesta Smart Mobility</p>
                                <p><span className="font-bold not-italic">Email:</span> grievances@fiestacabs.com</p>
                                <p><span className="font-bold not-italic">Contact Number:</span> +91 96004 37002</p>
                            </div>
                            <p className="pt-2">We will address grievances within the timeframe required by law.</p>
                        </Section>

                        {/* 14. CHANGES TO THIS POLICY */}
                        <Section icon={HiOutlineDocumentText} title="14. CHANGES TO THIS POLICY">
                            <p>We may update this Privacy Policy from time to time. We will publish updates on our website with the revised date.</p>
                        </Section>

                        {/* 15. GOVERNING LAW AND JURISDICTION */}
                        <Section icon={HiOutlineScale} title="15. GOVERNING LAW AND JURISDICTION">
                            <p>This Privacy Policy shall be governed by and construed in accordance with the laws of India.</p>
                            <p>All disputes arising out of or in connection with this policy shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>
                        </Section>

                        {/* 16. CONTACT US */}
                        <div className="pt-16 border-t border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                                    <HiOutlinePhone className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">16. CONTACT US</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For questions or concerns regarding this Privacy Policy, please contact:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 ring-1 ring-black/5">
                                    <p className="font-bold text-gray-900 text-lg mb-4">Registered Office</p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                                <HiOutlineMapPin className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                523, Vinayagapuram Main Road, Viduthalai Nagar 1st St, S. Kolathur, Chennai 600 129.
                                            </p>
                                        </div>
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

                                <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 flex flex-col justify-center text-center">
                                    <p className="font-bold text-primary text-xl mb-2 italic">Fiesta Smart Mobility</p>
                                    <p className="text-primary/70">Protecting Your Digital Commute</p>
                                    <div className="mt-6 flex justify-center">
                                        <HiOutlineShieldCheck className="w-12 h-12 text-primary/30" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center text-gray-500 text-sm italic">
                        By using our services, you acknowledge and agree to this Privacy Policy.
                    </div>
                </div>
            </section>
        </div>
    );
}

