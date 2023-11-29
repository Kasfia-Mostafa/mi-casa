import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
// import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useState } from "react";

const Accepted = ({ property }) => {
  const [clicked, setClicked] = useState(false);
  const [rejectClicked, setRejectClicked] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { _id, status } = property || [];


  const handleAcceptProperty = () => {
    const acceptedProperty = {status};
    axiosSecure.patch(`/offered/${_id}`, acceptedProperty).then((res) => {
      setClicked(!clicked);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Property Accepted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleRejectProperty = () => {
    setRejectClicked(!clicked);
    console.log("hello");
  };
  return (
    <div>
      <td>
        {clicked ? (
          <button className="btn btn-ghost">
            <p className="text-green-500 text-base">Accepted</p>
          </button>
        ) : (
          <button onClick={handleAcceptProperty} className="btn btn-ghost">
            <p className="text-slate-700 text-base">Pending</p>
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

export default Accepted;
