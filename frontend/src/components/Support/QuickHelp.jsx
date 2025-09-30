import React from 'react'

function QuickHelp() {
  return (
   <>
     <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 drop-shadow-sm">Quick Help</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-3 text-left hover:bg-white/90 transition-all duration-200">
                <span className="font-medium text-gray-700">Order Tracking</span>
                <p className="text-sm text-gray-600 mt-1">Track your order status</p>
              </button>
              <button className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-3 text-left hover:bg-white/90 transition-all duration-200">
                <span className="font-medium text-gray-700">Return Request</span>
                <p className="text-sm text-gray-600 mt-1">Start a return process</p>
              </button>
              <button className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-3 text-left hover:bg-white/90 transition-all duration-200">
                <span className="font-medium text-gray-700">Payment Help</span>
                <p className="text-sm text-gray-600 mt-1">Payment method issues</p>
              </button>
              <button className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-3 text-left hover:bg-white/90 transition-all duration-200">
                <span className="font-medium text-gray-700">Seller Support</span>
                <p className="text-sm text-gray-600 mt-1">For shop owners</p>
              </button>
            </div>
          </div>
        
   </>
  )
}

export default QuickHelp