"use client";

import { useState } from "react";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/contact/FAQ";
import StoreInfo from "@/components/contact/StoreInfo";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData: FormData) => {
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen pt-16 pb-16">
      <ContactHeader />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm onSubmit={handleFormSubmit} submitted={formSubmitted} />
          <StoreInfo />
        </div>
      </div>
      
      <FAQ />
    </main>
  );
}
