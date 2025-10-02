import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaGoogle, FaFacebook, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaShoppingBag } from "react-icons/fa";
import axios from "axios"; // we will use axios to call backend

export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    try {
      // Call backend API
      const res = await axios.post("http://localhost:8080/api/auth/buyer/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone
      });

      alert(res.data.message); // e.g., "Buyer registered successfully"
      navigate("/signin"); // redirect to signin
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md border border-white/30 p-6">
        <div className="flex items-center justify-between mb-4 border-b border-white/30 pb-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg shadow-lg">
              <FaShoppingBag className="text-white text-sm" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">Sign Up</h2>
              <p className="text-xs text-gray-600">Create your Bazzario account</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 text-2xl hover:text-orange-500 transition-all duration-200"
          >
            <AiOutlineClose />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <FaUser className="absolute inset-y-0 left-2.5 text-gray-500 text-sm my-auto" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white/70 border border-white/50 rounded-lg focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="03XXXXXXXXX"
              className="w-full pl-3 pr-3 py-2 text-sm bg-white/70 border border-white/50 rounded-lg focus:ring-1 focus:ring-green-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute inset-y-0 left-2.5 text-gray-500 text-sm my-auto" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white/70 border border-white/50 rounded-lg focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <FaLock className="absolute inset-y-0 left-2.5 text-gray-500 text-sm my-auto" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full pl-9 pr-10 py-2 text-sm bg-white/70 border border-white/50 rounded-lg focus:ring-1 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2.5 flex items-center text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <FaLock className="absolute inset-y-0 left-2.5 text-gray-500 text-sm my-auto" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full pl-9 pr-10 py-2 text-sm bg-white/70 border border-white/50 rounded-lg focus:ring-1 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-2.5 flex items-center text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2.5 px-4 rounded-lg font-medium text-white text-sm shadow-lg transition-all ${
              isLoading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-green-600 hover:from-green-600 hover:to-green-700"
            }`}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Divider & Social */}
        <div className="my-3 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-xs">or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleSocialSignUp("google")}
            className="flex items-center justify-center gap-1.5 border border-gray-300 py-2 rounded-lg bg-white hover:bg-gray-50 text-xs font-medium"
          >
            <FaGoogle className="text-red-500 text-sm" /> Google
          </button>
          <button
            onClick={() => handleSocialSignUp("facebook")}
            className="flex items-center justify-center gap-1.5 border border-gray-300 py-2 rounded-lg bg-white hover:bg-gray-50 text-xs font-medium"
          >
            <FaFacebook className="text-blue-600 text-sm" /> Facebook
          </button>
        </div>

        <div className="mt-4 text-center text-xs text-gray-700">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signin")}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
