import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FC } from "react";

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

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      ...product,
      quantity: 1,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <Link href={`/shop/${product.id}`}>
              <div className="product-card-image">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-medium px-2 py-1">
                    NEW
                  </div>
                )}
              </div>
            </Link>
            <div className="product-card-content">
              <Link href={`/shop/${product.id}`}>
                <h3 className="product-card-title">{product.name}</h3>
              </Link>
              <p className="text-sm mb-2">
                {product.scents.slice(0, 3).join(", ")}
              </p>
              <p className="product-card-price">${product.price.toFixed(2)}</p>
              <div className="product-card-actions">
                <Link
                  href={`/shop/${product.id}`}
                  className="text-sm uppercase tracking-wider hover:underline"
                >
                  View Details
                </Link>
                <button
                  className="text-sm uppercase tracking-wider text-accent hover:underline"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-xl mb-4">No products match your filters</p>
          <p>Try adjusting your filter criteria to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
