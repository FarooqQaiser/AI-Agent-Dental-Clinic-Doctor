import { useEffect, useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import { FaRegEye, FaUser } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import AddTeamMember from "../../../components/Team/AddTeamMember";
import { API_URL } from "../../../store";
import DeleteTeamMember from "../../../components/Team/DeleteTeamMember";
import EditTeamMemberDetails from "../../../components/Team/EditTeamMemberDetails";
import ShowTeamMember from "../../../components/Team/ShowTeamMember";

const TopSideButtons = ({ setShowAddTeamMember }) => {
  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => setShowAddTeamMember(true)}
      >
        Add New Member
      </button>
    </div>
  );
};

function Team() {
  const [showAddTeamMember, setShowAddTeamMember] = useState(false);
  const [members, setMembers] = useState([]);
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(false);
  const [singleMember, setSingleMember] = useState();
  const [showTeamMember, setShowTeamMember] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [user, setUser] = useState(null);

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
  }, [business, showDeleteModal, showEditModal]);

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

  const openViewModal = (member) => {
    setSingleMember(member);
    setShowTeamMember(true);
  };

  const openEditModal = (member) => {
    setSingleMember(member);
    setShowEditModal(true);
  };

  const openDeleteModal = (member) => {
    setSingleMember(member);
    setShowDeleteModal(true);
  };

  return (
    <>
      <TitleCard
        title="Manage Teams"
        topMargin="mt-2"
        TopSideButtons={
          <TopSideButtons setShowAddTeamMember={setShowAddTeamMember} />
        }
      >
        <div className="mb-5 text-sm text-gray-500 dark:text-gray-300">
          Below is table showing all your team members to have an easy access
        </div>
        <div className="overflow-x-auto w-full">
          {loading ? (
            <>
              <div className="w-full h-full flex justify-center items-center">
                <span className="loading loading-spinner loading-lg bg-[#5D17EB] dark:bg-white"></span>
              </div>
            </>
          ) : (
            <>
              <table className="table w-full table-auto">
                <thead>
                  <tr>
                    <th className="text-left">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Joined On</th>
                    <th className="text-center">Role</th>
                    <th className="text-center">Last Active</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center text-gray-500 pt-10 dark:text-gray-300">
                        No team members added yet.
                      </td>
                    </tr>
                  ) : (
                    members.map((member, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-circle w-12 h-12">
                                  {member.avatar ? (
                                    <img src={member.avatar} alt="Avatar" />
                                  ) : (
                                    <div className="w-full h-full flex justify-center items-center">
                                      <FaUser className="w-full h-full" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">
                                  {member.memberName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">{member.memberEmail}</td>
                          <td className="text-center">
                            {member.joinedAt.split("T")[0]}
                          </td>
                          <td className="text-center">
                            {getRoleComponent(member.memberRole)}
                          </td>
                          <td className="text-center">Last Active</td>
                          <td className="text-center">
                            <button
                              className="btn btn-md btn-ghost text-green-500 text-[20px]"
                              onClick={() => openViewModal(member)}
                            >
                              <FaRegEye />
                            </button>
                            <button
                              className="btn btn-ghost text-[#4400F7] text-[20px]"
                              onClick={() => openEditModal(member)}
                            >
                              <TbEdit />
                            </button>
                            <button
                              className="btn btn-ghost text-red-500 text-[20px]"
                              onClick={() => openDeleteModal(member)}
                            >
                              <MdOutlineDeleteOutline />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </>
          )}
        </div>
      </TitleCard>
      {showTeamMember && (
        <ShowTeamMember
          member={singleMember}
          setShowTeamMember={setShowTeamMember}
        />
      )}
      {showAddTeamMember && (
        <AddTeamMember setShowAddTeamMember={setShowAddTeamMember} />
      )}
      {showEditModal && (
        <EditTeamMemberDetails
          member={singleMember}
          setShowEditModal={setShowEditModal}
        />
      )}
      {showDeleteModal && (
        <DeleteTeamMember
          member={singleMember}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
    </>
  );
}

export default Team;
