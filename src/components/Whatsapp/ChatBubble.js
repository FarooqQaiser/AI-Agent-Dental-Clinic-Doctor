import React from "react";

export default function ChatBubble({ message, time, isSent }) {
  return (
    <div className={`flex ${isSent ? "justify-end" : ""}`}>
      <div
        className={`p-3 rounded-lg max-w-xs ${
          isSent
            ? "bg-[#D9FDD3] dark:bg-[#005C4B] text-black dark:text-white"
            : "bg-[#FFFFFF] dark:bg-gray-700 text-black dark:text-gray-300"
        }`}
      >
        <p>{message}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}
