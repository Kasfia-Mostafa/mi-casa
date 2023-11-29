import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { useEffect, useState } from "react";


const AddedProperty = ({ properties }) => {
  const {
    property_image,
    property_location,
    property_price,
    property_title,
    agent_name,
    agent_image,
    _id,
    verify
  } = properties || [];
  // const axiosSecure = useAxiosSecure();

  const [verified, setVerified] = useState([]);
  // const [verifiedTitle, setVerifiedTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/property`)
      .then((res) => res.json())
      .then((data) => setVerified(data));
  });
  // axiosSecure.get("/property").then((res) => setVerified(res.data));

  // const allVerifiedTitle = verified.map((eachVerifiedTitle) =>
  //   setVerifiedTitle(eachVerifiedTitle.property_title)
  // );

  const filtering = verified.filter(
    (fil) => fil.property_title === properties.property_title
  );
  console.log(filtering);
  // console.log(property_title)

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
            <Link to={`/allProperties/${_id}`}>
              <div className="badge badge-outline bg-sky-400 text-white p-4">
                Update
              </div>
            </Link>
            <Link to={`/allProperties/${_id}`}>
              <div className="badge badge-outline bg-sky-400 text-white p-4">
                Delete
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedProperty;
