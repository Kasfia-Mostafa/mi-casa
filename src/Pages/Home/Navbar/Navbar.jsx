import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Layout/AuthProvider/AuthProvider";
import DashboardPage from "../../Dashboard/DashBoardPage/DashboardPage";

const Navbar = () => {
  const [error, setError] = useState("");
  const { user, logOut } = useContext(AuthContext);

  if (user) {
    const { displayName, email, photoURL } = user;
  // console.log(user)
  const navigate = useNavigate();

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#275b76] text-lg font-DM"
              : "text-[#529AC0] text-lg font-DM"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProperties"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#275b76] text-lg font-DM"
              : "text-[#529AC0] text-lg font-DM"
          }
        >
          Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#275b76] text-lg font-DM"
              : "text-[#529AC0] text-lg font-DM"
          }
        >
        Dashboard
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.massage);
      });
  };

  return (
    <div>
      <div className="navbar bg-white px-24 border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <img src="https://i.ibb.co/4Pb0f0c/icons8-home.gif" alt="" />
          <div className="pl-4">
            <p className="w-20 h-8 text-center rounded-lg text-[#F8F8F8] text-xl font-San bg-gradient-to-r from-blue-300 to-blue-200 border-none">
              Mi CASA
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user ? <img
                  alt=""
                  src={user?.photoURL}
                />:<img
                alt=""
                src='https://i.ibb.co/3mrC5qK/966-9665493-my-profile-icon-blank-profile-image-circle.jpg'
              />
                }
                
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              {user ? (
                <li>
                  <a onClick={handleSignOut} className="text-black">
                    Log Out
                  </a>
                </li>
              ) : (
                <Link to="/login">
                  <li>
                    <a className="text-black">Login</a>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
