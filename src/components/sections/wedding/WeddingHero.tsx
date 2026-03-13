"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { sendEmailAction } from "../../../app/actions/emailActions";
import BookNowButton from "../../common/BookNowButton";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../../components/common/Button";

const WeddingHero = () => {
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
            formSource: "Wedding Hero Form",
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
                    src="/images/wedding/wedding-live-bg.jpeg"
                    alt="Luxury Wedding Cars Rentals"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Dark Overlay to make text pop like the live site */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Luxury & Wedding Cars Rentals
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Make your special day unforgettable with Fiesta’s luxury wedding car rentals.
                        </p>
                        <BookNowButton className="bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded text-lg transition-colors">
                            Book Now
                        </BookNowButton>
                    </div>

                    {/* Right Form Content */}
                    <div id="booking-form" className="bg-[#F8F9FA] rounded-[20px] shadow-2xl p-6 md:p-8 w-full max-w-[420px] mx-auto lg:ml-auto">
                        {submitStatus?.success ? (
                            <div className="py-12 text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                <p className="text-gray-600">Your wedding inquiry has been received. We'll contact you shortly.</p>
                                <button onClick={() => setSubmitStatus(null)} className="mt-4 text-[#EC2028] font-semibold">New Inquiry</button>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleSubmit}>
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
                                    <div className="flex justify-between items-center mb-1.5">
                                        <label className="block text-sm font-bold text-gray-800">Message</label>
                                        <span className="text-[10px] text-gray-500">0 / 180</span>
                                    </div>
                                    <textarea
                                        rows={2}
                                        name="message"
                                        maxLength={180}
                                        className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] transition-colors resize-none"
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
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                            </svg>
                                            Contact Now
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WeddingHero;
