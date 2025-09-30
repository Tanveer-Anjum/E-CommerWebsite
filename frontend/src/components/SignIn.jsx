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

export default function SignIn() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    console.log("Sign in attempted with:", formData);

    // Example: after login, go to home (change later to dashboard if seller)
    navigate("/");
  };

  const handleSocialSignIn = (provider) => {
    console.log(`Sign in with ${provider}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Glassmorphism Backdrop - This will blur the background */}
      <div 
        className="absolute inset-0 bg-white/20 backdrop-blur-md transition-opacity duration-300"
        onClick={() => navigate("/")}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl w-full max-w-md border border-white/30 transform transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/30 bg-white/40 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg">
              <FaShoppingBag className="text-white text-sm" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 drop-shadow-sm">
                Sign In
              </h2>
              <p className="text-xs text-gray-600 drop-shadow-sm">
                Access your Bazzario account
              </p>
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
          {/* Email Input */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1 drop-shadow-sm">
              Email
            </label>
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

          {/* Password Input */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1 drop-shadow-sm">
              Password
            </label>
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
                {showPassword ? (
                  <FaEyeSlash className="text-sm" />
                ) : (
                  <FaEye className="text-sm" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center backdrop-blur-sm">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500 w-3 h-3 bg-white/80"
              />
              <span className="ml-1.5 text-xs text-gray-700 drop-shadow-sm">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-xs text-green-600 hover:text-green-700 transition-colors duration-200 drop-shadow-sm font-medium"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2.5 px-4 rounded-lg font-medium text-white transition-all duration-300 text-sm shadow-lg ${
              isLoading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-xl transform hover:scale-[1.02]"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-white border-solid rounded-full animate-spin mr-1.5"></div>
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="px-4">
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-white/30"></div>
            <span className="flex-shrink mx-2 text-gray-500 text-xs px-1 bg-white/40 backdrop-blur-sm rounded-full py-0.5">
              or continue with
            </span>
            <div className="flex-grow border-t border-white/30"></div>
          </div>
        </div>

        {/* Social Sign In */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleSocialSignIn("google")}
              className="flex items-center justify-center gap-1.5 border border-white/30 py-2 rounded-lg hover:bg-white/40 transition-all duration-200 text-xs font-medium backdrop-blur-sm bg-white/30 hover:shadow-lg"
            >
              <FaGoogle className="text-red-500 text-sm" />
              <span className="text-gray-700">Google</span>
            </button>
            <button
              onClick={() => handleSocialSignIn("facebook")}
              className="flex items-center justify-center gap-1.5 border border-white/30 py-2 rounded-lg hover:bg-white/40 transition-all duration-200 text-xs font-medium backdrop-blur-sm bg-white/30 hover:shadow-lg"
            >
              <FaFacebook className="text-blue-600 text-sm" />
              <span className="text-gray-700">Facebook</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-white/40 backdrop-blur-sm rounded-b-xl border-t border-white/30">
          <p className="text-center text-xs text-gray-700 drop-shadow-sm">
            New to Bazzario?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}