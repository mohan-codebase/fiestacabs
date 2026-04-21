import React from 'react';
import { FaFileSignature, FaPhoneVolume, FaUserTie, FaCheckDouble, FaIdCard, FaMapLocationDot, FaLifeRing } from 'react-icons/fa6';
import Link from 'next/link';

const steps = [
    {
        icon: <FaFileSignature />,
        title: "Application submission",
        desc: ""
    },
    {
        icon: <FaPhoneVolume />,
        title: "Initial screening call",
        desc: ""
    },
    {
        icon: <FaUserTie />,
        title: "Role-specific interview",
        desc: ""
    },
    {
        icon: <FaCheckDouble />,
        title: "Final selection and offer",
        desc: ""
    }
];

const HiringProcess = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Hiring Process */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Hiring Process</h2>
                        <p className="text-gray-600 mb-12 text-lg">
                            Our hiring process is simple and transparent:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
                            {/* Connection Lines (Optional decorative) */}
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-[#EC2028] rounded-full flex items-center justify-center text-xl font-bold">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 mb-12 text-lg mt-6">We conduct an efficient process and keep candidates updated every step of the way. If you are ready for a structured, responsible role and wish to grow with a company committed to reliable transportation, we look forward to hearing from you.</p>

                        <div className="mt-12 flex flex-wrap gap-4 items-center">
                            <Link
                                href="#open-positions"
                                className="bg-[#EC2028] text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all shadow-lg"
                            >
                                Apply Now
                            </Link>
                            <span className="text-gray-500 text-sm">
                                Or send resume to: <a href="hr_executive@fiestaindia.net" className="text-black font-bold hover:underline">hr_executive@fiestaindia.net</a>
                            </span>
                        </div>
                    </div>

                    {/* Driver Applications */}
                    <div className="bg-[#EC2028] rounded-3xl p-10 text-white shadow-2xl relative">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">For Driver Applications</h3>
                            <p className="text-red-100 mb-8">
                                If you are a driver interested in joining our network:
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-4">
                                    <FaIdCard className="text-xl text-red-200" />
                                    <span className="font-medium">Valid driving license required</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FaMapLocationDot className="text-xl text-red-200" />
                                    <span className="font-medium">Knowledge of city routes preferred</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FaLifeRing className="text-xl text-red-200" />
                                    <span className="font-medium">Commitment to safety and punctuality</span>
                                </li>
                            </ul>

                            <Link
                                href="/reach-us"
                                className="w-full bg-white text-[#EC2028] py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
                            >
                                Register as a Driver
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiringProcess;
