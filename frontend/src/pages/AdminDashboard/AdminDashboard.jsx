import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import OverviewTab from "./tabs/OverviewTab";
import ProductsTab from "./tabs/ProductsTab";
import OrdersTab from "./tabs/OrdersTab";
import UsersTab from "./tabs/UsersTab";
import ReportsTab from "./tabs/ReportsTab";
import SettingsTab from "./tabs/SettingsTab";
import AddProductForm from "../../components/forms/AddProductForm";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTab = () => {
    switch (activeTab) {
      case "Overview": return <OverviewTab />;
      case "Products": return <ProductsTab />;
      case "Orders": return <OrdersTab />;
      case "Users": return <UsersTab />;
      case "Reports": return <ReportsTab />;
      case "Settings": return <SettingsTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
       
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 overflow-y-auto">{renderTab()}</main>
    </div>
  );
}
