import React, { useState } from "react";
import { API_URL } from "../../store";

export default function EditTeamMemberDetails({ member, setShowEditModal }) {
  const businessId = "672df89b557f80708102b786";
  const [loading, setLoading] = useState(false);
  const [memberName, setMemberName] = useState(member.memberName);
  const [memberEmail, setMemberEmail] = useState(member.memberEmail);
  const [memberRole, setMemberRole] = useState(member.memberRole);

  const roles = ["Owner", "Admin", "Manager", "Support"];

  const updateMember = async () => {
    setLoading(true);
    let result = null;
    const updatedMember = JSON.stringify({
      memberName: memberName,
      memberEmail: memberEmail,
      memberRole: memberRole,
    });

    try {
      const response = await fetch(
        `${API_URL}data/business/${businessId}/team-member/${member._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: updatedMember,
        }
      );
      result = await response.json();
      if (response.ok) {
        if (result) {
          console.log(result);
          setLoading(false);
          setShowEditModal(false);
        }
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-70 z-50">
        <div className="w-full max-w-[890px] bg-white px-8 pb-5 pt-10 dark:bg-[#1D232A] rounded-md">
          <div className="mb-4">
            <div className="text-2xl font-bold border-b dark:border-none">
              Edit Team Member
            </div>
            <span className="text-sm  text-gray-700 dark:text-gray-400">
              Edit the member's information and click on "Update" button to
              update the member's information.
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
                Edit member's name down here
              </span>
              <input
                type="text"
                name="memberName"
                id="memberName"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="shadow-sm bg-gray-50  dark:bg-[#191E24] dark:border-gray-700 border border-gray-300  text-gray-900 dark:text-gray-200 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 pr-10"
                placeholder="Enter your member's name..."
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
                Edit member's email address down here
              </span>
              <input
                type="email"
                name="memberEmail"
                id="memberEmail"
                value={memberEmail}
                onChange={(e) => setMemberEmail(e.target.value)}
                className="shadow-sm bg-gray-50  dark:bg-[#191E24] dark:border-gray-700 border border-gray-300  text-gray-900 dark:text-gray-200 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 pr-10"
                placeholder="Enter Email Address Here..."
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
                Edit Member's role down here.
              </span>
              <select
                className="cursor-pointer shadow-sm bg-gray-50  dark:bg-[#191E24] dark:border-gray-700 border border-gray-300  text-gray-900 dark:text-gray-200 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 pr-10"
                onClick={(e) => setMemberRole(e.target.value)}
              >
                {roles.map((role, index) => {
                  if (role === memberRole) {
                    return (
                      <option key={index} value={role} selected>
                        {role}
                      </option>
                    );
                  }
                  return (
                    <>
                      <option key={index} value={role}>
                        {role}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>

            <div className="w-full flex gap-2 justify-end items-center col-span-2 text-right">
              <button
                type="button"
                className="btn"
                onClick={() => setShowEditModal(false)}
              >
                Close
              </button>
              <button
                disabled={loading}
                className={`h-12 text-white bg-[#737FFF] hover:bg-[#646EE4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center ${
                  loading ? "opacity-30" : ""
                }`}
                onClick={updateMember}
              >
                {loading ? "Updating Member..." : "Update Member"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
