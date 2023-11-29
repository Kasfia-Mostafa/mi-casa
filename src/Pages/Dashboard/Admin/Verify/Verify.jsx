import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useState } from "react";

const Verify = ({ property }) => {
  const [clicked, setClicked] = useState(false);
  const [rejectClicked, setRejectClicked] = useState(false);
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    property_image,
    property_location,
    property_price,
    property_title,
    agent_name,
    agent_image,
    description
   
  } = property || [];

  

  const handleAddProperty = () => {
    const properties = {
      propertyId: _id,
      property_image,
      property_location,
      property_price,
      property_title,
      agent_name,
      agent_image,
      description
    };

    axiosSecure.post("/property", properties).then((res) => {
      setClicked(!clicked);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Property verified",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleRejectProperty = () => {
    setRejectClicked(!clicked);
    console.log('hello')
  }
  return (
    <div>
      <td>
        {clicked ? (
          <button onClick={handleAddProperty} className="btn btn-ghost">
            <RiVerifiedBadgeFill className="text-green-600 text-xl" />
          </button>
        ) : (
          <button onClick={handleAddProperty} className="btn btn-ghost">
            <RiVerifiedBadgeFill className="text-slate-600 text-xl" />
          </button>
        )}
      </td>
      <td>
        {rejectClicked ? (
          <button onClick={handleRejectProperty} className="btn btn-ghost">
          <p className="text-base text-slate-600">Rejected</p>
          </button>
        ) : (
          <button onClick={handleRejectProperty} className="btn btn-ghost">
            <p className="text-base text-red-600">Reject</p>
          </button>
        )}
      </td>
    </div>
  );
};

export default Verify;
