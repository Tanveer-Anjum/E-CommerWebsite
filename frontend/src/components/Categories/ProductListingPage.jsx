import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarFilters from "../../components/SidebarFilters";
import ProductCard from "../ProductCard";

// Importing images from categories/assets
import old1 from "./assets/novel.jpg";
import old2 from "./assets/oldshirts.jpg";
import old3 from "./assets/oldperfum.jpg";
import new1 from "./assets/oldshirts.jpg";
import new2 from "./assets/oldphone.jpg";
import new3 from "./assets/novel1.jpg";

// Product data
const allProducts = {
  "old/cameras": [
    { id: 1, name: "Vintage Camera A", price: 8000, brand: "Canon", color: "Black", rating: 4.2, warranty: "No Warranty", delivery: "Standard", image: old1 },
    { id: 2, name: "Vintage Camera B", price: 12000, brand: "Nikon", color: "Silver", rating: 4.0, warranty: "Seller Warranty", delivery: "Express", image: old2 },
        { id: 20, name: "Vintage Camera B", price: 12000, brand: "Canon", color: "Silver", rating: 4.0, warranty: "brand Warranty", delivery: "Express", image: new3 },
  ],
  "old/watches": [
    { id: 3, name: "Classic Watch A", price: 5000, brand: "Rolex", color: "Gold", rating: 4.7, warranty: "Brand Warranty", delivery: "Standard", image: old3 },
  ],
  "old/phones": [
    { id: 4, name: "Retro Phone A", price: 3000, brand: "Nokia", color: "Gray", rating: 4.3, warranty: "No Warranty", delivery: "Standard", image: old1 },
    { id: 9, name: "Retro Phone B", price: 4500, brand: "Motorola", color: "Black", rating: 4.1, warranty: "Seller Warranty", delivery: "Express", image: old2 },
  ],
  "old/shirts": [
    { id: 10, name: "Old Shirt A", price: 900, brand: "Levis", color: "Blue", rating: 4.4, warranty: "No Warranty", delivery: "Standard", image: old2 },
    { id: 11, name: "Old Shirt B", price: 1200, brand: "H&M", color: "Black", rating: 4.0, warranty: "No Warranty", delivery: "Express", image: old3 },
  ],
  "new/smartphones": [
    { id: 5, name: "iPhone 14", price: 250000, brand: "Apple", color: "Black", rating: 4.8, warranty: "Brand Warranty", delivery: "Express", image: new1 },
    { id: 6, name: "Samsung Galaxy S23", price: 220000, brand: "Samsung", color: "White", rating: 4.7, warranty: "Brand Warranty", delivery: "Standard", image: new2 },
  ],
  "new/smartwatches": [
    { id: 7, name: "Apple Watch", price: 80000, brand: "Apple", color: "Silver", rating: 4.6, warranty: "Brand Warranty", delivery: "Express", image: new3 },
  ],
  "new/laptops": [
    { id: 8, name: "MacBook Air", price: 320000, brand: "Apple", color: "Gray", rating: 4.9, warranty: "Brand Warranty", delivery: "Standard", image: new1 },
  ],
  "new/perfume": [
    { id: 21, name: "New Perfume A", price: 2999, brand: "Generic", color: "N/A", rating: 4.4, warranty: "No Warranty", delivery: "Standard", image: old3 },
  ],
  "new/shirts": [
    { id: 22, name: "New Shirt A", price: 1999, brand: "Levis", color: "Black", rating: 4.1, warranty: "No Warranty", delivery: "Standard", image: old2 },
  ],
  "new/earphones": [
    { id: 23, name: "New Earphones", price: 2499, brand: "Generic", color: "Black", rating: 4.3, warranty: "Seller Warranty", delivery: "Express", image: new2 },
  ],
  "new/airpods": [
    { id: 24, name: "Airpods Pro", price: 9999, brand: "Apple", color: "White", rating: 4.8, warranty: "Brand Warranty", delivery: "Express", image: new1 },
  ],
};

export default function ProductListingPage() {
  const { categoryType, categoryName } = useParams();
  const key = `${categoryType}/${categoryName}`;

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    colors: [],
    deliveries: [],
    warranties: [],
    minRating: 0,
    price: [0, 1000000],
  });

  const products = allProducts[key] || [];

  const available = useMemo(() => {
    const setOf = (arr, key) => Array.from(new Set(arr.map((x) => x[key]).filter(Boolean)));
    return {
      categories: Array.from(new Set([categoryName])),
      brands: setOf(products, "brand"),
      colors: setOf(products, "color"),
      deliveries: setOf(products, "delivery"),
      warranties: setOf(products, "warranty"),
      ratings: [4, 3, 2, 1],
    };
  }, [products, categoryName]);

  const filteredProducts = products.filter((p) => {
    const matchesBrand = (filters.brands?.length ? filters.brands.includes(p.brand) : true);
    const matchesColor = (filters.colors?.length ? filters.colors.includes(p.color) : true);
    const matchesDelivery = (filters.deliveries?.length ? filters.deliveries.includes(p.delivery) : true);
    const matchesWarranty = (filters.warranties?.length ? filters.warranties.includes(p.warranty) : true);
    const matchesCategories = (filters.categories?.length ? filters.categories.includes(categoryName) : true);
    const matchesRating = Number(p.rating || 0) >= Number(filters.minRating || 0);
    const matchesPrice = p.price >= filters.price[0] && p.price <= filters.price[1];
    return matchesBrand && matchesColor && matchesDelivery && matchesWarranty && matchesCategories && matchesRating && matchesPrice;
  });

  return (
    <div className="p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        {`${categoryType === "old" ? "Old" : "New"} ${String(categoryName).replace(/-/g, " ")}`}
      </h2>
      <div className="flex gap-6">
        {/* Sidebar */}
        <SidebarFilters filters={filters} setFilters={setFilters} available={available} />
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1 h-48">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="text-gray-600">No products found.</p>
          )}
        </div>
      </div> 
    </div>
  );
}
