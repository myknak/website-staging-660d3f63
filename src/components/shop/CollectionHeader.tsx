export default function CollectionHeader() {
  return (
    <section className="relative">
      <div className="h-64 md:h-80 overflow-hidden">
        <img
          src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/shop/collectionheader/shopheader.jpg"
          alt="Nox Boutique Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Our Collections</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Discover our complete range of handcrafted luxury candles,
              each created with meticulous attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
