import React from "react";
import { FaRobot } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";
// import { MdVideoCall } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between bg-[#005C4B] p-4 rounded-t-lg">
      {" "}
      {/*  */}
      <div className="flex items-center space-x-1">
        <div className="w-10 h-10 flex justify-center items-center text-3xl rounded-full">
          {" "}
          {/*  bg-gray-600 */}
          <FaRobot />
        </div>
        <span className="text-white font-semibold">Bot 1</span>
      </div>
      <div className="flex space-x-3">
        {/* <button className="text-xl font-semibold text-gray-300 hover:text-gray-100 rounded-full p-2 hover:bg-green-900">
          <IoCall />
        </button>
        <button className="text-xl font-semibold text-gray-300 hover:text-gray-100 rounded-full p-2 hover:bg-green-900">
          <MdVideoCall />
        </button> */}
        <button className="text-xl font-semibold text-gray-300 hover:text-gray-100 rounded-full p-2 hover:bg-green-900">
          <IoMdMore />
        </button>
      </div>
    </div>
  );
}
