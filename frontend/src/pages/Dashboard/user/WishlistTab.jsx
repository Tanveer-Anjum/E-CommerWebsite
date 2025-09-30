import React from "react";

const WishlistTab = () => {
  const wishlist = [
    { id: 1, product: "Samsung S23 Ultra", price: 250000 },
    { id: 2, product: "Summer Dress", price: 3500 },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Wishlist</h2>
      <ul className="space-y-3">
        {wishlist.map((item) => (
          <li key={item.id} className="flex justify-between p-3 border rounded">
            <span>{item.product}</span>
            <span className="text-green-600 font-bold">Rs {item.price.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistTab;
