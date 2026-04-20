import React from 'react';
import { FaMoneyBillWave, FaChartLine, FaShieldHeart, FaRankingStar, FaHourglassEnd } from 'react-icons/fa6';

const benefits = [
    {
        icon: <FaMoneyBillWave />,
        title: "Salary aligned to industry standards",
        desc: ""
    },
    {
        icon: <FaChartLine />,
        title: "Performance-based incentives",
        desc: ""
    },
    {
        icon: <FaShieldHeart />,
        title: "Statutory benefits such as PF and ESI",
        desc: ""
    },
    {
        icon: <FaRankingStar />,
        title: "Opportunities for role expansion and promotions",
        desc: ""
    },
    {
        icon: <FaHourglassEnd />,
        title: "Stability and long-term employment",
        desc: ""
    }
];

const EmployeeBenefits = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Employee Benefits</h2>
                        <p className="text-gray-600 max-w-2xl text-lg">
                            We offer structured, competitive benefits based on role and experience:
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#EC2028]/20 transition-all text-center">
                            <div className="text-3xl text-[#EC2028] mb-6 flex justify-center">
                                {benefit.icon}
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                            <p className="text-gray-500 text-sm">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmployeeBenefits;
