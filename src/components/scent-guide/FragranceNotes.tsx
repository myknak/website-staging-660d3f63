export default function FragranceNotes() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Understanding Fragrance Notes</h2>
            <p className="text-lg mb-6">
              Like a musical composition, fragrances are structured in notes
              that unfold over time, creating a complete olfactory experience.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3">Top Notes</h3>
              <p className="mb-4">
                The initial impression that greets you when first lighting your
                candle. These notes are typically light, fresh, and evaporate
                quickly.
              </p>
              <p className="text-sm text-gray-600 mb-2">Common Top Notes:</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Citrus
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Bergamot
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Lavender
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Mint
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3">Middle Notes</h3>
              <p className="mb-4">
                The heart of the fragrance that emerges as the candle burns.
                These notes form the main character of the scent and last longer
                than top notes.
              </p>
              <p className="text-sm text-gray-600 mb-2">Common Middle Notes:</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Rose
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Jasmine
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Cinnamon
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Pine
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Base Notes</h3>
              <p className="mb-4">
                The foundation that provides depth and longevity to the scent.
                These notes emerge last and can linger even after the candle is
                extinguished.
              </p>
              <p className="text-sm text-gray-600 mb-2">Common Base Notes:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Sandalwood
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Vanilla
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Amber
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                  Musk
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/scentguide/fragrancenotes/fragrancepyramid.jpg"
              alt="Fragrance Pyramid"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
