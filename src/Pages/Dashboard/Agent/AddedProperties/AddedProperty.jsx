import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const AddedProperty = ({ properties }) => {
  const {
    property_image,
    property_location,
    property_price,
    property_title,
    agent_name,
    agent_image,
    _id,
    verify,
  } = properties || [];

  const axiosSecure = useAxiosSecure();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/property/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl font-DM">
        <figure>
          <img className="h-80 w-full" src={property_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-pink-500 font-bold text-2xl">
            {property_title}
          </h2>
          <p>{property_location}</p>
          <div className="flex gap-3">
            <img className="w-5 rounded-md" src={agent_image} alt="" />
            <p>{agent_name}</p>
          </div>
          <div>
            {verify ? (
              <>
                <p>Verified</p>
              </>
            ) : (
              <>
                <p>Not Verified</p>
              </>
            )}
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-4">${property_price}</div>
            <Link to={`/dashboard/update/${_id}`}>
              <div className="badge badge-outline bg-sky-400 text-white p-4">
                Update
              </div>
            </Link>

            <button
              onClick={handleDelete}
              className="badge badge-outline bg-sky-400 text-white p-4"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedProperty;
