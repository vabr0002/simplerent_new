"use client";
import React, { useEffect, useState } from 'react';
import Filter from '@/components/FilterFunction/Filter'; 
import ProductCard from '@/components/productCard/ProductCard'; 

export default function ProductPage() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/rentman/equipment"); // Fetching from API route
        if (!response.ok) {
          throw new Error("Failed to fetch equipment");
        }
        const data = await response.json();
        setEquipment(data);
      } catch (error) {
        console.error("Error fetching equipment:", error);
      }
    }
    fetchData();
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
            {/* Product Grid - 4 cards per row on desktop, responsive on smaller screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {equipment.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}