"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, MessageCircle, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { blogPosts } from "@/lib/blogs";

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Floor Care", "Toilet Cleaner", "Laundry", "Home Cleaning", "Eco Friendly"];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Header />
      <Cart />

      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Page Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          {/* Heading Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light border border-brand/10 mb-4">
              <BookOpen className="w-3.5 h-3.5 text-brand" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                TM Solutions Journal
              </span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-charcoal font-display">
              Scientific Home Care
            </h1>
            <p className="text-slate-500 text-sm mt-4 leading-relaxed">
              Explore professional insights, detailed product science breakdowns, eco-refill calculations, and fabric care techniques designed to keep your home pure.
            </p>
          </div>

          {/* Categories Tab Swapper */}
          <div className="flex flex-wrap gap-2.5 mb-12 border-b border-slate-200/60 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-brand text-white border-brand shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-[2rem] border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold text-brand uppercase tracking-widest bg-brand-light px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="text-[9px] text-slate-400 font-semibold">{post.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display mt-6 group-hover:text-brand transition duration-200 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-3.5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-semibold">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-slate-900 group-hover:text-brand flex items-center gap-1 transition"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

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
