export default function IngredientSelection() {
  const ingredients = [
    {
      name: "Natural Waxes",
      description: "We use a proprietary blend of soy and coconut waxes that burn cleanly and hold fragrance beautifully.",
    },
    {
      name: "Essential Oils",
      description: "Our fragrances feature premium essential oils sourced from sustainable producers around the world.",
    },
    {
      name: "Cotton Wicks",
      description: "Lead-free cotton wicks ensure a clean, even burn without harmful emissions.",
    },
    {
      name: "Artisanal Vessels",
      description: "Each vessel is selected for both beauty and functionality, designed to be repurposed after use.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Ingredient Selection</h2>
            <p className="text-lg mb-8">
              We believe exceptional candles begin with exceptional ingredients.
              Our master chandlers carefully select each component for quality,
              sustainability, and performance.
            </p>
            
            <div className="space-y-6">
              {ingredients.map((ingredient, index) => (
                <div key={index}>
                  <h3 className="text-xl font-medium mb-2">{ingredient.name}</h3>
                  <p>{ingredient.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img
              src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/ourprocess/ingredientselection/ingredients.jpg"
              alt="Premium Candle Ingredients"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
