"use client";

import { useState, useEffect } from "react";
import ProductGrid from "@/components/shop/ProductGrid";
import CollectionHeader from "@/components/shop/CollectionHeader";
import FilterSidebar from "@/components/shop/FilterSidebar";
import { products } from "@/data/products";

// Define interfaces for type safety
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  collection: string;
  scents: string[];
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  size: string;
  burnTime: string;
  isNew: boolean;
  images: string[];
}

interface FilterState {
  collections: string[];
  scents: string[];
  priceRange: [number, number];
}

export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products as Product[]);
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    collections: [],
    scents: [],
    priceRange: [0, 200],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Filter products based on active filters
    const filtered = products.filter((product) => {
      // Collection filter
      if (
        activeFilters.collections.length > 0 &&
        !activeFilters.collections.includes(product.collection)
      ) {
        return false;
      }

      // Scent filter
      if (
        activeFilters.scents.length > 0 &&
        !product.scents.some((scent) => activeFilters.scents.includes(scent))
      ) {
        return false;
      }

      // Price range filter
      if (
        product.price < activeFilters.priceRange[0] ||
        product.price > activeFilters.priceRange[1]
      ) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered as Product[]);
  }, [activeFilters]);

  const handleFilterChange = (filterType: keyof FilterState, value: string | [number, number]) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev };

      if (filterType === "collections" || filterType === "scents") {
        if (newFilters[filterType].includes(value as string)) {
          newFilters[filterType] = newFilters[filterType].filter(
            (item) => item !== value
          );
        } else {
          newFilters[filterType] = [...newFilters[filterType], value as string];
        }
      } else if (filterType === "priceRange") {
        newFilters.priceRange = value as [number, number];
      }

      return newFilters;
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      collections: [],
      scents: [],
      priceRange: [0, 200],
    });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <CollectionHeader />
      
      <div className="container-custom mt-12 px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar
            activeFilters={activeFilters}
            handleFilterChange={handleFilterChange}
            clearFilters={clearFilters}
            isOpen={isFilterOpen}
            toggleFilter={toggleFilter}
          />
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-medium">
                {filteredProducts.length} Products
              </h2>
              <button
                className="md:hidden btn-secondary py-2 px-4"
                onClick={toggleFilter}
              >
                Filters
              </button>
            </div>
            
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </main>
  );
}
