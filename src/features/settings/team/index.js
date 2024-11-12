// import moment from "moment";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
// import { showNotification } from "../../common/headerSlice";
import { FaRegEye, FaUser } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import AddTeamMember from "../../../components/Team/AddTeamMember";
import { API_URL } from "../../../store";
import DeleteTeamMember from "../../../components/Team/DeleteTeamMember";
import EditTeamMemberDetails from "../../../components/Team/EditTeamMemberDetails";
import ShowTeamMember from "../../../components/Team/ShowTeamMember";
// import { openRightDrawer } from "../../common/rightDrawerSlice";
// import { RIGHT_DRAWER_TYPES } from "../../../utils/globalConstantUtil";

const TopSideButtons = ({ setShowAddTeamMember }) => {
  // const dispatch = useDispatch();

  // const addNewTeamMember = (e) => {
  //   // dispatch(
  //   //   openRightDrawer({
  //   //     header: "Notifications",
  //   //     bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
  //   //   })
  //   // );
  //   dispatch(
  //     showNotification({ message: "Add New Member clicked", status: 1 })
  //   );
  // };

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

// const TEAM_MEMBERS = [
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

function Team() {
  const [showAddTeamMember, setShowAddTeamMember] = useState(false);
  const [members, setMembers] = useState([]);
  const business = "672df89b557f80708102b786";
  const [loading, setLoading] = useState(false);
  const [singleMember, setSingleMember] = useState();
  const [showTeamMember, setShowTeamMember] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

    fecthTeamMembers();
  }, [showDeleteModal, showEditModal]);

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
        <div className="mb-5 text-sm text-gray-500">
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
                  {members.map((member, index) => {
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
                  })}
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
