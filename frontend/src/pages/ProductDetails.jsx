import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
// Optional: import your product lists
import { allProducts } from "../data/products"; // create a central product list

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

  const handleAddToCart = () => {
    addToCart({ ...product, selectedColor, quantity: 1 });
    alert("Product added to cart!");
  };

  if (!product) return <p className="text-center mt-20">Loading product...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        {product.brand && (
          <p className="text-gray-600 font-medium">Brand: {product.brand}</p>
        )}
        {product.rating && <p className="text-yellow-400">{"★".repeat(product.rating)}</p>}
        <p className="text-xl font-bold text-green-600">
          Rs {Number(product.price).toLocaleString()}
        </p>
        {product.description && <p className="text-gray-700">{product.description}</p>}

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

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => alert("Proceed to buy")}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
