"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BookNowModal from "../common/BookNowModal";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBookNowModalOpen, setIsBookNowModalOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const isServicesPath =
        pathname === "/services-offered" || pathname === "/employee-transport-services";

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
            setActiveSubDropdown(null); // Close sub if parent closes
        } else {
            setActiveDropdown(name);
            setActiveSubDropdown(null); // Reset sub when switching parents
        }
    };

    const toggleSubDropdown = (name: string) => {
        if (activeSubDropdown === name) {
            setActiveSubDropdown(null);
        } else {
            setActiveSubDropdown(name);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] text-white shadow-md">
            <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center">
                    {/* Placeholder for Logo if image not available, mimicking the design */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo/logo.png"
                            alt="Fiesta Cabs Logo"
                            width={150}
                            height={50}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="hover:text-red-500 transition-colors">
                        Home
                    </Link>

                    <div className="relative group">
                        <Link
                            href="/about-us"
                            className={`flex items-center ${pathname === "/about-us" ? "text-[#EC2028]" : "hover:text-red-500"} transition-colors`}
                        >
                            About Us
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </Link>
                        <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                            <Link href="/about-us" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                            <Link
                                href="/about-us#leaders"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={(e) => {
                                    if (pathname === '/about-us') {
                                        e.preventDefault();
                                        const element = document.getElementById('leaders');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Our Team
                            </Link>
                            <Link href="/about-us#why-fiesta" className="block px-4 py-2 hover:bg-gray-100">Why Fiesta</Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <Link
                            href="/services-offered"
                            className={`flex items-center ${isServicesPath ? "text-[#EC2028]" : "hover:text-red-500"} transition-colors`}
                        >
                            Services
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </Link>
                        <div className="absolute left-0 mt-2 w-72 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                            <Link href="/employee-transport-services" className="block px-4 py-2 hover:bg-gray-100">Employee Transport Services</Link>
                            <Link href="/shuttle-service" className="block px-4 py-2 hover:bg-gray-100">Shuttle Service</Link>
                            <div className="relative group/sub">
                                <Link
                                    href="/premium-car-rentals"
                                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 w-full"
                                >
                                    Premium Car Rentals
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </Link>
                                <div className="absolute left-full top-0 ml-1 w-64 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform origin-top-left z-50">
                                    <Link href="/outstation-rides" className="block px-4 py-2 hover:bg-gray-100">Outstation Rides</Link>
                                    <Link href="/wedding-cars" className="block px-4 py-2 hover:bg-gray-100">Wedding Cars</Link>
                                    <Link href="/corporate-car-rental-service" className="block px-4 py-2 hover:bg-gray-100">Corporate Car Rental Service</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/our-journey" className="hover:text-red-500 transition-colors">
                        Our Journey
                    </Link>
                    <Link href="/clients" className="hover:text-red-500 transition-colors">
                        Clients
                    </Link>
                    <Link href="/gallery" className="hover:text-red-500 transition-colors">
                        Gallery
                    </Link>
                    <Link href="/blog" className={`${pathname === "/blog" ? "text-[#EC2028]" : "hover:text-red-500"} transition-colors`}>
                        Blog
                    </Link>
                    <Link href="/reach-us" className="hover:text-red-500 transition-colors">
                        Reach Us
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <button
                        onClick={() => setIsBookNowModalOpen(true)}
                        className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-5 py-2 rounded shadow transition-colors font-semibold"
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        {isMobileMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-[#1a1a1a] border-t border-gray-700">
                    <nav className="flex flex-col p-4 space-y-3">
                        <Link href="/" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Home</Link>

                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <Link
                                    href="/about-us"
                                    className={`${pathname === "/about-us" ? "text-[#EC2028]" : "hover:text-red-500"} transition-colors`}
                                    onClick={toggleMobileMenu}
                                >
                                    About Us
                                </Link>
                                <button
                                    onClick={() => toggleDropdown('about')}
                                    className="p-1 hover:text-red-500 transition-colors focus:outline-none"
                                    aria-label="Toggle about menu"
                                >
                                    <svg className={`w-4 h-4 transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                            </div>
                            {activeDropdown === 'about' && (
                                <div className="pl-4 mt-2 space-y-2 text-gray-300">
                                    <Link href="/about-us" className="block hover:text-white" onClick={toggleMobileMenu}>About Us</Link>
                                    <Link
                                        href="/about-us#leaders"
                                        className="block hover:text-white"
                                        onClick={(e) => {
                                            toggleMobileMenu();
                                            if (pathname === '/about-us') {
                                                e.preventDefault();
                                                const element = document.getElementById('leaders');
                                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        Our Team
                                    </Link>
                                    <Link href="/mission" className="block hover:text-white" onClick={toggleMobileMenu}>Mission & Vision</Link>
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <Link
                                    href="/services-offered"
                                    className={`${isServicesPath ? "text-[#EC2028]" : "hover:text-red-500"} transition-colors`}
                                    onClick={toggleMobileMenu}
                                >
                                    Services
                                </Link>
                                <button
                                    onClick={() => toggleDropdown("services")}
                                    className="p-1 hover:text-red-500 transition-colors focus:outline-none"
                                    aria-label="Toggle services menu"
                                >
                                    <svg className={`w-4 h-4 transform ${activeDropdown === "services" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                            </div>
                            {activeDropdown === "services" && (
                                <div className="pl-4 mt-2 space-y-2 text-gray-300">
                                    <Link href="/employee-transport-services" className="block hover:text-white" onClick={toggleMobileMenu}>Employee Transport Services</Link>
                                    <Link href="/shuttle-service" className="block hover:text-white" onClick={toggleMobileMenu}>Shuttle Service</Link>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <Link href="/premium-car-rentals" className="block hover:text-white py-1" onClick={toggleMobileMenu}>Premium Car Rentals</Link>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleSubDropdown('premium');
                                                }}
                                                className="p-1 hover:text-red-500 transition-colors focus:outline-none"
                                            >
                                                <svg className={`w-4 h-4 transform ${activeSubDropdown === 'premium' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </button>
                                        </div>
                                        {activeSubDropdown === 'premium' && (
                                            <div className="pl-4 mt-1 space-y-1 text-gray-400 text-sm">
                                                <Link href="/outstation-rides" className="block hover:text-white" onClick={toggleMobileMenu}>Outstation Rides</Link>
                                                <Link href="/wedding-cars" className="block hover:text-white" onClick={toggleMobileMenu}>Wedding Cars</Link>
                                                <Link href="/corporate-car-rental-service" className="block hover:text-white" onClick={toggleMobileMenu}>Corporate Car Rental Service</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/our-journey" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Our Journey</Link>
                        <Link href="/clients" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Clients</Link>
                        <Link href="/gallery" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Gallery</Link>
                        <Link
                            href="/blog"
                            className={`${pathname === "/blog" ? "text-[#EC2028]" : "hover:text-red-500"} transition-colors`}
                            onClick={toggleMobileMenu}
                        >
                            Blog
                        </Link>
                        <Link href="/reach-us" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Reach Us</Link>

                        <button
                            onClick={() => {
                                toggleMobileMenu();
                                setIsBookNowModalOpen(true);
                            }}
                            className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-5 py-2 rounded shadow transition-colors font-semibold text-center mt-4 w-full"
                        >
                            Book Now
                        </button>
                    </nav>
                </div>
            )}
            {/* Book Now Modal */}
            <BookNowModal
                isOpen={isBookNowModalOpen}
                onClose={() => setIsBookNowModalOpen(false)}
            />
        </header>
    );
};

export default Header;
