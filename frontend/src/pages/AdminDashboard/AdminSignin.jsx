import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminSignin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin signed in (demo)");
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Admin Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          <span>Don&apos;t have an account? </span>
          <Link to="/admin/signup" className="text-green-700 hover:underline">Sign Up</Link>
        </div>
      </div>
    </section>
  );
}

