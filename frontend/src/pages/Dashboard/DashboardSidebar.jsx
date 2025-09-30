import React from "react";

const DashboardSidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const tabs = ["Profile", "Orders", "Wishlist", "Cart","My Reviews","My Cancellations"];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity  md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50  transform transition-transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:shadow-none`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Dashboard</h2>
          <ul className="space-y-3">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer p-2 rounded transition ${
                  activeTab === tab
                    ? "bg-green-600 text-white font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setSidebarOpen(false); // Close sidebar on mobile
                }}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
