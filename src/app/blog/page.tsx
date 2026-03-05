import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Blog | Fiesta Smart Mobility",
    description: "Blogs",
};

import { blogPosts } from "../../data/blogPosts";

export default function BlogPage() {
    const posts = blogPosts.map(post => ({
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        url: `/blog/${post.slug}`,
    }));
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
                        Blog
                    </h1>
                </div>
            </section>

            <section className="py-6 md:py-12">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[34px] md:gap-y-[53px]">
                        {posts.map((post) => (
                            <article
                                key={post.url}
                                className="bg-white  border border-[#e0e0e0] shadow-[0_2px_16px_rgba(0,0,0,0.08)] overflow-hidden"
                            >
                                <Link
                                    href={post.url}
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
                                        className="text-[11px] font-bold uppercase tracking-[0.04em] text-[#ff2a2a] hover:text-[#d10f0f] transition-colors"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                        Read More &raquo;
                                    </Link>

                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
