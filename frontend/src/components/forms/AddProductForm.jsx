import React, { useState } from "react";

export default function AddProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    categoryType: "New", // New or Old
    categoryName: "", // e.g., phones, watches
    brand: "",
    colors: "", // comma separated
    warranty: "",
    delivery: "",
    rating: "",
    reviews: "",
    stock: "",
    description: "",
    imageFile: null,
    imagePreview: "",
  });

  // Handle text inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        imageFile: file,
        imagePreview: URL.createObjectURL(file), // ✅ preview
      });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", form);

    // When backend is ready → send `form.imageFile` to server (e.g., via FormData)
    alert("✅ Product added successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md space-y-4"
    >
      <h3 className="text-lg font-bold text-gray-700">Add New Product</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />

        <select
          name="categoryType"
          value={form.categoryType}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="New">New</option>
          <option value="Old">Old</option>
        </select>

        <input
          type="text"
          name="categoryName"
          placeholder="Category Name (e.g., phones, watches, laptops)"
          value={form.categoryName}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand (e.g. Apple, Samsung)"
          value={form.brand}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />

        <input
          type="text"
          name="colors"
          placeholder="Colors (comma separated)"
          value={form.colors}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <select
          name="warranty"
          value={form.warranty}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">Warranty</option>
          <option value="No Warranty">No Warranty</option>
          <option value="Seller Warranty">Seller Warranty</option>
          <option value="Brand Warranty">Brand Warranty</option>
        </select>

        <select
          name="delivery"
          value={form.delivery}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">Delivery</option>
          <option value="Standard">Standard</option>
          <option value="Express">Express</option>
        </select>

        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          step="0.1"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <input
          type="number"
          name="reviews"
          placeholder="Reviews Count"
          value={form.reviews}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={form.stock}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full border rounded p-2"
        required
      />

      {form.imagePreview && (
        <img
          src={form.imagePreview}
          alt="Preview"
          className="h-32 w-32 object-cover mt-2 rounded"
        />
      )}

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Product
      </button>
    </form>
  );
}
