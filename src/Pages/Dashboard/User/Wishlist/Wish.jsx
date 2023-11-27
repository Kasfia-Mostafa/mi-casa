import { RiVerifiedBadgeFill } from "react-icons/ri";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useItemProperty from "../../../../Hooks/useItemProperty";

const Wish = ({ wishingProperty }) => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useItemProperty();

  const {
    property_image,
    property_location,
    property_price,
    property_title,
    agent_name,
    agent_image,
    _id,
  } = wishingProperty || [];

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
        axiosSecure.delete(`/wishlist/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
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
            <RiVerifiedBadgeFill className="text-green-500 text-xl" />
          </h2>
          <p>{property_location}</p>
          <div className="flex gap-3">
            <img className="w-5 rounded-md" src={agent_image} alt="" />
            <p>{agent_name}</p>
          </div>
          <p className="text-xl">$ {property_price}</p>

          <div className="card-actions justify-end">
            <div className="flex gap-3">
              <Link to={`${_id}`}>
                <button
                  className="badge badge-outline bg-sky-200 p-4"
                  type="submit"
                >
                  Offered
                </button>
              </Link>
              <button
                onClick={handleDelete}
                className="badge badge-outline bg-sky-400 text-white p-4"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wish;
