export default function CraftingProcess() {
  const steps = [
    {
      title: "Precise Measurement",
      description: "Each ingredient is carefully measured to ensure consistent quality across every batch.",
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/ourprocess/craftingprocess/processstep1.jpg",
    },
    {
      title: "Fragrance Blending",
      description: "Our master chandlers blend essential oils and fragrance components to create our signature scent profiles.",
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/ourprocess/craftingprocess/processstep2.jpg",
    },
    {
      title: "Careful Pouring",
      description: "Melted wax is poured at precisely the right temperature to ensure optimal fragrance retention and texture.",
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/ourprocess/craftingprocess/processstep3.jpg",
    },
    {
      title: "Quality Inspection",
      description: "Each candle undergoes rigorous inspection to ensure it meets our exacting standards before packaging.",
      image: "https://d2jb2caottkk25.cloudfront.net/nox.boutique/ourprocess/craftingprocess/processstep4.jpg",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">The Crafting Process</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our six-step artisanal process combines traditional chandlery
            techniques with modern innovation to create candles of exceptional
            quality.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-2xl font-medium mb-4">
                  <span className="text-accent mr-2">{index + 1}.</span>
                  {step.title}
                </h3>
                <p className="text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
