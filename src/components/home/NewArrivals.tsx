import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

// Define a type for the product based on the data structure
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

export default function NewArrivals() {
  const { addToCart } = useCart();
  
  // Get the 4 newest products
  const newProducts = products
    .filter(product => product.isNew)
    .slice(0, 4);

  const handleAddToCart = (product: Product) => {
    addToCart({
      ...product,
      quantity: 1,
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">New Arrivals</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our latest creations, featuring seasonal inspirations and
            innovative fragrance combinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: "slideUp 0.8s ease-in-out forwards" 
              }}
            >
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

        <div className="text-center mt-12">
          <Link href="/shop" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
