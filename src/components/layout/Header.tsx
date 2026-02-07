"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] text-white shadow-md">
            <div className="container mx-auto px-4 py-7 flex items-center justify-between">
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
                        <button className="flex items-center hover:text-red-500 transition-colors focus:outline-none">
                            About Us
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">Company Profile</Link>
                            <Link href="/team" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link>
                            <Link href="/mission" className="block px-4 py-2 hover:bg-gray-100">Mission & Vision</Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <button className="flex items-center hover:text-red-500 transition-colors focus:outline-none">
                            Services
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                            <Link href="/services/corporate" className="block px-4 py-2 hover:bg-gray-100">Corporate Travel</Link>
                            <Link href="/services/events" className="block px-4 py-2 hover:bg-gray-100">Event Transportation</Link>
                            <Link href="/services/rentals" className="block px-4 py-2 hover:bg-gray-100">Car Rentals</Link>
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
                    <Link href="/blog" className="hover:text-red-500 transition-colors">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:text-red-500 transition-colors">
                        Reach Us
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link href="/book-now" className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-5 py-2 rounded shadow transition-colors font-semibold">
                        Book Now
                    </Link>
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
                            <button
                                onClick={() => toggleDropdown('about')}
                                className="flex items-center justify-between w-full hover:text-red-500 transition-colors focus:outline-none"
                            >
                                About Us
                                <svg className={`w-4 h-4 transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            {activeDropdown === 'about' && (
                                <div className="pl-4 mt-2 space-y-2 text-gray-300">
                                    <Link href="/about" className="block hover:text-white" onClick={toggleMobileMenu}>Company Profile</Link>
                                    <Link href="/team" className="block hover:text-white" onClick={toggleMobileMenu}>Our Team</Link>
                                    <Link href="/mission" className="block hover:text-white" onClick={toggleMobileMenu}>Mission & Vision</Link>
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                onClick={() => toggleDropdown('services')}
                                className="flex items-center justify-between w-full hover:text-red-500 transition-colors focus:outline-none"
                            >
                                Services
                                <svg className={`w-4 h-4 transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            {activeDropdown === 'services' && (
                                <div className="pl-4 mt-2 space-y-2 text-gray-300">
                                    <Link href="/services/corporate" className="block hover:text-white" onClick={toggleMobileMenu}>Corporate Travel</Link>
                                    <Link href="/services/events" className="block hover:text-white" onClick={toggleMobileMenu}>Event Transportation</Link>
                                    <Link href="/services/rentals" className="block hover:text-white" onClick={toggleMobileMenu}>Car Rentals</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/our-journey" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Our Journey</Link>
                        <Link href="/clients" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Clients</Link>
                        <Link href="/gallery" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Gallery</Link>
                        <Link href="/blog" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Blog</Link>
                        <Link href="/contact" className="hover:text-red-500 transition-colors" onClick={toggleMobileMenu}>Reach Us</Link>

                        <Link href="/book-now" className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-5 py-2 rounded shadow transition-colors font-semibold text-center mt-4" onClick={toggleMobileMenu}>
                            Book Now
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;