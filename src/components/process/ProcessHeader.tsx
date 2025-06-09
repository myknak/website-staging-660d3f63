export default function ProcessHeader() {
  return (
    <section className="relative">
      <div className="h-96 overflow-hidden">
        <img
          src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/ourprocess/processheader/artisanprocessheader.jpg"
          alt="Artisan Candle Making Process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Our Artisanal Process</h1>
            <p className="text-lg md:text-xl">
              Discover the meticulous craftsmanship behind every Nox Boutique
              candle, where traditional techniques meet modern innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
