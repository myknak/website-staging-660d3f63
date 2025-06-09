export default function GuideHeader() {
  return (
    <section className="relative">
      <div className="h-96 overflow-hidden">
        <img
          src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/scentguide/guideheader/fragranceheader.jpg"
          alt="Fragrance Guide"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-light mb-4">The Art of Fragrance</h1>
            <p className="text-lg md:text-xl">
              Explore the complex world of scent and discover how our artisanal
              candles create unique sensory experiences for every space and mood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
