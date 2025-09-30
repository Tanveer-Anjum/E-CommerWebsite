import { FaUser, FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Step1Personal({ formData, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FaUser className="text-orange-500" /> Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="text-sm">Full Name *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm">Phone *</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="text-sm">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>

        {/* Password */}
        <div className="md:col-span-2 relative">
          <label className="text-sm">Password *</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={onChange}
            required
            className="w-full border rounded-lg p-2 pr-10"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-8 text-gray-400">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
    </div>
  );
}
