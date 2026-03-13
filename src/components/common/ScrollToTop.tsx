"use client";

import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import Button from "../../components/common/Button";

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
                <Button onClick={scrollToTop} className="bg-primary p-3 duration-300 animate-bounce cursor-pointer group" aria-label="Scroll to top">
                    <FaChevronUp className="group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                </Button>
            )}
        </div>
    );
};

export default ScrollToTop;
