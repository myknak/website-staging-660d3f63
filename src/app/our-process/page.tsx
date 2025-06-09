"use client";

import { useEffect, useRef } from "react";
import ProcessHeader from "@/components/process/ProcessHeader";
import IngredientSelection from "@/components/process/IngredientSelection";
import CraftingProcess from "@/components/process/CraftingProcess";
import SustainabilityPractices from "@/components/process/SustainabilityPractices";
import MasterChandlers from "@/components/process/MasterChandlers";

export default function OurProcess() {
  const headerRef = useRef<HTMLDivElement>(null);
  const ingredientsRef = useRef<HTMLDivElement>(null);
  const craftingRef = useRef<HTMLDivElement>(null);
  const sustainabilityRef = useRef<HTMLDivElement>(null);
  const chandlersRef = useRef<HTMLDivElement>(null);

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
      ingredientsRef.current,
      craftingRef.current,
      sustainabilityRef.current,
      chandlersRef.current,
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
        <ProcessHeader />
      </div>
      
      <div ref={ingredientsRef} className="opacity-0">
        <IngredientSelection />
      </div>
      
      <div ref={craftingRef} className="opacity-0">
        <CraftingProcess />
      </div>
      
      <div ref={sustainabilityRef} className="opacity-0">
        <SustainabilityPractices />
      </div>
      
      <div ref={chandlersRef} className="opacity-0">
        <MasterChandlers />
      </div>
    </main>
  );
}
