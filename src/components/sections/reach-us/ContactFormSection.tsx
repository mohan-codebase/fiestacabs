"use client";

import React, { useState } from "react";
import Image from "next/image";
import { sendEmailAction } from "../../../app/actions/emailActions";

const ContactFormSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("firstName") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            company: formData.get("category") as string, // Mapping category to company for now
            message: formData.get("message") as string,
            formSource: "Reach Us Contact Form",
        };

        const result = await sendEmailAction(data);
        setSubmitStatus(result);
        setIsSubmitting(false);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-standard mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Map Side */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-center items-center">
                    <Image src="/images/about-us/form-left-img.jpeg" alt="Contact" width={500} height={500} className="w-full h-full object-cover" />
                </div>

                {/* Right: Form Side */}
                <div className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">We Love to Hear From You</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">Have questions or need assistance with your employee transport needs? Fill out the form below, and our team will get back to you promptly. We&apos;re here to ensure your journey with Fiesta Smart Mobility is seamless and efficient.</p>

                    {submitStatus?.success ? (
                        <div className="py-12 bg-green-50 rounded-xl border border-green-100 text-center px-6">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-600">Thank you for reaching out. Our team will contact you shortly.</p>
                            <button
                                onClick={() => setSubmitStatus(null)}
                                className="mt-6 text-red-600 font-semibold hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {submitStatus?.success === false && (
                                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-medium">
                                    {submitStatus.message}
                                </div>
                            )}
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                                    <select
                                        id="category"
                                        name="category"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="corporate">Corporate Inquiry</option>
                                        <option value="rental">Car Rental</option>
                                        <option value="support">Customer Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Captcha Placeholder */}
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
                                <input type="checkbox" required id="robot" className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer" />
                                <label htmlFor="robot" className="text-sm text-gray-600 font-medium cursor-pointer">I&apos;m not a robot</label>
                                <div className="ml-auto">
                                    <Image src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width={24} height={24} className="opacity-70" unoptimized />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        SENDING...
                                    </>
                                ) : "SUBMIT"}
                            </button>

                            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">Version 2.0</p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
