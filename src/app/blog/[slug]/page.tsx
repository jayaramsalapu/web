import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { blogPosts } from "@/lib/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Next.js App Router Static Generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Next.js Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Article Not Found | TM Solutions",
    };
  }

  return {
    title: `${post.metaTitle} | TM Solutions`,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["TM Solutions Lab"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related articles (matching same category, up to 3)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      <Cart />

      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Breadcrumb Back Link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
          </Link>

          {/* Article Wrapper */}
          <article className="bg-white rounded-[2.5rem] border border-slate-200/50 shadow-md overflow-hidden p-8 sm:p-12">
            
            {/* Header Details */}
            <header className="mb-10 pb-8 border-b border-slate-100">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-light border border-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest rounded-md mb-6">
                <BookOpen className="w-3 h-3" /> {post.category}
              </span>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-text-charcoal font-display leading-[1.15]">
                {post.title}
              </h1>

              {/* Author / Date / Time */}
              <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-semibold mt-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-300" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-300" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span>By TM Solutions Science Lab</span>
                </div>
              </div>
            </header>

            {/* Article Content Rendered */}
            <div 
              className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

          </article>

          {/* Related Articles Segment */}
          {relatedPosts.length > 0 && (
            <section className="mt-20 border-t border-slate-200 pt-16">
              <h3 className="text-xl font-bold text-text-charcoal font-display mb-8">
                Recommended Related Reads
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link 
                    key={related.slug} 
                    href={`/blog/${related.slug}`}
                    className="group bg-white p-6 rounded-2xl border border-slate-200/50 hover:border-brand/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-bold text-brand uppercase bg-brand-light px-2 py-0.5 rounded-md">
                        {related.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 font-display mt-4 group-hover:text-brand transition leading-snug">
                        {related.title}
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-400 font-semibold mt-6 block">
                      {related.date}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      {/* Floating WhatsApp Quick-CTA */}
      <a
        href="https://wa.me/919866987596"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer border-2 border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <Footer />
    </>
  );
}
