import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";
import { FaRegEye } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const addNewTeamMember = () => {
    dispatch(
      showNotification({ message: "Add New Member clicked", status: 1 })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => addNewTeamMember()}
      >
        Add New Member
      </button>
    </div>
  );
};

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

function Team() {
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
      <TitleCard
        title="Manage Teams"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Team Member list in table format loaded constant */}
        <div className="mb-5 text-sm text-gray-500">
          Below is table showing all your team members to have an easy access
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full table-auto">
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-center">Email Id</th>
                <th className="text-center">Joined On</th>
                <th className="text-center">Role</th>
                <th className="text-center">Last Active</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img src={l.avatar} alt="Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{l.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{l.email}</td>
                    <td className="text-center">{l.joinedOn}</td>
                    <td className="text-center">{getRoleComponent(l.role)}</td>
                    <td className="text-center">{l.lastActive}</td>
                    <td className="text-center">
                      <button className="btn btn-md btn-ghost text-green-500 text-[20px]">
                        <FaRegEye />
                      </button>
                      <button className="btn btn-ghost text-[#4400F7] text-[20px]">
                        <TbEdit />
                      </button>
                      <button className="btn btn-ghost text-red-500 text-[20px]">
                        <MdOutlineDeleteOutline />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Team;
