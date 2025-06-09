export default function SustainabilityPractices() {
  const practices = [
    {
      title: "Responsible Sourcing",
      description: "We partner with suppliers who share our commitment to ethical and sustainable practices, ensuring our raw materials are responsibly harvested and produced.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6l9 4v12l-9-4V6z"></path>
          <path d="M21 6l-9 4v12l9-4V6z"></path>
        </svg>
      ),
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Our packaging is made from recycled materials and designed to be fully recyclable or biodegradable, minimizing waste and environmental impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      title: "Zero Waste Production",
      description: "We've implemented a zero-waste production process, where leftover wax and materials are repurposed for new products or recycled appropriately.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M7 11l5 5 5-5"></path>
          <path d="M12 6v10"></path>
        </svg>
      ),
    },
    {
      title: "Carbon Offset Shipping",
      description: "We partner with carbon offset programs to neutralize the environmental impact of shipping our products to customers worldwide.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
          <path d="M12 12v9"></path>
          <path d="M8 17h8"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Sustainability Practices</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our commitment to sustainability guides every aspect of our business,
            from ingredient sourcing to packaging and shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img
              src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/ourprocess/sustainabilitypractices/sustainablepackaging.jpg"
              alt="Sustainable Packaging"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-4">
              Sustainability at Every Step
            </h3>
            <p className="text-lg mb-6">
              At Nox Boutique, we believe that luxury and sustainability can
              coexist. We've carefully designed our production process to
              minimize environmental impact while maximizing product quality.
            </p>
            <p className="text-lg">
              From the natural ingredients we source to the packaging we use,
              every decision is made with both our customers and the planet in
              mind.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105"
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
