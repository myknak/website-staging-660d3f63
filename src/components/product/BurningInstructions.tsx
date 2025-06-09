export default function BurningInstructions() {
  const instructions = [
    {
      title: "First Burn",
      description: "Allow the wax to melt completely across the surface on the first burn, which should take 2-3 hours. This prevents tunneling and ensures even burning throughout the life of your candle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8"></path>
          <path d="M12 18v4"></path>
          <circle cx="12" cy="12" r="8"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
    },
    {
      title: "Trim the Wick",
      description: "Before each burn, trim the wick to 1/4 inch. This prevents excessive smoke, ensures a clean burn, and extends the life of your candle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      ),
    },
    {
      title: "Burn Time",
      description: "Never burn your candle for more than 4 hours at a time. Allow it to cool completely before relighting to maintain the integrity of the vessel and fragrance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "Safe Placement",
      description: "Always place your candle on a heat-resistant surface away from drafts, flammable materials, children, and pets. Never leave a burning candle unattended.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl mb-8">Burning Instructions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/product/burninginstructions/careinstructions.jpg"
            alt="Candle Care Instructions"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <p className="text-lg mb-8">
            Follow these expert recommendations to maximize the life and
            performance of your Nox Boutique luxury candle.
          </p>
          
          <div className="space-y-6">
            {instructions.map((instruction, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-accent mt-1">{instruction.icon}</div>
                <div>
                  <h3 className="text-xl mb-2">{instruction.title}</h3>
                  <p>{instruction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
