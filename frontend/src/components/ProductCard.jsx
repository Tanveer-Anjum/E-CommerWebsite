import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md mb-3"
      />

      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>

      {/* Product Price */}
      <p className="text-green-600 font-bold mt-1">
        Rs {product.price ? Number(product.price).toLocaleString() : "-"}
      </p>
    </div>
  );
};

export default ProductCard;
