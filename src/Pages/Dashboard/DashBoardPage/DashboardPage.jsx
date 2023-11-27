import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import { FaAddressCard ,FaAddressBook  } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";

const DashboardPage = () => {

  const [admin] = useAdmin()

  const menus = [
    { name: "Profile", link: "/dashboard/userProfile", icon: FaAddressCard  },
    { name: "Wishlist", link: "/dashboard/wishlist", icon: FiShoppingCart },
    { name: "Reviews", link: "/dashboard/reviews", icon: FiMessageSquare },

    { name: "Admin", link: "/dashboard/adminProfile", icon: AiOutlineUser, margin:true },
    { name: "Manage Properties", link: "/dashboard/manage_properties", icon: MdOutlineDashboard },
    { name: "Manage Users", link: "/dashboard/manage_users", icon:FaAddressBook },
    { name: "Mange Reviews", link: "/dashboard/manage_reviews", icon: MdOutlineRateReview },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 bg-white max-h-full">
      <div
        className={`bg-emerald-200 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end ">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer text-emerald-950"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative text-black">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-emerald-300 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-8 w-full h-full">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default DashboardPage;
