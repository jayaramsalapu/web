import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center text-white font-bold text-base shadow-sm">
                TM
              </div>
              <span className="text-2xl font-bold tracking-tight font-display">
                Solutions
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm">
              Redefining home care through high-performance natural bio-chemistry. We formulate concentrated, biodegradable solutions that clean deeper while protecting your home and family.
            </p>
          </div>

          {/* Useful Navigation Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3.5 text-slate-400 text-sm">
              <li>
                <Link href="/#products" className="hover:text-brand transition-colors duration-200">
                  Products Collection
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-brand transition-colors duration-200">
                  Our Science & Story
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand transition-colors duration-200">
                  Scientific Journal
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-brand transition-colors duration-200">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand" />
                <span>+91 98669 87596</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand" />
                <span>admin@tmsolutions.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand mt-0.5" />
                <span className="leading-snug">Pendurthi, Visakhapatnam,<br />Andhra Pradesh, 500033</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} TM Solutions India. Engineered for premium cleanliness.
          </p>
          <div className="flex gap-8 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors duration-200">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
