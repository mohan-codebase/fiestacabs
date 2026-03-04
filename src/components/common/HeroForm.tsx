import Image from "next/image";
import Link from "next/link";

interface HeroFormProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    ctaText?: string;
    ctaLink?: string;
    imageClassName?: string;
}

const HeroForm = ({
    title,
    subtitle,
    imageSrc,
    ctaText = "Get a Free Quote",
    ctaLink = "#",
    imageClassName,
}: HeroFormProps) => {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    priority
                    className={`object-cover ${imageClassName || ""}`}
                />
                <div className="absolute inset-0 bg-black/60 md:bg-black/40 md:bg-gradient-to-r md:from-black/10 md:via-black/50 md:to-black/80" />
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">{title}</h1>
                        {subtitle && <p className="text-lg text-white/90 mb-8">{subtitle}</p>}
                        <Link
                            href={ctaLink}
                            className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded shadow mt-4"
                        >
                            {ctaText}
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-800 mb-1">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-800 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-800 mb-1">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-800 mb-1">
                                    Company *
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-xs font-bold text-gray-800">Message</label>
                                    <span className="text-[10px] text-gray-500">0 / 180</span>
                                </div>
                                <textarea
                                    rows={3}
                                    maxLength={180}
                                    className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
                                />
                            </div>

                            {/* Mock reCAPTCHA */}
                            <div className="flex justify-between items-center border border-gray-200 bg-gray-50 rounded p-2 md:p-3 w-full sm:w-[300px] mb-4 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 border-2 border-gray-300 rounded-sm bg-white cursor-pointer"></div>
                                    <span className="text-sm text-gray-700">I'm not a robot</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-8 h-8 relative">
                                        <Image src="/images/reCAPTCHA_icon.png" alt="reCAPTCHA" fill className="object-contain" />
                                    </div>
                                    <div className="text-[8px] text-gray-500 text-center mt-1">
                                        Privacy - Terms
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#EC2028] hover:bg-red-700 text-white font-bold tracking-wide text-sm py-3 rounded"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroForm;
