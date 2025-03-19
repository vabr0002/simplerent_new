"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../button/Button";

const SingleProduct = () => {
  const router = useRouter();
  const { id } = router.query; // Get product ID from URL
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/rentman/products/${id}`);
        const data = await res.json();
        if (res.ok) {
          setProductData(data.data);
          setSelectedImage(data.data.imageUrl || "/img/placeholder.jpg");
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!productData) return <p>Product not found.</p>;

  return (
    <div className="grid grid-cols-[600px,1fr] gap-16 mt-32">
      {/* Image Section */}
      <div className="grid grid-rows-[auto,auto] gap-2">
        <div className="w-[600px] h-[400px] relative overflow-hidden">
          <Image
            src={selectedImage}
            alt={productData.name}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Info Section */}
      <div className="grid grid-rows-[auto,auto,auto,auto] gap-6">
        <div className="p-4">
          <div className="text-h1 font-bold text-black">
            Title: {productData.name}
          </div>
          <div className="text-black">
            <div className="grid grid-rows-3 gap-4 mb-4 font-bold">
              <h3>Price: {productData.price} DKK</h3>
              <h3>Type: {productData.type}</h3>
              <h3>Stock: {productData.current_quantity}</h3>
            </div>
          </div>
        </div>
        <Button className="bg-lime text-black hover:bg-transparent">
          Reserve
        </Button>
      </div>

      {/* Description */}
      <div className="mt-8 mb-20">
        <h4 className="text-h3 font-semibold">Specifications</h4>
        <p className="text-black text-p">
          {productData.shop_description_long || "No description available"}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
