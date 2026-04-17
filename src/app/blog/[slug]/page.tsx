import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts, BlogPost, ContentBlock } from "../../../data/blogPosts";
import Testimonials from "../../../components/common/Testimonials";
import FAQ from "../../../components/sections/home/FAQ";
import FAQAccordion from "../../../components/common/FAQAccordion";
import BookNowButton from "../../../components/common/BookNowButton";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

import { PAGE_METADATA } from "@/src/data/metadata";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const fullPath = `/blog/${slug}`;
  
  // Check if there is a manual override in central metadata.ts
  if (PAGE_METADATA[fullPath]) {
      const data = PAGE_METADATA[fullPath];
      return {
          title: data.title,
          description: data.description,
          keywords: data.keywords,
          openGraph: {
              title: data.title,
              description: data.description,
          },
          twitter: {
              title: data.title,
              description: data.description,
          }
      };
  }

  const post = blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog | Fiesta Smart Mobility",
      description: "Read mobility insights and transport guides from Fiesta Smart Mobility.",
    };
  }

  return {
    title: `${post.title} | Fiesta Blog`,
    description: post.excerpt,
    keywords: `${post.title.toLowerCase().split(' ').join(', ')}, mobility insights, transport guides, fiesta cabs blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.bannerImage || post.image,
          alt: post.title,
        },
      ],
      type: "article",
    },
  };
}

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const calculateReadingTime = (post: BlogPost) => {
  const words = post.content.reduce((total, block) => {
    if (typeof block === "string") {
      return total + countWords(block);
    }

    if ("text" in block && block.text) {
      return total + countWords(block.text);
    }

    if ("items" in block && Array.isArray(block.items)) {
      return total + block.items.reduce((itemTotal, item) => itemTotal + countWords(item), 0);
    }

    if (block.type === "table") {
      const headerWords = block.headers.reduce(
        (headerTotal, header) => headerTotal + countWords(header),
        0,
      );
      const rowWords = block.rows.reduce(
        (rowTotal, row) =>
          rowTotal +
          row.reduce((cellTotal, cell) => cellTotal + countWords(cell), 0),
        0,
      );
      return total + headerWords + rowWords;
    }

    return total;
  }, 0);

  return Math.max(3, Math.round(words / 180));
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post as BlogPost);

  const latestPosts = blogPosts
    .filter((p: BlogPost) => p.slug !== slug)
    .slice(0, 5);

  const postUrl = `https://fiestacabs.com/blog/${slug}`;
  const encodedPostUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(post!.title);
  const shareLinks = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedPostUrl}`,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedPostUrl}&text=${encodedTitle}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedPostUrl}`,
    },
  ];

  const currentPost = post!;

  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden min-h-[340px] md:min-h-[480px]">
        <Image
          src={currentPost.bannerImage || "/images/blog/hero.jpeg"}
          alt={currentPost.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/70" />

        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-16 md:pt-20 md:pb-24 flex flex-col justify-end h-full">
          <div className="inline-flex flex-wrap items-center gap-2 text-sm text-white/90 uppercase tracking-[0.16em] px-3 mt-10">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#EC2028]">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span className="text-[#EC2028]">/</span>
            <span className="text-white/85">Article</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-white mt-4 leading-[1.08] drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
            {currentPost.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/85">
            <span className="px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-[1px]">
              {currentPost.date}
            </span>
            <span className="px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-[1px]">
              ~{readingTime} min read
            </span>
            <span className="px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-[1px]">
              Mobility insights
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-14 mt-6">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
          <article className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image
                src={currentPost.image}
                alt={currentPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 740px"
                className="object-cover"
              />
            </div>

            <div className="p-5 md:p-7">
              <div className="space-y-6 text-slate-800">
                {currentPost.content.map((block: ContentBlock | string, idx: number) => {
                  if (typeof block === "string") {
                    return (
                      <p key={idx} className="leading-relaxed text-[17px] text-slate-700">
                        {block}
                      </p>
                    );
                  }

                  switch (block.type) {
                    case "p":
                      return (
                        <p key={idx} className="leading-relaxed text-[17px] text-slate-700">
                          {block.text}
                        </p>
                      );
                    case "h2":
                      return (
                        <h2
                          key={idx}
                          className="text-3xl mt-12 mb-6 leading-tight font-semibold text-slate-900"
                        >
                          {block.text}
                        </h2>
                      );
                    case "h3":
                      return (
                        <h3
                          key={idx}
                          className="text-2xl mt-10 mb-4 leading-tight font-semibold text-slate-900"
                        >
                          {block.text}
                        </h3>
                      );
                    case "h4":
                      return (
                        <h4 key={idx} className="text-xl font-semibold mt-8 mb-4">
                          {block.text}
                        </h4>
                      );
                    case "h5":
                      return (
                        <h5 key={idx} className="text-lg font-semibold mt-6 mb-3">
                          {block.text}
                        </h5>
                      );
                    case "h6":
                      return (
                        <h6 key={idx} className="text-base font-semibold mt-6 mb-3">
                          {block.text}
                        </h6>
                      );
                    case "ul":
                      return (
                        <ul key={idx} className="list-disc pl-6 space-y-3 text-[17px] text-slate-700">
                          {block.items.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      );
                    case "ol":
                      return (
                        <ol key={idx} className="list-decimal pl-6 space-y-3 text-[17px] text-slate-700">
                          {block.items.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ol>
                      );
                    case "image":
                      return (
                        <figure
                          key={idx}
                          className="my-10 overflow-hidden rounded-2xl shadow-md border border-slate-100 bg-slate-50"
                        >
                          <div className="relative w-full aspect-[16/9]">
                            <Image
                              src={block.src}
                              alt={block.alt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 720px"
                              className="object-cover"
                            />
                          </div>
                          {block.caption && (
                            <figcaption className="px-4 py-3 text-sm text-slate-500 text-center">
                              {block.caption}
                            </figcaption>
                          )}
                        </figure>
                      );
                    case "table":
                      return (
                        <div
                          key={idx}
                          className="my-12 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white"
                        >
                          <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50">
                              <tr>
                                {block.headers.map((header: string, i: number) => (
                                  <th
                                    key={i}
                                    className="px-6 py-4 font-semibold uppercase text-xs tracking-[0.16em] text-slate-600"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.rows.map((row: string[], i: number) => (
                                <tr
                                  key={i}
                                  className="border-t border-slate-100 even:bg-slate-50/60 hover:bg-slate-100/60 transition-colors"
                                >
                                  {row.map((cellValue: string, j: number) => (
                                    <td
                                      key={j}
                                      className="px-6 py-4 text-[14px] text-slate-700 leading-relaxed"
                                    >
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
              </div>

              {currentPost.testimonial && (
                <div className="mt-10 rounded-2xl bg-slate-100 text-slate-900 p-6 md:p-7 border border-slate-200 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-2">
                    Client spotlight
                  </p>
                  <p className="text-lg leading-relaxed font-semibold text-slate-800">
                    “{currentPost.testimonial.quote}”
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-700">
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200">
                      {currentPost.testimonial.company}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200">
                      {currentPost.testimonial.person} — {currentPost.testimonial.role}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200">
                      {currentPost.testimonial.rating}★ service rating
                    </span>
                  </div>
                </div>
              )}

              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 text-sm text-slate-600 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-semibold">
                    {currentPost.date}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-semibold">
                    ~{readingTime} min read
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-semibold">
                    Mobility
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Share
                  </span>
                  <div className="flex gap-2">
                    {shareLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:border-[#EC2028] hover:text-[#EC2028] transition-colors"
                        aria-label={`Share on ${social.name}`}
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
              <div className="rounded-3xl bg-slate-900 text-white p-6 shadow-xl border border-slate-800">
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">Quick facts</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-lg">📅</span>
                  <div>
                    <p className="text-xs uppercase text-white/60">Published</p>
                    <p className="font-semibold">{currentPost.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">⏱</span>
                  <div>
                    <p className="text-xs uppercase text-white/60">Reading time</p>
                    <p className="font-semibold">~{readingTime} minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">🚐</span>
                  <div>
                    <p className="text-xs uppercase text-white/60">Focus</p>
                    <p className="font-semibold">Mobility & transport ops</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Share</p>
                <div className="mt-3 space-y-2">
                  {shareLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold"
                      aria-label={`Share on ${social.name}`}
                    >
                      <span>{social.name}</span>
                      <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  Latest Posts
                </h3>
                <BookNowButton variant="primary" className="text-xs px-4 py-2">
                  Contact
                </BookNowButton>
              </div>

              <div className="space-y-4">
                {latestPosts.map((lp: BlogPost) => (
                  <Link
                    key={lp.slug}
                    href={`/blog/${lp.slug}`}
                    className="group flex items-start gap-3 rounded-2xl p-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                      <Image
                        src={lp.image}
                        alt={lp.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500">{lp.date}</p>
                      <p className="font-semibold text-slate-900 group-hover:text-[#EC2028] leading-snug">
                        {lp.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-100 text-slate-900 p-6 shadow-sm border border-slate-200 flex flex-col gap-4">
              <h3 className="text-xl font-semibold">
                Need 24/7 movement support?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                We orchestrate nightly shuttles, airport drops, and premium cars with safety-first
                SOPs and real-time visibility.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/reach-us"
                  className="px-5 py-3 rounded-full bg-[#EC2028] btn-animated text-white font-semibold shadow-sm hover:bg-[#c51c24] transition-colors"
                >
                  Talk to operations
                </Link>
                <BookNowButton variant="outline" className="px-5 py-3 font-semibold">
                  Book now
                </BookNowButton>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          <div className="rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
            <Testimonials
              eyebrow="TESTIMONIALS"
              title="What our customers say"
              className="!bg-slate-50"
            />
          </div>

          <div className="rounded-3xl bg-slate-50 border border-slate-100 shadow-sm p-6 md:p-8">
            {currentPost.faqs ? (
              <>
                <div className="text-center mb-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#EC2028] font-semibold">
                    FAQ
                  </p>
                  <h3 className="text-3xl font-semibold mt-2 text-slate-900">
                    Answers for this topic
                  </h3>
                </div>
                <FAQAccordion items={currentPost.faqs} defaultOpenIndex={0} />
              </>
            ) : (
              <FAQ />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
