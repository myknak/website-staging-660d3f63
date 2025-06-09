export default function Sustainability() {
  const practices = [
    {
      title: "Natural Ingredients",
      description: "We use only natural waxes, essential oils, and cotton wicks in our candles, avoiding synthetic materials and harmful chemicals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9A9 9 0 0 1 3 11c0-4.97 4.03-9 9-9z"></path>
          <path d="M12 6v6l4 2"></path>
        </svg>
      ),
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Our packaging is made from recycled materials and is fully recyclable or biodegradable, minimizing our environmental footprint.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      title: "Ethical Production",
      description: "We ensure fair wages and safe working conditions for all artisans involved in creating our candles, supporting local communities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Reusable Vessels",
      description: "Our elegant candle containers are designed to be repurposed after use, extending their lifecycle and reducing waste.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <polyline points="16 6 12 2 8 6"></polyline>
          <line x1="12" y1="2" x2="12" y2="15"></line>
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Sustainability Commitment</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We believe in responsible craftsmanship that respects both people and
            planet through sustainable practices at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/home/sustainability/sustainabilityheader.jpg"
              alt="Sustainable Packaging"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl mb-6">Crafted with Care</h3>
            <p className="text-lg mb-6">
              At Nox Boutique, sustainability isn't just a buzzword—it's woven
              into every aspect of our business. From sourcing raw materials to
              packaging and shipping, we make conscious choices to minimize our
              environmental impact while maximizing the quality of our products.
            </p>
            <p className="text-lg">
              We believe that luxury and sustainability can coexist, creating
              products that are as kind to the planet as they are beautiful in
              your home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: "slideUp 0.8s ease-in-out forwards" 
              }}
            >
              <div className="text-accent mb-4">{practice.icon}</div>
              <h3 className="text-xl font-medium mb-3">{practice.title}</h3>
              <p>{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
