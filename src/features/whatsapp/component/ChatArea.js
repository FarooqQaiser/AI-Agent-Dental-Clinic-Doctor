import React, { useState } from "react";
import ChatBubble from "../../../components/Whatsapp/ChatBubble";
import ChatHeader from "../../../components/Whatsapp/ChatHeader";
import { IoMdSend } from "react-icons/io";

export default function ChatArea() {
  const [message, setMessage] = useState("");
  const [messageTime, setMessageTime] = useState("");
  const [totalMessages, setTotalMessages] = useState([]);

  const handleSendButton = () => {
    if (message !== "") {
      setTotalMessages([
        ...totalMessages,
        {
          message: message,
          time: messageTime,
        },
      ]);
      console.log(totalMessages);
      setMessage("");
    }
  };

  return (
    <div className="h-full flex-1 flex flex-col">
      <ChatHeader />
      <div className="flex-1 p-4 space-y-2 overflow-y-auto bg-[#EFEAE2] dark:bg-[#0B141A] items-end">
        {/* {totalMessages.map((messageObj) => {
          return (
            <>
              <ChatBubble
                message={messageObj.message}
                time={messageObj.time}
                isSent={true}
              />
            </>
          );
        })} */}
        <ChatBubble
          message="Hi, my name is John and I’d like to book an appointment for a dental check-up"
          time="11:34 AM"
          isSent
        />
        <ChatBubble
          message="Hello! 👋. I’m here to assist you with booking an appointment. Could you please let me know your preferred date and time?"
          time="11:34 AM"
        />
        <ChatBubble
          message="I’d like an appointment on Monday at 7:00 pm."
          time="11:34 AM"
          isSent
        />
        <ChatBubble
          message="Thank you, John! Your appointment is confirmed for Monday at 7:00 pm. Please arrive 10 minutes early to complete any necessary paperwork. 📝"
          time="11:34 AM"
        />
        {/* Additional ChatBubbles can go here */}
      </div>
      <div className="flex space-x-2 items-center bg-base-100 dark:bg-[#202C33] p-4  rounded-b-lg">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 p-2 bg-[#F0F2F5] dark:bg-gray-700 rounded-lg text-black dark:text-white placeholder-gray-400 outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleSendButton();
            }
          }}
        />
        <button
          className="text-xl font-semibold text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 rounded-full p-2 hover:bg-[#E8E9EB] dark:hover:bg-[#2B3039]"
          onClick={handleSendButton}
        >
          <IoMdSend />
        </button>
      </div>
    </div>
  );
}
