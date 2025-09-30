import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-lg shadow-md p-4">
      <div className="w-full h-40 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="mt-4 h-10 bg-gray-300 rounded"></div>
    </div>
  );
}
