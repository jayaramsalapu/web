"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { products, Product } from "@/lib/constants";
import { addToCart } from "@/lib/cart";

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Selected variant sizes and pricing for the product list grid
  const [selectedPrices, setSelectedPrices] = useState<Record<number, number>>({
    1: 99,  // Detergent Powder starting
    2: 79,  // Floor Cleaner starting
    3: 69,  // Toilet Cleaner starting
    4: 89,  // Fabric Conditioner starting
    5: 179, // Detergent Liquid starting
    6: 49   // Phenyl Solution starting
  });

  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({
    1: "500 g",
    2: "500 ml",
    3: "500 ml",
    4: "500 ml",
    5: "1 L",
    6: "500 ml"
  });

  const handleSizeChange = (productId: number, size: string, price: number) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
    setSelectedPrices(prev => ({ ...prev, [productId]: price }));
  };

  const handleAddToBag = (product: Product) => {
    const size = selectedSizes[product.id];
    const price = selectedPrices[product.id];
    addToCart(product, size, price);
  };

  const categories = ["All", "Laundry", "Floor Care", "Bathroom"];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      <Cart />

      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Breadcrumb Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          {/* Heading Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-brand font-bold text-[10px] uppercase tracking-widest bg-brand-light px-4 py-1.5 rounded-full inline-block mb-4 border border-brand/5">
              Eco-Conscious Boutique
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
              Premium Home Care Catalog
            </h1>
            <p className="text-slate-500 text-sm mt-4 leading-relaxed">
              Explore our laboratory-formulated, high-concentration cleaning solutions. Crafted with natural bio-enzymes and pure essential oils to deliver maximum hygiene with a fraction of the quantity.
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[2.5rem] border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-64 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50/10 border-b border-slate-100 p-8 overflow-hidden">
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-brand text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                    {product.category}
                  </span>
                  
                  {/* Subtle BG Radial glow */}
                  <div className="absolute inset-0 bg-radial-gradient from-emerald-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="max-h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x400/f8fafc/166534?text=${product.name}`;
                    }}
                  />
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-base font-bold text-slate-900 font-display">{product.name}</h2>
                    <p className="text-[10px] text-slate-400 font-semibold mt-1 uppercase tracking-wider">
                      🪔 Fragrance: {product.fragrance}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Active ingredients pills */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {product.activeIngredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-slate-100 border border-slate-200/50 rounded-md text-[9px] text-slate-500 font-semibold"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>

                    {/* Variant pack size select */}
                    <div className="mt-6">
                      <label 
                        htmlFor={`variant-select-${product.id}`}
                        className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2"
                      >
                        Select Variant Pack
                      </label>
                      <select
                        id={`variant-select-${product.id}`}
                        aria-label={`Select size for ${product.name}`}
                        value={`${selectedSizes[product.id]} — ₹${selectedPrices[product.id]}`}
                        onChange={(e) => {
                          const pack = product.packs[e.target.selectedIndex];
                          handleSizeChange(product.id, pack.size, pack.price);
                        }}
                        className="w-full bg-slate-50 border border-slate-200/60 px-3.5 py-2.5 rounded-xl text-xs font-semibold focus:border-brand outline-none transition"
                      >
                        {product.packs.map((p) => (
                          <option key={p.size} value={`${p.size} — ₹${p.price}`}>
                            {p.size} — ₹{p.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Add to Cart Actions */}
                  <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-bold">Total price</span>
                      <span className="text-xl font-black text-brand">₹ {selectedPrices[product.id]}</span>
                    </div>
                    <button
                      onClick={() => handleAddToBag(product)}
                      className="px-5 py-2.5 bg-slate-900 hover:bg-brand text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition shadow-sm cursor-pointer"
                    >
                      Add to Bag <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919866987596"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer border-2 border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <Footer />
    </>
  );
}
