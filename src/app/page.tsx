"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/home/Hero";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import ScentExploration from "@/components/home/ScentExploration";
import NewArrivals from "@/components/home/NewArrivals";
import Sustainability from "@/components/home/Sustainability";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);
  const scentRef = useRef<HTMLDivElement>(null);
  const arrivalsRef = useRef<HTMLDivElement>(null);
  const sustainabilityRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [
      heroRef.current,
      collectionsRef.current,
      scentRef.current,
      arrivalsRef.current,
      sustainabilityRef.current,
      newsletterRef.current,
    ];

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <main className="min-h-screen">
      <div ref={heroRef} className="opacity-0">
        <Hero />
      </div>
      
      <div ref={collectionsRef} className="opacity-0">
        <FeaturedCollections />
      </div>
      
      <div ref={scentRef} className="opacity-0">
        <ScentExploration />
      </div>
      
      <div ref={arrivalsRef} className="opacity-0">
        <NewArrivals />
      </div>
      
      <div ref={sustainabilityRef} className="opacity-0">
        <Sustainability />
      </div>
      
      <div ref={newsletterRef} className="opacity-0">
        <Newsletter />
      </div>
    </main>
  );
}
