"use client";

import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div 
            className={`fixed bottom-40 md:bottom-44 right-5 md:right-9 z-[60] transition-all duration-500 transform ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
            }`}
        >
            <button
                onClick={scrollToTop}
                className="p-3 rounded-full bg-white text-[#EC2028] shadow-2xl border border-gray-100 hover:bg-[#EC2028] hover:text-white transition-all duration-300 group"
                aria-label="Scroll to top"
            >
                <FaChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
    );
};

export default ScrollToTop;
