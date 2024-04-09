import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Property = ({ plot }) => {


  const {
    property_image,
    property_location,
    property_price,
    property_title,
    agent_name,
    agent_image,
    _id,
  } = plot || [];
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl font-DM">
        <figure>
          <img className="h-80 w-full" src={property_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-600 font-bold text-2xl">
            {property_title}
            <RiVerifiedBadgeFill className="text-green-500 text-xl" />
          </h2>
          <p>{property_location}</p>
          <div className="flex gap-3">
            <img className="w-5 rounded-md" src={agent_image} alt="" />
            <p>{agent_name}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-4">${property_price}</div>
            <Link to={`/allProperties/${_id}`}>
              <div className="badge badge-outline bg-gradient-to-tr from-yellow-600 to-yellow-300  text-white p-4">
                Details
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
