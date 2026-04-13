import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const jobCategories = [
    {
        name: "Asset Management / Strategy",
        jobs: [
            { title: "GTM Lead", location: "Chennai, TN / Bangalore, KA" },
            { title: "Head of Operations, Mobility Programs", location: "Chennai, TN / Mumbai, MH" },
            { title: "Strategy Associate", location: "Bangalore, KA / Delhi, NCR" }
        ]
    },
    {
        name: "Customer Success & Operations",
        jobs: [
            { title: "Clinical Operations Lead", location: "Hyderabad, TS / Pune, MH" },
            { title: "Customer Success Manager", location: "Chennai, TN / Bangalore, KA" }
        ]
    },
    {
        name: "Data",
        jobs: [
            { title: "Senior Data Engineer", location: "Remote / Chennai, TN" },
            { title: "Founding Engineer, Data Platform", location: "Bangalore, KA" },
            { title: "Senior Software Engineer (Data & AI)", location: "Hyderabad, TS" }
        ]
    },
    {
        name: "Engineering",
        jobs: [
            { title: "Senior Software Engineer (Mobility Platforms)", location: "Bangalore, KA" },
            { title: "Senior Product Designer", location: "Chennai, TN" },
            { title: "Product Manager, Fleet Automation", location: "Mumbai, MH" }
        ]
    }
];

const OpenPositions = () => {
    return (
        <section className="py-24 bg-[#FFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Open Positions</h2>
                    <p className="text-gray-800 text-lg">Explore open roles across teams at Fiesta Smart Mobility.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-20">
                    <div className="bg-white/40 border border-black/5 px-4 py-2 rounded-sm min-w-[140px] flex items-center justify-between cursor-pointer">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Department</span>
                            <span className="text-sm font-medium">All</span>
                        </div>
                        <FaChevronDown className="text-gray-400 text-xs ml-4" />
                    </div>
                    <div className="bg-white/40 border border-black/5 px-4 py-2 rounded-sm min-w-[140px] flex items-center justify-between cursor-pointer">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Location</span>
                            <span className="text-sm font-medium">Anywhere</span>
                        </div>
                        <FaChevronDown className="text-gray-400 text-xs ml-4" />
                    </div>
                </div>

                <div className="space-y-12">
                    {jobCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {category.name}
                            </h3>
                            <div className="border-t border-black/20">
                                {category.jobs.map((job, jobIndex) => (
                                    <div key={jobIndex} className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/10 hover:bg-black/5 px-1 transition-all">
                                        <div className="text-[17px] font-semibold text-gray-900 mb-2 md:mb-0">
                                            {job.title}
                                        </div>
                                        <div className="text-gray-700 text-[13px] font-medium">
                                            {job.location}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Email Resume Section */}
                <div className="mt-28 py-16 border-t border-black/20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    <div>
                        <h4 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Don't see a role that fits?</h4>
                        <p className="text-gray-800 text-lg">
                            We're always looking for talented individuals to join our mission.
                        </p>
                    </div>
                    <a
                        href="mailto:careers@fiestacabs.com"
                        className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition-all text-lg shadow-xl"
                    >
                        Send your resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;

