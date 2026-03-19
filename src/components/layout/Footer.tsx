import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { contactInfo } from '../../data/contactInfo';
import Button from "../../components/common/Button";

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
                                <a href="https://www.instagram.com/fiestasmartmobility/" className="bg-gray-100 text-gray-700 p-2.5 rounded-full hover:bg-[#EC2028] btn-animated hover:text-white transition-colors" aria-label="Instagram">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427-.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="https://www.facebook.com/FiestaSmartMobility" className="bg-gray-100 text-gray-700 p-2.5 rounded-full hover:bg-[#EC2028] btn-animated hover:text-white transition-colors" aria-label="Facebook">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/fiestasmartmobility" className="bg-gray-100 text-gray-700 p-2.5 rounded-full hover:bg-[#EC2028] btn-animated hover:text-white transition-colors" aria-label="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
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
                            <div className="mt-8">
                                <Button href="/reach-us" className=" bg-[#EC2028] btn-animated transition-transform transform active:scale-95 w-full md:w-auto">
                                    Contact Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center text-sm">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <Image
                                src="/images/logo/logo.png"
                                alt="Fiesta Cabs Logo"
                                width={100}
                                height={30}
                                className="h-6 w-auto object-contain"
                            />
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
