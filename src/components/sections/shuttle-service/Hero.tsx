"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { sendEmailAction } from "../../../app/actions/emailActions";
import BookNowButton from "../../common/BookNowButton";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../../components/common/Button";

const Hero = () => {
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
            formSource: "Shuttle Service Hero Form",
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
        <section className="relative w-full overflow-hidden min-h-[80vh] lg:min-h-[90vh] xl:min-h-screen flex items-center">
            <div className="absolute inset-0">
                <Image
                    src="/images/shuttle-service/hero.jpg"
                    alt="Corporate shuttle and employee transport service"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
                    <div className="text-white pr-0 lg:pr-10">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Corporate Shuttle &amp; Employee Transport Service
                        </h1>
                        <p className="text-lg text-white/90 mb-8">
                            Reliable, comfortable, gate-to-gate commuting solution for your workforce.
                        </p>
                        <BookNowButton
                            className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow mt-4"
                        >
                            Book a Shuttle for Your Team
                        </BookNowButton>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
                        {submitStatus?.success ? (
                            <div className="py-12 text-center text-gray-800">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                                <p className="mb-4 text-gray-600">Your inquiry has been received. Our team will get back to you shortly.</p>
                                <button onClick={() => setSubmitStatus(null)} className="text-[#EC2028] font-semibold hover:underline">New Inquiry</button>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {submitStatus?.success === false && (
                                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                                        {submitStatus.message}
                                    </div>
                                )}
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 mb-1">
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 mb-1">
                                        Email Address <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 mb-1">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 mb-1">
                                        Company <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="block text-xs font-bold text-gray-800">Message</label>
                                        <span className="text-[10px] text-gray-500">0 / 180</span>
                                    </div>
                                    <textarea
                                        rows={3}
                                        name="message"
                                        maxLength={180}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-gray-800"
                                    />
                                </div>
                                <div className="mb-4 overflow-hidden rounded">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                                        size="normal"
                                    />
                                </div>
                                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#EC2028] gap-2 disabled:opacity-50">
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

export default Hero;
