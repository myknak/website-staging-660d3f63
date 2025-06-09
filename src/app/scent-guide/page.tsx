"use client";

import { useEffect, useRef } from "react";
import GuideHeader from "@/components/scent-guide/GuideHeader";
import ScentFamilies from "@/components/scent-guide/ScentFamilies";
import ScentFinder from "@/components/scent-guide/ScentFinder";
import FragranceNotes from "@/components/scent-guide/FragranceNotes";
import SeasonalScenting from "@/components/scent-guide/SeasonalScenting";

export default function ScentGuide() {
  const headerRef = useRef<HTMLDivElement>(null);
  const familiesRef = useRef<HTMLDivElement>(null);
  const finderRef = useRef<HTMLDivElement>(null);
  const notesRef = useRef<HTMLDivElement>(null);
  const seasonalRef = useRef<HTMLDivElement>(null);

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
      headerRef.current,
      familiesRef.current,
      finderRef.current,
      notesRef.current,
      seasonalRef.current,
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
    <main className="min-h-screen pt-24 pb-16">
      <div ref={headerRef} className="opacity-0">
        <GuideHeader />
      </div>
      
      <div ref={familiesRef} className="opacity-0">
        <ScentFamilies />
      </div>
      
      <div ref={finderRef} className="opacity-0">
        <ScentFinder />
      </div>
      
      <div ref={notesRef} className="opacity-0">
        <FragranceNotes />
      </div>
      
      <div ref={seasonalRef} className="opacity-0">
        <SeasonalScenting />
      </div>
    </main>
  );
}
