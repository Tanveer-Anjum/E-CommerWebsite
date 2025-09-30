import React from "react";

export default function OverviewTab() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">📊 Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-600">Total Products</h3>
          <p className="text-2xl font-semibold text-green-700">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-600">Pending Orders</h3>
          <p className="text-2xl font-semibold text-yellow-600">4</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-600">Revenue</h3>
          <p className="text-2xl font-semibold text-blue-600">$1,240</p>
        </div>
      </div>
    </div>
  );
}
