import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export const metadata = {
  title: "Privacy Policy | TM Solutions",
  description: "Learn how TM Solutions collects, uses, and protects your personal data when using our cleaning product services.",
};

export default function PrivacyPolicy() {
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
                <Shield className="w-3.5 h-3.5" /> Security & Trust
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-text-charcoal font-display">
                Privacy Policy
              </h1>
              <p className="text-slate-400 text-xs mt-3">Last Updated: June 5, 2026</p>
            </header>

            <div className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-sm leading-relaxed space-y-6">
              <p>
                At TM Solutions, we value the trust you place in us. This Privacy Policy details how we collect, use, and store your data when you visit our website `https://www.tmsolutions.in` and purchase our premium cleaning products.
              </p>

              <h3 className="font-bold text-text-charcoal text-base font-display">1. Information We Collect</h3>
              <p>
                When you initiate a purchase on our store, we collect basic transactional information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact details:</strong> Your mobile phone number (collected during checkout).</li>
                <li><strong>Order details:</strong> The list of products, sizes, quantities, and totals.</li>
                <li><strong>Usage metrics:</strong> IP addresses and browser configurations via cookies to enhance performance.</li>
              </ul>

              <h3 className="font-bold text-text-charcoal text-base font-display">2. How We Use Your Data</h3>
              <p>
                We use the gathered information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Compile and sync order details in our secure Firebase database.</li>
                <li>Generate pre-filled billing templates directed to our WhatsApp support hub (+91 98669 87596).</li>
                <li>Coordinate courier shipping to your specified delivery address.</li>
              </ul>

              <h3 className="font-bold text-text-charcoal text-base font-display">3. Data Security</h3>
              <p>
                All phone numbers and transaction states are encrypted during transmission and stored securely in Firebase. We do not sell, rent, or distribute customer details to third-party marketing services.
              </p>

              <h3 className="font-bold text-text-charcoal text-base font-display">4. Your Rights</h3>
              <p>
                Under the Indian Information Technology (IT) Act, you have the right to inspect, edit, or request the deletion of your telephone and checkout history. You can contact our data compliance desk at `admin@tmsolutions.in` to request data removal.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
