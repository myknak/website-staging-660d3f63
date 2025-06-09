import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // In a real application, this would send the email to a server
    console.log("Newsletter signup:", email);
    
    setSubmitted(true);
    setError("");
    setEmail("");
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2jb2caottkk25.cloudfront.net/nox.boutique/home/newsletter/newsletterbackground.jpg"
          alt="Newsletter Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Join Our Community</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for exclusive offers, early access to
            limited editions, and expert candle care tips.
          </p>
          
          {submitted ? (
            <div className="bg-accent text-primary p-4 rounded-lg animate-fade-in">
              <p className="font-medium">Thank you for subscribing!</p>
              <p>You'll be the first to know about our new releases and special offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          )}
          
          {error && (
            <p className="text-red-400 mt-2 text-sm">{error}</p>
          )}
          
          <p className="text-sm mt-4 text-gray-300">
            By subscribing, you agree to our Privacy Policy and consent to receive
            updates from Nox Boutique.
          </p>
        </div>
      </div>
    </section>
  );
}
