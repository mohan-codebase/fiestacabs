import Image from "next/image";
import { FaCheck, FaPhoneAlt, FaCalendarAlt, FaBus, FaStar, FaLeaf, FaShieldAlt, FaUsers, FaChartLine, FaClock, FaHandHoldingUsd, FaRegFileAlt } from "react-icons/fa";
import FAQ from "../../components/sections/home/FAQ";
import FAQAccordion, { FAQItem } from "../../components/common/FAQAccordion";

export const metadata = {
    title: "Employee Transportation Services in Chennai | Fiesta Smart Mobility",
    description: "Reliable, safe, and efficient employee transportation services in Chennai. Custom shuttle solutions for businesses and IT parks.",
};

const ChennaiEmployeeTransportPage = () => {
    const benefits = [
        {
            title: "Stress Free Journeys",
            description: "Employees travel without worrying about traffic, cars, or last-minute arrangements.",
            icon: FaBus,
        },
        {
            title: "Efficiency and Productivity",
            description: "Punctual arrivals mean more time at the office and better overall productivity.",
            icon: FaChartLine,
        },
        {
            title: "Secure Transportation",
            description: "With trained drivers and strict checks, both safety and reliability are ensured.",
            icon: FaShieldAlt,
        },
        {
            title: "Cost Effective Options",
            description: "For organizations, investing in structured employee transportation services translates to measurable savings.",
            icon: FaHandHoldingUsd,
        },
        {
            title: "Seamless Experience",
            description: "From booking to pick up and drop, every step is designed to provide a seamless experience.",
            icon: FaRegFileAlt,
        },
    ];

    const differentiators = [
        {
            title: "Well Maintained Fleet",
            description: "Regular maintenance checks to ensure zero breakdowns and maximum comfort.",
        },
        {
            title: "Professional Drivers",
            description: "Highly trained, background-verified professionals committed to safety.",
        },
        {
            title: "Real Time Tracking",
            description: "Advanced GPS tracking for live updates and improved passenger safety.",
        },
        {
            title: "Seamless Experience",
            description: "Integrated technology for smooth scheduling and route management.",
        },
    ];

    const chennaiFaqItems: FAQItem[] = [
        {
            id: "1",
            question: "What are employee transportation services?",
            answer: "Employee transportation services are specialized shuttle and commute solutions provided by companies like Fiesta to ensure their workforce can travel between home and office safely, punctually, and comfortably.",
        },
        {
            id: "2",
            question: "Why choose Fiesta for employee transport in Chennai?",
            answer: "Fiesta offers decades of experience, a well-maintained fleet, professional drivers, and advanced technology to navigate Chennai's traffic efficiently. We provide customized solutions tailored to your business needs.",
        },
        {
            id: "3",
            question: "Does Fiesta provide real-time tracking for employees?",
            answer: "Yes, all our vehicles are equipped with advanced GPS systems, allowing for real-time tracking and monitoring to ensure passenger safety and on-time arrivals.",
        },
        {
            id: "4",
            question: "How can businesses get a custom quote for transportation services?",
            answer: "You can easily get a custom quote by filling out the lead form on this page or by contacting our Chennai office directly. We'll analyze your requirements and provide a tailored solution.",
        },
        {
            id: "5",
            question: "Does Fiesta offer sustainable transport options?",
            answer: "Yes, we are committed to sustainability. Our shared shuttle models help reduce carbon footprints by decreasing the number of individual vehicles on the road.",
        },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full min-h-[600px] flex items-center pt-20 pb-16 lg:py-24">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/employee-transport/hero.jpg"
                        alt="Employee Transportation Services in Chennai"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                        <div className="text-white text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Employee Transportation Services in Chennai
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                                Empower your workforce with stress-free and productive commutes through our reliable and efficient employee transportation services in Chennai.
                            </p>
                            <button className="bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded text-lg transition-colors">
                                Book Your Employee Transport Today
                            </button>
                        </div>

                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto lg:ml-auto">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Get A Custom Quote</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        Email Address <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        Company <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        rows={3}
                                        maxLength={180}
                                        className="w-full rounded border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:border-[#EC2028] focus:ring-1 focus:ring-[#EC2028] resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold py-3 rounded transition-colors"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Employee Transportation Matters */}
            <section className="w-full py-16 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[320px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/employee-transport/fiesta-commutes.avif"
                                alt="Employee Transportation Matters"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why Employee Transportation Matters in Chennai
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    Chennai's business landscape is expanding rapidly, with major IT hubs and industrial zones scattered across the city. Navigating through peak traffic hours can be a significant hurdle for employees, affecting their morale and productivity.
                                </p>
                                <p>
                                    Reliable employee transportation isn't just a perk; it's a strategic necessity. By providing structured commute solutions, businesses can significantly improve employee punctuality, ensure safety, and boost overall job satisfaction.
                                </p>
                                <p>
                                    A stress-free commute allows your team to arrive at work energized and ready to tackle their day, directly contributing to your company's success in a competitive environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="w-full py-16 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Makes Our Transportation Services Different
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We go above and beyond to provide a service that truly stands out, focusing on every detail to ensure a premium experience for your workforce.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            {differentiators.map((item) => (
                                <div key={item.title} className="flex gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-[#EC2028]">
                                        <FaCheck className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4">
                                <button className="bg-[#EC2028] hover:bg-red-700 text-white font-bold px-8 py-3 rounded transition-colors">
                                    Get A Custom Quote Now
                                </button>
                            </div>
                        </div>
                        <div className="relative h-[320px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/employee-transport/difference.png"
                                alt="Fiesta Differentiators"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Serving Multiple Locations, Safety, and Supporting Businesses */}
            <section className="w-full py-16 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="relative h-[400px] md:h-[600px] lg:h-[800px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/employee-transport/shuttle.jpg"
                                alt="Professional Transportation Service"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    Serving Multiple Locations in Chennai
                                </h2>
                                <div className="w-24 h-1 bg-[#EC2028] mb-6" />
                                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                    <p>
                                        Our employee transportation services in Chennai are structured to cover multiple locations across the city. From IT corridors like Tidel Park to manufacturing clusters and businesses spread across suburbs, we ensure employees have reliable access to their workplaces.
                                    </p>
                                    <p>
                                        Each route is planned with optimized routes to reduce travel time and give every passenger a stress free start to their day. By tailoring our transportation services for each client, we make sure that the system fits naturally into the rhythm of their workforce and schedule.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Focus on Safety and Reliability
                                </h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                    <p>
                                        Safety is our priority. Every trip is backed by strict checks on drivers, vehicles, and systems to provide secure and reliable transport. Our professional drivers are trained not only in driving but also in passenger care, ensuring a smooth transition from home to office.
                                    </p>
                                    <p>
                                        With real time tracking and monitoring, both employees and organizations can feel confident about their transportation arrangements. This commitment to safety makes us a preferred partner for many companies across the region.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Supporting Businesses and Professionals
                                </h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                    <p>
                                        Our role goes beyond operating transportation services. We actively work with businesses, HR teams, and admins to design transport solutions that match workforce patterns. Whether it's managing daily commutes, handling business trips, or ensuring transport for special occasions, we offer the flexibility needed to keep employees moving without interruption.
                                    </p>
                                    <p>
                                        For professionals traveling across the city, our services offer predictability and efficiency. When employees know their transport is taken care of, they can focus on their responsibilities and enjoy a more productive day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits for Employees and Businesses */}
            <section className="w-full py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
                        Benefits for Employees and Businesses
                    </h2>

                    {/* Top Row: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className={`p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border transition-all duration-300 flex flex-col items-center text-center ${index === 1
                                    ? "bg-[#FDF0F1] border-[#FAD8DA]"
                                    : "bg-white border-gray-100 hover:shadow-xl"
                                    }`}
                            >
                                <div className="text-[#EC2028] text-5xl mb-6">
                                    <benefit.icon />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: 2 Cards Centered */}
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {benefits.slice(3, 5).map((benefit) => (
                            <div
                                key={benefit.title}
                                className="p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center w-full md:max-w-[440px]"
                            >
                                <div className="text-[#EC2028] text-5xl mb-6">
                                    <benefit.icon />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainability and Commitment */}
            <section className="w-full py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
                    {/* Block 1: Building Sustainable Transportation Solutions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Building Sustainable Transportation Solutions
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    At Fiesta, we are committed to sustainable transportation solutions that support India's initiative for cleaner mobility. By using shared transportation services and optimized routes, we reduce fuel consumption, lower emissions, and contribute to the larger green revolution.
                                </p>
                                <p>
                                    For companies setting sustainability goals, this means aligning corporate policies with transport solutions that truly make a difference to the environment and the surroundings we operate in.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/employee-transport/additional.jpg"
                                alt="Sustainable Transportation Solutions"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    {/* Block 2: Our Commitment */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/employee-transport/fiesta-commutes.avif"
                                alt="Our Commitment"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Our Commitment
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    We remain committed to being the best employee transportation service provider in Chennai by focusing on consistency, reliability, and adaptability. Our team works closely with clients to understand unique transportation needs and deliver seamless service that keeps their employees connected and their operations running without delays.
                                </p>
                                <p>
                                    By combining professional drivers, a well maintained fleet, and advanced technology, we ensure that every trip is not just a transfer but a part of a memorable experience for your employees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Started with Fiesta */}
            <section className="relative w-full py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/employee-transport/cta.jpg"
                        alt="Get Started with Fiesta"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-8 text-white">
                    <div className="max-w-4xl">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-10 leading-tight">
                            Get Started with Fiesta
                        </h2>
                        <div className="space-y-6 text-xl lg:text-2xl text-gray-100 leading-relaxed mb-12 max-w-3xl">
                            <p>
                                If you are looking for dependable, structured, and cost effective employee transportation services in Chennai, Fiesta is here to help. We have successfully established ourselves as a trusted provider, supporting organizations of all sizes with transportation solutions that truly work.
                            </p>
                            <p>
                                Contact us today to discuss your requirements.
                            </p>
                            <p>
                                Plan your schedule with us and give your employees the hassle free, secure, and smooth ride they deserve.
                            </p>
                            <p>
                                Fiesta – Your preferred partner for employee transportation services in Chennai.
                            </p>
                        </div>
                        <button className="bg-[#EC2028] text-white px-12 py-5 rounded-lg text-2xl font-bold hover:bg-[#c91b22] transition-colors duration-300 shadow-xl">
                            Book Now
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative w-full py-16 mb-20">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We've compiled a list of common questions specifically for our Chennai employee transportation services to help you understand how we can support your business.
                            </p>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <span>Rated 4.8/5 based on 200+ clients</span>
                            </div>
                        </div>
                        <div>
                            <FAQAccordion items={chennaiFaqItems} defaultOpenIndex={0} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChennaiEmployeeTransportPage;
