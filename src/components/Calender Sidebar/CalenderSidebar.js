import moment from "moment";
import React, { useState } from "react";

export default function CalenderSidebar() {
  const TEAM_MEMBERS = [
    {
      name: "Alex",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      email: "alex@example.com",
      role: "Owner",
      joinedOn: moment(new Date())
        .add(-5 * 1, "days")
        .format("DD MMM YYYY"),
      lastActive: "5 hr ago",
    },
    {
      name: "Ereena",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      email: "ereena@example.com",
      role: "Admin",
      joinedOn: moment(new Date())
        .add(-5 * 2, "days")
        .format("DD MMM YYYY"),
      lastActive: "15 min ago",
    },
    {
      name: "John",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      email: "jhon@example.com",
      role: "Admin",
      joinedOn: moment(new Date())
        .add(-5 * 3, "days")
        .format("DD MMM YYYY"),
      lastActive: "20 hr ago",
    },
    {
      name: "Matrix",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      email: "matrix@example.com",
      role: "Manager",
      joinedOn: moment(new Date())
        .add(-5 * 4, "days")
        .format("DD MMM YYYY"),
      lastActive: "1 hr ago",
    },
    {
      name: "Virat",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      email: "virat@example.com",
      role: "Support",
      joinedOn: moment(new Date())
        .add(-5 * 5, "days")
        .format("DD MMM YYYY"),
      lastActive: "40 min ago",
    },
    {
      name: "Miya",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      email: "miya@example.com",
      role: "Support",
      joinedOn: moment(new Date())
        .add(-5 * 7, "days")
        .format("DD MMM YYYY"),
      lastActive: "5 hr ago",
    },
  ];
  const [members, setMembers] = useState(TEAM_MEMBERS);

  const getRoleComponent = (role) => {
    if (role === "Admin")
      return <div className="badge badge-secondary">{role}</div>;
    if (role === "Manager") return <div className="badge">{role}</div>;
    if (role === "Owner")
      return <div className="badge badge-primary">{role}</div>;
    if (role === "Support")
      return <div className="badge badge-accent">{role}</div>;
    else return <div className="badge badge-ghost">{role}</div>;
  };

  return (
    <>
      <div className="w-2/12 bg-base-100 rounded-lg">
        <h2 className="text-xl font-semibold p-4 border-b">Team Members</h2>

        <div className="flex flex-col gap-5 mt-4">
          {members.map((l, k) => {
            // Add a conditional class for the first member
            const bgColorClass = k === 0 ? "bg-[#a477ff]" : "bg-base-100"; // Change the color as needed

            return (
              <div
                key={k}
                className={`p-2 rounded-md hover:bg-[#834bf5] cursor-pointer border-b ${bgColorClass}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-circle w-12 h-12">
                      <img src={l.avatar} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      <p>{l.name}</p>
                    </div>
                    {/* <p className="font-bold">{getRoleComponent(l.role)}</p> */}
                  </div>
                </div>
                {/* <div className="flex flex-col gap-0.5 ml-5">
                  <p className="flex gap-2">
                    <span className="font-semibold">Joined Date:</span>
                    {l.joinedOn}
                  </p>
                  <p className="flex gap-2">
                    <span className="font-semibold">Last Active:</span>
                    {l.lastActive}
                  </p>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
