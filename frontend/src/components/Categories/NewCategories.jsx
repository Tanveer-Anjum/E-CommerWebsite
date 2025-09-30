import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "../../components/ProductCardSkeleton"; // ✅ import skeleton
import { useNavigate } from "react-router-dom";

// Images from categories assets
import newPerfum from "./assets/newperfum.jpg";
import novel from "./assets/novel.jpg";
import novel1 from "./assets/novel1.jpg";
// Existing images from global assets
import airpodsImg from "../../assets/airpods.jpg";
import earphoneImg from "../../assets/airphone.jpg";
import shirtImg from "../../assets/t-shirtblack.jpg";
import bottleImg from "../../assets/waterbottle.jpg";

const newCategories = [
  { id: 201, name: "New Perfume", image: newPerfum, price: 2999 },
  { id: 202, name: "New Novel", image: novel, price: 699 },
  { id: 203, name: "New Novel Volume 2", image: novel1, price: 749 },
  { id: 204, name: "Airpods", image: airpodsImg, price: 9999 },
  { id: 205, name: "Earphone", image: earphoneImg, price: 2499 },
  { id: 206, name: "Shirt", image: shirtImg, price: 1999 },
  { id: 207, name: "Water Bottle", image: bottleImg, price: 799 },
];

export default function NewCategories() {
  const navigate = useNavigate();

  // ✅ loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API/data loading delay
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">New Categories</h2>

      {/* Quick category tiles like Daraz */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <button
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={() => navigate("/new/smartphones")}
        >
          Smartphones
        </button>
        <button
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={() => navigate("/new/smartwatches")}
        >
          Smartwatches
        </button>
        <button
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={() => navigate("/new/laptops")}
        >
          Laptops
        </button>
        <button
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={() => navigate("/new/perfume")}
        >
          Perfume
        </button>
        <button
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={() => navigate("/new/shirts")}
        >
          Shirts
        </button>
        <button
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={() => navigate("/new/earphones")}
        >
          Earphones
        </button>
        <button
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={() => navigate("/new/airpods")}
        >
          Airpods
        </button>
      </div>

      {/* ✅ Products grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <ProductCardSkeleton key={i} />) // show skeletons
          : newCategories.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
      </div>
    </div>
  );
}
