import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCardComponent = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to product details page with product state
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const rating = Number(product.rating ?? 4.5);
  const reviewsCount = Number(product.reviews ?? 120);

  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div
      className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition cursor-pointer flex flex-col h-auto"
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="relative w-full h-48 mb-3">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">{product.name}</h3>

      {/* Product Price */}
      <p className="text-green-600 font-bold mt-1">
        Rs {product.price ? Number(product.price).toLocaleString() : "-"}
      </p>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
        <div className="flex items-center text-yellow-500">
          {Array.from({ length: fullStars }).map((_, i) => (
            <span key={`full-${i}`}>★</span>
          ))}
          {hasHalf && <span>☆</span>}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <span key={`empty-${i}`}>☆</span>
          ))}
        </div>
        <span>({reviewsCount})</span>
      </div>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.product?.id === nextProps.product?.id &&
    prevProps.product?.image === nextProps.product?.image &&
    prevProps.product?.name === nextProps.product?.name &&
    prevProps.product?.price === nextProps.product?.price
  );
};

const ProductCard = React.memo(ProductCardComponent, areEqual);

export default ProductCard;
