import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="relative bg-black text-white pt-16 pb-8 border-t border-gray-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/footer/footer.png"
                    alt="Footer Background"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={100}
                />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Logo & Description */}
                    <div>
                        <div className="mb-6 flex items-center justify-start">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/logo/logo.png"
                                    alt="Fiesta Cabs Logo"
                                    width={140}
                                    height={50}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            With 27 years of proven expertise, Fiesta Smart Mobility Private Limited stands as a leading provider of integrated employee transport services and premium car rental solutions across India. Established in 1998 in Chennai, we have grown into a pan-India operation supported by a dedicated workforce of over 300 employees.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Instagram">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Facebook">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="LinkedIn">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: About Us Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">About Us</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/clients" className="text-gray-400 hover:text-white transition-colors">Clients</Link></li>
                            <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Reach us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Our Services Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services/employee-transport" className="text-gray-400 hover:text-white transition-colors">Employee Transport solutions</Link></li>
                            <li><Link href="/services/outstation" className="text-gray-400 hover:text-white transition-colors">Outstation Rides</Link></li>
                            <li><Link href="/services/wedding" className="text-gray-400 hover:text-white transition-colors">Wedding Cars</Link></li>
                            <li><Link href="/services/shuttle" className="text-gray-400 hover:text-white transition-colors">Shuttle Service</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Contact Info</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </span>
                                <div>
                                    <strong className="block text-white mb-1">24/7 Support</strong>
                                    <span className="text-gray-400 text-sm">044 - 2220 0095 / 044 - 2230 0995</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </span>
                                <div>
                                    <strong className="block text-white mb-1">Chennai Office (10 AM to 06 PM)</strong>
                                    <span className="text-gray-400 text-sm">044 - 4771 10279 / +919600 437002</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </span>
                                <div>
                                    <strong className="block text-white mb-1">Bangalore Booking</strong>
                                    <span className="text-gray-400 text-sm">080 - 4124 8273 / +91 96203 63632</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </span>
                                <div>
                                    <strong className="block text-white mb-1">Sales Enquiry</strong>
                                    <span className="text-gray-400 text-sm">+91 78458 67512</span>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <a href="/contact" className="inline-flex items-center bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 py-2 rounded shadow transition-colors font-bold">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" /><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" /></svg>
                                Contact Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Image
                            src="/images/logo/logo.png"
                            alt="Fiesta Cabs Logo"
                            width={100}
                            height={30}
                            className="h-6 w-auto object-contain"
                        />
                    </div>
                    <div>
                        Copyright © {new Date().getFullYear()}. Fiesta Smart Mobility Private Limited.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;