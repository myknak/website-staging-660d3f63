export default function ContactHeader() {
  return (
    <section className="relative mb-16">
      <div className="h-64 md:h-80 overflow-hidden">
        <img
          src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/contact/contactheader/contactheader.jpg"
          alt="Nox Boutique Customer Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We're here to help with any questions about our products,
              orders, or artisanal candle care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
