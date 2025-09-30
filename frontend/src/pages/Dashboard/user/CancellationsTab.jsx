import React from "react";

const CancellationsTab = () => {
  const cancellations = [
    { id: 1, product: "Samsung S23 Ultra", price: 250000, reason: "Changed my mind", date: "2025-09-20" },
    { id: 2, product: "Summer Dress", price: 3500, reason: "Wrong size", date: "2025-09-22" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Cancellations</h2>
      <div className="space-y-4">
        {cancellations.map((c) => (
          <div key={c.id} className="flex justify-between items-center p-4 border rounded">
            <div>
              <p className="font-semibold">{c.product}</p>
              <p className="text-green-600 font-bold">Rs {c.price.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">Reason: {c.reason}</p>
              <p className="text-gray-400 text-sm">Date: {c.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CancellationsTab;
