"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { getCart, removeFromCart, updateQuantity, clearCart, CartItem } from "@/lib/cart";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const syncCart = () => {
      setCartItems(getCart());
    };

    const handleOpen = () => {
      syncCart();
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    const handleClose = () => {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    };

    // Initial sync
    syncCart();

    // Event listeners
    window.addEventListener("cart-change", syncCart);
    window.addEventListener("cart-open", handleOpen);
    window.addEventListener("cart-close", handleClose);

    return () => {
      window.removeEventListener("cart-change", syncCart);
      window.removeEventListener("cart-open", handleOpen);
      window.removeEventListener("cart-close", handleClose);
    };
  }, []);

  const closeCart = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleCheckout = () => {
    setPhoneModalOpen(true);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneTrimmed = phoneNumber.trim();

    if (!/^[6-9]\d{9}$/.test(phoneTrimmed)) {
      alert("Please enter a valid 10-digit Indian phone number");
      return;
    }

    setIsSubmitting(true);

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    try {
      // 1. Generate WhatsApp Template
      let message = `🛒 *New Order - TM Solutions*\n\n📞 Customer Phone: ${phoneTrimmed}\n\n📦 *Order Details*\n\n`;
      cartItems.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n   Size: ${item.size}\n   Qty: ${item.quantity}\n   Price: ₹${item.price * item.quantity}\n\n`;
      });
      message += `💰 *Total Amount: ₹${total}*\n\n📍 Please share your delivery address here : `;

      const whatsappNumber = "919866987596";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // 2. Reset State & Cache
      clearCart();
      setPhoneModalOpen(false);
      setPhoneNumber("");
      closeCart();

      // 3. Open WhatsApp
      window.open(whatsappURL, "_blank");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to initiate WhatsApp checkout.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Background overlay */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-slate-900/40 z-50 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white/95 backdrop-blur-xl z-50 shadow-2xl flex flex-col border-l border-slate-100 animate-reveal">
        
        {/* Cart Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h2 className="text-lg font-bold text-text-charcoal font-display">Shopping Cart</h2>
            <p className="text-xs text-slate-500 mt-0.5">{totalCount} item{totalCount !== 1 ? "s" : ""} selected</p>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/50 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-slate-800 font-bold">Your cart is empty</p>
              <p className="text-slate-400 text-xs mt-1">Add items from our premium collection to get started.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.uniqueKey}
                className="flex items-center gap-4 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm animate-reveal"
              >
                {/* Item Thumbnail */}
                <div className="w-16 h-16 bg-slate-50 rounded-xl flex-shrink-0 flex items-center justify-center p-2 border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/100x100/f8fafc/166534?text=${item.name[0]}`;
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-text-charcoal text-sm truncate">{item.name}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{item.size}</p>
                  <p className="text-brand font-bold text-sm mt-1">₹{item.price}</p>
                </div>

                {/* Quantities */}
                <div className="flex items-center gap-2.5 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                  <button
                    onClick={() => updateQuantity(item.uniqueKey, -1)}
                    className="w-6 h-6 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-600 hover:text-brand hover:scale-105 transition active:scale-95 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-xs w-4 text-center text-text-charcoal">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.uniqueKey, 1)}
                    className="w-6 h-6 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-600 hover:text-brand hover:scale-105 transition active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.uniqueKey)}
                  className="text-slate-300 hover:text-rose-500 hover:scale-105 active:scale-95 transition-colors p-1 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/80 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-6">
            <span className="text-slate-500 font-medium text-sm">Estimated Total</span>
            <span className="text-2xl font-bold text-brand">₹ {totalAmount}</span>
          </div>
          
          <button
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
            className="w-full py-4 bg-slate-900 hover:bg-brand text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            Complete Order <ArrowRight className="w-4 h-4" />
          </button>
          
          <p className="text-center text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">
            Safe & Secure Verification
          </p>
        </div>
      </div>

      {/* Phone Verification Modal */}
      {phoneModalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 z-[60] flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 w-full max-w-sm shadow-2xl border border-slate-200/50 animate-reveal">
            
            <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 mx-auto text-brand">
              <ShoppingBag className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-center text-text-charcoal font-display">Confirm Details</h3>
            <p className="text-slate-500 text-center mb-6 mt-1 text-xs leading-relaxed">
              Enter your mobile number to sync with the support hub and generate your shipping bill.
            </p>

            <form onSubmit={handleOrderSubmit}>
              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="9876543210"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                  required
                  className="w-full border border-slate-200 bg-slate-50 pl-14 pr-4 py-3.5 rounded-2xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 outline-none transition-all font-semibold text-base"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setPhoneModalOpen(false)}
                  className="flex-1 py-3.5 bg-slate-100 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-200 transition duration-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 bg-brand text-white rounded-2xl font-bold text-sm shadow-md hover:bg-emerald-950 transition duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Syncing..." : "Verify Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
