"use client";
import { useState } from "react";
import Link from "next/link";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Allen & Heath SQ5 Mixer", price: 950, quantity: 1 },
    { id: 2, name: "Shure SM58 Microphone", price: 150, quantity: 2 },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Cart Button */}
      <div
        className="bg-lime text-black px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-green transition-all"
        onClick={toggleCart}
      >
        🛒 {cartItems.length > 0 ? `(${cartItems.length})` : ""}
      </div>

      {/* Floating Cart Panel */}
      <div
        className={`absolute bottom-12 right-0 w-72 bg-black text-white p-4 rounded-lg shadow-xl transition-all ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <h2 className="text-lg font-bold">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-400">Cart is empty</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>{item.price * item.quantity} DKK</span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red text-sm"
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        )}

        <hr className="my-2 border-gray-600" />
        <p className="text-lg font-bold">Total: {total} DKK</p>

        {/* Checkout Button */}
        <Link href="/pages/checkout">
          <button className="w-full bg-lime text-black py-2 rounded-lg hover:bg-green transition">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
