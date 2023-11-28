import useNewAddProperty from "../../../../Hooks/useNewAddProperty";
import Verify from "../Verify/Verify";

const ManageProperties = () => {
  const [newAddProperty] = useNewAddProperty();
  console.log(newAddProperty)

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Manage Property
      </div>
      <div className="my-20 max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr className="text-base text-black">
                <th>#</th>
                <th>Property Title</th>
                <th>Property Location</th>
                <th>Agent Name</th>
                <th>Agent Email</th>
                <th>Price Range</th>
                <th>Verify</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {newAddProperty.map((property, index) => (
                <tr key={property._id}>
                  <th>{index + 1}</th>
                  <td>{property.property_title}</td>
                  <td>{property.property_location}</td>
                  <td>{property.agent_name}</td>
                  <td>{property.agent_email}</td>
                  <td>{property.property_price}</td>
                  <td>
                    <Verify key={property._id} property={property}></Verify>
                  </td>
                  {/* <td>
                    {property.role === "admin" ? (
                      <button
                        // onClick={() => handleMakeAgent(user)}
                        className="btn btn-ghost  bg-emerald-700"
                      >
                        <RiVerifiedBadgeFill className="text-white" />
                      </button>
                    ) : (
                      <button
                        // onClick={() => handleMakeAgent(user)}
                        className="btn btn-ghost  "
                      >
                        <ImCancelCircle className="text-red-500 text-xl" />
                      </button>
                    )}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProperties;
