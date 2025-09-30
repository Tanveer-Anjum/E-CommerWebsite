import { FaBuilding, FaIdCard, FaUniversity } from "react-icons/fa";

export default function Step3Business({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FaBuilding className="text-orange-500" /> Business Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label className="text-sm">Company Name *</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>

        {/* Tax Number */}
        <div>
          <label className="text-sm">Tax Number *</label>
          <input type="text" name="taxNumber" value={formData.taxNumber} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>

        {/* Bank Account */}
        <div>
          <label className="text-sm">Bank Account *</label>
          <input type="text" name="bankAccount" value={formData.bankAccount} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>

        {/* ID Number */}
        <div>
          <label className="text-sm">ID Number *</label>
          <input type="text" name="idNumber" value={formData.idNumber} onChange={onChange} required
            className="w-full border rounded-lg p-2" />
        </div>
      </div>
    </div>
  );
}
