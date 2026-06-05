import Link from "next/link";
import { Info, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export const metadata = {
  title: "Cookies Policy | TM Solutions",
  description: "Learn about how cookies and browser storage are utilized at TM Solutions to save shopping cart configurations.",
};

export default function CookiesPolicy() {
  return (
    <>
      <Header />
      <Cart />

      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="bg-white rounded-[2.5rem] border border-slate-200/50 shadow-md p-8 sm:p-12">
            
            <header className="mb-10 pb-8 border-b border-slate-100">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-light border border-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest rounded-md mb-4">
                <Info className="w-3.5 h-3.5" /> Site Cookies
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-text-charcoal font-display">
                Cookies Policy
              </h1>
              <p className="text-slate-400 text-xs mt-3">Last Updated: June 5, 2026</p>
            </header>

            <div className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-sm leading-relaxed space-y-6">
              <p>
                To provide a seamless e-commerce experience, TM Solutions uses browser cookies and local storage parameters. This document explains what these trackers do and how you can opt out.
              </p>

              <h3 className="font-bold text-text-charcoal text-base font-display">1. What are Cookies and Local Storage?</h3>
              <p>
                Cookies are tiny text records sent by web servers and cached in your browser. Local Storage is a modern browser database used to save persistent customer preferences without transmitting data across network requests.
              </p>

              <h3 className="font-bold text-text-charcoal text-base font-display">2. How We Use Them</h3>
              <p>
                We restrict cookies to absolute functional essentials:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Shopping Bag Memory:</strong> We use Local Storage (`tm_solutions_cart`) to preserve the items, sizes, and quantities in your drawer between page switches and browser restarts. Without this, your cart would clear instantly upon page reload.</li>
                <li><strong>Performance:</strong> Analytics cookies to gauge page load latency and compile anonymous traffic data.</li>
              </ul>

              <h3 className="font-bold text-text-charcoal text-base font-display">3. Controlling Your Settings</h3>
              <p>
                You can block or delete cookies by adjusting your browser preferences (e.g. Chrome, Safari, Firefox settings). Note that blocking essential cookies will make the shopping cart drawer functional details inactive.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
