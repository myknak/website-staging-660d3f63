import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/home/hero/heroshowcase.jpg"
          alt="Nox Boutique Luxury Candles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Handcrafted Luxury <span className="text-accent">Candles</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Premium artisanal candles made with natural waxes, essential oils, and carefully selected fragrances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Link href="/shop" className="btn btn-primary">
              Explore Collections
            </Link>
            <Link href="/our-process" className="btn btn-secondary">
              Discover Our Process
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14"></path>
          <path d="M19 12l-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
}
