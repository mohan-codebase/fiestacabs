"use client";

import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ value }: { value: string }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Extract number and suffix (e.g., "40,000+" -> { num: 40000, suffix: "+" })
    const numericPart = value.replace(/[^0-9]/g, "");
    const suffix = value.replace(/[0-9,]/g, "");
    const target = parseInt(numericPart, 10);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || isNaN(target)) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Ease out quad
            const easedProgress = progress * (2 - progress);
            const currentCount = Math.floor(easedProgress * target);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, target]);

    if (isNaN(target)) {
        return <span ref={countRef}>{value}</span>;
    }

    return (
        <span ref={countRef}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

const Milestones = () => {
    const milestones = [
        {
            id: 1,
            value: "27+",
            label: "Years of experience",
        },
        {
            id: 2,
            value: "10,000+",
            label: "Trips per day",
        },
        {
            id: 3,
            value: "2,000+",
            label: "Fleet Size",
        },
        {
            id: 4,
            value: "40,000+",
            label: "Employees travelling per day",
        },
        {
            id: 5,
            value: "PAN",
            label: "India Presence",
        },
    ];

    return (

        <div id="milestones">
            {/* Section Header */}
            <div className="text-center my-16">
                <p className="text-[#D32F2F] uppercase tracking-wider text-sm font-semibold">
                    MILESTONES
                </p>
                <h2 className="text-4xl md:text-4xl font-bold">
                    Why Choose Us ?
                </h2>
            </div>


            <div className="relative w-full py-20 bg-gray-900 text-white">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/home/why-choose-us/why-choose-us.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4">

                    {/* Milestones Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                        {milestones.map((milestone) => (
                            <div
                                key={milestone.id}
                                className="text-center transform transition-transform duration-300 "
                            >
                                <h3 className="text-4xl md:text-5xl font-bold mb-3">
                                    <AnimatedCounter value={milestone.value} />
                                </h3>
                                <p className="text-base md:text-lg text-gray-300">
                                    {milestone.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Milestones;
