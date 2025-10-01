import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./Categories/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton"; // ✅ import skeleton

// Import images from assets
import iphone from "../assets/iphone.webp";
import samsung from "../assets/sumsang.jpg";
import tshirt from "../assets/t-shite.webp";
import beauty from "../assets/beauty.jpg";
import football from "../assets/footbal.jpg";
import trousers from "../assets/trosers.webp";
import cups from "../assets/cups.webp";
import airpods from "../assets/airpods.webp";

const featuredProducts = [
  { id: 201, name: "Featured iPhone 14", price: 280000, image: iphone, brand:"Apple", colors:["Black","White"], rating:5, reviews: 320, description:"Latest iPhone 14" },
  { id: 202, name: "Featured Samsung S23", price: 250000, image: samsung, brand:"Samsung", colors:["Black","Silver"], rating:4.5, reviews: 210, description:"Flagship Samsung" },
  { id: 203, name: "Featured Shirt", price: 2000, image: tshirt, brand:"Levis", colors:["Blue","White"], rating:4.2, reviews: 85, description:"Comfortable shirt" },
  { id: 204, name: "Makeup Set", price: 2000, image: beauty, brand:"Generic", colors:["Blue","White"], rating:4.7, reviews: 60, description:"High Quality makeup" },
  { id: 205, name: "Football", price: 2800, image: football, brand:"No brand", colors:["Black","White","Red"], rating:4.6, reviews: 140, description:"Best football" },
  { id: 206, name: "Trouser", price: 2500, image: trousers, brand:"Gucci", colors:["Black","Brown","White"], rating:4.1, reviews: 50, description:"Comfortable Trouser" },
  { id: 207, name: "Cup", price: 200, image: cups, brand:"No brand", colors:["Blue","White"], rating:4.0, reviews: 33, description:"Best Quality Cups" },
  { id: 210, name: "Air Pods", price: 2000, image: airpods, brand:"No brand", colors:["Blue","White"], rating:4.8, reviews: 500, description:"High Quality Air pods" },
];

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Simulate API fetch
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 sec fake delay
    return () => clearTimeout(timer);
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {loading
          ? Array(8).fill(0).map((_, i) => <ProductCardSkeleton key={i} />) // show skeletons
          : featuredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => handleProductClick(p)}
              />
            ))}
      </div>
    </section>
  );
}
