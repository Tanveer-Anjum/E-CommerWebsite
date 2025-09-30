import React from "react";

const OrdersTab = () => {
  // Dummy orders
  const orders = [
    { id: 1, product: "iPhone 14 Pro", price: 280000, status: "Delivered" },
    { id: 2, product: "Cotton Shirt", price: 2000, status: "Pending" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex justify-between p-4 border rounded">
            <div>
              <p className="font-semibold">{order.product}</p>
              <p className="text-green-600 font-bold">Rs {order.price.toLocaleString()}</p>
            </div>
            <div>
              <span
                className={`px-3 py-1 rounded text-white ${
                  order.status === "Delivered" ? "bg-green-600" : "bg-orange-500"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersTab;
