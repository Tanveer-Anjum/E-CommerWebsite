import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import ProfileTab from "./user/ProfileTab";
import OrdersTab from "./user/OrdersTab";
import WishlistTab from "./user/WishlistTab";
import CartTab from "./user/CartTab";
import ReviewsTab from "./user/ReviewsTab";
import CancellationsTab from "./user/CancellationsTab";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderTab = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileTab />;
      case "Orders":
        return <OrdersTab />;
      case "Wishlist":
        return <WishlistTab />;
      case "Cart":
        return <CartTab />;
        case "My Reviews":
            return <ReviewsTab/>;
            case "My Cancellations":
                return <CancellationsTab/>;
    
      default:
        return <ProfileTab />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-green-600 text-white rounded shadow-lg focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <DashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-2">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Dashboard</h1>
        {renderTab()}
      </div>
    </div>
  );
};

export default UserDashboard;
