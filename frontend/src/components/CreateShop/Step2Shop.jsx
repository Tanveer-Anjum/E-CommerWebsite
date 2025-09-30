import { FaStore, FaMapMarkerAlt, FaList } from "react-icons/fa";

export default function Step2Shop({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FaStore className="text-orange-500" /> Shop Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Shop Name */}
        <div>
          <label className="text-sm">Shop Name *</label>
          <input type="text" name="shopName" value={formData.shopName} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>

        {/* Shop Category */}
        <div>
          <label className="text-sm">Shop Category *</label>
          <input type="text" name="shopCategory" value={formData.shopCategory} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>

        {/* Business Type */}
        <div>
          <label className="text-sm">Business Type *</label>
          <select name="businessType" value={formData.businessType} onChange={onChange} required
            className="w-full border rounded-lg p-2">
            <option value="">Select</option>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </select>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="text-sm">Address *</label>
          <input type="text" name="address" value={formData.address} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>
      </div>
    </div>
  );
}
