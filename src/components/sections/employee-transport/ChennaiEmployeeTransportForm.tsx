"use client";

import React, { useState } from "react";
import { sendEmailAction } from "../../../app/actions/emailActions";

const ChennaiEmployeeTransportForm = () => {
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
            formSource: "Chennai Employee Transport Page",
        };

        const result = await sendEmailAction(data);
        setSubmitStatus(result);
        setIsSubmitting(false);
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto lg:ml-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get A Custom Quote</h3>
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
                        <label className="block text-sm font-bold text-gray-800 mb-1.5">
                            First Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028]"
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
                            className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028]"
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
                            className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028]"
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
                            className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-800 mb-1.5">
                            Message
                        </label>
                        <textarea
                            rows={3}
                            name="message"
                            maxLength={180}
                            className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3 rounded transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
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
                </form>
            )}
        </div>
    );
};

export default ChennaiEmployeeTransportForm;
