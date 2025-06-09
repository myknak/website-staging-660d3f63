import { useState } from "react";
import Link from "next/link";

// Define the type for a scent family
type ScentFamily = {
  title: string;
  description: string;
  notes: string[];
  mood: string;
};

// Define the type for the scentFamilies object
type ScentFamilies = {
  [key: string]: ScentFamily;
};

export default function ScentExploration() {
  const [activeTab, setActiveTab] = useState<string>("woody");

  const scentFamilies: ScentFamilies = {
    woody: {
      title: "Woody",
      description: "Deep, warm scents with notes of cedar, sandalwood, and amber that create a grounding atmosphere.",
      notes: ["Cedar", "Sandalwood", "Amber", "Vetiver", "Patchouli"],
      mood: "Grounding, Comforting, Sophisticated",
    },
    floral: {
      title: "Floral",
      description: "Elegant, romantic fragrances featuring rose, jasmine, and lavender that bring nature indoors.",
      notes: ["Rose", "Jasmine", "Lavender", "Lily", "Peony"],
      mood: "Romantic, Uplifting, Fresh",
    },
    citrus: {
      title: "Citrus",
      description: "Bright, energizing scents with bergamot, lemon, and orange that invigorate the senses.",
      notes: ["Bergamot", "Lemon", "Orange", "Grapefruit", "Mandarin"],
      mood: "Energizing, Refreshing, Clarifying",
    },
    spice: {
      title: "Spice",
      description: "Rich, complex fragrances with cinnamon, cardamom, and vanilla that create warmth and depth.",
      notes: ["Cinnamon", "Cardamom", "Vanilla", "Clove", "Nutmeg"],
      mood: "Warming, Comforting, Inviting",
    },
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Scent Exploration</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover your perfect fragrance through our guide to scent families
            and notes that create our signature candle experiences.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(scentFamilies).map((family) => (
              <button
                key={family}
                className={`px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all ${
                  activeTab === family
                    ? "bg-primary text-white"
                    : "bg-white text-primary hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(family)}
              >
                {scentFamilies[family].title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/home/scentexploration/scentguideheader.jpg"
                alt={scentFamilies[activeTab].title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="animate-fade-in">
              <h3 className="text-3xl mb-4">{scentFamilies[activeTab].title} Family</h3>
              <p className="text-lg mb-6">{scentFamilies[activeTab].description}</p>
              
              <div className="mb-6">
                <h4 className="text-xl mb-3">Key Notes</h4>
                <div className="flex flex-wrap gap-2">
                  {scentFamilies[activeTab].notes.map((note) => (
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
                <h4 className="text-xl mb-3">Mood</h4>
                <p>{scentFamilies[activeTab].mood}</p>
              </div>
              
              <Link
                href={`/shop?scent=${activeTab}`}
                className="btn btn-primary"
              >
                Shop {scentFamilies[activeTab].title} Candles
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/scent-guide" className="btn btn-secondary">
            Explore Full Scent Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
