import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tm-solutions.in"),
  title: "Premium Cleaning Products in India | TM Solutions",
  description: "Premium, concentrated eco-friendly cleaning products for modern Indian homes. Buy high-performance floor, toilet, and laundry care online.",
  keywords: ["floor cleaner", "toilet cleaner", "detergent powder", "detergent liquid", "eco friendly cleaning products", "bathroom cleaner", "Indian D2C home care", "TM Solutions"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "TM Solutions | Premium Eco-Concentrated Cleaning Products",
    description: "Upgrade your household clean with premium, eco-friendly concentrated formulas designed for modern homes in India.",
    url: "https://tm-solutions.in",
    siteName: "TM Solutions",
    images: [
      {
        url: "https://tm-solutions.in/logo.jpg",
        width: 1200,
        height: 630,
        alt: "TM Solutions Premium Products Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TM Solutions | Next-Gen Cleaning Care",
    description: "Concentrated formulas that clean better with half the quantity.",
    images: ["https://tm-solutions.in/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tm-solutions.in/#organization",
      "name": "TM Solutions",
      "url": "https://tm-solutions.in",
      "logo": "https://tm-solutions.in/logo.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-98669-87596",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "te"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://tm-solutions.in/#website",
      "url": "https://tm-solutions.in",
      "name": "TM Solutions",
      "description": "Premium Concentrated Eco-Cleaning Products in India",
      "publisher": {
        "@id": "https://tm-solutions.in/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tm-solutions.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://tm-solutions.in/#localbusiness",
      "name": "TM Solutions India",
      "image": "https://tm-solutions.in/logo.jpg",
      "telephone": "+91-98669-87596",
      "email": "admin@tmsolutions.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "TM Solutions Corporate Office, Jubilee Hills",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500033",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.4326,
        "longitude": 78.4071
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-brand/10 selection:text-brand font-sans">
        {children}
      </body>
    </html>
  );
}
