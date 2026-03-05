"use client";

import React, { ReactNode } from "react";
import { useModal } from "../../context/ModalContext";

interface BookNowButtonProps {
    children: ReactNode;
    className?: string;
}

const BookNowButton = ({ children, className }: BookNowButtonProps) => {
    const { openModal } = useModal();

    return (
        <button
            type="button"
            onClick={openModal}
            className={className}
        >
            {children}
        </button>
    );
};

export default BookNowButton;
