import React from 'react';
import { FaClock, FaChess, FaPeopleGroup, FaComments, FaHandshakeSimple, FaArrowUpRightDots } from 'react-icons/fa6';

const WorkLife = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Environment & Life at Fiesta</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Experience a fast-paced, collaborative, and execution-focused culture where your contribution directly supports businesses every day.
                    </p>
                </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Work Environment */}
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#EC2028] text-white rounded-lg flex items-center justify-center text-sm">01</span>
                            Our Work Environment
                        </h3>
                        <h4 className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
                            Our work environment is:
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="text-[#EC2028] mt-1"><FaClock /></div>
                                <div>
                                    <p className="font-bold text-gray-900">Fast-paced and execution-focused</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-[#EC2028] mt-1"><FaChess /></div>
                                <div>
                                    <p className="font-bold text-gray-900">Structured with clear responsibilities</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-[#EC2028] mt-1"><FaPeopleGroup /></div>
                                <div>
                                    <p className="font-bold text-gray-900">Collaborative across operations, drivers, and support teams</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h4 className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">We believe in:</h4>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <FaComments className="mx-auto text-[#EC2028] mb-2" />
                                    <span className="text-[12px] font-bold uppercase tracking-wider text-gray-500">Clear communication</span>
                                </div>
                                <div>
                                    <FaHandshakeSimple className="mx-auto text-[#EC2028] mb-2" />
                                    <span className="text-[12px] font-bold uppercase tracking-wider text-gray-500">Respect across all roles</span>
                                </div>
                                <div>
                                    <FaArrowUpRightDots className="mx-auto text-[#EC2028] mb-2" />
                                    <span className="text-[12px] font-bold uppercase tracking-wider text-gray-500">Continuous improvement in daily operations</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Life at Fiesta */}
                    <div className="bg-gray-900 p-10 rounded-3xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <FaClock className="text-9xl" />
                        </div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#EC2028] text-white rounded-lg flex items-center justify-center text-sm font-bold">02</span>
                            Life at Fiesta Cabs
                        </h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            You become part of a team that operates around the clock.
From managing early morning pickups to ensuring safe late-night drops, every day brings fresh challenges and opportunities to learn.
                        </p>
                        <div className="space-y-4">
                            <p className="text-sm font-bold uppercase tracking-widest text-[#EC2028]">We look for individuals who:</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#EC2028]" />
                                    <span>Take ownership</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#EC2028]" />
                                    <span>Stay calm under pressure</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#EC2028]" />
                                    <span>Focus on solutions, not problems</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkLife;
