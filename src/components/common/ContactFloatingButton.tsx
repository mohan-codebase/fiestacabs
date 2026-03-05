"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useModal } from "../../context/ModalContext";

const ContactFloatingButton = () => {
    const { openModal } = useModal();

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                onClick={openModal}
                className="bg-[#E51E25] text-white px-6 py-3 rounded-lg shadow-2xl hover:bg-red-700 transition-all duration-300 cursor-pointer flex items-center gap-3 group font-bold"
                aria-label="Contact Now"
            >
                <FaPhoneAlt size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">Contact Now</span>
            </button>
        </div>
    );
};

export default ContactFloatingButton;
