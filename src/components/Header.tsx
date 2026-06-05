"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { getCart } from "@/lib/cart";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initial load
    const updateCount = () => {
      const cart = getCart();
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };

    updateCount();

    // Listen for cart changes
    window.addEventListener("cart-change", updateCount);
    return () => window.removeEventListener("cart-change", updateCount);
  }, []);

  const openCart = () => {
    window.dispatchEvent(new Event("cart-open"));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
            TM
          </div>
          <span className="text-xl font-bold tracking-tight text-text-charcoal font-display">
            Solutions
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium text-slate-600">
          <Link href="/#home" className="hover:text-brand transition-colors duration-200">
            Home
          </Link>
          <Link href="/products" className="hover:text-brand transition-colors duration-200">
            Products
          </Link>
          <Link href="/#about" className="hover:text-brand transition-colors duration-200">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-brand transition-colors duration-200">
            Journal
          </Link>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="group relative flex items-center gap-2 bg-slate-900 hover:bg-brand text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-semibold text-xs hidden sm:inline">Cart</span>
            <span className="flex items-center justify-center min-w-[20px] h-5 px-1 bg-brand-light text-brand text-[10px] font-bold rounded-full transition-colors duration-300 group-hover:bg-white">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-brand hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl animate-reveal">
          <div className="px-6 py-8 flex flex-col gap-6 font-semibold text-slate-700">
            <Link
              href="/#home"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-slate-50 transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-slate-50 transition"
            >
              Products
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-slate-50 transition"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 transition"
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
