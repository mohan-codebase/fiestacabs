"use client";

import React from "react";
import { useModal } from "../../context/ModalContext";
import BookNowModal from "./BookNowModal";

const GlobalModal = () => {
    const { isModalOpen, closeModal } = useModal();

    return (
        <BookNowModal
            isOpen={isModalOpen}
            onClose={closeModal}
        />
    );
};

export default GlobalModal;
