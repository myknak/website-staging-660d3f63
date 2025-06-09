import { useState } from "react";
import Link from "next/link";

type ScentFamily = {
  title: string;
  description: string;
  notes: string[];
  pairsWith: string[];
  image: string;
};

type ScentFamiliesType = {
  [key: string]: ScentFamily;
};

export default function ScentFamilies() {
  const [activeFamily, setActiveFamily] = useState("woody");

  const families: ScentFamiliesType = {
    woody: {
      title: "Woody",
      description: "Warm, grounding scents inspired by forests and timber that create a sense of comfort and stability.",
      notes: ["Cedar", "Sandalwood", "Pine", "Amber", "Vetiver"],
      pairsWith: ["Spice", "Citrus"],
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/scentguide/scentfamilies/woodyfamily.jpg",
    },
    floral: {
      title: "Floral",
      description: "Elegant, romantic fragrances that capture the essence of blooming flowers for a fresh, uplifting atmosphere.",
      notes: ["Rose", "Jasmine", "Lavender", "Lily", "Peony"],
      pairsWith: ["Citrus", "Fresh"],
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/scentguide/scentfamilies/floralfamily.jpg",
    },
    citrus: {
      title: "Citrus",
      description: "Bright, energizing scents that invigorate the senses and create a clean, refreshing environment.",
      notes: ["Bergamot", "Lemon", "Orange", "Grapefruit", "Mandarin"],
      pairsWith: ["Floral", "Fresh", "Woody"],
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/scentguide/scentfamilies/citrusfamily.jpg",
    },
    spice: {
      title: "Spice",
      description: "Rich, complex fragrances that add warmth and depth, perfect for creating a cozy, inviting atmosphere.",
      notes: ["Cinnamon", "Cardamom", "Vanilla", "Clove", "Nutmeg"],
      pairsWith: ["Woody", "Vanilla"],
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/scentguide/scentfamilies/spicefamily.jpg",
    },
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Scent Families</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explore the main fragrance categories and discover which scent
            profiles resonate with your preferences and spaces.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(families).map((family) => (
            <button
              key={family}
              className={`px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all ${
                activeFamily === family
                  ? "bg-primary text-[#D4AF37]" // Using direct HEX color to ensure it works
                  : "bg-white text-primary hover:bg-gray-100"
              }`}
              onClick={() => setActiveFamily(family)}
            >
              {families[family].title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={families[activeFamily].image}
              alt={families[activeFamily].title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="animate-fade-in">
            <h3 className="text-3xl mb-4">{families[activeFamily].title} Family</h3>
            <p className="text-lg mb-6">{families[activeFamily].description}</p>
            
            <div className="mb-6">
              <h4 className="text-xl mb-3">Key Notes</h4>
              <div className="flex flex-wrap gap-2">
                {families[activeFamily].notes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl mb-3">Pairs Well With</h4>
              <div className="flex flex-wrap gap-2">
                {families[activeFamily].pairsWith.map((pair) => (
                  <span
                    key={pair}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {pair}
                  </span>
                ))}
              </div>
            </div>
            
            <Link
              href={`/shop?scent=${activeFamily}`}
              className="btn btn-primary"
            >
              Shop {families[activeFamily].title} Candles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
