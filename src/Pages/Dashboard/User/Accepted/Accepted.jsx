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
          
          </button>
        ) : (
          <>
         <div className="flex items-center">
         <div>
         <button onClick={handleAcceptProperty} className="btn btn-ghost">
            <p className="text-slate-700">Pending</p>
          </button>
         </div>
          <div>
          <td>
        {rejectClicked ? (
          <button onClick={handleRejectProperty} className="btn btn-ghost">
            <p className="text-slate-600">Rejected</p>
          </button>
        ) : (
          <button onClick={handleRejectProperty} className="btn btn-ghost">
            <p className="text-red-600">Reject</p>
          </button>
        )}
      </td>
          </div>
         </div>
    </>
        )}
      </td>
      
    </div>
  );
};

export default Accepted;
