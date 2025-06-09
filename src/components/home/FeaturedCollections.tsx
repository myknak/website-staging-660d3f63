import Link from "next/link";

export default function FeaturedCollections() {
  const collections = [
    {
      id: "signature",
      name: "Signature Collection",
      description: "Our most beloved and enduring scent profiles",
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/home/featuredcollections/signaturecollection.jpg",
    },
    {
      id: "seasonal",
      name: "Seasonal Collection",
      description: "Limited edition fragrances inspired by the seasons",
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/home/featuredcollections/seasonalcollection.jpg",
    },
    {
      id: "artist",
      name: "Artist Collaborations",
      description: "Exclusive candles designed with renowned artists",
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/home/featuredcollections/artistcollaboration.jpg",
    },
    {
      id: "gift",
      name: "Gift Collection",
      description: "Perfectly packaged sets for every occasion",
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/home/featuredcollections/giftcollection.jpg",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Collections</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our curated collections of premium handcrafted candles,
            each with its own unique character and story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: "slideUp 0.8s ease-in-out forwards" 
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">{collection.name}</h3>
                <p className="mb-4">{collection.description}</p>
                <Link
                  href={`/shop?collection=${collection.id}`}
                  className="inline-block bg-white text-primary py-2 px-4 uppercase text-sm tracking-wider font-medium transition-transform duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
