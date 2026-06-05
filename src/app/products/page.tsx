import ProductsClient from "./ProductsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Premium Cleaning Products Online India | TM Solutions",
  description: "Shop high-performance bio-concentrated home cleaning products online in India. Explore floor care, toilet scale removers, and liquid laundry detergents.",
  alternates: {
    canonical: "/products",
  },
};

const productsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://tm-solutions.in/products/#product-detergent-powder",
      "name": "TM Solutions Premium Detergent Powder",
      "image": "https://tm-solutions.in/detergentpowder.webp",
      "description": "Deep fabric penetration powder that lifts mud, oils, and sweat stains while maintaining fiber integrity and color brightness.",
      "brand": {
        "@type": "Brand",
        "name": "TM Solutions"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "99",
        "highPrice": "899",
        "offerCount": "3",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://tm-solutions.in/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1940"
      }
    },
    {
      "@type": "Product",
      "@id": "https://tm-solutions.in/products/#product-floor-cleaner",
      "name": "TM Solutions Eco-Concentrate Floor Cleaner",
      "image": "https://tm-solutions.in/floor-cleaner.webp",
      "description": "Clinical sanitizing floor wash that cuts dust, oil splatters, and organic stains off marble, granite, and tile flooring with no streak residue.",
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
      "@type": "Product",
      "@id": "https://tm-solutions.in/products/#product-toilet-cleaner",
      "name": "TM Solutions Acid-Free Toilet Cleaner",
      "image": "https://tm-solutions.in/toilet-cleaner.webp",
      "description": "Non-corrosive, acid-free toilet sanitation gel that safely melts limescale rings, rust stains, and bad odor without stripping ceramic glaze.",
      "brand": {
        "@type": "Brand",
        "name": "TM Solutions"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "69",
        "highPrice": "129",
        "offerCount": "2",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://tm-solutions.in/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1560"
      }
    },
    {
      "@type": "Product",
      "@id": "https://tm-solutions.in/products/#product-fabric-conditioner",
      "name": "TM Solutions Premium Fabric Conditioner",
      "image": "https://tm-solutions.in/fabric-conditioner.webp",
      "description": "Premium softening emulsion that wraps cottons and synthetic fibers in static-free softness, preventing fuzzing and leaving lasting scent.",
      "brand": {
        "@type": "Brand",
        "name": "TM Solutions"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "89",
        "highPrice": "179",
        "offerCount": "2",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://tm-solutions.in/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "1240"
      }
    },
    {
      "@type": "Product",
      "@id": "https://tm-solutions.in/products/#product-detergent-liquid",
      "name": "TM Solutions Concentrated Detergent Liquid",
      "image": "https://tm-solutions.in/detergent liquid.webp",
      "description": "Highly concentrated liquid laundry wash engineered for high-efficiency front and top loading washing machines. Rinses clean.",
      "brand": {
        "@type": "Brand",
        "name": "TM Solutions"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "179",
        "highPrice": "799",
        "offerCount": "2",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://tm-solutions.in/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2180"
      }
    },
    {
      "@type": "Product",
      "@id": "https://tm-solutions.in/products/#product-phenyl-solution",
      "name": "TM Solutions Premium Phenyl Solution",
      "image": "https://tm-solutions.in/pheynl solution.webp",
      "description": "Traditional white pine disinfecting solution containing double the concentration of commercial phenyly, delivering deep sanitation.",
      "brand": {
        "@type": "Brand",
        "name": "TM Solutions"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "49",
        "highPrice": "399",
        "offerCount": "3",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://tm-solutions.in/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1120"
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <ProductsClient />
    </>
  );
}
