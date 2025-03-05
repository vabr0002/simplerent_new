"use client";
import { useState } from "react";
import Cart from "@/components/cart/Cart";

export default function Home() {
  const [wishlistItems, setWishlistItems] = useState([
    // Placeholder wishlist items
    { id: 1, name: "Allen & Heath SQ5 Mixer", price: 950 },
    { id: 2, name: "Shure SM58 Microphone", price: 150 }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    // TODO: Implement adding item to a cart
    console.log(`Added ${item.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <h1 className="text-4xl font-bold text-black">Projects</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Wishlist Section */}
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Wishlist</h2>
            <span className="text-gray-500">
              ({wishlistItems.length} items)
            </span>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Your wishlist is empty
            </div>
          ) : (
            <ul className="space-y-4">
              {wishlistItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="block text-gray-500">
                      {item.price} DKK
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => addToCart(item)}
                      className="text-green-500 hover:text-green-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Carts Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Carts</h2>
          <div className="space-y-6">
            <Cart />
            <Cart />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
