import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineCheckCircle } from 'react-icons/md';

const DesignedForNeeds = () => {
    const listItems = [
        "Flexible pricing and billing structure.",
        "Options available for ad-hoc movement and shuttle services.",
        "Adherence to compliance norms and labor laws standardizing mobility.",
        "Streamlined processes for route optimization and immediate deployments."
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Content */}
                    <div className="w-full md:w-[55%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Designed for Employee and Business Needs
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            From standard hatchbacks for quick commutes to spacious buses for large teams, Fiesta Smart Mobility offers a diverse fleet customized for your company. Our transportation models cater perfectly to specific organizational demands, shift timings, and budgetary requirements.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <MdOutlineCheckCircle className="text-[#E31E24] w-6 h-6 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-800 font-medium text-lg leading-relaxed mb-8">
                            Make Fiesta Smart Mobility your corporate commute partner. Choose customized solutions tailored ideally for the fast-paced IT hubs and startup ecosystems of Bangalore. Let&apos;s make every commute worthwhile.
                        </p>

                        <Link
                            href="/reach-us"
                            className="inline-block bg-[#E31E24] hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-md transition-colors shadow-md text-lg"
                        >
                            Contact Our Team For A Comprehensive Transport Quote
                        </Link>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-[45%] relative h-[400px] md:h-[650px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/employee-transportation-services-in-bangalore/unnamed-3-3.jpg"
                            alt="Designed for Employee and Business Needs"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignedForNeeds;
