"use client";

import React from "react";

interface BookNowModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookNowModal: React.FC<BookNowModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-lg relative flex flex-col max-h-[90vh]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-[#EF4444] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#DC2626] transition-colors focus:outline-none z-10 border-2 border-white"
                    aria-label="Close modal"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {/* Modal Header */}
                <div className="pt-8 pb-4 px-8 text-center shrink-0">
                    <h2 className="text-3xl font-bold text-gray-900">Book Now!</h2>
                </div>

                {/* Modal Form */}
                <div className="px-8 pb-8 overflow-y-auto custom-scrollbar">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-1">
                                First Name *
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-1">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-1">
                                Company *
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-end mb-1">
                                <label className="block text-sm font-semibold text-gray-800">
                                    Message
                                </label>
                                <span className="text-[10px] text-gray-400">0 / 180</span>
                            </div>
                            <textarea
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                                maxLength={180}
                            ></textarea>
                        </div>
                        <div className="flex justify-between items-center border border-gray-200 bg-gray-50 rounded p-2 md:p-3 w-full mb-2 shadow-sm">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" required id="robot-modal" className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer" />
                                <label htmlFor="robot-modal" className="text-sm text-gray-700 cursor-pointer">I'm not a robot</label>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/reCAPTCHA_icon.png" alt="reCAPTCHA" className="w-6 h-6 object-contain" />
                            </div>
                        </div>
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full bg-[#E51E25] hover:bg-[#c91820] text-white font-bold py-3 px-4 rounded-md transition-colors"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(156, 163, 175, 0.5);
                    border-radius: 20px;
                }
            `}</style>
        </div>
    );
};

export default BookNowModal;
