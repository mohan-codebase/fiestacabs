import React from "react";
import Image from "next/image";
import { FaHandshake, FaTools, FaMoneyBillWave, FaThumbsUp, FaCar, FaStar, FaCogs } from "react-icons/fa";
import Testimonials from "../../components/common/Testimonials";
import FAQ from "../../components/sections/home/FAQ";
import BookNowButton from "../../components/common/BookNowButton";
import GeneralEmployeeTransportForm from "../../components/sections/employee-transport/GeneralEmployeeTransportForm";
import Milestones from "../../components/sections/home/Milestones";

export const metadata = {
    title: "Employee Transport Services | Fiesta Smart Mobility",
    description:
        "Best Employee Transport Services — safe, punctual, and comfortable daily commutes across major Indian cities.",
};

const EmployeeTransportServicesPage = () => {
    const cityCards = [
        {
            city: "Chennai",
            icon: "/images/services-offered/employee-transport-service/city-chennai.webp",
            description: "Covering IT parks and industrial zones with reliable, on-time shuttles.",
        },
        {
            city: "Hyderabad",
            icon: "/images/services-offered/employee-transport-service/city-hyderabad.webp",
            description: "Serving HITEC City, Gachibowli, and key corporate clusters.",
        },
        {
            city: "Bangalore",
            icon: "/images/services-offered/employee-transport-service/city-bangalore.webp",
            description: "Connecting Whitefield, Electronic City, and major office corridors.",
        },
        {
            city: "Mumbai",
            icon: "/images/services-offered/employee-transport-service/city-mumbai.webp",
            description:
                "Efficient Employee transport services across the Economic powerhouse of India.",
        },
        {
            city: "Pune",
            icon: "/images/services-offered/employee-transport-service/city-pune.webp",
            description: "Safe and punctual travel solutions for Pune’s growing industrial workforce.",
        },
    ];

    const whyChoose = [
        {
            icon: FaHandshake,
            text: "Reliable Employee Transportation Services that work across various cities.",
        },
        {
            icon: FaTools,
            text: "Well maintained fleet with experienced drivers.",
        },
        {
            icon: FaMoneyBillWave,
            text: "Cost effective and delivers substantial savings over unmanaged employee commutes.",
        },
        {
            icon: FaThumbsUp,
            text: "Hassle free commute that improves employee satisfaction.",
        },
        {
            icon: FaCar,
            text: "Top priority on employee safety and service quality.",
        },
        {
            icon: FaCogs,
            text: "Adaptable transport solutions for both daily and special occasions.",
        },
    ];

    const shuttleItems = [
        "Employee Shuttle Services in Various Cities : We currently run employee shuttle routes across various cities, covering major business districts, IT hubs, and industrial zones.",
        "Shuttle services for IT and Business Parks: We connect residential zones to IT corridors with well maintained vehicles, reliable service, and consistent transport solutions.",
        "Shuttle services for Manufacturing & Industrial Areas: For industries operating in shifts, we provide round the clock service with secure transportation services for employees. ",
        "Shuttle services for Corporate Office Clusters: From high-rise corporate offices to co-working hubs, our employee transportation is tailored for precise schedules and minimal delays. ",
    ];

    const differentiators = [
        {
            title: "Precise Pick Up and Drop Points",
            description:
                "We select pick up points that are safe, accessible, and convenient for employees, avoiding unsafe or time-consuming stopovers.",
        },
        {
            title: "Direct Access to Office Entrances",
            description:
                "We design routes that bring your team directly to the entrance of your corporate offices, cutting out extra travel through traffic congestion-prone service lanes.",
        },
        {
            title: "Shift-Friendly Scheduling",
            description:
                "From early morning production shifts to late hours BPO operations, our round the clock service is aligned with your business schedule.",
        },
        {
            title: "Improved Attendance & Retention",
            description:
                "A dependable employee transport system directly improves punctuality and boosts employee satisfaction, helping you retain top talent.",
        },
    ];

    const keyFeatures = [
        {
            title: "Fixed Time Slots & Reliable Routing",
            description:
                "Your employees know exactly when their employee shuttle will arrive, eliminating wait-time uncertainty and improving the employee transport experience.",
        },
        {
            title: "Ride in Comfort",
            description:
                "Our well maintained fleet is designed for a comfortable travel experience with seating for all passengers, ensuring employees arrive fresh, not fatigued.",
        },
        {
            title: "Fastest Routes Always",
            description:
                "We use cutting edge technology, including real time tracking and real time monitoring, to dynamically adjust to road and traffic congestion patterns.",
        },
        {
            title: "Focus on Employee Safety",
            description:
                "From driver training to safety checks, employee safety remains our top priority for every ride.",
        },
    ];

    const simpleSteps = [
        {
            title: "Stay Informed, Stay On Time",
            description:
                "We keep your employees informed through email, service notifications, and route updates. They know when their employee shuttle is arriving, reducing uncertainty and improving the hassle free commute experience.",
        },
        {
            title: "Onboarding Employees with Ease",
            description:
                "Starting a new role is stressful enough. With Fiesta’s employee transport services, your employees get clear guidance on how to use the service from day one. This includes instructions on pick up points, schedules, and real time tracking access for a truly hassle free experience.",
        },
        {
            title: "Booking & Coordination Made Simple",
            description:
                "We make booking transport services straightforward. Your dedicated team can manage booking, routing, and transport coordination centrally, while employees benefit from clear instructions and timely transportation.",
        },
    ];

    const corporateSolutions = [
        "Monthly consolidated billing",
        "HR system integration for transport services and attendance",
        "Data analytics on route efficiency and ridership",
        "Central travel desks for managing transportation needs",
        "Corporate car rentals for special occasions or team outings",
    ];

    const additionalServices = [
        {
            title: "Beyond Daily Commutes – Additional Corporate Services",
            description:
                "While our main focus is daily commutes, Fiesta also supports team outings, special occasions, and airport transfers for corporate employee travel. Our corporate car and corporate car rentals options are ideal for events, client visits, and inter-office trips.",
        },
        {
            title: "Why Reliable Employee Transportation Matters for Companies",
            description:
                "With optimised routing, well maintained vehicles, and shared employee shuttle services, your organisation can lower its carbon footprint while achieving cost savings. The result is a greener, more sustainable approach to employee transportation that also makes financial sense.",
        },
        {
            title: "Our Commitment to Safety and Comfort",
            description:
                "We prioritise employee safety above all else. Every vehicle undergoes regular checks to remain part of our well maintained fleet. Our experienced drivers are trained to handle corporate commutes professionally, ensuring a smooth and comfortable travel experience for every passenger. Our commitment extends to maintaining service quality at all times. With real time monitoring and cutting edge technology, we ensure that employees arrive on time, even during heavy traffic congestion or weather challenges.",
        },
        {
            title: "Creating a Hassle Free Commute for Your Employees",
            description:
                "We aim to create a seamless travel experience for your team by combining transport solutions, technology, and service excellence. From the moment they board our employee shuttle to the time they arrive at their office, the experience is designed to be stress-free.",
        },
    ];



    return (
        <div className="w-full">
            {/* Hero */}
            <section className="relative w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/employee-transport/hero.jpg"
                        alt="Employee transport services"
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                        <div className="text-white">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                Best Employee Transport Services
                            </h1>
                            <p className="text-lg text-white/90 mb-8">
                                Safe, punctual, and comfortable daily commutes for your workforce across major Indian
                                cities.
                            </p>
                            <BookNowButton className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow">
                                Get a Free Quote
                            </BookNowButton>
                        </div>

                        <GeneralEmployeeTransportForm />
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <Milestones />

            {/* Fiesta Employee Transport Services */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[320px] md:h-[520px] rounded-md overflow-hidden">
                            <Image
                                src="/images/employee-transport/fiesta-commutes.avif"
                                alt="Fiesta Employee Transport"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Fiesta Employee Transport Services – Reliable Commutes for Your Workforce
                            </h3>
                            <p className="text-gray-700 mb-4">
                                In a corporate environment, where productivity often starts the moment your employees
                                step out of their homes, the daily office commute can either energize your workforce or
                                drain it.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Whether it’s traffic congestion, irregular public transport, or uncertainty around
                                travel times, most commute for your employees challenges lead to stress before the
                                workday even begins.
                            </p>
                            <p className="text-gray-700 mb-4">
                                At Fiesta, we believe that efficient, reliable employee transportation services should
                                be the standard, not the exception.
                            </p>
                            <p className="text-gray-700 mb-6">
                                That’s why our employee transport services are designed to give companies in various
                                cities a dependable, scalable, and cost effective way to manage corporate commutes, from
                                home to corporate offices and back, every single day.
                            </p>
                            <BookNowButton className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow">
                                Get a Free Quote
                            </BookNowButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cities */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold">Employee Transport Services Across Major Cities</h3>
                        <p className="text-gray-600 mt-3">
                            Fiesta provides corporate employee transport solutions across India&apos;s top business hubs. With
                            gate-to-gate shuttles, fixed routes, and real-time tracking, we make commuting safe and
                            stress-free for your workforce, wherever your offices are located.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {cityCards.map((city) => (
                            <div
                                key={city.city}
                                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#FFEDED] rounded-3xl border-b-4 border-red-500 p-8 text-center flex flex-col items-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm shrink-0">
                                    <div className="relative w-12 h-12">
                                        <Image
                                            src={city.icon}
                                            alt={city.city}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-3 text-2xl">
                                    Employee Transport in <br /> {city.city}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[280px]">
                                    {city.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
                        Why you need to choose fiesta
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChoose.map((item) => (
                            <div
                                key={item.text}
                                className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center gap-5 shadow-sm"
                            >
                                <item.icon className="text-[#EC2028] text-5xl" />
                                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Gate-to-Gate */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Gate-to-Gate Employee Shuttle Services
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Our employee shuttle services follow a gate-to-gate model, which ensures your employees
                                arrive at the exact location of their corporate offices without unnecessary detours or
                                delays. This direct approach reduces walking distances, avoids last-mile confusion, and
                                guarantees timely transportation for all shifts, including late hours.
                            </p>
                            <div className="space-y-3 text-gray-700">
                                {shuttleItems.map((item) => (
                                    <div key={item} className="flex gap-3 items-start">
                                        <div className="relative w-8 h-8 shrink-0 mt-0.5">
                                            <Image src="/images/icon/tyre-icon.svg" alt="tyre" fill className="object-contain" />
                                        </div>
                                        <p className="font-semibold text-gray-900">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6">
                                <BookNowButton className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow">
                                    To Know More
                                </BookNowButton>
                            </div>
                        </div>
                        <div className="relative h-[320px] md:h-[480px] rounded-md overflow-hidden">
                            <Image
                                src="/images/employee-transport/shuttle.jpg"
                                alt="Gate-to-gate shuttle services"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Different */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            What Makes Our Employee Transportation Services Different
                        </h3>
                        <p className="text-gray-600 mt-3">
                            At Fiesta, we customise every aspect of our employee transportation to suit your
                            transportation needs. We know that for companies, one-size-fits-all rarely works, so we
                            adapt routes, schedules, and transport operations to match your workforce demands.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[320px] md:h-[420px] rounded-md overflow-hidden">
                            <Image
                                src="/images/employee-transport/difference.png"
                                alt="Employee transport difference"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="space-y-6">
                            {differentiators.map((item) => (
                                <div key={item.title} className="flex gap-4 items-start">
                                    <div className="relative w-9 h-9 shrink-0 mt-0.5">
                                        <Image src="/images/icon/tyre-icon.svg" alt="tyre" fill className="object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Key Features That Set Us Apart</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {keyFeatures.map((feature) => (
                                <div key={feature.title} className="border-2 border-red-500 rounded-2xl p-6 flex flex-col items-center text-center gap-4">
                                    <div className="relative w-14 h-14 shrink-0">
                                        <Image src="/images/icon/tyre-icon.svg" alt="tyre" fill className="object-contain" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-base">{feature.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-[320px] md:h-[420px] rounded-md overflow-hidden">
                            <Image
                                src="/images/employee-transport/key-features.jpg"
                                alt="Key features"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Made Simple */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold">Employee Transportation Made Simple</h3>
                        <p className="text-gray-600 mt-3">
                            Our employee transportation services connect employees to their workplaces through a network
                            of strategic pick up points, well maintained vehicles, and highly trained experienced
                            drivers. We specialise in providing transport solutions that integrate seamlessly with your
                            company’s operations, helping you reduce carbon footprint, improve employee satisfaction,
                            and make measurable cost savings in the long run.
                        </p>
                        <p className="text-gray-600 mt-3">
                            We currently operate Pan India across various cities, offering consistent service standards,
                            whether your transportation needs are for a single office hub or multiple corporate offices
                            nationwide.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[320px] md:h-[420px] rounded-md overflow-hidden">
                            <Image
                                src="/images/employee-transport/made-simple.jpg"
                                alt="Employee transportation made simple"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="space-y-6">
                            {simpleSteps.map((item) => (
                                <div key={item.title} className="flex gap-4 items-start">
                                    <div className="relative w-9 h-9 shrink-0 mt-0.5">
                                        <Image src="/images/icon/tyre-icon.svg" alt="tyre" fill className="object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrated Transport Solutions */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Integrated Transport Solutions for Companies
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Our transportation services go beyond moving employees from one point to another. We
                                deliver full transport coordination for companies, making transport operations easier to
                                manage and monitor.
                            </p>
                            <p className="text-gray-700 mb-4">Our corporate-ready features include:</p>
                            <ul className="space-y-2 text-gray-700">
                                {corporateSolutions.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-red-500">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 mt-4">
                                With Fiesta, your corporate employee mobility plan becomes a strategic advantage,
                                helping you achieve sustainability goals, deliver seamless travel experience, and reduce
                                operational overhead.
                            </p>
                        </div>
                        <div className="relative h-[320px] md:h-[420px] rounded-md overflow-hidden">
                            <Image
                                src="/images/employee-transport/integrated.jpg"
                                alt="Integrated transport solutions"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                        <div className="relative h-[360px] md:h-[520px] rounded-md overflow-hidden">
                            <Image
                                src="/images/employee-transport/additional.jpg"
                                alt="Additional corporate services"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="space-y-6">
                            {additionalServices.map((item) => (
                                <div key={item.title} className="flex gap-4 items-start">
                                    <div className="relative w-9 h-9 shrink-0 mt-0.5">
                                        <Image src="/images/icon/tyre-icon.svg" alt="tyre" fill className="object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/employee-transport/cta.jpg"
                        alt="Send enquiry"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16 text-white">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
                        <div className="hidden lg:block" />
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="font-semibold">4.8 (729 Reviews)</span>
                                <div className="flex gap-1 text-yellow-400">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>
                                <span className="text-sm text-white/70">Rated 4.5 out of 5</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Send Enquiry and Get Started</h3>
                            <div className="space-y-3 text-white/90">
                                <p>
                                    If you are among the first companies looking to upgrade your employee transportation
                                    services, we are here to help.
                                </p>
                                <p>📞 Contact us today to discuss your transportation needs.</p>
                                <p>🗓 Send enquiry for a customised plan.</p>
                                <p>
                                    🚌 Start your next ride with Fiesta and experience hassle free commute for your
                                    entire workforce.
                                </p>
                                <p>
                                    Fiesta Employee Transport Services – Moving Your Workforce Forward. Where employee
                                    commutes become reliable, efficient, and part of your sustainability goals.
                                </p>
                            </div>
                            <div className="mt-6">
                                <BookNowButton className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow">
                                    Book Now
                                </BookNowButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials eyebrow="Testimonials" title="What our clients say about us" />

            {/* FAQ */}
            <FAQ />
        </div>
    );
};

export default EmployeeTransportServicesPage;
