"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import BookNowButton from "../../common/BookNowButton";
import { sendEmailAction } from "../../../app/actions/emailActions";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../../components/common/Button";

const CorporateHero = () => {
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
            company: formData.get("company") as string,
            message: formData.get("message") as string,
            formSource: "Corporate Hero Form",
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
        <section className="relative w-full min-h-[600px] flex items-center justify-center pt-20 pb-16 lg:py-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/services-offered/premium-car-rentals/corporate-car-rental-services/unnamed-e1764761325394.jpg"
                    alt="Corporate Car Rental Service"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Best Corporate Car Rental Service
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Discover how to pick a reliable, cost-efficient, and professional car rental service that meets your company&apos;s travel needs — with confidence, safety, and convenience.
                        </p>
                        <BookNowButton className="bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded text-lg transition-colors">
                            Get A Free Quote
                        </BookNowButton>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto lg:ml-auto">
                        {submitStatus?.success ? (
                            <div className="py-12 text-center text-gray-800">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Inquiry Sent!</h3>
                                <p className="mb-4 text-gray-600">Thank you for your interest. Our corporate team will reach out shortly.</p>
                                <button onClick={() => setSubmitStatus(null)} className="text-[#EC2028] font-semibold hover:underline">New Inquiry</button>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {submitStatus?.success === false && (
                                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded text-sm">
                                        {submitStatus.message}
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        Email Address <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        Company <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        rows={2}
                                        name="message"
                                        maxLength={180}
                                        className="w-full rounded border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors resize-none"
                                    />
                                </div>
                                <div className="mb-4 overflow-hidden rounded">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                                        size="normal"
                                    />
                                </div>
                                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#EC2028] rounded mt-2 gap-2 disabled:opacity-50">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            SENDING...
                                        </>
                                    ) : "SUBMIT"}
                                </Button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateHero;
