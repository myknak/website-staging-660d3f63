"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ScentProfile from "@/components/product/ScentProfile";
import BurningInstructions from "@/components/product/BurningInstructions";
import ComplementaryProducts from "@/components/product/ComplementaryProducts";
import { useCart } from "@/context/CartContext";

// Define product type
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  scents: string[];
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  size: string;
  burnTime: string;
  collection: string;
  images: string[];
  isNew: boolean; // Added this field to match the other Product interface
  [key: string]: any; // For any other properties
}

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [complementary, setComplementary] = useState<Product[]>([]);

  useEffect(() => {
    if (params.id) {
      const productId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
      const foundProduct = products.find((p) => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct as Product);
        
        // Find complementary products
        const complementaryProducts = products
          .filter((p) => 
            p.id !== foundProduct.id && 
            (p.collection === foundProduct.collection || 
             p.scents.some(scent => foundProduct.scents.includes(scent)))
          )
          .slice(0, 4);
          
        setComplementary(complementaryProducts as Product[]);
      }
    }
  }, [params.id]);

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        quantity,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <p className="text-xl">Loading product...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-6">
          <Link href="/shop" className="text-sm hover:underline flex items-center gap-2">
            <span>← Back to Shop</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <ProductGallery images={product.images} />
          <ProductInfo 
            product={product} 
            quantity={quantity} 
            onQuantityChange={handleQuantityChange} 
            onAddToCart={handleAddToCart} 
          />
        </div>

        <ScentProfile scents={product.scents} notes={product.notes} />
        
        <BurningInstructions />
        
        <ComplementaryProducts products={complementary} />
      </div>
    </main>
  );
}
