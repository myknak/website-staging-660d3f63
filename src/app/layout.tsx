"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartProvider from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add Google Fonts
    const link1 = document.createElement("link");
    link1.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap";
    link1.rel = "stylesheet";
    
    const link2 = document.createElement("link");
    link2.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap";
    link2.rel = "stylesheet";
    
    document.head.appendChild(link1);
    document.head.appendChild(link2);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <html lang="en">
      <head>
        <title>Nox Boutique | Premium Handcrafted Luxury Candles</title>
        <meta name="description" content="Discover Nox Boutique's premium handcrafted luxury candles made with natural waxes, essential oils, and carefully selected fragrances." />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
