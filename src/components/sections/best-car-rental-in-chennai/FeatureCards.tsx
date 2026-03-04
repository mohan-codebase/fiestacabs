"use client";

import { FaBook, FaCarSide, FaTachometerAlt, FaShieldAlt } from "react-icons/fa";

const features = [
    {
        title: "Fixed Booking Schedules",
        description: "With pre-arranged booking times, you always know exactly when your car will arrive. No last-minute uncertainties.",
        icon: <FaBook className="w-8 h-8 text-[#E31E24]" />
    },
    {
        title: "Comfortable Rides for Every Occasion",
        description: "From special occasions like weddings to team outings or long corporate commutes, we make sure our well maintained cars deliver a comfortable travel experience for all passengers.",
        icon: <FaCarSide className="w-8 h-8 text-[#E31E24]" />
    },
    {
        title: "Fastest, Smartest Routes",
        description: "We use real time tracking and cutting edge technology to plan the quickest route based on current traffic, ensuring minimal delays.",
        icon: <FaTachometerAlt className="w-8 h-8 text-[#E31E24]" />
    }
];

const FeatureCards = () => {
    return (
        <section className="py-16 md:py-24 bg-[#FAFAFA] relative">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Makes Our Car Rental Services in Chennai Different
                    </h2>
                    <p className="text-[#555555] max-w-4xl mx-auto text-[15px] leading-relaxed">
                        We focus on real travel needs, not assumptions. Every service we offer is the result of feedback from our clients, from corporate employee travel planners to families visiting from South India or abroad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 text-center flex flex-col items-center hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                        >
                            <div className="mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-[#555555] text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <div className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 text-center flex flex-col items-center max-w-[400px] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                        <div className="mb-4">
                            <FaShieldAlt className="w-8 h-8 text-[#E31E24]" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Safety is Our Top Priority
                        </h3>
                        <p className="text-[#555555] text-sm leading-relaxed">
                            Our experienced drivers are trained for safe, smooth driving in urban and rural routes. Employee safety and passenger security come first.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
