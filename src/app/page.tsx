import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://tm-solutions.in/#product-floor-cleaner",
      "name": "TM Solutions Eco-Concentrate Floor Cleaner",
      "image": "https://tm-solutions.in/floor-cleaner.webp",
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomeClient />
    </>
  );
}
