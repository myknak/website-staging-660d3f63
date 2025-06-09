export default function SeasonalScenting() {
  const seasons = [
    {
      name: "Spring",
      description: "Fresh, floral scents that capture the essence of renewal and growth.",
      recommendations: ["Lily & Jasmine", "Fresh Linen", "Green Tea & Mint"],
      colors: ["bg-green-100", "text-green-800"],
    },
    {
      name: "Summer",
      description: "Bright, citrusy fragrances that evoke sunny days and outdoor adventures.",
      recommendations: ["Sea Salt & Sage", "Coconut & Lime", "Mediterranean Fig"],
      colors: ["bg-yellow-100", "text-yellow-800"],
    },
    {
      name: "Fall",
      description: "Warm, spicy scents that create a cozy atmosphere as temperatures drop.",
      recommendations: ["Amber & Sandalwood", "Spiced Apple", "Pumpkin & Clove"],
      colors: ["bg-orange-100", "text-orange-800"],
    },
    {
      name: "Winter",
      description: "Rich, comforting fragrances that bring warmth to the coldest months.",
      recommendations: ["Pine & Cedar", "Vanilla & Cinnamon", "Frankincense & Myrrh"],
      colors: ["bg-blue-100", "text-blue-800"],
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Seasonal Scenting Guide</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover how to select the perfect fragrances throughout the year to
            enhance your living spaces with seasonally appropriate scents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img
            src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/scentguide/seasonalscenting/seasonalguide.jpg"
            alt="Seasonal Scenting Guide"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-medium mb-4">
              The Art of Seasonal Scenting
            </h3>
            <p className="text-lg mb-4">
              Just as we change our wardrobes with the seasons, our home
              fragrances can evolve throughout the year to complement the
              changing environment and our emotional needs.
            </p>
            <p className="text-lg">
              Seasonal scenting allows you to create atmospheres that resonate
              with the world outside your windows, connecting your interior
              spaces with nature's rhythms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season) => (
            <div
              key={season.name}
              className={`${season.colors[0]} ${season.colors[1]} p-6 rounded-lg`}
            >
              <h3 className="text-2xl font-medium mb-3">{season.name}</h3>
              <p className="mb-4">{season.description}</p>
              <h4 className="font-medium mb-2">Recommended Scents:</h4>
              <ul className="list-disc list-inside space-y-1">
                {season.recommendations.map((rec) => (
                  <li key={rec}>{rec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
