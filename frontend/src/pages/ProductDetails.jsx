import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
// Optional: import your product lists
import { allProducts } from "../data/products"; // create a central product list
import CheckoutModal from "../components/Checkout/CheckoutModal";

const ProductDetails = () => {
  const location = useLocation();
  const { id } = useParams(); // product ID from URL
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Try to get product from location.state
  const [product, setProduct] = useState(location.state?.product || null);

  useEffect(() => {
    // If product is null (user typed URL manually), fetch from allProducts
    if (!product) {
      const found = allProducts.find((p) => String(p.id) === id);
      if (found) setProduct(found);
      else navigate("/"); // if not found, redirect home
    }
  }, [id, product, navigate]);

  const [selectedColor, setSelectedColor] = useState(
    product?.colors ? product.colors[0] : null
  );
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const safeQty = Math.max(1, Number(quantity) || 1);
    addToCart({ ...product, selectedColor, quantity: safeQty });
    alert("Product added to cart!");
  };

  if (!product) return <p className="text-center mt-20">Loading product...</p>;

  // Rating rendering (full/half/empty stars)
  const numericRating = Number(product.rating ?? 0);
  const fullStars = Math.floor(numericRating);
  const hasHalf = numericRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Left: Delivery options */}
      <aside className="md:w-64 w-full order-3 md:order-1">
        <div className="bg-white rounded-lg shadow p-4 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Delivery Options</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-green-600">🚚</span>
              <div>
                <p className="font-medium">Standard Delivery</p>
                <p className="text-gray-500">3-7 days across Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600">💵</span>
              <div>
                <p className="font-medium">Cash on Delivery available</p>
                <p className="text-gray-500">Pay when you receive</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600">✔️</span>
              <div>
                <p className="font-medium">7-day Return Policy</p>
                <p className="text-gray-500">Conditions apply</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Center: Product image */}
      <div className="flex-1 order-1 md:order-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Right: Product details */}
      <div className="flex-1 flex flex-col gap-4 order-2 md:order-3">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        {product.brand && (
          <p className="text-gray-600 font-medium">Brand: {product.brand}</p>
        )}
        {Number.isFinite(numericRating) && numericRating > 0 && (
          <div className="flex items-center gap-2">
            <div className="text-yellow-500 text-lg">
              {Array.from({ length: fullStars }).map((_, i) => (
                <span key={`full-${i}`}>★</span>
              ))}
              {hasHalf && <span>☆</span>}
              {Array.from({ length: emptyStars }).map((_, i) => (
                <span key={`empty-${i}`}>☆</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">{numericRating.toFixed(1)} / 5</span>
          </div>
        )}
        <p className="text-2xl font-bold text-green-600">
          Rs {Number(product.price).toLocaleString()}
        </p>
        {product.description && (
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="text-gray-700 whitespace-pre-line leading-7">{product.description}</p>
          </div>
        )}

        {product.colors && (
          <div className="flex items-center gap-4">
            <span className="font-semibold">Color:</span>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border p-2 rounded"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <span className="font-semibold">Quantity:</span>
          <div className="inline-flex items-center border rounded-lg overflow-hidden">
            <button type="button" onClick={() => setQuantity((q) => Math.max(1, Number(q || 1) - 1))} className="px-3 py-2 bg-gray-100 hover:bg-gray-200">-</button>
            <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))} className="w-16 text-center outline-none py-2" />
            <button type="button" onClick={() => setQuantity((q) => Math.max(1, Number(q || 1) + 1))} className="px-3 py-2 bg-gray-100 hover:bg-gray-200">+</button>
          </div>
        </div>

        <div className="flex gap-4 mt-2">
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        open={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        product={product}
        selectedColor={selectedColor}
        quantity={quantity}
        onPlaced={() => alert("✅ Order placed successfully! (Demo)")}
      />
    </div>
  );
};

export default ProductDetails;
