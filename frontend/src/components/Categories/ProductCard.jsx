import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const tokenData = JSON.parse(localStorage.getItem("authToken"));

    if (!tokenData || new Date().getTime() > tokenData.expiry) {
      localStorage.removeItem("authToken"); // remove expired token
      toast.error("Please sign in to view this product!");

      // save the page user wants to go after login
      localStorage.setItem("redirectAfterLogin", `/product/${product.id}`);

      setTimeout(() => navigate("/signin"), 1500);
      return;
    }

    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      className="bg-white shadow rounded-lg p-4 cursor-pointer"
      onClick={handleClick}
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
      <p className="text-green-600 font-bold mt-1">Rs {product.price.toLocaleString()}</p>
    </div>
  );
};

export default ProductCard;
