"use client";

import { useEffect, useState } from "react";
import Filter from "@/components/FilterFunction/Filter";
import ProductCard from "@/components/productCard/ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(10); // Default to 10 products per page
  const [sortBy, setSortBy] = useState("name"); // Default sorting option

  useEffect(() => {
    fetchProducts(1, limit, sortBy); // Reset page when settings change
  }, [limit, sortBy]);

  async function fetchProducts(page, limit, sortBy) {
    setLoading(true);
    try {
      const response = await fetch(`/api/rentman/products?page=${page}&limit=${limit}&sort=${sortBy}`);
      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();

      setProducts((prevProducts) => (page === 1 ? data.data : [...prevProducts, ...data.data]));
      setHasMore(data.data.length === limit);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white min-h-screen w-full">
      <main className="container mx-auto px-4 py-8 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Column - Making it sticky */}
          <aside className="md:w-[350px] flex-shrink-0 sticky top-0 h-screen overflow-auto pt-[200px]">
            <Filter />
          </aside>

          {/* Products Grid Column */}
          <div className="flex-grow">
            {/* Sorting and Limit Controls */}
            <div className="flex justify-between mb-4">
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPage(1); // Reset pagination
                }}
                className="px-3 py-2 border-2 border-lime-500 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
              >
                <option value="10">Show 10</option>
                <option value="20">Show 20</option>
                <option value="50">Show 50</option>
                <option value="100">Show 100</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setPage(1); // Reset pagination
                }}
                className="px-3 py-2 border-2 border-lime-500 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
              >
                <option value="name">Sort by Name</option>
                <option value="price_asc">Sort by Price (Low to High)</option>
                <option value="price_desc">Sort by Price (High to Low)</option>
              </select>
            </div>

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

            {/* Load More Button */}
            {hasMore && !loading && (
              <button
                onClick={() => {
                  setPage((prevPage) => prevPage + 1);
                  fetchProducts(page + 1, limit, sortBy);
                }}
                className="mt-6 px-6 py-3 bg-lime text-black rounded-md"
              >
                Load More
              </button>
            )}
            {loading && <p>Loading more products...</p>}
          </div>
        </div>
      </main>
    </div>
  );
}