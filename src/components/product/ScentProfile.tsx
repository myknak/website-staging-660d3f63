interface ScentProfileProps {
  scents: string[];
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
}

export default function ScentProfile({ scents, notes }: ScentProfileProps) {
  return (
    <section className="py-16 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl mb-6">Scent Profile</h2>
          <p className="text-lg mb-6">
            Experience the complex layers of fragrance that evolve as your candle
            burns, creating a multi-dimensional sensory journey.
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl mb-3">Top Notes</h3>
            <p>
              The initial impression that greets you when first lighting your
              candle: {notes.top.join(", ")}
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl mb-3">Middle Notes</h3>
            <p>
              The heart of the fragrance that emerges as the candle burns:
              {notes.middle.join(", ")}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-3">Base Notes</h3>
            <p>
              The foundation that provides depth and longevity to the scent:
              {notes.base.join(", ")}
            </p>
          </div>
        </div>
        
        <div>
          <img
            src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/product/scentprofile/scentnotes.jpg"
            alt="Scent Notes"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
