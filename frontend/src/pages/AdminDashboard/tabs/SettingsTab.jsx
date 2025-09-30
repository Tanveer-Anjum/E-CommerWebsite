import React from "react";

export default function SettingsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Settings</h2>
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Store Name</label>
          <input type="text" className="w-full border rounded p-2 mt-1" placeholder="My E-Commerce Store" />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Email</label>
          <input type="email" className="w-full border rounded p-2 mt-1" placeholder="owner@example.com" />
        </div>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Save Changes</button>
      </div>
    </div>
  );
}
