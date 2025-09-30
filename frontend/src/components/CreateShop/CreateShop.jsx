import React, { useState } from "react";
import { FaStore } from "react-icons/fa";
import ShopHeader from "./ShopHeader";
import ProgressBar from "./ProgressBar";
import Step1Personal from "./Step1Personal";
import Step2Shop from "./Step2Shop";
import Step3Business from "./Step3Business";
import ShopFooter from "./ShopFooter";






export default function CreateShop({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "", email: "", password: "", phoneNumber: "",
    shopName: "", shopCategory: "", businessType: "", address: "",
    companyName: "", taxNumber: "", bankAccount: "", idNumber: ""
  });

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose?.(), 300);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 3) return setCurrentStep(currentStep + 1);

    setIsLoading(true);
    await new Promise(res => setTimeout(res, 2000));
    setIsLoading(false);
    console.log("Shop created:", formData);
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md" onClick={handleClose} />

      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl overflow-y-auto">
        {/* Header */}
        <ShopHeader onClose={handleClose} step={currentStep} />

        {/* Progress */}
        <ProgressBar step={currentStep} />

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {currentStep === 1 && <Step1Personal formData={formData} onChange={handleChange} />}
          {currentStep === 2 && <Step2Shop formData={formData} onChange={handleChange} />}
          {currentStep === 3 && <Step3Business formData={formData} onChange={handleChange} />}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className={`${currentStep === 1 ? "invisible" : ""} px-6 py-2 border rounded-lg`}
            >
              Back
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-2 bg-orange-600 text-white rounded-lg"
            >
              {isLoading ? "Processing..." : currentStep === 3 ? "Create Shop" : "Continue"}
            </button>
          </div>
        </form>

        {/* Footer */}
        <ShopFooter />
      </div>
    </div>
  );
}
