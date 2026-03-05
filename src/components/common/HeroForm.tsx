"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookNowButton from "./BookNowButton";
import { sendEmailAction } from "../../app/actions/emailActions";

interface HeroFormProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    ctaText?: string;
    ctaLink?: string;
    imageClassName?: string;
}

const HeroForm = ({
    title,
    subtitle,
    imageSrc,
    ctaText = "Get a Free Quote",
    ctaLink = "#",
    imageClassName,
}: HeroFormProps) => {
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
            company: formData.get("company") as string,
            message: formData.get("message") as string,
            formSource: `${title} Hero Form`,
        };

        const result = await sendEmailAction(data);
        setSubmitStatus(result);
        setIsSubmitting(false);
    };

    const shouldOpenQuoteModal = ctaText.toLowerCase().includes("free quote") || ctaLink === "#" || ctaLink === "#booking-form" || !ctaLink;

    return (
        <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    priority
                    className={`object-cover ${imageClassName || ""}`}
                />
                <div className="absolute inset-0 bg-black/60 md:bg-black/40 md:bg-gradient-to-r md:from-black/10 md:via-black/50 md:to-black/80" />
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">{title}</h1>
                        {subtitle && <p className="text-lg text-white/90 mb-8">{subtitle}</p>}
                        {shouldOpenQuoteModal ? (
                            <BookNowButton className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded shadow mt-4">
                                {ctaText}
                            </BookNowButton>
                        ) : (
                            <Link
                                href={ctaLink}
                                className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded shadow mt-4"
                            >
                                {ctaText}
                            </Link>
                        )}
                    </div>

                    <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
                        {submitStatus?.success ? (
                            <div className="py-12 text-center text-gray-800">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                                <p className="mb-4 text-gray-600">Your inquiry has been received. Our team will contact you shortly.</p>
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
                                    <label className="block text-xs font-bold text-gray-800 mb-1">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 mb-1">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-800 mb-1">
                                        Company *
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
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
                                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
                                    />
                                </div>

                                {/* Captcha */}
                                <div className="flex justify-between items-center border border-gray-200 bg-gray-50 rounded p-2 md:p-3 w-full sm:w-[300px] mb-4 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" required id="robot-hero" className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer" />
                                        <label htmlFor="robot-hero" className="text-sm text-gray-700 cursor-pointer">I'm not a robot</label>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-8 h-8 relative">
                                            <Image src="/images/reCAPTCHA_icon.png" alt="reCAPTCHA" fill className="object-contain" />
                                        </div>
                                        <div className="text-[8px] text-gray-500 text-center mt-1">
                                            Privacy - Terms
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold tracking-wide text-sm py-3 rounded disabled:opacity-50 flex justify-center items-center gap-2"
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

                                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-4">Version 2.0</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroForm;
