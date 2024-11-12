import React, { useState } from "react";

export default function ShowTeamMember({ member, setShowTeamMember }) {
  const [loading, setLoading] = useState(false);
  const [memberName, setMemberName] = useState(member.memberName);
  const [memberEmail, setMemberEmail] = useState(member.memberEmail);
  const [memberRole, setMemberRole] = useState(member.memberRole);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-70 z-50">
        <div className="w-full max-w-[890px] bg-white px-8 pb-5 pt-10 dark:bg-[#1D232A] rounded-md">
          <div className="mb-4">
            <div className="text-2xl font-bold border-b dark:border-none">
              Team Member
            </div>
            <span className="text-sm  text-gray-700 dark:text-gray-400">
              The member's information is displayed below.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <label
                htmlFor="memberName"
                className="text-md font-medium text-gray-900 dark:text-gray-300 block "
              >
                Member Name
              </label>
              <span className="text-[12px] text-gray-700 dark:text-gray-400">
                Below is the member's name.
              </span>
              <input
                readOnly
                type="text"
                name="memberName"
                id="memberName"
                value={memberName}
                className="shadow-sm bg-gray-50  dark:bg-[#191E24] dark:border-gray-700 border border-gray-300  text-gray-900 dark:text-gray-200 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 pr-10"
              />
            </div>
            <div className="">
              <label
                htmlFor="memberEmail"
                className="text-md font-medium text-gray-900 dark:text-gray-300 block "
              >
                Member Email
              </label>
              <span className="text-[12px] text-gray-700 dark:text-gray-400">
                Below is the member's email address.
              </span>
              <input
                readOnly
                type="email"
                name="memberEmail"
                id="memberEmail"
                value={memberEmail}
                className="shadow-sm bg-gray-50  dark:bg-[#191E24] dark:border-gray-700 border border-gray-300  text-gray-900 dark:text-gray-200 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 pr-10"
              />
            </div>
            <div className="">
              <label
                htmlFor="memberName"
                className="text-md font-medium text-gray-900 dark:text-gray-300 block "
              >
                Member Role
              </label>
              <span className="text-[12px] text-gray-700 dark:text-gray-400">
                Below is the member's role.
              </span>
              <input
                readOnly
                type="email"
                name="memberEmail"
                id="memberEmail"
                value={memberRole}
                className="shadow-sm bg-gray-50  dark:bg-[#191E24] dark:border-gray-700 border border-gray-300  text-gray-900 dark:text-gray-200 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 pr-10"
              />
            </div>

            <div className="w-full flex justify-end items-center col-span-2">
              <button
                type="button"
                className="btn"
                onClick={() => setShowTeamMember(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
