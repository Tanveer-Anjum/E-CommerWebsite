import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-gray-200 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

        {/* Customer Care */}
        <div>
          <h3 className="font-bold text-white mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-white mb-3">Bazzario</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold text-white mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Electronics</li>
            <li>Men’s Fashion</li>
            <li>Women’s Fashion</li>
            <li>Health & Beauty</li>
            <li>Groceries</li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-bold text-white mb-3">Payment Methods</h3>
          <div className="flex flex-wrap gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/MasterCard_Logo.svg" alt="MasterCard" className="h-6 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 bg-white rounded p-1" />
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* App Download */}
        <div>
          <h3 className="font-bold text-white mb-3">Download App</h3>
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg">
              <FaGooglePlay className="text-green-400 text-lg" />
              <span className="text-sm">Google Play</span>
            </button>
            <button className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg">
              <FaApple className="text-white text-lg" />
              <span className="text-sm">App Store</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bazzario. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
