import React from 'react';
import { FaArrowTrendUp, FaTowerBroadcast, FaShieldHalved, FaUserCheck } from 'react-icons/fa6';

const whyJoinContent = [
    {
        icon: <FaArrowTrendUp className="text-xl" />,
        title: "1. Real Growth Opportunities",
        description: "Join a high-demand industry where exceptional performance is recognised, with many roles leading to advancement into leadership positions."
    },
    {
        icon: <FaTowerBroadcast className="text-xl" />,
        title: "2. Exposure to Live Operations",
        description: "You will gain practical experience in:",
        points: [
            "Fleet management",
            "Route planning",
            "Client coordination",
            "Real-time problem solving"
        ]
    },
    {
        icon: <FaShieldHalved className="text-xl" />,
        title: "3. Stable and Essential Industry",
        description: "Transportation is essential. Your contribution directly supports businesses and their employees every day."
    },
    {
        icon: <FaUserCheck className="text-xl" />,
        title: "4. Performance-Driven Culture",
        description: "We value accountability, discipline, and a sense of ownership. Every team member’s contribution is important."
    }
];

const WhyJoin = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Fiesta Cabs</h2>
                    <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
                        At Fiesta Cabs, you become part of a dynamic logistics ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {whyJoinContent.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                            <div className="text-[#EC2028] mb-6 bg-red-50 w-fit p-4 rounded-xl group-hover:bg-[#EC2028] group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                            {item.points && (
                                <ul className="space-y-2">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#EC2028] flex-shrink-0" />
                                            <span className="text-sm font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
