import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { FaChessKing, FaRegUser, FaTrashAlt, FaUserAstronaut } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) refetch();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `${user.name} is an admin now`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  
  const handleMakeAgent = (user) => {
    axiosSecure.patch(`/users/agent/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) refetch();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `${user.name} is an agent now`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Remove the user", "success");
          }
        });
      }
    });
  };
  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Manage Users
      </div>
      <div className="my-20">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-lg">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin Role</th>
                <th>Agent Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost  bg-emerald-700"
                      >
                        <FaChessKing className="text-white" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost  bg-emerald-400"
                      >
                        <FaRegUser className="text-white" />
                      </button>
                    )}
                  </td>
                  <td>
                    {user.role === "agent" ? (
                      <button
                        onClick={() => handleMakeAgent(user)}
                        className="btn btn-ghost  bg-emerald-700"
                      >
                        <FaUserAstronaut className="text-white"/>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAgent(user)}
                        className="btn btn-ghost  bg-emerald-400"
                      >
                        <FaRegUser className="text-white" />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost "
                    >
                      <FaTrashAlt className="text-slate-600 text-2xl"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
