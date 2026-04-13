import React from 'react';
import { FaBookmark, FaGlobe, FaArrowTrendUp, FaHandshake, FaMicrochip, FaLeaf } from 'react-icons/fa6';

const whyJoinContent = [
    {
        icon: <FaBookmark className="text-xl" />,
        title: "A Legacy You Can Trust",
        description: "With over 28 years of industry leadership, Fiesta offers stability, credibility, and long-term career security."
    },
    {
        icon: <FaGlobe className="text-xl" />,
        title: "Pan-India Opportunities",
        description: "Work across multiple cities and grow within a nationwide network serving leading corporate clients."
    },
    {
        icon: <FaArrowTrendUp className="text-xl" />,
        title: "Growth & Career Development",
        description: "We support your professional journey with continuous learning, skill development, and internal growth opportunities."
    },
    {
        icon: <FaHandshake className="text-xl" />,
        title: "Supportive Work Environment",
        description: "Be part of a team that values respect, teamwork, and a people-first culture across all roles."
    },
    {
        icon: <FaMicrochip className="text-xl" />,
        title: "Technology-Driven Operations",
        description: "Experience a modern workplace powered by real-time systems, smart tracking, and efficient processes."
    },
    {
        icon: <FaLeaf className="text-xl" />,
        title: "Be Part of a Sustainable Future",
        description: "Join a company actively investing in electric vehicles and eco-friendly mobility solutions."
    }
];

const WhyJoin = () => {
    return (
        <section className="py-24 bg-[#fff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Fiesta</h2>
                    <p className="text-gray-600 max-w-3xl leading-relaxed">
                        Be part of a company that values people, performance, and progress. At Fiesta Smart Mobility, we don&apos;t just offer jobs—we build long-term careers in a stable and growing industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whyJoinContent.map((item, index) => (
                        <div key={index} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[#EC2028] mb-8 border border-red-50 bg-red-50 w-fit p-3 rounded-lg">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;

