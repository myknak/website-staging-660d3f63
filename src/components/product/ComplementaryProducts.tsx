import Link from "next/link";
import { useCart } from "@/context/CartContext";

// Define the Product type based on the products data structure
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

export default function ComplementaryProducts({ products }: { products: Product[] }) {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      ...product,
      quantity: 1,
    });
  };

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl mb-8">You May Also Like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link href={`/shop/${product.id}`}>
              <div className="product-card-image">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="product-card-content">
              <Link href={`/shop/${product.id}`}>
                <h3 className="product-card-title">{product.name}</h3>
              </Link>
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
        ))}
      </div>
    </section>
  );
}
