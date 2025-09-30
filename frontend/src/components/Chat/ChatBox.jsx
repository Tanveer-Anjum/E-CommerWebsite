import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ChatBox({ onClose }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { from: "user", text: input }]);

    // Clear input
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks for your message. Our system is under training 🤖" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-20 h-60 right-5 w-80 bg-white rounded-lg shadow-xl flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white p-3 flex justify-between items-center rounded-t-lg">
        <h4 className="font-semibold">Chat Support</h4>
        <button onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto max-h-60 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md max-w-[75%] ${
              msg.from === "user"
                ? "bg-green-100 self-end text-right ml-auto"
                : "bg-gray-100 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-md px-2 py-1 text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
