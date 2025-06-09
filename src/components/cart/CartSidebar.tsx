import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { IconClose } from "../icons";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-medium">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-primary">
            <IconClose />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg mb-4">Your cart is empty</p>
              <Link
                href="/shop"
                className="btn btn-primary"
                onClick={onClose}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-gray-200 pb-4"
                >
                  <div className="w-20 h-20 flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center">
                      <button
                        className="w-6 h-6 border border-gray-300 flex items-center justify-center"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="w-6 h-6 border border-gray-300 flex items-center justify-center"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <button 
              onClick={clearCart}
              className="w-full py-2 mb-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
            >
              Clear Cart
            </button>
            <button className="w-full py-3 bg-primary text-white hover:bg-opacity-90 transition-colors mb-2">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
