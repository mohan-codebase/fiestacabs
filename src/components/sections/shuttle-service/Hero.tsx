"use client";

import React, { useState } from "react";
import Image from "next/image";
import { sendEmailAction } from "../../../app/actions/emailActions";
import BookNowButton from "../../common/BookNowButton";

const Hero = () => {
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
            formSource: "Shuttle Service Hero Form",
        };

        const result = await sendEmailAction(data);
        setSubmitStatus(result);
        setIsSubmitting(false);
    };
    return (
        <section className="relative w-full overflow-hidden">
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
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
                    <div className="text-white">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Corporate Shuttle &amp; Employee Transport Service
                        </h1>
                        <p className="text-lg text-white/90 mb-8">
                            Reliable, comfortable, gate-to-gate commuting solution for your workforce.
                        </p>
                        <BookNowButton
                            className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow"
                        >
                            Book a Shuttle for Your Team
                        </BookNowButton>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                        {submitStatus?.success ? (
                            <div className="py-12 text-center text-gray-800">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                                <p className="mb-4">Your inquiry has been received. Our team will get back to you shortly.</p>
                                <button onClick={() => setSubmitStatus(null)} className="text-[#EC2028] font-semibold">New Inquiry</button>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {submitStatus?.success === false && (
                                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded text-sm">
                                        {submitStatus.message}
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Email Address <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Company <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                    <div className="text-xs text-gray-500 text-right mb-1">0 / 180</div>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        maxLength={180}
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                                    />
                                </div>
                                <div className="flex justify-between items-center border border-gray-200 bg-gray-50 rounded p-2 md:p-3 w-full mb-2 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" required id="robot-shuttle" className="w-5 h-5 rounded border-gray-300 text-[#EC2028] focus:ring-[#EC2028] cursor-pointer" />
                                        <label htmlFor="robot-shuttle" className="text-sm text-gray-700 cursor-pointer">I'm not a robot</label>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <img src="/images/reCAPTCHA_icon.png" alt="reCAPTCHA" className="w-6 h-6 object-contain" />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-semibold py-3 rounded-md flex justify-center items-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            SENDING...
                                        </>
                                    ) : "Submit"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
