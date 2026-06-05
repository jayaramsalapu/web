export interface ProductPack {
  size: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  packs: ProductPack[];
  fragrance: string;
  activeIngredients: string[];
  description: string;
  highlights: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Detergent Powder",
    image: "/detergentpowder.webp",
    category: "Laundry",
    packs: [
      { size: "500 g", price: 99 },
      { size: "1 kg", price: 199 },
      { size: "5 kg", price: 899 }
    ],
    fragrance: "Fresh Royal Jasmine",
    activeIngredients: ["Natural Plant Enzymes", "Sodium Carbonate Base", "Bio-Based Surfactants"],
    description: "Deep fabric penetration powder that lifts mud, oils, and sweat stains while maintaining fiber integrity and color brightness.",
    highlights: ["Optical brightener free", "Zero phosphate residue", "Safe for baby clothes"]
  },
  {
    id: 2,
    name: "Floor Cleaner",
    image: "/floor-cleaner.webp",
    category: "Floor Care",
    packs: [
      { size: "500 ml", price: 79 },
      { size: "1 L", price: 149 },
      { size: "5 L", price: 649 }
    ],
    fragrance: "Citronella & Lemongrass",
    activeIngredients: ["Pinus Palustris Oil", "Bio-Enzymes", "Coconut Decyl Glucoside"],
    description: "Clinical sanitizing floor wash that cuts dust, oil splatters, and organic stains off marble, granite, and tile flooring with no streak residue.",
    highlights: ["Streak-free shine", "Insect-repellent oil infusion", "Pet and kid friendly"]
  },
  {
    id: 3,
    name: "Toilet Cleaner",
    image: "/toilet-cleaner.webp",
    category: "Bathroom",
    packs: [
      { size: "500 ml", price: 69 },
      { size: "1 L", price: 129 }
    ],
    fragrance: "Eucalyptus & Ocean Breeze",
    activeIngredients: ["Lactic Acid (Organic)", "Sclerotium Gum", "Bio-Enzymatic Scale Lifter"],
    description: "Non-corrosive, acid-free toilet sanitation gel that safely melts limescale rings, rust stains, and bad odor without stripping ceramic glaze.",
    highlights: ["Zero chemical fumes", "Safe for skin contact", "100% biodegradable runoff"]
  },
  {
    id: 4,
    name: "Fabric Conditioner",
    image: "/fabric-conditioner.webp",
    category: "Laundry",
    packs: [
      { size: "500 ml", price: 89 },
      { size: "1 L", price: 179 }
    ],
    fragrance: "French Velvet Lavender",
    activeIngredients: ["Canola Cationic Softener", "Encapsulated Essential Oils", "Natural Fiber-Smoother"],
    description: "Premium softening emulsion that wraps cottons and synthetic fibers in static-free softness, preventing fuzzing and leaving lasting scent.",
    highlights: ["Micro-scent encapsulation", "Protects wool and silks", "Bypasses color fading"]
  },
  {
    id: 5,
    name: "Detergent Liquid",
    image: "/detergent liquid.webp",
    category: "Laundry",
    packs: [
      { size: "1 L", price: 179 },
      { size: "5 L", price: 799 }
    ],
    fragrance: "Wild Spring Orchid",
    activeIngredients: ["Protease & Amylase Enzymes", "Castor-Oil Surfactants", "Citric Acid Chelator"],
    description: "Highly concentrated liquid laundry wash engineered for high-efficiency front and top loading washing machines. Rinses clean.",
    highlights: ["Low-sudsing formula", "15ml wash efficiency", "Protects machine life"]
  },
  {
    id: 6,
    name: "Phenyl Solution",
    image: "/pheynl solution.webp",
    category: "Floor Care",
    packs: [
      { size: "500 ml", price: 49 },
      { size: "1 L", price: 99 },
      { size: "5 L", price: 399 }
    ],
    fragrance: "Alpine Pine Wood",
    activeIngredients: ["Premium Pure Pine Oil", "Emulsifying Bio-Agents", "Natural Antiseptic"],
    description: "Traditional white pine disinfecting solution containing double the concentration of commercial phenyly, delivering deep sanitation.",
    highlights: ["Deep white disinfection", "Kills 99.9% pathogens", "Aromatic odor eliminator"]
  }
];
