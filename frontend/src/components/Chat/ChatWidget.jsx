import React, { useState } from "react";
import { FaComments } from "react-icons/fa";
import ChatBox from "./ChatBox";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        <FaComments size={24} />
      </button>

      {/* Chat box */}
      {isOpen && <ChatBox onClose={() => setIsOpen(false)} />}
    </div>
  );
}
