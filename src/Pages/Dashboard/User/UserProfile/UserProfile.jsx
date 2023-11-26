import { useContext } from "react";
import { AuthContext } from "../../../../Layout/AuthProvider/AuthProvider";

const UserProfile = () => {

  const { user } = useContext(AuthContext);
  console.log(user)


  return (
    <div className="font-DM">
       <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        My Profile
      </div>
      <div className="flex justify-center items-center w-full mt-32">
      <div className="card w-[430px] glass p-10 bg-emerald-800">
        <figure>
          <img
          className="w-40 rounded-full"
            src={user.photoURL}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-slate-100 text-md">User Name: {user.displayName}</h2>
          <p className="text-slate-200">User Email: {user.email}</p>

        </div>
      </div>
      </div>
    </div>
  );
};

export default UserProfile;
