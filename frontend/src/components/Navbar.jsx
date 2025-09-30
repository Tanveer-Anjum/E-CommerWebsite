import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaStore, FaHeadset } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
   const { cart } = useCart();
  return (
    <nav className="flex items-center justify-between bg-green-700 px-6 py-3 shadow-lg text-white">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        Bazzario
      </Link>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-lg px-3 py-1 w-1/2">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 outline-none text-black py-1"
        />
        <FaSearch className="text-green-500" />
      </div>

      {/* Actions */}
      <div className="flex gap-6 items-center">
        <Link to="/signin" className="flex items-center gap-2 hover:text-orange-300">
          <FaUser /> Sign In
        </Link>

        <Link to="/support" className="flex items-center gap-2 hover:text-orange-300">
          <FaHeadset /> Support
        </Link>

        <Link to="/createshop" className="flex items-center gap-2 hover:text-orange-300">
          <FaStore /> Create Shop
        </Link>

          <Link to="/cart" className="relative">
          <FaShoppingCart className="text-2xl text-white hover:text-orange-300" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
