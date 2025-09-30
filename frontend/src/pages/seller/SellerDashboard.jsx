import React, { useState } from "react";
import SellerSidebar from "./SellerSidebar";
import OverviewTab from "./tabs/OverviewTab";
import ProductsTab from "./tabs/ProductsTab";
import OrdersTab from "./tabs/OrdersTab";
import ReportsTab from "./tabs/ReportsTab";
import SettingsTab from "./tabs/SettingsTab";

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTab = () => {
    switch (activeTab) {
      case "Overview": return <OverviewTab />;
      case "Products": return <ProductsTab />;
      case "Orders": return <OrdersTab />;
      case "Reports": return <ReportsTab />;
      case "Settings": return <SettingsTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SellerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">{renderTab()}</main>
    </div>
  );
}
