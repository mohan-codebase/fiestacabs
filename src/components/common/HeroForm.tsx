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
                    className={imageClassName}
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
                        <p className="text-lg text-white/90 mb-8">{subtitle}</p>
                        <Link
                            href={ctaLink}
                            className="inline-flex items-center justify-center bg-[#EC2028] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow"
                        >
                            {ctaText}
                        </Link>
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

export default HeroForm;
