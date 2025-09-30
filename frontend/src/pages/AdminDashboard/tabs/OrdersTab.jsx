import React from "react";

export default function OrdersTab() {
  const orders = [
    { id: "ORD001", customer: "Ali Khan", total: "Rs 30,000", status: "Shipped" },
    { id: "ORD002", customer: "Sara Ahmed", total: "Rs 50,000", status: "Pending" },
    { id: "ORD003", customer: "Bilal Khan", total: "Rs 15,000", status: "Delivered" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Orders</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{o.id}</td>
                <td className="p-3">{o.customer}</td>
                <td className="p-3">{o.total}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-white text-sm ${
                    o.status === "Shipped" ? "bg-blue-500" :
                    o.status === "Delivered" ? "bg-green-500" :
                    "bg-yellow-500"
                  }`}>
                    {o.status}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">View</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
