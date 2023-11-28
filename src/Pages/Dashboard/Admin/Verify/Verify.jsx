import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Verify = ({ property }) => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    property_image,
    property_location,
    property_price,
    property_title,
    agent_name,
    agent_image,
    description,
  } = property || [];

  console.log(property);

  const handleAddProperty = () => {
    const properties = {
      propertyId: _id,
      property_image,
      property_location,
      property_price,
      property_title,
      agent_name,
      agent_image,
      description,
    } 

    axiosSecure.post("/property", properties).then((res) => {
      console.log(res.data);
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
  return (
    <div>
      {/* <p>{_id}</p> */}
      <button onClick={handleAddProperty} className="btn btn-ghost">
        <RiVerifiedBadgeFill className="text-slate-600 text-xl" />
      </button>
    </div>
  );
};

export default Verify;
