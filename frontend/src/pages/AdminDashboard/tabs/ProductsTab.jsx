import React, { useState } from "react";
import AddProductForm from "../../../components/forms/AddProductForm";

export default function ProductsTab() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-700">Manage Products</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>

      {showForm && (
        <div className="mb-6">
          <AddProductForm />
        </div>
      )}

      {/* Later: Table of products */}
      <div className="bg-white shadow rounded-lg p-4">
        <p className="text-gray-600">Products list will show here...</p>
      </div>
    </div>
  );
}
