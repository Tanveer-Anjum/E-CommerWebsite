import React from 'react'

function ContactForm() {
  return (
    <div>
         <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 drop-shadow-sm">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <span className="text-green-500 mr-3">📧</span>
                <span>support@bazzario.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-green-500 mr-3">📞</span>
                <span>+92-300-1234567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-green-500 mr-3">🕒</span>
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-green-500 mr-3">💬</span>
                <span>Live Chat Available</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ContactForm