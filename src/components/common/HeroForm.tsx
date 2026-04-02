"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import BookNowButton from "./BookNowButton";
import Button from "../../components/common/Button";
import ContactForm from "./ContactForm";

interface HeroFormProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    ctaText?: string;
    ctaLink?: string;
    imageClassName?: string;
}

const HeroForm = ({
    title,
    subtitle,
    imageSrc,
    ctaText = "Get a Free Quote",
    ctaLink = "#",
    imageClassName,
}: HeroFormProps) => {
    const shouldOpenQuoteModal = ctaText.toLowerCase().includes("free quote") || ctaLink === "#" || ctaLink === "#booking-form" || !ctaLink;

    return (
        <section className="relative w-full overflow-visible min-h-screen lg:h-screen flex items-center pt-0">
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    priority
                    className={`object-cover ${imageClassName || ""}`}
                />
                <div className="absolute inset-0 bg-black/60 md:bg-black/40 md:bg-gradient-to-r md:from-black/10 md:via-black/50 md:to-black/80" />
            </div>
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-32 lg:pt-32 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                    <div className="text-white pr-0 lg:pr-10">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">{title}</h1>
                        {subtitle && <p className="text-lg text-white/90 mb-8">{subtitle}</p>}
                        {shouldOpenQuoteModal ? (
                            <BookNowButton className="mt-4 px-8 py-3">
                                {ctaText}
                            </BookNowButton>
                        ) : (
                            <Button href={ctaLink} className="mt-4">
                                {ctaText}
                            </Button>
                        )}
                    </div>

                    <ContactForm 
                        formSource={`${title} Hero Form`}
                        containerClassName="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-[420px] mx-auto lg:ml-auto lg:mr-0" 
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroForm;
