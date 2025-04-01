"use client"; // Enables client-side rendering in a Next.js component

import { useEffect, useState } from "react";
import Filter from "@/components/FilterFunction/Filter"; // Custom filter component
import ProductCard from "@/components/productCard/ProductCard"; // Component to display individual product

export default function ProductPage() {
  // State for products list
  const [products, setProducts] = useState([]);

  // Loading indicator
  const [loading, setLoading] = useState(false);

  // Current page for pagination
  const [page, setPage] = useState(1);

  // Tracks if more products are available to load
  const [hasMore, setHasMore] = useState(true);

  // Number of products to show per page
  const [limit, setLimit] = useState(10);

  // Sorting option (e.g. name, price ascending, price descending)
  const [sortBy, setSortBy] = useState("name");

  // Fetch products whenever limit or sorting option changes
  useEffect(() => {
    fetchProducts(1, limit, sortBy); // Always reset to page 1 on setting changes
  }, [limit, sortBy]);

  // Fetches products from the API
  async function fetchProducts(page, limit, sortBy) {
    setLoading(true); // Start loading state

    try {
      // Fetch products with pagination and sorting parameters
      const response = await fetch(`/api/rentman/products?page=${page}&limit=${limit}&sort=${sortBy}`);
      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();

      // If first page, replace products; otherwise append
      setProducts((prevProducts) => (page === 1 ? data.data : [...prevProducts, ...data.data]));

      // Determine if more products are available
      setHasMore(data.data.length === limit);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false); // End loading state
    }
  }

  return (
    <div className="bg-white min-h-screen w-full">
      <main className="container mx-auto px-4 py-8 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left column for filters */}
          <aside className="md:w-[350px] flex-shrink-0 sticky top-0 h-screen overflow-auto pt-[200px]">
            <Filter />
          </aside>

          {/* Main content area for products */}
          <div className="flex-grow">
            
            {/* Dropdown controls for limit and sorting */}
            <div className="flex justify-between mb-4">
              
              {/* Limit dropdown */}
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

              {/* Sorting dropdown */}
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

            {/* Product Grid */}
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

            {/* Load More button for pagination */}
            {hasMore && !loading && (
              <button
                onClick={() => {
                  setPage((prevPage) => prevPage + 1); // Increment page
                  fetchProducts(page + 1, limit, sortBy); // Load next page
                }}
                className="mt-6 px-6 py-3 bg-lime text-black rounded-md"
              >
                Load More
              </button>
            )}

            {/* Loading indicator */}
            {loading && <p>Loading more products...</p>}
          </div>
        </div>
      </main>
    </div>
  );
}