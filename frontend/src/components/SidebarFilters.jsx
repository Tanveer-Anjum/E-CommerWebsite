import React from "react";

export default function SidebarFilters({ filters, setFilters, available }) {
  // Handle checkbox changes
  const handleCheckboxChange = (key, value) => {
    setFilters((prev) => {
      const current = new Set(prev[key] || []);
      if (current.has(value)) {
        current.delete(value);
      } else {
        current.add(value);
      }
      return { ...prev, [key]: Array.from(current) };
    });
  };

  // Handle price range
  const handlePriceChange = (e, index) => {
    const newPrice = [...filters.price];
    newPrice[index] = Number(e.target.value);
    setFilters((prev) => ({ ...prev, price: newPrice }));
  };

  // Handle minimum rating
  const handleRatingChange = (e) => {
    setFilters((prev) => ({ ...prev, minRating: Number(e.target.value) }));
  };

  return (
    <aside className="w-64 bg-white shadow-md p-4 rounded-lg h-fit">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Filters</h3>

      {/* Brands */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Brands</h4>
        {available.brands.map((brand) => (
          <label key={brand} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={filters.brands.includes(brand)}
              onChange={() => handleCheckboxChange("brands", brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Colors */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Colors</h4>
        {available.colors.map((color) => (
          <label key={color} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={filters.colors.includes(color)}
              onChange={() => handleCheckboxChange("colors", color)}
            />
            {color}
          </label>
        ))}
      </div>

      {/* Deliveries */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Delivery</h4>
        {available.deliveries.map((delivery) => (
          <label key={delivery} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={filters.deliveries.includes(delivery)}
              onChange={() => handleCheckboxChange("deliveries", delivery)}
            />
            {delivery}
          </label>
        ))}
      </div>

      {/* Warranties */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Warranty</h4>
        {available.warranties.map((warranty) => (
          <label key={warranty} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={filters.warranties.includes(warranty)}
              onChange={() => handleCheckboxChange("warranties", warranty)}
            />
            {warranty}
          </label>
        ))}
      </div>

      {/* Rating */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Minimum Rating</h4>
        <select
          value={filters.minRating}
          onChange={handleRatingChange}
          className="border rounded px-2 py-1 w-full"
        >
          <option value={0}>All</option>
          <option value={1}>1★ & above</option>
          <option value={2}>2★ & above</option>
          <option value={3}>3★ & above</option>
          <option value={4}>4★ & above</option>
        </select>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Price Range</h4>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={filters.price[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="border rounded px-2 py-1 w-full"
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="number"
            value={filters.price[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="border rounded px-2 py-1 w-full"
            placeholder="Max"
          />
        </div>
      </div>
    </aside>
  );
}
