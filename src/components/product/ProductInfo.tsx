interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  scents: string[];
  size: string;
  burnTime: string;
  isNew: boolean; // Added this field to match the other Product interface
  [key: string]: any; // For any other properties
}

interface ProductInfoProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

export default function ProductInfo({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
}: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
      <p className="text-2xl mb-4">${product.price.toFixed(2)}</p>
      
      <div className="mb-6">
        <p className="text-lg">{product.description}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Scent Family</h3>
        <div className="flex flex-wrap gap-2">
          {product.scents.map((scent) => (
            <span
              key={scent}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {scent}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Size</h3>
        <p>{product.size}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Burn Time</h3>
        <p>{product.burnTime}</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Quantity</h3>
        <div className="flex items-center">
          <button
            className="w-10 h-10 border border-gray-300 flex items-center justify-center"
            onClick={() => onQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value))}
            className="w-16 h-10 border-t border-b border-gray-300 text-center"
          />
          <button
            className="w-10 h-10 border border-gray-300 flex items-center justify-center"
            onClick={() => onQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      <button
        className="w-full py-3 bg-primary text-white hover:bg-opacity-90 transition-colors"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
      
      <div className="mt-8 border-t border-gray-200 pt-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Shipping</h3>
          <p>Free shipping on orders over $75</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Returns</h3>
          <p>30-day return policy for unused items</p>
        </div>
      </div>
    </div>
  );
}
