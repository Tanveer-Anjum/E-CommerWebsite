import React from "react";

const CartTab = () => {
  const cartItems = [
    { id: 1, product: "iPhone 14 Pro", price: 280000, quantity: 1 },
    { id: 2, product: "Cotton Shirt", price: 2000, quantity: 2 },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-4 border rounded">
            <div>
              <p className="font-semibold">{item.product}</p>
              <p className="text-green-600 font-bold">Rs {item.price.toLocaleString()}</p>
            </div>
            <div>
              <span>Qty: {item.quantity}</span>
            </div>
          </div>
        ))}
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTab;
