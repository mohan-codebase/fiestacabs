import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Blog | Fiesta Smart Mobility",
    description: "Blogs",
};

interface BlogPost {
    title: string;
    excerpt: string;
    image: string;
    url: string;
    date: string;
}

const posts: BlogPost[] = [
    {
        title: "Top Corporate Employee Transportation for Enhanced Efficiency",
        excerpt:
            "Top Corporate Employee Transportation for Enhanced Efficiency Can a better commute change workplace performance? It usually starts with strong corporate employee transportation systems that take",
        image: "/images/blog/post-1.jpeg",
        url: "/blog/top-corporate-employee-transportation-for-enhanced-efficiency",
        date: "December 15, 2025",
    },
    {
        title: "Enhancing the Mobility of People: Strategies for Effective Integration",
        excerpt:
            "Enhancing the Mobility of People: Strategies for Effective Integration Why in many countries, especially in India, does the mobility of people look different for each",
        image: "/images/blog/post-2.jpeg",
        url: "/blog/enhancing-the-mobility-of-people-strategies-for-effective-integration",
        date: "December 11, 2025",
    },
    {
        title: "Understanding Nodal Point Transport: Key Insights and Applications",
        excerpt:
            "Understanding Nodal Point Transport: Key Insights and Applications Why do some transport systems run smoother than others? The answer often connects to nodal point transport,",
        image: "/images/blog/post-3.jpg",
        url: "/blog/understanding-nodal-point-transport-key-insights-and-applications",
        date: "December 4, 2025",
    },
    {
        title: "Best Car Rental in Chennai with Driver | Affordable & Reliable Service",
        excerpt:
            "In a city like Chennai, where every street is alive with culture, business, and history, getting from one destination to another efficiently can make all the difference.",
        image: "/images/blog/post-4.avif",
        url: "/blog/best-car-rental-in-chennai-with-driver-affordable-reliable-service",
        date: "August 26, 2025",
    },
    {
        title: "Are you Looking for Top Shuttle Service Solutions for Your Daily Commute Needs ?",
        excerpt:
            "Home Blog Top Shuttle Service Solutions for Your Daily Commute Needs Top Shuttle Service Solutions for Your Daily Commute Needs Finding a reliable, efficient, and",
        image: "/images/blog/post-5.jpg",
        url: "/blog/top-shuttle-service-solutions-for-your-daily-commute-needs",
        date: "May 24, 2025",
    },
    {
        title: "Essential Guide to Wedding Car Rental for Your Special Day",
        excerpt:
            "Home Blog Essential Guide to Wedding Car Rental for Your Special Day Essential Guide to Wedding Car Rental for Your Special Day Your wedding day",
        image: "/images/blog/post-6.png",
        url: "/blog/essential-guide-to-wedding-car-rental-for-your-special-day",
        date: "May 24, 2025",
    },
    {
        title: "Why Employee Transportation Services Matter",
        excerpt:
            "Why Employee Transportation Services Matter Why Employee Transportation Services Matter As urban areas grow more congested and work hours increase, the need for structured employee",
        image: "/images/blog/post-7.jpg",
        url: "/blog/ets",
        date: "May 24, 2025",
    },
];

export default function BlogPage() {
    return (
        <div className="w-full bg-[#efefef]">
            <section className="relative min-h-[260px] md:min-h-[484px] overflow-hidden">
                <Image
                    src="/images/blog/hero.jpeg"
                    alt="Blogs"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 flex min-h-[260px] md:min-h-[484px] items-center justify-center px-4">
                    <h1
                        className="text-white text-5xl md:text-[58px] font-bold leading-none"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    >
                        Blogs
                    </h1>
                </div>
            </section>

            <section className="py-6 md:py-12">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[34px] md:gap-y-[53px]">
                        {posts.map((post) => (
                            <article
                                key={post.url}
                                className="bg-white rounded-[12px] border border-[#e0e0e0] shadow-[0_2px_16px_rgba(0,0,0,0.08)] overflow-hidden"
                            >
                                <Link
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block w-full pt-[50%] md:pt-[58%]"
                                >
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 680px"
                                        className="object-cover"
                                    />
                                </Link>

                                <div className="px-5 md:px-6 pt-5 pb-6">
                                    <h2
                                        className="text-[28px] md:text-[31px] leading-[1.12] font-bold tracking-[-0.01em] text-[#242424] mb-4"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                        <Link
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#ff2a2a] transition-colors"
                                        >
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p
                                        className="text-[12px] md:text-[13px] leading-[1.7] text-[#6d6d6d] mb-4"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[11px] font-bold uppercase tracking-[0.04em] text-[#ff2a2a] hover:text-[#d10f0f] transition-colors"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                        Read More &raquo;
                                    </Link>

                                    <p
                                        className="text-[11px] text-[#a1a1a1] mt-6"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                        {post.date}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
