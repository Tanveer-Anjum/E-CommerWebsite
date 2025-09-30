

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsbar from "./components/Newsbar";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import Signup from "./components/SignUp";
import CreateShop from "./components/CreateShop/CreateShop";
import Support from "./components/Support/Support";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./components/Cart";  // ✅ Import Cart Page
import { CartProvider } from "./context/CartContext"; // ✅ Import Provider
import ProductDetails from "./pages/ProductDetails";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminSignin from "./pages/AdminDashboard/Adminsignin";
import AdminSignup from "./pages/AdminDashboard/AdminSignup";
import SellerDashboard from "./pages/seller/SellerDashboard";
import ChatWidget from "./components/Chat/ChatWidget";
import Categories from "./components/Categories/Categories";
import OldCategories from "./components/Categories/OldCategories";
import NewCategories from "./components/Categories/NewCategories";
import ProductListingPage from "./components/Categories/ProductListingPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
          <Newsbar />
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/:categoryType/:categoryName" element={<ProductListingPage />} />
  <Route path="/cart" element={<Cart />} />

              {/* Sign In */}
              <Route path="/signin" element={<SignIn />} />

              {/* Sign Up */}
              <Route path="/signup" element={<Signup />} />

              {/* Create Shop */}
              <Route path="/createshop" element={<CreateShop />} />

              {/* Support */}
              <Route path="/support" element={<Support />} />

              {/* Admin Auth */}
              <Route path="/admin/signin" element={<AdminSignin />} />
              <Route path="/admin/signup" element={<AdminSignup />} />

          {/* here is the dashboard */}
           <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
              <Route path="/seller/dashboard/*" element={<SellerDashboard />} />



            </Routes>
          </main>
<ChatWidget />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
