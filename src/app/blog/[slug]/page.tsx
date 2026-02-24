import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, BlogPost, ContentBlock } from "../../../data/blogPosts";
import Testimonials from "../../../components/sections/home/Testimonials";
import FAQ from "../../../components/sections/home/FAQ";
import FAQAccordion from "../../../components/common/FAQAccordion";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post: BlogPost) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p: BlogPost) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const latestPosts = blogPosts
        .filter((p: BlogPost) => p.slug !== slug)
        .slice(0, 5);

    return (
        <div className="w-full bg-[#f8f9fa]">
            {/* Hero Section */}
            <section className="relative min-h-[350px] md:min-h-[450px] overflow-hidden flex items-center justify-center">
                <Image
                    src={post.bannerImage || "/images/blog/hero.jpeg"}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-[1240px] mx-auto px-4 text-center">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-8 drop-shadow-lg">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-white/90 text-[15px] font-medium border-t border-white/20 pt-6 mt-8 max-w-2xl mx-auto">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="text-[#EC2028] text-lg">&rsaquo;</span>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <span className="text-[#EC2028] text-lg">&rsaquo;</span>
                        <span className="text-white/70 truncate max-w-[200px] md:max-w-none">{post.title}</span>
                    </div>
                </div>
            </section>

            <div className="max-w-[1240px] mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content */}
                    <div className="w-full lg:w-[68%]">
                        {/* Featured Image with Overlay Title */}
                        <div className="relative w-full aspect-[16/9]  overflow-hidden mb-10 shadow-lg">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight max-w-3xl">
                                    {post.title}
                                </h2>
                            </div>
                        </div>

                        <article className="prose prose-lg max-w-none">
                            {post.content.map((block: ContentBlock | string, idx: number) => {
                                if (typeof block === 'string') {
                                    return <p key={idx} className="text-gray-700 leading-relaxed mb-6 text-[17px]">{block}</p>;
                                }

                                switch (block.type) {
                                    case 'p':
                                        return <p key={idx} className="text-gray-700 leading-relaxed mb-6 text-[17px]">{block.text}</p>;
                                    case 'h2':
                                        return <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-10 mb-6">{block.text}</h2>;
                                    case 'h3':
                                        return <h3 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{block.text}</h3>;
                                    case 'h4':
                                        return <h4 key={idx} className="text-xl font-bold text-gray-900 mt-8 mb-4">{block.text}</h4>;
                                    case 'h5':
                                        return <h5 key={idx} className="text-lg font-bold text-gray-900 mt-8 mb-4">{block.text}</h5>;
                                    case 'h6':
                                        return <h6 key={idx} className="text-base font-bold text-gray-900 mt-6 mb-3">{block.text}</h6>;
                                    case 'ul':
                                        return (
                                            <ul key={idx} className="list-disc pl-6 space-y-3 mb-8 text-gray-700 text-[17px]">
                                                {block.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                                            </ul>
                                        );
                                    case 'ol':
                                        return (
                                            <ol key={idx} className="list-decimal pl-6 space-y-3 mb-8 text-gray-700 text-[17px]">
                                                {block.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                                            </ol>
                                        );
                                    case 'image':
                                        return (
                                            <div key={idx} className="my-10">
                                                <div className="relative w-full aspect-[16/9]  overflow-hidden shadow-md border border-gray-100">
                                                    <Image
                                                        src={block.src}
                                                        alt={block.alt}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                {block.caption && (
                                                    <p className="text-center text-gray-500 text-sm mt-3 italic">{block.caption}</p>
                                                )}
                                            </div>
                                        );
                                    case 'table':
                                        return (
                                            <div key={idx} className="my-12 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                                                <table className="w-full text-left border-collapse">
                                                    <thead className="">
                                                        <tr>
                                                            {block.headers.map((header: string, i: number) => (
                                                                <th key={i} className="px-6 py-4 font-bold uppercase text-xs tracking-wider border-r border-white/10 last:border-0">{header}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white">
                                                        {block.rows.map((row: string[], i: number) => (
                                                            <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                                                {row.map((cellValue: string, j: number) => (
                                                                    <td key={j} className="px-6 py-4 text-gray-700 text-[14px] leading-relaxed border-r border-gray-100 last:border-0 font-medium">
                                                                        {cellValue}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })}
                        </article>

                        {/* Bottom Decoration / FAQ section matching screenshot */}
                        <div className="mt-20 border-t border-gray-100">
                            <Testimonials eyebrow="TESTIMONIALS" title="What our customer says" />

                            {post.faqs && (
                                <div className="mt-12">
                                    <h3 className="text-4xl font-bold text-gray-900 text-center mb-10">FAQ</h3>
                                    <FAQAccordion items={post.faqs} defaultOpenIndex={0} />
                                </div>
                            )}

                            {!post.faqs && <FAQ />}
                        </div>

                        {/* Social Share (Updated style) */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <span className="text-gray-500 font-bold block mb-4 text-sm">Share this post:</span>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { name: 'facebook', icon: 'f Facebook', color: 'bg-[#3b5998]' },
                                    { name: 'twitter', icon: 't Twitter', color: 'bg-[#1da1f2]' },
                                    { name: 'linkedin', icon: 'in LinkedIn', color: 'bg-[#0077b5]' }
                                ].map((social) => (
                                    <div key={social.name} className={`${social.color} text-white px-5 py-2.5 rounded text-xs font-bold flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity shadow-sm uppercase tracking-wide`}>
                                        <span className="text-lg leading-none">{social.icon.split(' ')[0]}</span>
                                        <span>{social.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[32%] space-y-8">

                        {/* Explore Further Card */}
                        <div className="bg-[#EC2028] rounded-2xl p-10 text-center shadow-xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                                Explore Further Blog Topics
                            </h3>
                            <button className="bg-white text-[#EC2028] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                Click Here
                            </button>
                        </div>

                        {/* Latest Posts */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-[22px] font-bold text-gray-900">
                                    Latest Posts
                                </h3>
                                <button className="bg-[#EC2028] text-white text-[13px] px-4 py-2 rounded-md font-bold flex items-center gap-2 hover:bg-red-700 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    Contact Now
                                </button>
                            </div>

                            <div className="space-y-6">
                                {latestPosts.map((lp: BlogPost) => (
                                    <Link key={lp.slug} href={`/blog/${lp.slug}`} className="group flex items-start gap-4">
                                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow-sm transition-transform group-hover:scale-105">
                                            <Image
                                                src={lp.image}
                                                alt={lp.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-gray-900 group-hover:text-[#EC2028] transition-colors leading-snug line-clamp-2 text-[15px]">
                                                {lp.title}
                                            </h4>
                                            <span className="text-xs text-gray-400 mt-2 block font-medium">
                                                {lp.date}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Banner Widget */}
                        <div className="relative rounded-2xl overflow-hidden min-h-[350px] flex items-center justify-center text-center p-8 group shadow-lg">
                            <Image
                                src="/images/blog/hero.jpeg"
                                alt="Fiesta Cabs"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/70" />
                            <div className="relative z-10">
                                <div className="w-16 h-1 w-12 bg-[#EC2028] mx-auto mb-6" />
                                <h3 className="text-white text-2xl font-bold mb-4">Need 24/7 Support?</h3>
                                <p className="text-white/80 mb-8 text-[15px] leading-relaxed">We are here to help you move safely and punctually.</p>
                                <Link href="/reach-us" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#EC2028] transition-all inline-block uppercase tracking-wider text-sm">
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
}
