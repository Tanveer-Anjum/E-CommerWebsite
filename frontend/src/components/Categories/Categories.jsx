import React, { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";

const OldCategories = lazy(() => import("./OldCategories"));
const NewCategories = lazy(() => import("./NewCategories"));

export default function Categories() {
  const [activeTab, setActiveTab] = useState("old");

  return (
    <section className="p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Shop by Category
      </h2>

      {/* Toggle Buttons */}
      <div className="relative flex justify-center gap-8 mb-10">
        {/* Old Products */}
        <button
          type="button"
          onClick={() => setActiveTab("old")}
          className={`relative px-6 py-2 font-semibold transition ${
            activeTab === "old"
              ? "text-green-600"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Old Products
          {activeTab === "old" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-1 h-[3px] bg-green-600 rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>

        {/* New Products */}
        <button
          type="button"
          onClick={() => setActiveTab("new")}
          className={`relative px-6 py-2 font-semibold transition ${
            activeTab === "new"
              ? "text-orange-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          New Products
          {activeTab === "new" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-1 h-[3px] bg-orange-500 rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      </div>

      {/* Render based on active tab */}
      <Suspense
        fallback={
          <div className="text-center text-gray-500">Loading categories...</div>
        }
      >
        {activeTab === "old" ? <OldCategories /> : <NewCategories />}
      </Suspense>
    </section>
  );
}
