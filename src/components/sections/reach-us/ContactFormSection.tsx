"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { sendEmailAction } from "../../../app/actions/emailActions";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../../components/common/Button";

const ContactFormSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const captchaToken = recaptchaRef.current?.getValue();
        if (!captchaToken) {
            setSubmitStatus({ success: false, message: "Please complete the CAPTCHA." });
            return;
        }

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
            captchaToken: captchaToken,
        };

        const result = await sendEmailAction(data);
        setSubmitStatus(result);
        setIsSubmitting(false);

        if (result.success) {
            recaptchaRef.current?.reset();
        }
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-[0_16px_36px_rgba(15,23,42,0.08)] border border-slate-100 p-6 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                        {/* Map/visual */}
                        <div className="w-full">
                            <div className="relative w-full h-full min-h-[520px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                                <Image
                                    src="/images/reach-us/WhatsApp-Image-2026-01-27-at-11.09.32-AM.jpeg"
                                    alt="Pan India presence map"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-200 shadow-[0_10px_28px_rgba(15,23,42,0.08)] flex flex-col h-full">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">We Love to Hear From You</h2>
                            {submitStatus?.success ? (
                                <div className="py-8 bg-green-50 rounded-xl border border-green-100 text-center px-4">
                                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Message sent!</h3>
                                    <p className="text-slate-600 text-sm">Thanks for reaching out. Our team will contact you shortly.</p>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        className="mt-5 text-[#EC2028] font-semibold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    {submitStatus?.success === false && (
                                        <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-medium">
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#EC2028] focus:border-[#EC2028] outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#EC2028] focus:border-[#EC2028] outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#EC2028] focus:border-[#EC2028] outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-2">Company *</label>
                                            <input
                                                type="text"
                                                id="category"
                                                name="category"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#EC2028] focus:border-[#EC2028] outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#EC2028] focus:border-[#EC2028] outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="overflow-hidden rounded">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                                            size="normal"
                                        />
                                    </div>

                                    <Button type="submit" disabled={isSubmitting} className="w-full bg-[#EC2028] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : "Submit"}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
