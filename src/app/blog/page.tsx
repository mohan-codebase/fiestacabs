import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "../../data/blogPosts";
import PageHero from "../../components/common/PageHero";
export const metadata = {
  title: "Blog | Fiesta Smart Mobility",
  description: "Blogs",
};

type CardPost = {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  date: string;
};

export default function BlogPage() {
  const posts: CardPost[] = blogPosts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    url: `/blog/${post.slug}`,
    date: post.date,
  }));

  return (
    <div className="bg-[#efefef] text-slate-900">
      <PageHero
        title="Blogs"
        backgroundImage="/images/blog/hero.jpeg"
        height="md"
      />

      {/* Card grid */}
      <section className="relative bg-[#efefef]">
        <div className="max-w-6xl mx-auto px-4 pb-14 mt-15 md:mt-30">
          <div className="-mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.url}
                href={post.url}
                className="group block bg-white rounded-2xl shadow-[0_10px_28px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden"
              >
                <article className="flex flex-col h-full">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 flex flex-col gap-3 flex-1">
                    <span className="inline-flex w-max px-3 py-1 text-[12px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-full shadow-sm">
                      {post.date}
                    </span>

                    <h3 className="text-[18px] font-semibold text-slate-900 leading-snug group-hover:text-[#EC2028] transition-colors">
                      {post.title}
                    </h3>

                    <p
                      className="text-[14px] text-slate-600 leading-relaxed flex-1"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="inline-flex items-center gap-1 text-[#EC2028] group-hover:text-slate-900 transition-colors">
                        Read
                        <span aria-hidden>→</span>
                      </span>
                      <span className="text-slate-400 uppercase tracking-[0.2em]">
                        Mobility
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
