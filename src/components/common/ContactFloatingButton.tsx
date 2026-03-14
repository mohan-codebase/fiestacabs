"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { useModal } from "../../context/ModalContext";

const ContactFloatingButton = () => {
    const { openModal } = useModal();
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    const isReachUsPage = pathname === "/reach-us";

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div 
            className={`fixed bottom-24 md:bottom-28 right-4 md:right-8 z-50 transition-all duration-500 transform ${
                isVisible && !(isReachUsPage) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
            } md:block ${isReachUsPage ? "hidden md:block" : "block"}`}
        >
            <button
                onClick={openModal}
                className="bg-[#EC2028] btn-animated text-white px-4 py-2.5 md:px-6 md:py-3 rounded-full shadow-2xl transition-all duration-300 cursor-pointer flex items-center gap-2 md:gap-3 group font-bold"
                aria-label="Contact Now"
            >
                <FaPhoneAlt size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm md:text-lg">Contact Now</span>
            </button>
        </div>
    );
};

export default ContactFloatingButton;
