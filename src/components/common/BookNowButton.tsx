"use client";

import React, { ReactNode } from "react";
import { useModal } from "../../context/ModalContext";

interface BookNowButtonProps {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "outline" | "ghost";
}

const BookNowButton = ({ children, className, variant = "primary" }: BookNowButtonProps) => {
    const { openModal } = useModal();

    const baseStyles =
        "inline-flex items-center justify-center rounded-full font-semibold px-6 py-3 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EC2028] disabled:opacity-60 disabled:cursor-not-allowed";

    const variantStyles: Record<NonNullable<BookNowButtonProps["variant"]>, string> = {
        primary: "bg-[#EC2028] text-white shadow-md hover:bg-red-700",
        outline: "border border-slate-300 text-slate-900 bg-white hover:bg-slate-100",
        ghost: "bg-transparent text-[#EC2028] hover:bg-[#EC2028]/10",
    };

    return (
        <button
            type="button"
            onClick={openModal}
            className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`.trim()}
        >
            {children}
        </button>
    );
};

export default BookNowButton;
