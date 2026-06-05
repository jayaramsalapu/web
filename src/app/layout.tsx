import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Premium Cleaning Products in India | TM Solutions",
  description: "Premium, concentrated eco-friendly cleaning products for modern Indian homes. Buy high-performance floor, toilet, and laundry care online.",
  keywords: ["floor cleaner", "toilet cleaner", "detergent powder", "detergent liquid", "eco friendly cleaning products", "bathroom cleaner", "Indian D2C home care", "TM Solutions"],
  alternates: {
    canonical: "https://tm-solutions.in",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
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
      "sameAs": [
        "https://www.facebook.com/tmsolutionsindia",
        "https://www.instagram.com/tmsolutions"
      ],
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
    },
    {
      "@type": "Product",
      "@id": "https://tm-solutions.in/#product-floor-cleaner",
      "name": "TM Solutions Eco-Concentrate Floor Cleaner",
      "image": "https://tm-solutions.in/floor-cleaner.png",
      "description": "Ultra-concentrated, plant-based luxury floor cleaner. Offers high sanitization and zero streak residue with less usage.",
      "brand": {
        "@type": "Brand",
        "name": "TM Solutions"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "79",
        "highPrice": "649",
        "offerCount": "3",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://tm-solutions.in/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2480"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://tm-solutions.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why are TM Solutions cleaners more effective than standard store-bought items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TM Solutions products utilize advanced organic enzyme matrices instead of water-diluted filler formulas. Our products contain an average of 4x more active cleaning agents, requiring substantially less volume per wash."
          }
        },
        {
          "@type": "Question",
          "name": "Are TM Solutions products safe around children and household pets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our active ingredients are certified bio-based, completely skin-friendly, and free from volatile organic compounds (VOCs), harsh acids, and chlorine bleach."
          }
        }
      ]
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
