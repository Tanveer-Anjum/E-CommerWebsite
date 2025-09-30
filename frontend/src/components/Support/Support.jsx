import React from "react";
import { AiOutlineClose } from "react-icons/ai"; 
import { useNavigate } from "react-router-dom";
import QuickHelp from "./QuickHelp";
import ContactForm from "./ContactForm";

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Glassmorphism Backdrop */}
      <div 
        className="absolute inset-0 bg-white/20 backdrop-blur-md transition-opacity duration-300"
        onClick={() => navigate("/")}
      />
      
      {/* Support Content */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-white/30">
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-white/30 bg-white/40 backdrop-blur-sm sticky top-0">
          <h2 className="text-2xl font-bold text-gray-800 drop-shadow-sm">Support Center</h2>
          <button 
            onClick={() => navigate("/")}
            className="p-2 transition-all duration-200 rounded-full hover:bg-white/40 text-gray-600 hover:text-green-600 text-xl backdrop-blur-sm"
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* FAQs Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 drop-shadow-sm">FAQs</h3>
            <ul className="space-y-2">
              {[
                "How to create a shop?",
                "How to track my order?",
                "How to contact the seller?",
                "What is the refund policy?",
                "How to update payment methods?",
                "Shipping and delivery information"
              ].map((faq, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">•</span>
                  {faq}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}

          
         <ContactForm />

          {/* Ticket Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 drop-shadow-sm">Submit a Ticket</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Issue Type</label>
                <select className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                  <option value="">Select issue type</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing Problem</option>
                  <option value="order">Order Related</option>
                  <option value="account">Account Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  placeholder="Please describe your issue in detail..."
                  rows="4"
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Ticket
              </button>
            </form>
          </div>

          {/* Quick Help Section */}
          <QuickHelp/>


        </div>

        {/* Footer */}
        <div className="p-4 bg-white/40 backdrop-blur-sm border-t border-white/30 rounded-b-2xl">
          <p className="text-center text-sm text-gray-600">
            We're here to help you 24/7! Average response time: under 2 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;