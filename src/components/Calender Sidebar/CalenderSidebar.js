import moment from "moment";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../store";

export default function CalenderSidebar() {
  const [loading, setLoading] = useState(false);
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberRole, setMemberRole] = useState("");
  const [user, setUser] = useState(null);
  const [business, setBusiness] = useState(null);
  const [members, setMembers] = useState([]); 
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setBusiness(parsedUser.id);
    }
  }, []); 


  useEffect(() => {
    const fecthTeamMembers = async () => {
      setLoading(true);
      let result = null;

      try {
        const response = await fetch(
          `${API_URL}data/business/${business}/team-members`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        result = await response.json();
        if (response.ok) {
          if (result) {
            console.log(result);
            setMembers(result.teamMembers);
            setLoading(false);
            
          }
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    if (business) {
      fecthTeamMembers();
    }
  }, [business]);

  //   {
  //     name: "Alex",
  //     avatar: "https://reqres.in/img/faces/1-image.jpg",
  //     email: "alex@example.com",
  //     role: "Owner",
  //     joinedOn: moment(new Date())
  //       .add(-5 * 1, "days")
  //       .format("DD MMM YYYY"),
  //     lastActive: "5 hr ago",
  //   },
  //   {
  //     name: "Ereena",
  //     avatar: "https://reqres.in/img/faces/2-image.jpg",
  //     email: "ereena@example.com",
  //     role: "Admin",
  //     joinedOn: moment(new Date())
  //       .add(-5 * 2, "days")
  //       .format("DD MMM YYYY"),
  //     lastActive: "15 min ago",
  //   },
  //   {
  //     name: "John",
  //     avatar: "https://reqres.in/img/faces/3-image.jpg",
  //     email: "jhon@example.com",
  //     role: "Admin",
  //     joinedOn: moment(new Date())
  //       .add(-5 * 3, "days")
  //       .format("DD MMM YYYY"),
  //     lastActive: "20 hr ago",
  //   },
  //   {
  //     name: "Matrix",
  //     avatar: "https://reqres.in/img/faces/4-image.jpg",
  //     email: "matrix@example.com",
  //     role: "Manager",
  //     joinedOn: moment(new Date())
  //       .add(-5 * 4, "days")
  //       .format("DD MMM YYYY"),
  //     lastActive: "1 hr ago",
  //   },
  //   {
  //     name: "Virat",
  //     avatar: "https://reqres.in/img/faces/5-image.jpg",
  //     email: "virat@example.com",
  //     role: "Support",
  //     joinedOn: moment(new Date())
  //       .add(-5 * 5, "days")
  //       .format("DD MMM YYYY"),
  //     lastActive: "40 min ago",
  //   },
  //   {
  //     name: "Miya",
  //     avatar: "https://reqres.in/img/faces/6-image.jpg",
  //     email: "miya@example.com",
  //     role: "Support",
  //     joinedOn: moment(new Date())
  //       .add(-5 * 7, "days")
  //       .format("DD MMM YYYY"),
  //     lastActive: "5 hr ago",
  //   },
  // ];


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
