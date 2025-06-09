import { useState } from "react";
import Link from "next/link";

type AnswerType = "relaxing" | "energizing" | "cozy" | "fresh" | "livingRoom" | "bedroom" | "bathroom" | "kitchen" | "morning" | "afternoon" | "evening" | "night" | "subtle" | "moderate" | "strong" | "varying" | "";

type AnswersType = {
  mood: AnswerType;
  space: AnswerType;
  time: AnswerType;
  intensity: AnswerType;
};

type RecommendationType = {
  scent: string;
  description: string;
  collection: string;
};

type QuestionType = {
  question: string;
  options: Array<{
    value: string;
    label: string;
  }>;
};

type QuestionsType = {
  [key: number]: QuestionType;
};

export default function ScentFinder() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<AnswersType>({
    mood: "",
    space: "",
    time: "",
    intensity: "",
  });
  const [result, setResult] = useState<RecommendationType | null>(null);

  const questions: QuestionsType = {
    1: {
      question: "What mood are you trying to create?",
      options: [
        { value: "relaxing", label: "Relaxing & Calming" },
        { value: "energizing", label: "Energizing & Uplifting" },
        { value: "cozy", label: "Warm & Cozy" },
        { value: "fresh", label: "Clean & Fresh" },
      ],
    },
    2: {
      question: "Where will you be using this candle?",
      options: [
        { value: "livingRoom", label: "Living Room" },
        { value: "bedroom", label: "Bedroom" },
        { value: "bathroom", label: "Bathroom" },
        { value: "kitchen", label: "Kitchen" },
      ],
    },
    3: {
      question: "When do you typically burn candles?",
      options: [
        { value: "morning", label: "Morning" },
        { value: "afternoon", label: "Afternoon" },
        { value: "evening", label: "Evening" },
        { value: "night", label: "Night" },
      ],
    },
    4: {
      question: "What scent intensity do you prefer?",
      options: [
        { value: "subtle", label: "Subtle & Light" },
        { value: "moderate", label: "Moderate" },
        { value: "strong", label: "Strong & Bold" },
        { value: "varying", label: "Varying & Complex" },
      ],
    },
  };

  const recommendations = {
    relaxing: {
      livingRoom: {
        scent: "Lavender & Cedar",
        description: "A balanced blend of calming lavender with grounding cedar notes, perfect for creating a serene living space.",
        collection: "signature",
      },
      bedroom: {
        scent: "Chamomile & Vanilla",
        description: "Soothing chamomile paired with comforting vanilla creates the perfect atmosphere for restful sleep.",
        collection: "signature",
      },
      bathroom: {
        scent: "Eucalyptus & Mint",
        description: "Refreshing eucalyptus and mint transform your bathroom into a spa-like retreat.",
        collection: "seasonal",
      },
      kitchen: {
        scent: "Lemon Verbena",
        description: "Clean, bright lemon verbena creates a calming kitchen atmosphere without competing with food aromas.",
        collection: "signature",
      },
    },
    energizing: {
      livingRoom: {
        scent: "Citrus & Bergamot",
        description: "Vibrant citrus notes with sophisticated bergamot create an uplifting, welcoming living space.",
        collection: "signature",
      },
      bedroom: {
        scent: "Grapefruit & Mint",
        description: "Invigorating grapefruit and mint help create an energizing start to your day.",
        collection: "seasonal",
      },
      bathroom: {
        scent: "Lemongrass & Ginger",
        description: "Stimulating lemongrass and ginger transform your bathroom into an invigorating sanctuary.",
        collection: "signature",
      },
      kitchen: {
        scent: "Orange & Clove",
        description: "Bright orange with warm clove creates an energizing kitchen atmosphere that complements cooking aromas.",
        collection: "seasonal",
      },
    },
    cozy: {
      livingRoom: {
        scent: "Amber & Sandalwood",
        description: "Rich amber and warm sandalwood create a sophisticated, cozy atmosphere perfect for entertaining or relaxing.",
        collection: "signature",
      },
      bedroom: {
        scent: "Vanilla & Cedarwood",
        description: "Comforting vanilla with grounding cedarwood creates a warm, intimate bedroom retreat.",
        collection: "signature",
      },
      bathroom: {
        scent: "Cinnamon & Vanilla",
        description: "Warming cinnamon and comforting vanilla transform your bathroom into a cozy sanctuary.",
        collection: "seasonal",
      },
      kitchen: {
        scent: "Spiced Apple",
        description: "Nostalgic spiced apple creates a welcoming kitchen atmosphere reminiscent of home baking.",
        collection: "seasonal",
      },
    },
    fresh: {
      livingRoom: {
        scent: "Sea Salt & Sage",
        description: "Clean sea salt with herbal sage creates a fresh, sophisticated living space atmosphere.",
        collection: "signature",
      },
      bedroom: {
        scent: "Cotton & Linen",
        description: "Pure cotton and fresh linen notes create a clean, tranquil bedroom environment.",
        collection: "signature",
      },
      bathroom: {
        scent: "Ocean Breeze",
        description: "Refreshing ocean notes transform your bathroom into a seaside retreat.",
        collection: "seasonal",
      },
      kitchen: {
        scent: "Basil & Lime",
        description: "Herbal basil and bright lime create a fresh kitchen atmosphere that complements culinary activities.",
        collection: "signature",
      },
    },
  };

  const handleAnswer = (value: AnswerType) => {
    const currentQuestion = Object.keys(questions)[step - 1];
    
    const newAnswers = { ...answers };
    newAnswers[currentQuestion as keyof AnswersType] = value;
    setAnswers(newAnswers);
    
    if (step < Object.keys(questions).length) {
      setStep(step + 1);
    } else {
      // Calculate result
      const recommendation = recommendations[newAnswers.mood as keyof typeof recommendations]?.[newAnswers.space as "livingRoom" | "bedroom" | "bathroom" | "kitchen"];
      setResult(recommendation);
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({
      mood: "",
      space: "",
      time: "",
      intensity: "",
    });
    setResult(null);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Find Your Perfect Scent</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Answer a few questions about your preferences and we'll recommend
            the ideal candle for your space and mood.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {!result ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  {Object.keys(questions).map((q) => (
                    <div
                      key={q}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        parseInt(q) === step
                          ? "bg-primary text-white"
                          : parseInt(q) < step
                          ? "bg-accent text-primary"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {q}
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{
                      width: `${((step - 1) / (Object.keys(questions).length - 1)) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <h3 className="text-2xl mb-6">{questions[step].question}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[step].options.map((option) => (
                  <button
                    key={option.value}
                    className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors"
                    onClick={() => handleAnswer(option.value as AnswerType)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center animate-fade-in">
              <h3 className="text-2xl mb-2">Your Perfect Match</h3>
              <h4 className="text-3xl font-medium text-accent mb-4">
                {result.scent}
              </h4>
              <p className="text-lg mb-6">{result.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/shop?collection=${result.collection}`}
                  className="btn btn-primary"
                >
                  Shop This Scent
                </Link>
                <button onClick={resetQuiz} className="btn btn-secondary">
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
