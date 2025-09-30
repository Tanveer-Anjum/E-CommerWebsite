import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      {/* Product Image with lazy load + blur effect */}
      <div className="relative h-40 w-full mb-3 overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition duration-700 ease-in-out ${
            loaded ? "opacity-100 blur-0" : "opacity-70 blur-sm"
          }`}
        />
      </div>

      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
        {product.name}
      </h3>

      {/* Product Price */}
      <p className="text-green-600 font-bold mt-1">
        Rs {product.price ? Number(product.price).toLocaleString() : "-"}
      </p>
    </div>
  );
};

export default ProductCard;
