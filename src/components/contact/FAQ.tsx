import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long do your candles burn?",
      answer: "Our candles have varying burn times depending on the size. Small candles (4oz) burn for approximately 25-30 hours, medium candles (8oz) for 45-50 hours, and large candles (12oz) for 70-80 hours. For optimal burn time, we recommend following our candle care instructions.",
    },
    {
      question: "Are your candles made with natural ingredients?",
      answer: "Yes, all Nox Boutique candles are made with a proprietary blend of natural soy and coconut waxes, premium essential oils, and cotton wicks. We never use paraffin wax, synthetic fragrances, or lead wicks in our products.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to select international destinations. International shipping rates vary by location and will be calculated at checkout. Please note that customers are responsible for any customs fees or import taxes that may apply.",
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns of unused, unopened items within 30 days of delivery. If you receive a damaged product, please contact us within 7 days of receipt with photos of the damage for a replacement or refund. Custom or personalized items are not eligible for return unless defective.",
    },
    {
      question: "How should I care for my candle?",
      answer: "For optimal performance: 1) Allow the wax to melt completely across the surface on the first burn (2-3 hours). 2) Trim the wick to 1/4 inch before each use. 3) Never burn for more than 4 hours at a time. 4) Keep away from drafts, flammable materials, children, and pets. 5) Never leave a burning candle unattended.",
    },
    {
      question: "Do you offer wholesale options?",
      answer: "Yes, we offer wholesale options for select retailers who align with our brand values. Please contact us at wholesale@nox.boutique with information about your business for wholesale inquiries.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-padding bg-gray-50" id="faq">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping,
            returns, and candle care.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left bg-white flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 p-4" : "max-h-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="mb-4">
            Can't find the answer you're looking for? Contact our customer
            service team.
          </p>
          <a
            href="mailto:alla@nox.boutique"
            className="btn btn-primary"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
