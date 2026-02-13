"use client";

import React from "react";
import Image from "next/image";

const ContactFormSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-standard mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Map Side */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-center items-center">
                 <Image src="/images/about-us/form-left-img.jpeg" alt="Contact" width={500} height={500} className="w-full h-full object-cover"/>
                </div>

                {/* Right: Form Side */}
                <div className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">We Love to Hear From You</h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                                <select
                                    id="category"
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
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* Captcha Placeholder */}
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
                            <input type="checkbox" id="robot" className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                            <label htmlFor="robot" className="text-sm text-gray-600 font-medium">I'm not a robot</label>
                            <div className="ml-auto">
                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width={24} height={24} className="opacity-70" />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98]"
                        >
                            SUBMIT
                        </button>

                        <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">Version 2.0</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
