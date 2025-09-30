

import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

// Images from categories assets
import oldShirts from "./assets/oldshirts.jpg";
import oldPhone from "./assets/oldphone.jpg";
import oldTshirt from "./assets/oldtshirt.jpg";
import oldPerfum from "./assets/oldperfum.jpg";
import oldPerfum1 from "./assets/oldperfum1.jpg";
import novel from "./assets/novel.jpg";
import novel1 from "./assets/novel1.jpg";

const oldCategories = [
  { id: 101, name: "Old Shirts", image: oldShirts, price: 1499 },
  { id: 102, name: "Old Phone", image: oldPhone, price: 4999 },
  { id: 103, name: "Old T-Shirt", image: oldTshirt, price: 799 },
  { id: 104, name: "Classic Perfume", image: oldPerfum, price: 1299 },
  { id: 105, name: "Classic Perfume Set", image: oldPerfum1, price: 1999 },
  { id: 106, name: "Old Novel", image: novel, price: 399 },
  { id: 107, name: "Old Novel Volume 2", image: novel1, price: 449 },
];

export default function OldCategories() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Old Categories</h2>
      {/* Quick category tiles like Daraz (e.g., Phones, Shirts, Perfumes, Books) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200" onClick={() => navigate("/old/phones")}>Old Phones</button>
        <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200" onClick={() => navigate("/old/watches")}>Old Watches</button>
        <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200" onClick={() => navigate("/old/cameras")}>Old Cameras</button>
        <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200" onClick={() => navigate("/old/shirts")}>Old Shirts</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {oldCategories.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
