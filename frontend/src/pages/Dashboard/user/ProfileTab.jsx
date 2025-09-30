import React from "react";

const ProfileTab = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Profile</h2>
      <p><span className="font-semibold">Name:</span> tanveer</p>
      <p><span className="font-semibold">Email:</span> tanveranjum1366@gamil.com</p>
      <p><span className="font-semibold">Phone:</span> +923129903083</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileTab;
