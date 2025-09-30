import React from "react";
import { FaChartPie, FaBox, FaShoppingCart, FaFileAlt, FaCog } from "react-icons/fa";

const menuItems = [
  { name: "Overview", icon: <FaChartPie /> },
  { name: "Products", icon: <FaBox /> },
  { name: "Orders", icon: <FaShoppingCart /> },
  { name: "Reports", icon: <FaFileAlt /> },
  { name: "Settings", icon: <FaCog /> },
];

export default function SellerSidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 bg-white shadow-lg p-4 hidden md:block">
      <h2 className="text-xl font-bold text-green-700 mb-6">Seller Panel</h2>
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-3 p-2 rounded cursor-pointer transition ${
              activeTab === item.name
                ? "bg-green-100 text-green-700 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTab(item.name)}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
