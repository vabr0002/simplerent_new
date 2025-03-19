"use client";

import { useEffect, useState } from "react";
import Filter from "@/components/FilterFunction/Filter";
import ProductCard from "@/components/productCard/ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/rentman/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        // console.log("Fetched Products:", data.data); // Debugging

        setProducts(data.data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="bg-white min-h-screen w-full">
      <main className="container mx-auto px-4 py-8 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Column - Making it sticky */}
          <aside className="md:w-[350px] flex-shrink-0 sticky top-0 h-screen overflow-auto pt-[200px]">
            <Filter />
          </aside>

          {/* Products Grid Column (Flexible Width) */}
          <div className="flex-grow">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.displayname}
                    description={product.shop_description_short}
                    price={`$${product.price}`}
                    imageSrc={product.imageUrl} 
                    buttonLink={`/pages/singleProduct?id=${product.id}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}