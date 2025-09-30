import React from "react";

const ReviewsTab = () => {
  const reviews = [
    { id: 1, product: "iPhone 14 Pro", rating: 5, comment: "Excellent product!" },
    { id: 2, product: "Cotton Shirt", rating: 4, comment: "Good quality, fits well." },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Reviews</h2>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.id} className="border p-4 rounded flex flex-col gap-2">
            <p className="font-semibold">{r.product}</p>
            <p>Rating: {"⭐".repeat(r.rating)}</p>
            <p>Comment: {r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsTab;
