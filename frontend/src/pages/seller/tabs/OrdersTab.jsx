import React, { useState } from "react";

export default function OrdersTab() {
  const [orders, setOrders] = useState([
    { id: 1, product: "iPhone 15", customer: "Ali", status: "Pending" },
    { id: 2, product: "Nike Shoes", customer: "Sara", status: "Pending" },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📑 Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders yet.</p>
      ) : (
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Order ID</th>
              <th className="p-3">Product</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3 font-semibold">{order.status}</td>
                <td className="p-3 space-x-2">
                  {order.status === "Pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(order.id, "Accepted")}
                        className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => updateStatus(order.id, "Cancelled")}
                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                  {order.status !== "Pending" && (
                    <span className="text-gray-500">No actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
