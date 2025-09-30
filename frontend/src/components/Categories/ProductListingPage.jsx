import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SidebarFilters from "../../components/SidebarFilters";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";

// Importing images from categories/assets
import old1 from "./assets/camera.jpg";
import old2 from "./assets/camera1.jpg";
import old3 from "./assets/oldperfum.jpg";
import new1 from "./assets/shirt.jpg";
import new2 from "./assets/oldphone.jpg";
import new3 from "./assets/camera2.jpg";
import new4 from "./assets/shirt.jpg";
import new5 from "./assets/oldshirts.jpg";
import new6 from "./assets/phone1.jpg";
import new7 from "./assets/phone2.jpg";
import new8 from "./assets/watch1.jpg";
import new9 from "./assets/watch2.jpg";
import new10 from "./assets/laptop.jpg";
import new11 from "./assets/labtop2.jpg";
import new12 from "./assets/airpods.jpg"

// Product data
const allProducts = {
  "old/cameras": [
    { id: 1, name: "Vintage Camera A", price: 8000, brand: "Canon", color: "Black", rating: 4.2, warranty: "No Warranty", delivery: "Standard", image: old1, description: "Classic Canon vintage camera with sturdy build. Ideal for collectors and retro photography enthusiasts. Fully functional with minor cosmetic wear." },
    { id: 2, name: "Vintage Camera B", price: 12000, brand: "Nikon", color: "Silver", rating: 4.0, warranty: "Seller Warranty", delivery: "Express", image: old2, description: "Nikon vintage camera in silver finish. Clean optics, smooth focus ring, and reliable shutter. Great addition to your analog gear." },
    { id: 20, name: "Vintage Camera C", price: 12000, brand: "Canon", color: "Silver", rating: 4.0, warranty: "Brand Warranty", delivery: "Express", image: new3, description: "Canon retro camera with premium feel. Carefully maintained, ready to shoot with timeless film aesthetics." },
  ],
  "old/watches": [
    { id: 3, name: "Classic Watch A", price: 5000, brand: "Rolex", color: "Gold", rating: 4.7, warranty: "Brand Warranty", delivery: "Standard", image: new8, description: "Elegant classic Rolex-style watch in gold tone. Comfortable strap, precise quartz movement, suitable for daily wear and occasions." },
    { id: 4, name: "Classic Watch B", price: 10000, brand: "Rolex", color: "Metal", rating: 4.7, warranty: "Brand Warranty", delivery: "Standard", image: new9, description: "Metallic finish classic watch with premium build. Scratch-resistant glass and minimalist dial for a timeless look." },
  ],
  "old/phones": [
    { id: 5, name: "Retro Phone A", price: 3000, brand: "Nokia", color: "Gray", rating: 4.3, warranty: "No Warranty", delivery: "Standard", image: new6, description: "Legendary Nokia retro phone with long-lasting battery and classic keypad. Durable and reliable for basic calling." },
    { id: 6, name: "Retro Phone B", price: 4500, brand: "Motorola", color: "Black", rating: 4.1, warranty: "Seller Warranty", delivery: "Express", image: new7, description: "Motorola retro handset with strong reception and sturdy build. Perfect backup or nostalgic daily driver." },
  ],
  "old/shirts": [
    { id: 7, name: "Old Shirt A", price: 900, brand: "Levis", color: "Blue", rating: 4.4, warranty: "No Warranty", delivery: "Standard", image: new4, description: "Comfortable cotton shirt with a classic fit. Soft fabric, great for everyday casual wear." },
    { id: 8, name: "Old Shirt B", price: 1200, brand: "H&M", color: "Black", rating: 4.0, warranty: "No Warranty", delivery: "Express", image: new5, description: "Black casual shirt with breathable fabric. Easy to style and machine-washable." },
  ],
  "new/smartphones": [
    { id: 9, name: "iPhone 14", price: 250000, brand: "Apple", color: "Black", rating: 4.8, warranty: "Brand Warranty", delivery: "Express", image: new6, description: "Apple iPhone 14 with powerful performance, excellent cameras, and smooth iOS experience." },
    { id: 10, name: "Samsung Galaxy S23", price: 220000, brand: "Samsung", color: "White", rating: 4.7, warranty: "Brand Warranty", delivery: "Standard", image: new7, description: "Samsung flagship with brilliant display, pro-grade camera, and long-lasting battery." },
  ],
  "new/smartwatches": [
    { id: 11, name: "Apple Watch", price: 80000, brand: "Apple", color: "Silver", rating: 4.6, warranty: "Brand Warranty", delivery: "Express", image: new8, description: "Apple Watch with fitness tracking, heart-rate monitoring, and seamless iPhone integration." },
    { id: 12, name: "Rolex Watch", price: 80000, brand: "Alvi", color: "Silver", rating: 4.6, warranty: "Brand Warranty", delivery: "Express", image: new9, description: "Premium style watch with metal strap and elegant dial design for a refined look." },
  ],
  "new/laptops": [
    { id: 13, name: "MacBook Air", price: 320000, brand: "Apple", color: "Gray", rating: 4.9, warranty: "Brand Warranty", delivery: "Standard", image: new10, description: "Apple MacBook Air with sleek design, excellent battery life, and fast performance." },
    { id: 14, name: "Dell H10", price: 320000, brand: "Dell", color: "Black", rating: 4.9, warranty: "Brand Warranty", delivery: "Standard", image: new11, description: "Dell performance laptop with bright display and responsive keyboard for productivity." },
  ],
  "new/perfume": [
    { id: 15, name: "New Perfume A", price: 2999, brand: "Generic", color: "N/A", rating: 4.4, warranty: "No Warranty", delivery: "Standard", image: old3, description: "Fresh and long-lasting fragrance suitable for daily wear and special occasions." },
  ],
  "new/shirts": [
    { id: 16, name: "New Shirt A", price: 1999, brand: "Levis", color: "Black", rating: 4.1, warranty: "No Warranty", delivery: "Standard", image: old2, description: "Soft cotton shirt with modern fit. Breathable fabric, perfect for all-day comfort." },
  ],
  "new/earphones": [
    { id: 17, name: "New Earphones", price: 2499, brand: "Generic", color: "Black", rating: 4.3, warranty: "Seller Warranty", delivery: "Express", image: new2, description: "In-ear earphones with powerful bass and clear highs. Comfortable for long listening." },
  ],
  "new/airpods": [
    { id: 18, name: "Airpods Pro", price: 9999, brand: "Apple", color: "White", rating: 4.8, warranty: "Brand Warranty", delivery: "Express", image: new12, description: "Apple AirPods Pro with active noise cancellation and immersive sound." },
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

  const [loading, setLoading] = useState(true); // loading state
  const [visibleCount, setVisibleCount] = useState(6);

  const products = allProducts[key] || [];

  // Fake loading effect (like fetching)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // 1s delay
    return () => clearTimeout(timer);
  }, [key]);

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
    const matchesBrand = filters.brands.length ? filters.brands.includes(p.brand) : true;
    const matchesColor = filters.colors.length ? filters.colors.includes(p.color) : true;
    const matchesDelivery = filters.deliveries.length ? filters.deliveries.includes(p.delivery) : true;
    const matchesWarranty = filters.warranties.length ? filters.warranties.includes(p.warranty) : true;
    const matchesCategories = filters.categories.length ? filters.categories.includes(categoryName) : true;
    const matchesRating = Number(p.rating || 0) >= Number(filters.minRating || 0);
    const matchesPrice = p.price >= filters.price[0] && p.price <= filters.price[1];
    return matchesBrand && matchesColor && matchesDelivery && matchesWarranty && matchesCategories && matchesRating && matchesPrice;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredProducts.length;

  return (
    <div className="p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        {`${categoryType === "old" ? "Old" : "New"} ${String(categoryName).replace(/-/g, " ")}`}
      </h2>
      <div className="flex gap-6">
        {/* Sidebar */}
        <SidebarFilters filters={filters} setFilters={setFilters} available={available} />

        {/* Products */}
        <div className="flex-1">
         {loading ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {visibleProducts.length > 0 ? (
                  visibleProducts.map((p) => <ProductCard key={p.id} product={p} />)
                ) : (
                  <p className="text-gray-600">No products found.</p>
                )}
              </div>

              {canLoadMore && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setVisibleCount((c) => c + 6)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99] transition-colors duration-200"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
