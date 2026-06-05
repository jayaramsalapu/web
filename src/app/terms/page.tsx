import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export const metadata = {
  title: "Terms of Service | TM Solutions",
  description: "Read the terms of service and usage conditions for TM Solutions cleaning products.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfService() {
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
                <BookOpen className="w-3.5 h-3.5" /> Legal Conditions
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-text-charcoal font-display">
                Terms of Service
              </h1>
              <p className="text-slate-400 text-xs mt-3">Last Updated: June 5, 2026</p>
            </header>

            <div className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-sm leading-relaxed space-y-6">
              <p>
                Welcome to TM Solutions. These Terms of Service govern your use of our website and purchase of our cleaning products. By accessing our site, you agree to comply with these terms.
              </p>

              <h3 className="font-bold text-text-charcoal text-base font-display">1. Ordering & Fulfillment</h3>
              <p>
                Our store utilizes a unique phone synchronization process:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You select products and submit a valid phone number.</li>
                <li>Your selection is logged, and a WhatsApp checkout template is compiled.</li>
                <li>Fulfillment details, delivery addresses, and shipping charges are settled directly via WhatsApp messages.</li>
              </ul>

              <h3 className="font-bold text-text-charcoal text-base font-display">2. Pricing & Variants</h3>
              <p>
                All prices listed in Indian Rupees (₹) are subject to adjustment based on packaging volumes (e.g. 500ml, 1L, 5L concentrates). Prices do not include delivery tariffs, which are computed and confirmed during the WhatsApp verification process.
              </p>

              <h3 className="font-bold text-text-charcoal text-base font-display">3. Permitted Product Use</h3>
              <p>
                TM Solutions products are designed for domestic and industrial cleaning applications. Users must adhere strictly to the package dilution instructions (especially concentrates) to prevent safety issues on delicate finishes. TM Solutions is not liable for structural damage caused by improper usage.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
