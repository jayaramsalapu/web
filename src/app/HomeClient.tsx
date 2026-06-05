"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Droplet, 
  ShieldCheck, 
  Leaf, 
  HelpCircle, 
  ArrowRight, 
  ChevronDown, 
  Check, 
  X,
  MessageCircle,
  TrendingUp,
  Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import DemoSlider from "@/components/DemoSlider";
import Canvas3D from "@/components/Canvas3D";
import { products, Product } from "@/lib/constants";
import { addToCart } from "@/lib/cart";

export default function HomeClient() {
  // Hero bottle color state
  const [heroLiquidColor, setHeroLiquidColor] = useState("#047857"); // Emerald green
  const [heroProductName, setHeroProductName] = useState("Floor Cleaner");
  
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

  // Accordion active index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form states
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleSizeChange = (productId: number, size: string, price: number) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
    setSelectedPrices(prev => ({ ...prev, [productId]: price }));
  };

  const handleAddToBag = (product: Product) => {
    const size = selectedSizes[product.id];
    const price = selectedPrices[product.id];
    addToCart(product, size, price);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleHeroSelect = (name: string, color: string) => {
    setHeroProductName(name);
    setHeroLiquidColor(color);
  };

  const faqs = [
    {
      q: "What makes TM Solutions cleaning products different?",
      a: "Our products use advanced organic enzyme matrices instead of water-diluted filler formulas. With 4x higher active ingredient concentrations, you get superior stain removal with a fraction of the product amount."
    },
    {
      q: "Are these formulas safe for children and pets?",
      a: "Absolutely. All TM Solutions products are 100% bio-based, dermatologically skin-friendly, and free from volatile organic compounds (VOCs), hydrochloric acid, and chlorine bleach."
    },
    {
      q: "How does the direct WhatsApp checkout work?",
      a: "When you build your cart and proceed to verification, the system registers your phone number, formats a neat billing statement, and opens a pre-filled WhatsApp window. You can share your address directly with our support team to verify and ship. This eliminates cart friction."
    },
    {
      q: "Are the bottles recyclable?",
      a: "Yes. All of our packaging is made from 100% recyclable HDPE and PET material. We encourage buying our larger 5L concentrates to refill smaller containers, reducing household plastic waste by up to 60%."
    }
  ];

  return (
    <>
      <Header />
      <Cart />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="relative pt-30 pb-24 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50">
        {/* Soft Organic Background Blurs */}
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-emerald-50/40 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-sky-50/30 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[65vh]">
          
          {/* Hero Left Content (Refined Typography & Design) */}
          <div className="lg:col-span-7 text-center lg:text-left z-10">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/50 mb-6 animate-reveal">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-800">
                PREMIUM CLEANING SOLUTIONS
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.12] font-display animate-reveal">
              Powerful Cleaning <br />
              <span className="bg-gradient-to-r from-brand to-emerald-600 bg-clip-text text-transparent">
                Less Effort <br /> Less Time
              </span>
            </h1>

            <p className="mt-6 text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed mx-auto lg:mx-0">
              TM Solutions delivers high-performance floor cleaners, toilet cleaners, detergents, and home care products designed to achieve powerful cleaning with less effort and in less time than ordinary cleaners, using a fraction of the quantity.
            </p>

            {/* Structured Value Points */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" /> 4x High Concentration
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />  Fast Stain Removal
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />  Safe for Daily Use
              </span>
            </div>

            {/* Premium Button Controls */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="#products"
                className="px-9 py-4.5 bg-slate-900 hover:bg-brand text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                Shop the Collection
              </Link>
              <a
                href="https://wa.me/919866987596"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-2 hover:bg-slate-50 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" /> WhatsApp Live Chat
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className="text-brand font-bold text-lg block">Eco-Cert</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Bio-Based Base</span>
              </div>
              <div className="text-center lg:text-left border-x border-slate-100 px-2">
                <span className="text-brand font-bold text-lg block">Safe Clean</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Skin Friendly</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-brand font-bold text-lg block">Refills</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Saves 60% Plastic</span>
              </div>
            </div>

          </div>

          {/* Hero Right Visual (Flagship Product Collage Showcase) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft Radial Glow */}
            <div className="absolute w-[40rem] h-[40rem] bg-emerald-100/50 rounded-full blur-3xl opacity-40 pointer-events-none" />
            
            <div className="relative w-full max-w-lg z-10 bg-gradient-to-br from-slate-100/70 to-white/95 p-6 sm:p-8 rounded-[3rem] border border-slate-200/50 shadow-[0_20px_50px_rgba(15,23,42,0.03)] animate-float">
              
              <Image
                src="/All-products.png"
                alt="TM Solutions Premium Product Catalog"
                width={500}
                height={400}
                priority
                className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.04)]"
              />

              {/* Absolute Glassmorphic Hotspots */}
              <div className="absolute -top-3 -right-3 bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/50 text-[10px] font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                <span>🛡️</span>Lemongrass & Pine Oils
              </div>

              <div className="absolute -bottom-3 -left-3 bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/50 text-[10px] font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                <span>🌿</span> Plant-Based Surfactants
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROBLEM SECTION ================= */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">
              The Chemical Paradox
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-charcoal mt-3 leading-tight">
              Why Ordinary Cleaners Fail Your Home
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Standard commercial products are heavily diluted with water and filled with toxic chemical agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg mb-6">
                  60%
                </div>
                <h3 className="text-lg font-bold text-text-charcoal font-display mb-2">Water Dilution</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Competitors ship bulky water jugs. You pay for single-use plastic waste and logistics rather than the active surfactant base.
                </p>
              </div>
              <span className="text-slate-300 text-[10px] font-bold uppercase tracking-wider mt-8 block">TM Solution: Concentrates</span>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg mb-6">
                  VOCs
                </div>
                <h3 className="text-lg font-bold text-text-charcoal font-display mb-2">Hazardous Fumes</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Acidic compounds and chlorine bleach emit fumes in enclosed washrooms, inducing respiratory stress and eating away at ceramic grout.
                </p>
              </div>
              <span className="text-slate-300 text-[10px] font-bold uppercase tracking-wider mt-8 block">TM Solution: Zero VOC Gel</span>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-6">
                  Sticky
                </div>
                <h3 className="text-lg font-bold text-text-charcoal font-display mb-2">Synthetic Soap Residue</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Diluted fluids leave sticky soap films that attract dust immediately, forcing you to scrub twice as often to maintain surface shine.
                </p>
              </div>
              <span className="text-slate-300 text-[10px] font-bold uppercase tracking-wider mt-8 block">TM Solution: Enzyme Action</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCIENCE SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-brand font-bold text-xs uppercase tracking-widest">
                Scientific Formulation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-charcoal mt-3 leading-tight">
                Clinically Pure. <br />
                Naturally Strong.
              </h2>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                TM Solutions products are engineered to deliver maximum cleaning performance with minimum effort.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">🌿 Eco-Conscious Approach</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Formulated to reduce unnecessary chemical waste and excessive product usage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">⚡ Faster Cleaning Results</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Cuts through dirt and stains quickly, helping save time during daily cleaning.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">🏠 Made for Every Corner of Your Home</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Ideal for floors, bathrooms, laundry, and everyday household cleaning needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                  <div className="text-2xl mb-4">💧</div>
                  <h3 className="font-bold text-text-charcoal font-display text-sm mb-2">Less Product Required</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Highly concentrated formulas deliver better cleaning results using smaller quantities compared to ordinary cleaners.
                  </p>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                  <div className="text-2xl mb-4">🌿</div>
                  <h3 className="font-bold text-text-charcoal font-display text-sm mb-2">Essential Oil Aromas</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We steer clear of synthetic fragrances. Fresh notes of lemongrass and pine disinfect and uplift bathroom atmosphere.
                  </p>
                </div>

                  <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                  <div className="text-2xl mb-4">⚡</div>
                  <h3 className="font-bold text-text-charcoal font-display text-sm mb-2">Deep Cleaning Power</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                   Removes stubborn dirt, grease, and stains from floors, bathrooms, and surfaces without excessive scrubbing.
                  </p>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                  <div className="text-2xl mb-4">🛡️</div>
                  <h3 className="font-bold text-text-charcoal font-display text-sm mb-2">Anti-Static Polymer</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Leaves an micro-shield that repels dust settlement, keeping marble and tiling gleaming clean for up to 3 days.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ================= COMPETITOR COMPARISON ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand font-bold text-xs uppercase tracking-widest">
              TM Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-charcoal mt-3">
              How TM Solutions Stands Apart
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              A detailed breakdown of our organic concentrate metrics vs ordinary chemical detergents.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100/60 border-b border-slate-200">
                  <th className="p-6 font-bold text-slate-700">Performance Metric</th>
                  <th className="p-6 font-bold text-brand bg-brand-light/20">TM Solutions</th>
                  <th className="p-6 font-bold text-slate-500">Commercial Brands</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-6 font-semibold text-slate-800">Formula Concentration</td>
                  <td className="p-6 font-extrabold text-brand bg-brand-light/10">High Concentrate (97%)</td>
                  <td className="p-6 text-slate-500">Water-Diluted (12-15%)</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-slate-800">Acid Fume Risk</td>
                  <td className="p-6 font-extrabold text-brand bg-brand-light/10">0% (Lactic/Citric Bio-Bases)</td>
                  <td className="p-6 text-slate-500">High (Hydrochloric Acid bases)</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-slate-800">Dermatological Safety</td>
                  <td className="p-6 font-extrabold text-brand bg-brand-light/10">Skin-Friendly (pH Balanced)</td>
                  <td className="p-6 text-slate-500">Corrosive (Requires gloves)</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-slate-800">Fragrance Source</td>
                  <td className="p-6 font-extrabold text-brand bg-brand-light/10">Pure Essential Pine & Lemongrass</td>
                  <td className="p-6 text-slate-500">Synthetic Perfumes (Petrochemicals)</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold text-slate-800">Wastes Generated</td>
                  <td className="p-6 font-extrabold text-brand bg-brand-light/10">Refillable / Zero Phosphate Runoff</td>
                  <td className="p-6 text-slate-500">Single-Use PVC / Toxic Phosphate Algae Blooms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT COLLECTION ================= */}
      <section id="products" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-brand font-bold text-xs uppercase tracking-widest bg-brand-light px-4 py-1.5 rounded-full">
                Eco-Conscious Boutique
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mt-4 font-display">
                Premium Cleaning Collection
              </h2>
              <p className="text-slate-500 text-sm mt-3">
                Select from our specialized formulas. Adjust sizes and add items to your clinical home care bag.
              </p>
            </div>
            
            <div className="px-4 py-2 border border-slate-200 rounded-2xl text-xs font-bold text-slate-500 bg-slate-50">
              6 Premium Active Formulas
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
                    <h3 className="text-base font-bold text-slate-900 font-display">{product.name}</h3>
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
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand font-bold text-xs uppercase tracking-widest">
              Verified Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-charcoal mt-3">
              Trusted in 120+ Indian Homes
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Hear from customers who made the switch to bio-concentrates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200/50 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-brand text-xs font-bold block mb-4">⭐⭐⭐⭐⭐</span>
                <p className="text-slate-600 text-xs italic leading-relaxed">
                  &ldquo;I was skeptical about organic cleaners removing hard scales, but the TM Solutions toilet cleaner is magical. Plus, there are zero acidic chemical smells. My bathroom smells like pine forests.&rdquo;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-xs font-bold text-slate-500 flex items-center justify-center">PK</div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Pranitha Kumar</div>
                  <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200/50 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-brand text-xs font-bold block mb-4">⭐⭐⭐⭐⭐</span>
                <p className="text-slate-600 text-xs italic leading-relaxed">
                  &ldquo;The Floor Cleaner lemongrass extract leaves my marble floors sparkling clean. Best part? I only need 10ml in my bucket instead of dumping caps of diluted commercial brands. Saves plastic and money!&rdquo;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-xs font-bold text-slate-500 flex items-center justify-center">AS</div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Aditya Sharma</div>
                  <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Mumbai</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200/50 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-brand text-xs font-bold block mb-4">⭐⭐⭐⭐⭐</span>
                <p className="text-slate-600 text-xs italic leading-relaxed">
                  &ldquo;Our baby clothes are so soft, and we don&rsquo;t get any skin rashes anymore since we switched to their concentrated laundry detergent. Highly recommend their fabric softener too.&rdquo;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-xs font-bold text-slate-500 flex items-center justify-center">MR</div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Meera Reddy</div>
                  <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRAND STORY SECTION ================= */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-light rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Story Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-slate-200/50 rounded-[3rem] -top-4 -left-4 -z-10 w-full h-full" />
              <div className="bg-slate-50 border border-slate-200/60 rounded-[3rem] p-8 shadow-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="TM Solutions Brand Identity"
                  width={400}
                  height={400}
                  className="w-full max-w-sm rounded-[2rem] object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7">
              <span className="text-brand font-bold text-xs uppercase tracking-widest">
                Our Genesis
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-charcoal mt-3 leading-tight">
                Purity in Ingredients. <br />
                Precision in Formulation.
              </h2>
              <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                TM Solutions was founded in India to bridge the gap between green living and active cleaning performance. We realized that customers shouldn&rsquo;t have to choose between a clean bathroom scale and their children&rsquo;s lung safety.
              </p>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                By taking water out of the logistics model, we packaging high-purity concentrate enzymes that do the dirty work effortlessly. Clean less often, clean deeper, and reduce single-use plastic waste.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-brand mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Our Mission</h3>
                    <p className="text-[11px] text-slate-400 mt-1">Lifting toxic chemical burdens off modern Indian households.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-brand mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Our Standards</h3>
                    <p className="text-[11px] text-slate-400 mt-1">Dermatologically tested formulas containing active organic bases.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">
              Clarifications
            </span>
            <h2 className="text-3xl font-bold font-display text-text-charcoal mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center font-semibold text-sm text-text-charcoal hover:text-brand cursor-pointer focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      activeFaq === index ? "transform rotate-180 text-brand" : ""
                    }`}
                  />
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-xs text-slate-500 leading-relaxed border-t border-slate-50 pt-4 animate-reveal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG PREVIEWS SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-brand font-bold text-xs uppercase tracking-widest bg-brand-light px-4 py-1.5 rounded-full">
                Green Living Hub
              </span>
              <h2 className="text-3xl font-bold font-display text-text-charcoal mt-4">
                Scientific Journal
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold text-brand hover:underline flex items-center gap-1.5"
            >
              All Articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group rounded-[2rem] border border-slate-200/60 bg-slate-50 overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="p-8">
                <span className="text-[10px] font-bold text-brand uppercase tracking-widest bg-brand-light px-3 py-1 rounded-md">
                  Floor Care
                </span>
                <div className="text-base font-bold text-text-charcoal font-display mt-6 group-hover:text-brand transition duration-200">
                  How to Protect Luxury Marble & Granite Polish
                </div>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                  Acidic floor cleaners erode calcium matrix inside marble, etching it permanently. Discover how active neutral enzymes lift grease safely.
                </p>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-slate-900 mt-6 inline-flex items-center gap-1 hover:text-brand"
                >
                  Read Marble Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="group rounded-[2rem] border border-slate-200/60 bg-slate-50 overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="p-8">
                <span className="text-[10px] font-bold text-brand uppercase tracking-widest bg-brand-light px-3 py-1 rounded-md">
                  Laundry
                </span>
                <div className="text-base font-bold text-text-charcoal font-display mt-6 group-hover:text-brand transition duration-200">
                  Concentrated Liquids vs Powder Detergents
                </div>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                  An in-depth chemical look at laundry cycles. Why liquids dissolve 100% and save your washing machine electronics from residue damage.
                </p>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-slate-900 mt-6 inline-flex items-center gap-1 hover:text-brand"
                >
                  Read Detergent Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="group rounded-[2rem] border border-slate-200/60 bg-slate-50 overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="p-8">
                <span className="text-[10px] font-bold text-brand uppercase tracking-widest bg-brand-light px-3 py-1 rounded-md">
                  Eco Friendly
                </span>
                <div className="text-base font-bold text-text-charcoal font-display mt-6 group-hover:text-brand transition duration-200">
                  The Real Math Behind Eco Refill Concentrates
                </div>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                  Learn how cutting water shipping weights out of consumer D2C models reduces household budgets and carbon emissions by up to 60%.
                </p>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-slate-900 mt-6 inline-flex items-center gap-1 hover:text-brand"
                >
                  Read Economics Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-xl mx-auto px-6 bg-white border border-slate-200/50 shadow-md p-10 rounded-[2.5rem]">
          <div className="text-center mb-8">
            <span className="text-brand font-bold text-xs uppercase tracking-widest">
              Direct Contact
            </span>
            <h2 className="text-2xl font-bold font-display text-text-charcoal mt-3">
              Drop Us a Line
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              Have bulk orders or inquiries? Send us your message.
            </p>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert(`Thank you ${contactName}, our support hub has recorded your message.`);
            setContactName("");
            setContactEmail("");
            setContactMessage("");
          }} className="space-y-4">
            <div>
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full border border-slate-200 bg-slate-50 px-4 py-3 rounded-xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 outline-none transition text-sm font-semibold"
                placeholder="Ex: Rajesh Kumar"
              />
            </div>
            
            <div>
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full border border-slate-200 bg-slate-50 px-4 py-3 rounded-xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 outline-none transition text-sm font-semibold"
                placeholder="Ex: rajesh@gmail.com"
              />
            </div>

            <div>
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">Message</label>
              <textarea
                required
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                rows={4}
                className="w-full border border-slate-200 bg-slate-50 px-4 py-3 rounded-xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 outline-none transition text-sm font-semibold resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4.5 bg-brand hover:bg-emerald-950 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      </main>

      {/* Floating WhatsApp Quick-CTA */}
      <a
        href="https://wa.me/919866987596"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer border-2 border-white/20 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-bold text-[10px] uppercase tracking-wider ml-0 group-hover:ml-2">
          WhatsApp Support
        </span>
      </a>

      <Footer />
    </>
  );
}
