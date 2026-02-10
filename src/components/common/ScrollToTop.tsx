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

    // Set the top scroll offset
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
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 animate-bounce cursor-pointer flex items-center justify-center group"
                    aria-label="Scroll to top"
                >
                    <FaChevronUp className="group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
