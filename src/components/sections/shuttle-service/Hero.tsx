import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/shuttle-service/hero.jpg"
                    alt="Corporate shuttle and employee transport service"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
                    <div className="text-white">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Corporate Shuttle &amp; Employee Transport Service
                        </h1>
                        <p className="text-lg text-white/90 mb-8">
                            Reliable, comfortable, gate-to-gate commuting solution for your workforce.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow"
                        >
                            Book a Shuttle for Your Team
                        </a>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    First Name <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Email Address <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Phone Number <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Company <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                <div className="text-xs text-gray-500 text-right mb-1">0 / 180</div>
                                <textarea
                                    rows={4}
                                    maxLength={180}
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                                />
                            </div>
                            <div className="flex justify-between items-center border border-gray-200 bg-gray-50 rounded p-2 md:p-3 w-full mb-2 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" required id="robot-shuttle" className="w-5 h-5 rounded border-gray-300 text-[#EC2028] focus:ring-[#EC2028] cursor-pointer" />
                                    <label htmlFor="robot-shuttle" className="text-sm text-gray-700 cursor-pointer">I'm not a robot</label>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img src="/images/reCAPTCHA_icon.png" alt="reCAPTCHA" className="w-6 h-6 object-contain" />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-semibold py-3 rounded-md"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
