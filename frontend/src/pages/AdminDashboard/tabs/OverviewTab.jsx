import React from "react";

export default function OverviewTab() {
  const stats = [
    { label: "Total Sales", value: "Rs 2,500,000" },
    { label: "Orders", value: "1,240" },
    { label: "Users", value: "320" },
    { label: "Revenue", value: "Rs 1,850,000" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-lg font-semibold text-gray-600">{s.label}</p>
            <p className="text-2xl font-bold text-green-600 mt-2">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
