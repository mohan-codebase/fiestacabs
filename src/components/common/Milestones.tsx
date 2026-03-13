"use client";

import React, { useEffect, useRef, useState } from "react";

type MilestoneItem = {
    value: string;
    label: string;
};

interface MilestonesProps {
    items: MilestoneItem[];
    eyebrow?: string;
    title?: string;
}

const AnimatedCounter = ({ value }: { value: string }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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

        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = progress * (2 - progress); // ease out quad
            const currentCount = Math.floor(easedProgress * target);

            setCount(currentCount);

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [isVisible, target]);

    if (isNaN(target)) {
        return <span ref={countRef}>{value}</span>;
    }

    return (
        <span ref={countRef}>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
};

const Milestones: React.FC<MilestonesProps> = ({
    items,
    eyebrow = "Milestones",
    title = "Why Choose Us ?",
}) => {
    return (
        <section className="bg-white text-[#0f172a]">
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 space-y-10">
                {(eyebrow || title) && (
                    <div className="text-center space-y-3">
                        {eyebrow && (
                            <span className="inline-flex px-4 py-2 rounded-full bg-[#EC2028]/10 border border-[#EC2028]/30 text-xs font-semibold tracking-[0.3em] uppercase text-[#EC2028]">
                                {eyebrow}
                            </span>
                        )}
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
                                {title}
                            </h2>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
                    {items.map((milestone, index) => (
                        <div
                            key={`${milestone.label}-${index}`}
                            className="rounded-2xl bg-white border border-slate-100 shadow-[0_14px_28px_rgba(0,0,0,0.08)] text-center px-4 py-6 md:px-5 md:py-7"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#EC2028]">
                                <AnimatedCounter value={milestone.value} />
                            </h3>
                            <p className="text-sm md:text-base text-slate-600">
                                {milestone.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Milestones;
