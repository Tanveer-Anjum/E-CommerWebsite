import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaFacebook,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShoppingBag,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";

export default function SignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  await new Promise((resolve) => setTimeout(resolve, 1500));
  setIsLoading(false);

  // set token with 1-hour expiry
  const tokenData = { token: "your_token_here", expiry: new Date().getTime() + 10 *1000 };
  localStorage.setItem("authToken", JSON.stringify(tokenData));

  toast.success("Signed in successfully!");

  // redirect to saved page or home
  const redirectPath = localStorage.getItem("redirectAfterLogin");
  if (redirectPath) {
    localStorage.removeItem("redirectAfterLogin");
    navigate(redirectPath);
  } else {
    navigate("/");
  }
};

  const handleSocialSignIn = (provider) => {
    toast.success(`Signed in with ${provider} (mock)`); // Mock example
    // Here you can integrate actual Google/Facebook OAuth
    localStorage.setItem("token", "your_token_here");
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-white/20 backdrop-blur-md transition-opacity duration-300"
        onClick={() => navigate("/")}
      />
      <div className="relative bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl w-full max-w-md border border-white/30 transform transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/30 bg-white/40 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg">
              <FaShoppingBag className="text-white text-sm" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 drop-shadow-sm">Sign In</h2>
              <p className="text-xs text-gray-600 drop-shadow-sm">Access your Bazzario account</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="p-1.5 transition-all duration-200 text-xl rounded-full hover:bg-white/40 text-gray-600 hover:text-green-600 backdrop-blur-sm"
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 bg-transparent">
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1 drop-shadow-sm">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-500 text-sm" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white/80 backdrop-blur-sm border border-white/50 rounded-lg focus:ring-1 focus:ring-green-500 focus:bg-white/95 focus:border-white/70 transition-all duration-200 placeholder-gray-500"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1 drop-shadow-sm">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                <FaLock className="text-gray-500 text-sm" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full pl-9 pr-10 py-2 text-sm bg-white/80 backdrop-blur-sm border border-white/50 rounded-lg focus:ring-1 focus:ring-green-500 focus:bg-white/95 focus:border-white/70 transition-all duration-200 placeholder-gray-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200 backdrop-blur-sm"
              >
                {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2.5 px-4 rounded-lg font-medium text-white transition-all duration-300 text-sm shadow-lg ${
              isLoading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-xl transform hover:scale-[1.02]"
            }`}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Social Sign In */}
        <div className="px-4 py-3">
          <div className="text-center text-xs text-gray-500 mb-2">or continue with</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleSocialSignIn("Google")}
              className="flex items-center justify-center gap-1.5 border border-white/30 py-2 rounded-lg hover:bg-white/40 transition-all duration-200 text-xs font-medium backdrop-blur-sm bg-white/30 hover:shadow-lg"
            >
              <FaGoogle className="text-red-500 text-sm" />
              <span className="text-gray-700">Google</span>
            </button>
            <button
              onClick={() => handleSocialSignIn("Facebook")}
              className="flex items-center justify-center gap-1.5 border border-white/30 py-2 rounded-lg hover:bg-white/40 transition-all duration-200 text-xs font-medium backdrop-blur-sm bg-white/30 hover:shadow-lg"
            >
              <FaFacebook className="text-blue-600 text-sm" />
              <span className="text-gray-700">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
