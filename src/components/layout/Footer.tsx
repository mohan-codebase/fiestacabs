import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { contactInfo } from '../../data/contactInfo';
import Button from "../../components/common/Button";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="relative w-full px-4 pb-10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto bg-white/75 backdrop-blur-md rounded-[48px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100/50 relative">
                {/* Background Image inside the card */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/home/footer/footer.jpg"
                        alt="Footer Background"
                        fill
                        className="object-cover opacity-10"
                    />
                </div>

                <div className="relative z-10 pt-16 pb-8 px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Column 1: Logo & Description */}
                        <div>
                            <div className="mb-6 flex items-center justify-start">
                                <Link href="/" className="flex items-center gap-2">
                                    <Image
                                        src="/images/logo/logo.png"
                                        alt="Fiesta Cabs Logo"
                                        width={140}
                                        height={50}
                                        className="h-10 w-auto object-contain"
                                    />
                                </Link>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                With 28 years of proven expertise, Fiesta Smart Mobility Private Limited stands as a leading provider of integrated employee transport services and premium car rental solutions across India. Established in 1998 in Chennai, we have grown into a pan-India operation supported by a dedicated workforce of over 300 employees.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/fiestasmartmobility/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-700 p-2.5 rounded-full hover:bg-[#EC2028] btn-animated hover:text-white transition-colors" aria-label="Instagram">
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                                <a href="https://www.facebook.com/FiestaSmartMobility" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-700 p-2.5 rounded-full hover:bg-[#EC2028] btn-animated hover:text-white transition-colors" aria-label="Facebook">
                                    <FaFacebook className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/company/fiestasmartmobility" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-700 p-2.5 rounded-full hover:bg-[#EC2028] btn-animated hover:text-white transition-colors" aria-label="LinkedIn">
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: About Us Links */}
                        <div>
                            <h3 className="text-[#EC2028] text-lg font-bold mb-6">About Us</h3>
                            <ul className="space-y-3">
                                <li><Link href="/" className="text-gray-600 hover:text-[#EC2028] transition-colors font-medium">Home</Link></li>
                                <li><Link href="/about-us" className="text-gray-600 hover:text-[#EC2028] transition-colors font-medium">About Us</Link></li>
                                <li><Link href="/clients" className="text-gray-600 hover:text-[#EC2028] transition-colors font-medium">Clients</Link></li>
                                <li><Link href="/gallery" className="text-gray-600 hover:text-[#EC2028] transition-colors font-medium">Gallery</Link></li>
                                <li><Link href="/reach-us" className="text-gray-600 hover:text-[#EC2028] transition-colors font-medium">Reach us</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Our Services Links */}
                        <div>
                            <h3 className="text-[#EC2028] text-lg font-bold mb-6">Our Services</h3>
                            <ul className="space-y-3">
                                <li><Link href="/employee-transport-services" className="text-gray-600 hover:text-[#EC2028] transition-colors font-medium">Employee Transport solutions</Link></li>
                                <li><Link href="/outstation-rides" className="text-gray-600 hover:text-[#EC2028] transition-colors font-medium">Outstation Rides</Link></li>
                                <li><Link href="/wedding-cars" className="text-gray-600 hover:text-[#EC2028] transition-colors font-medium">Wedding Cars</Link></li>
                                <li><Link href="/shuttle-service" className="text-gray-600 hover:text-[#EC2028] transition-colors font-medium">Shuttle Service</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact Info */}
                        <div>
                            <h3 className="text-[#EC2028] text-lg font-bold mb-6">Contact Info</h3>
                            <ul className="space-y-6">
                                {Object.values(contactInfo).map((info, index) => {
                                    const isEmail = info.label.toLowerCase().includes('email');
                                    return (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-3 mt-1 text-[#EC2028] p-2 bg-red-50 rounded-full">
                                                {info.icon}
                                            </span>
                                            <div>
                                                <strong className="block text-gray-800 mb-1">{info.label}</strong>
                                                <span className="text-gray-600 text-sm">
                                                    {isEmail ? (
                                                        <a href={`mailto:${info.numbers}`} className="hover:text-[#EC2028] transition-colors">
                                                            {info.numbers}
                                                        </a>
                                                    ) : (
                                                        info.numbers.split('/').map((num, i, arr) => {
                                                            const cleanNum = num.trim();
                                                            const telNum = cleanNum.replace(/[\s-]/g, '');
                                                            return (
                                                                <React.Fragment key={i}>
                                                                    <a href={`tel:${telNum}`} className="hover:text-[#EC2028] transition-colors">
                                                                        {cleanNum}
                                                                    </a>
                                                                    {i < arr.length - 1 && " / "}
                                                                </React.Fragment>
                                                            );
                                                        })
                                                    )}
                                                </span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>

                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center text-sm">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                        </div>
                        </div>
                        <div className="text-gray-500 font-medium text-center md:text-left">
                            Copyright © {new Date().getFullYear()}. Fiesta Smart Mobility Private Limited.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
